const map = L.map('map').setView([18.5204,73.8567], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var update = false
var locatorIcon = L.icon({
   iconUrl: 'https://i.imgur.com/gEbWI9b.png',

   iconSize:     [20, 20], // size of the icon
   iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var moderateIcon = L.icon({
    iconUrl: 'https://i.imgur.com/iLY8PK6.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var severeIcon = L.icon({
    iconUrl: 'https://i.imgur.com/faN1VQ2.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var locator = L.marker([51.5, -0.09], {icon: locatorIcon}).addTo(map).bindPopup("You Are here");
var lenM = 0
var lenS = 0
const vhr = new XMLHttpRequest();
const dhr = new XMLHttpRequest();
var data;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function updateChart(){
vhr.open("GET", "https://potholedetection-f0b97ab1eedf.herokuapp.com/data/");
vhr.send();
vhr.responseType = "json";
vhr.onload = () => {
  if (vhr.readyState == 4 && vhr.status == 200) {
    data = vhr.response;
    var newCenter = L.latLng(data.lat[0],data.lon[0]);
    if(!update){
    map.setView(newCenter);
    update = true;
    }
    locator.setLatLng(newCenter);
  } else {
    console.log(`Error: ${vhr.status}`);
  }
};

dhr.open("GET", "https://potholedetection-f0b97ab1eedf.herokuapp.com/markers");
dhr.send();
dhr.responseType = "json";
dhr.onload = () => {
  if (dhr.readyState == 4 && dhr.status == 200) {
    data = dhr.response;
    if(data.moderate.x.length != lenM){
    for(var a = 0;a < data.moderate.x.length;a++){
    lat = data.moderate.x[a]
    lon = data.moderate.y[a]
    if(lat != 0 || lon != 0){
    var str = String(lat) + `,` + String(lon)
    L.marker([lat, lon], {icon: moderateIcon}).addTo(map).bindPopup(str);
    }
    }
    lenM = data.moderate.x.length;
    }
    console.log(data.moderate.x.length)
  if(data.severe.x.length != lenS){
    for(var a = 0;a < data.severe.x.length;a++){
    lat = data.severe.x[a]
    lon = data.severe.y[a]
    var str = String(lat) + `,` + String(lon)
    if(lat != 0 || lon != 0){
    L.marker([lat, lon], {icon: severeIcon}).addTo(map).bindPopup(str);
    }
    }
    lenS = data.severe.x.length;
    }
    console.log(data);
  } else {
    console.log(`Error: ${dhr.status}`);
  }
};
}


setInterval(function(){updateChart()}, 1000);
