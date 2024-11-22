let map = L.map('map2').setView([26.741821, -80.354925], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/zarini/cm3pgv0ae000o01rw5q5713pz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemFyaW5pIiwiYSI6ImNtM256aHV3ZDB6c24ydm9zbW42Z29uMmgifQ.XAUXkLCYXGmZ8UoNJXEj6w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
    L.marker( [ places[i].latitude, places[i].longitude ] )
    .bindPopup( '<h4>' + places[i].placeName + '</h4>' + '<p>' + places[i].descrip + '</p>')
    .addTo( map );
}