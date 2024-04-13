
let map;
let markers = [];
let blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

let redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function initMap() {
    map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
}

function addNewEntry() {
    const entriesDiv = document.getElementById("coordinatesEntries");
    if (entriesDiv.children.length < 10) { // Limit to 10 entries
        const newEntry = document.createElement("div");
        newEntry.innerHTML = `
            <label>Latitud:</label>
            <input type="text" name="lat[]" required>
            <label>Longitud:</label>
            <input type="text" name="lng[]" required><br><br>
        `;
        entriesDiv.appendChild(newEntry);
    }
}

function calculateAverageDistance(points) {
    let totalDistance = 0;
    let count = 0;

    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            totalDistance += calculateDistance(points[i], points[j]);
            count++;
        }
    }

    return totalDistance / count;
}

function calculateDistances() {
    const form = document.getElementById("coordinatesForm");
    const formData = new FormData(form);
    const coordinates = [];

    for (let pair of formData.entries()) {
        if (pair[0].startsWith("lat")) {
            coordinates.push({ lat: parseFloat(pair[1]) });
        } else if (pair[0].startsWith("lng")) {
            coordinates[coordinates.length - 1].lng = parseFloat(pair[1]);
        }
    }
    
    coordinates.forEach(coord => {
        const marker = L.marker([coord.lat, coord.lng], {icon: blueIcon}).addTo(map);
        markers.push(marker);
    });

    const center = calculateCenter(coordinates);
    L.marker([center.lat, center.lng], {icon: redIcon}).addTo(map); // Añade el punto medio con el icono rojo
    L.circle([center.lat, center.lng], {radius: 100}).addTo(map); // Añade la geocerca alrededor del punto medio

    
    if (coordinates.length >= 2) {
        markers.forEach(marker => map.removeLayer(marker)); // Remove existing markers
        markers = [];

        coordinates.forEach(coord => {
            const marker = L.marker([coord.lat, coord.lng]).addTo(map);
            markers.push(marker);
        });

        const center = calculateCenter(coordinates);

        const distances = [];
        for (let i = 0; i < coordinates.length - 1; i++) {
            for (let j = i + 1; j < coordinates.length; j++) {
                const distance = calculateDistance(coordinates[i], coordinates[j]);
                distances.push(distance.toFixed(2) + " metros");
            }
        }

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <p>Distancias entre los puntos: ${distances.join(', ')}</p>
            <p>Punto medio: Latitud ${center.lat.toFixed(6)}, Longitud ${center.lng.toFixed(6)}</p>
        `;

        // Center map on the calculated center
        map.setView([center.lat, center.lng], 8);
    } else {
        alert("Se requieren al menos dos puntos para calcular distancias.");
    }
}

function calculateDistance(pointA, pointB) {
    const R = 6371000; // Radio de la Tierra en metros
    const lat1 = toRadians(pointA.lat);
    const lat2 = toRadians(pointB.lat);
    const deltaLat = toRadians(pointB.lat - pointA.lat);
    const deltaLng = toRadians(pointB.lng - pointA.lng);

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
}

function calculateCenter(coordinates) {
    let latSum = 0;
    let lngSum = 0;

    coordinates.forEach(coord => {
        latSum += coord.lat;
        lngSum += coord.lng;
    });

    const centerLat = latSum / coordinates.length;
    const centerLng = lngSum / coordinates.length;

    return { lat: centerLat, lng: centerLng

    }}

    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    // Llamar a la función initMap una vez que se haya cargado la página
    document.addEventListener("DOMContentLoaded", function() {
        initMap();
    });