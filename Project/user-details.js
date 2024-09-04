// Получаем ID пользователя из URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Запрашиваем информацию о пользователе
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetails = document.getElementById('user-details');

        // Отображаем всю информацию о пользователе
        userDetails.innerHTML = `
            <h2>User Details</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });

// Обработчик для загрузки постов пользователя
const loadPostsButton = document.getElementById('load-posts');

loadPostsButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            // postsContainer.innerHTML = '<h3>Posts</h3>';

            posts.forEach(post => {
                const postBlock = document.createElement('div');
                postBlock.className = 'post-block';
                postBlock.innerHTML = `
                    <p><strong>Title:</strong> ${post.title}</p>
                    <a href="post-details.html?postId=${post.id}">View Post Details</a>
                `;
                postsContainer.appendChild(postBlock);
            });
        })
        // .catch(error => {
        //     console.error('Error fetching posts:', error);
        // });
});

