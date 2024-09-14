document.getElementById('menuForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const food = document.getElementById('food').value;
    const nutrition = document.getElementById('nutrition').value;

    const menuItem = document.createElement('li');
    menuItem.textContent = `Data: ${date} - Alimento: ${food} - Valores Nutricionais: ${nutrition}`;

    document.getElementById('menuList').querySelector('ul').appendChild(menuItem);

    document.getElementById('menuForm').reset();
});

// Função para adicionar cardápios anteriores (exemplo fictício)
const previousMenus = [
    { date: '2024-09-12', food: 'Arroz e Feijão', nutrition: 'Calorias: 200, Proteínas: 10g' },
    { date: '2024-09-11', food: 'Macarrão', nutrition: 'Calorias: 250, Proteínas: 8g' }
];

previousMenus.forEach(menu => {
    const menuItem = document.createElement('li');
    menuItem.textContent = `Data: ${menu.date} - Alimento: ${menu.food} - Valores Nutricionais: ${menu.nutrition}`;
    document.getElementById('previousMenus').querySelector('ul').appendChild(menuItem);
});
