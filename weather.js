const weatherContainer = document.querySelector(".js-weather")

const API = "e04fa1e8666f38e755c9e764f63627b9";
const COORDS = "coords";

function getInfo(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`
  ).then(function(response) {
    return (response.json());
  }).then(function(json) {
    const temperture = json.main.temp;
    const place = json.name;
    weatherContainer.innerText = `${temperture} @ ${place}`
  })
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,

  };
  saveCoords(coordsObj);
  getInfo(latitude, longitude);
}
function handleGeoFail() {
  console.log("ACCESS DEINED")
}
function askCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoFail);
}
function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null) {
    askCoords();
  }
  else {
    const parseCoords = JSON.parse(loadedCords);
    getInfo(parseCoords.latitude, parseCoords.longitude);
  }
}


function init() {
  loadCoords();

}

init();