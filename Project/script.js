// Получаем данные о пользователях с API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersContainer = document.getElementById('users-container');

        // Для каждого пользователя создаем блок
        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.className = 'user-block';

            // Вставляем ID и имя пользователя
            userBlock.innerHTML = `
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <a href="user-details.html?id=${user.id}">View Details</a>
            `;

            // Добавляем блок в контейнер
            usersContainer.appendChild(userBlock);
        });
    })
    // .catch(error => {
    //     console.error('Error fetching users:', error);
    // });
