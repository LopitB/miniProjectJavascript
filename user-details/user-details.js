// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
// Стилізація
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let url = new URL(location.href);
let idOfUser = url.searchParams.get('id');
let userInfoDiv = document.getElementsByClassName('user-details')[0];
fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}`)
    .then(value => value.json())
    .then(value => {
        for (const userInfo of value) {

            let divUserInfo = document.createElement('div');
            divUserInfo.classList.add('userInf');

            let divUserId = document.createElement('div');
            divUserId.innerText = `ID => ${userInfo.id}`;
            divUserId.classList.add('id');

            let divUserTitle = document.createElement('div');
            divUserTitle.innerText = userInfo.name;
            divUserTitle.classList.add('name-block');

            divUserInfo.append(divUserId, divUserTitle);

            userInfoDiv.appendChild(divUserInfo);
        }
    });

