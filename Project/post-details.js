// Получаем ID поста из URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

// Запрашиваем информацию о посте
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDetails = document.getElementById('post-details');

        // Отображаем всю информацию о посте
        postDetails.innerHTML = `
            <h2>Post Details</h2>
            <p><strong>ID:</strong> ${post.id}</p>
            <p><strong>Title:</strong> ${post.title}</p>
            <p><strong>Body:</strong> ${post.body}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching post details:', error);
    });

// Запрашиваем комментарии к посту
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const commentsContainer = document.getElementById('comments-container');

        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.className = 'comment-block';
            commentBlock.innerHTML = `
                <p><strong>Name:</strong> ${comment.name}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p><strong>Comment:</strong> ${comment.body}</p>
            `;
            commentsContainer.appendChild(commentBlock);
        });
    })
    .catch(error => {
        console.error('Error fetching comments:', error);
    });
