document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    const api= 'https://jsonplaceholder.typicode.com/photos?_limit=9';

    fetch(api)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';

                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.title;

                const title = document.createElement('p');
                title.textContent = item.title;

                itemDiv.appendChild(img);
                itemDiv.appendChild(title);

                dataContainer.appendChild(itemDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});