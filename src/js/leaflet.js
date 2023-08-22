// Coordenadas de "Carlos Villate y Avenida Mitre, Munro, Buenos Aires, Argentina"
const locationCoordinates = [-34.52651, -58.534031];

// Crear el mapa y establecer la vista inicial
const map = L.map("map").setView(locationCoordinates, 16);

// Agregar la capa de tiles de OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 15,
	attribution: "© OpenStreetMap",
}).addTo(map);

// Agregar un marcador en la ubicación específica
L.marker(locationCoordinates).addTo(map);

// Agregar un círculo en la zona de Munro
L.circle(locationCoordinates, {
	color: "red",
	fillColor: "#f03",
	fillOpacity: 0.1,
	radius: 500, // Radio del círculo en metros
}).addTo(map);
