let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
    <h2>User Details</h2>
    <p><strong>ID:</strong> ${user.id}</p>
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
    <p><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> ${user.website}</p>
    <p><strong>Company:</strong> ${user.company.name}</p>
    <p><strong>Catchphrase:</strong> ${user.company.catchPhrase}</p>
    <p><strong>Business:</strong> ${user.company.bs}</p>
`;

    })
let loadPostsButton = document.getElementById('load-posts');

loadPostsButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            let postsContainer = document.getElementById('posts-container');
            // postsContainer.innerHTML = '<h3>Posts</h3>';

            posts.forEach(post => {
                let postBlock = document.createElement('div');
                postBlock.className = 'post-block';
                postBlock.innerHTML = `
                    <p><strong>Title:</strong> ${post.title}</p>
                    <a href="post-details.html?postId=${post.id}">View Post Details</a>
                `;
                postsContainer.appendChild(postBlock);
            });
        })
});

