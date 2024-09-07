fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersContainer = document.getElementById('users-container');

        for (let i = 0; i < users.length; i++) {
            let user = users[i];

            let userBlock = document.createElement('div');
            userBlock.className = 'user-block';
            userBlock.innerHTML = `
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <a href="user-details.html?id=${user.id}">View Details</a>
            `;
            usersContainer.appendChild(userBlock);
        }
    })