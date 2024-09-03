// Шаг 1: Получение данных с API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(users => {
        // Шаг 2: Вставляем пользователей в HTML
        const usersContainer = document.getElementById('users-container');

        users.forEach(user => {
            // Создаем блок для каждого пользователя
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
    .catch(error => {
        console.error('Error fetching users:', error);
    });
