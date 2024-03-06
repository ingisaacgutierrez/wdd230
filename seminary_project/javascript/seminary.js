var map = L.map('mapid').setView([-2.170998, -79.9223592], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    draw: {
        polygon: {
            shapeOptions: {
                color: document.getElementById('geofence_color').value
            }
        },
        polyline: false,
        circle: false,
        rectangle: false,
        marker: false
    },
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'polygon') {
        drawnItems.addLayer(layer);
    }
});

document.getElementById('create').addEventListener('click', function() {
    drawControl.options.draw.polygon.shapeOptions.color = document.getElementById('geofence_color').value;
    new L.Draw.Polygon(map, drawControl.options.draw.polygon).enable();
});

document.getElementById('save').addEventListener('click', function() {
    // Obtén los datos del formulario
    var formData = {
        name: document.getElementById('fname').value,
        age: document.getElementById('lname').value,
        address: document.getElementById('edad').value,
        locationLink: document.getElementById('location_link').value,
        phone: document.getElementById('phone').value,
        geofenceColor: document.getElementById('geofence_color').value
    };

    // Obtén los datos de la geocerca
    var geofenceData = [];
    drawnItems.eachLayer(function(layer) {
        if (layer instanceof L.Polygon) {
            geofenceData.push(layer.getLatLngs());
        }
    });

    // Crea un objeto que contenga tanto los datos del formulario como los de la geocerca
    var data = {
        formData: formData,
        geofenceData: geofenceData
    };

    // Convierte los datos a JSON
    var json = JSON.stringify(data);

    // Crea un objeto Blob que contenga los datos en formato de texto
    var blob = new Blob([json], {type: "text/plain;charset=utf-8"});

    // Crea un enlace de descarga para el Blob
    var url = URL.createObjectURL(blob);

    // Crea un elemento de enlace, configura el enlace de descarga y haz clic en él
    var link = document.createElement('a');
    link.download = 'data.txt';
    link.href = url;
    document.body.appendChild(link); // Agrega el enlace al cuerpo del documento
    link.click();
    document.body.removeChild(link); // Elimina el enlace del cuerpo del documento después de hacer clic en él
});
        