// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.

let urlPost = new URL(window.location.href);
let idOfPost = urlPost.searchParams.get('id');
let postInfoDiv = document.getElementsByClassName('post-details')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${idOfPost}`)
    .then(value => value.json())
    .then(value => {

        let divPostInfo = document.createElement('div');
        divPostInfo.classList.add('postInf');

        let divPostUserId = document.createElement('div');
        divPostUserId.innerText = `User ID : ${value.userId}`;
        divPostUserId.classList.add('userId');

        let divPostId = document.createElement('div');
        divPostId.innerText = `ID : ${value.id}`;
        divPostId.classList.add('id');

        let divPostTitle = document.createElement('div');
        divPostTitle.innerText = `${value.title}`;
        divPostTitle.classList.add('title');

        let divPostBody = document.createElement('div');
        divPostBody.innerText = `${value.body}`;
        divPostBody.classList.add('body');

        divPostInfo.append(divPostUserId, divPostId, divPostTitle, divPostBody);
        postInfoDiv.appendChild(divPostInfo);

    });

let commentsListDiv = document.getElementsByClassName('comments-el')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${idOfPost}/comments`)
    .then(value => value.json())
    .then(value => {

        let divComments = document.createElement('div');
        divComments.classList.add('comments');
        for (const comment of value) {

            let divCommentInfo = document.createElement('div');
            divCommentInfo.classList.add('commentInf');

            let divCommentPostId = document.createElement('div');
            divCommentPostId.innerText = `Post ID : ${comment.postId}`;
            divCommentPostId.classList.add('comment-userId');

            let divCommentId = document.createElement('div');
            divCommentId.innerText = `Comment ID : ${comment.id}`;
            divCommentId.classList.add('comment-id');

            let divCommentName = document.createElement('div');
            divCommentName.innerText = `Comment name :
            ${comment.name}`;
            divCommentName.classList.add('comment-name');

            let divCommentEmail = document.createElement('div');
            divCommentEmail.innerText = `Comment email :
            ${comment.email}`;
            divCommentName.classList.add('comment-email');

            let divCommentBody = document.createElement('div');
            divCommentBody.innerText = `Comment body :
            ${comment.body}`;
            divCommentBody.classList.add('comment-body');

            divCommentInfo.append(divCommentPostId, divCommentId, divCommentName, divCommentEmail, divCommentBody);
            commentsListDiv.appendChild(divCommentInfo);

        }
    });