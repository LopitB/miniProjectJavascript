// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
// Стилізація
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let url = new URL(window.location.href);
let idOfUser = url.searchParams.get('id');
let userInfoDiv = document.getElementsByClassName('user-details')[0];

fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}`)
    .then(value => value.json())
    .then(value => {

        let divUserInfo = document.createElement('div');
        divUserInfo.classList.add('userInf');

        let divUserId = document.createElement('div');
        divUserId.innerText = `ID : ${value.id}`;
        divUserId.classList.add('id');

        let divUserTitle = document.createElement('div');
        divUserTitle.innerText = `Name : ${value.name}`;
        divUserTitle.classList.add('name-block');

        let divUserUsername = document.createElement('div');
        divUserUsername.innerText = `Username : ${value.username}`;
        divUserUsername.classList.add('username-block');

        let divUserEmail = document.createElement('div');
        divUserEmail.innerText = `Email : ${value.email}`;
        divUserEmail.classList.add('email-block');


        let divUserPhone = document.createElement('div');
        divUserPhone.innerText = `Phone: ${value.phone}`;
        divUserPhone.classList.add('phone');

        let divUserWebsite = document.createElement('div');
        divUserWebsite.innerText = `Website: ${value.website}`;
        divUserWebsite.classList.add('website');

        let divUserAddress = document.createElement('div');
        divUserAddress.innerText = `Address: 
        City - ${value.address.city}, 
        Street - ${value.address.street}, 
        Suite - ${value.address.suite}, 
        Zipcode - ${value.address.zipcode}, 
        Geo - ${value.address.geo.lat}, ${value.address.geo.lng}`;
        divUserAddress.classList.add('address-block');

        let divUserCompany = document.createElement('div');
        divUserCompany.innerText = `Company:
        Name - ${value.company.name}, 
        Catch Phrase - ${value.company.catchPhrase},  
        BS - ${value.company.bs}`;
        divUserCompany.classList.add('company-block');

        divUserInfo.append(divUserId, divUserTitle, divUserUsername, divUserEmail, divUserPhone, divUserWebsite, divUserAddress, divUserCompany, buttonPost);
        userInfoDiv.appendChild(divUserInfo);

    });

let postsListDiv = document.getElementsByClassName('posts-el')[0];

let buttonPost = document.createElement('button');
buttonPost.classList.add('button-block');
buttonPost.innerText = 'Post of current user';

buttonPost.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}/posts`)
        .then(value => value.json())
        .then(value => {

            let divPosts = document.createElement('div');
            divPosts.classList.add('comments');

            for (const post of value) {
                let postBlock = document.createElement('div');
                postBlock.classList.add('post');
                postBlock.innerText = post.body;
                let commentsButton = document.createElement('button');
                commentsButton.classList.add('commentsBtn');
                commentsButton.innerText = 'Comments';
                commentsButton.onclick = function () {
                    location.href = `post-details.html?id=${post.id}`;
                };

                postBlock.append(divPosts, commentsButton);
                postsListDiv.appendChild(postBlock);

            }

        });

};
