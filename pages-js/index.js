//В index.html
//1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
//2 Вывести id,name всех user в pages-html.html. Отдельный блок для каждого user.
//3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
// Стилізація
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

let usersListDiv = document.getElementsByClassName('allInUsers')[0];

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {

        for (const user of value) {

            let divUser = document.createElement('div');
            divUser.classList.add('user');

            let divUserId = document.createElement('div');
            divUserId.innerText = `ID => ${user.id}`;
            divUserId.classList.add('user-id');

            let divUserTitle = document.createElement('div');
            divUserTitle.innerText = user.name;
            divUserTitle.classList.add('user-name-block');

            let button = document.createElement('button');
            button.classList.add('user-button-block');
            button.innerText = 'User Details';
            button.onclick = function () {
                location.href=`user-details.html?id=${user.id}`;
            };

            divUser.append(divUserId, divUserTitle, button);
            usersListDiv.appendChild(divUser);

        }

    });