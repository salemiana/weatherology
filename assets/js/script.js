var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#searchBtn");
var cityEl = document.querySelector("#city-search");
//var todayDate = moment().format("MM/DD/YYYY");

const apiKey = "1243104a39fee9bac22480d3d97da492";


const getCity =(city) => {


  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`

  //make a request
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data, city);
const lat = data.coord.lat;
const lon = data.coord.lon;
console.log(lat, lon);
      getWeather(lat, lon);
    });
};


function buttonHandler (event) {
  event.preventDefault();
  //get value from input
  var city = cityEl.value;
  //var  getCityForecast = function(city){
  console.log(city);
  if (city !== "") {
    getCity(city);
    
  }


};
// ============================================================================
//{
//   "id": 4671654,
//   "name": "Austin",
//   "coord": {
//       "lat": 30.2672,
//       "lon": -97.7431
//   },
//   "country": "US",
//   "population": 790390,
//   "timezone": -18000,
//   "sunrise": 1658749510,
//   "sunset": 1658798971
// }
// ==================================================================


var getWeather = function (x, y) {
  var city = document.getElementById("city");
  apiUrl1 =`https://api.openweathermap.org/data/3.0/onecall?lat=${x}&lon=${y}&exclude={part}&appid=${apiKey}`;
 fetchfetch(apiUrl1)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(data, city);
        });
     }
     {
  var todayEl = document.querySelector("#today");
  var todayWeatherEl = document.createElement("span");
  var tempEl = document.querySelector("#temp");
  var windEl = document.querySelector("#wind");
  var humidityEl = document.querySelector("#humidity");
  var uviEl = document.querySelector("#uvi");
  var conditionsEl = document.querySelector("#conditions");
};

userFormEl.addEventListener("submit", buttonHandler);
console.log("test");
