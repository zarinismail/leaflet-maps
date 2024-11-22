let map = L.map('map1').setView([26.713510, -80.074536], 11.92);

L.tileLayer('https://api.mapbox.com/styles/v1/zarini/cm3pgv0ae000o01rw5q5713pz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemFyaW5pIiwiYSI6ImNtM256aHV3ZDB6c24ydm9zbW42Z29uMmgifQ.XAUXkLCYXGmZ8UoNJXEj6w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([26.715209925565564, -80.1019188835161]).addTo(map);
marker1.bindPopup("<b>Torero's Mexican Cuisine:</b> This is my favorite Mexican restaurant because of its extensive vegetarian menu, affordable prices and decent portions.");

let marker2 = L.marker([26.70493080562872, -80.08074568742843]).addTo(map);
marker2.bindPopup("<b>Rama V Thai & Sushi:</b> This Japanese and Thai restaurant is a favorite because of its varieties of sushi, soups, curries and noodle dishes.");

let marker3 = L.marker([26.72428620828648, -80.06585928499783]).addTo(map);
marker3.bindPopup("<b>Jaws Hot Chicken & Seafood:</b> This halal fried chicken and fish restaurant is a family favorite with large portions of food for at most $25.");

let marker4 = L.marker([26.713450556696376, -80.05101890485209]).addTo(map);
marker4.bindPopup("<b>Lynora's WPB:</b> This Italian restaurant has refreshing views of Palm Beach island, delicious food and lively music.");