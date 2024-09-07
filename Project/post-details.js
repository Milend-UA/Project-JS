const urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        let postDetails = document.getElementById('post-details');
        postDetails.innerHTML = `
            <h2>Post Details</h2>
            <p><strong>ID:</strong> ${post.id}</p>
            <p><strong>Title:</strong> ${post.title}</p>
            <p><strong>Body:</strong> ${post.body}</p>
        `;
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        let commentsContainer = document.getElementById('comments-container');

        comments.forEach(comment => {
            let commentBlock = document.createElement('div');
            commentBlock.className = 'comment-block';
            commentBlock.innerHTML = `
                <p><strong>Name:</strong> ${comment.name}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p><strong>Comment:</strong> ${comment.body}</p>
            `;
            commentsContainer.appendChild(commentBlock);
        });
    })
