document.getElementById('menuForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const food = document.getElementById('food').value;
    const nutrition = document.getElementById('nutrition').value;

    try {
        const response = await fetch('/dados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, food, nutrition })
        });

        if (response.ok) {
            const menuItem = document.createElement('li');
            menuItem.textContent = `Data: ${date} - Alimento: ${food} - Valores Nutricionais: ${nutrition}`;
            document.getElementById('menuList').querySelector('ul').appendChild(menuItem);
            document.getElementById('menuForm').reset();
        } else {
            alert('Erro ao adicionar dados');
        }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
});

const previousMenus = [
    { date: '2024-09-12', food: 'Arroz e Feijão', nutrition: 'Calorias: 200, Proteínas: 10g' },
    { date: '2024-09-11', food: 'Macarrão', nutrition: 'Calorias: 250, Proteínas: 8g' }
];

previousMenus.forEach(menu => {
    const menuItem = document.createElement('li');
    menuItem.textContent = `Data: ${menu.date} - Alimento: ${menu.food} - Valores Nutricionais: ${menu.nutrition}`;
    document.getElementById('previousMenus').querySelector('ul').appendChild(menuItem);
});
