// Crear el mapa y centrarse en las coordenadas dadas
const map = L.map('map').setView([29.892037, -97.939813], 15); // Reemplaza con las coordenadas de tu tienda

// Cargar las baldosas del mapa desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Agregar un marcador en las coordenadas de tu tienda
L.marker([29.892090160668257, -97.93983475414966]).addTo(map)
    .bindPopup('Here is the store!.') // Popup que se muestra al hacer clic en el marcador
    .openPopup();
