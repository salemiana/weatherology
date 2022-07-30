var todayEl = document.querySelector("#today");
var todayWeatherEl = document.createElement("span");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uviEl = document.querySelector("#uvi");
var userFormEl = document.querySelector("#user-form");
var cityEl = document.querySelector("#city-search");
//var todayDate = moment().format("MM/DD/YYYY");

const apiKey = "1243104a39fee9bac22480d3d97da492";

const getCity = (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  //make a request
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data, city);
      const lat = data.city.coord.lat;
      const lon = data.city.coord.lon;
      console.log(lat, lon);
      getWeather(lat, lon);
    });
};

function buttonHandler(event) {
  event.preventDefault();
  //get value from input
  var city = cityEl.value;
  //var  getCityForecast = function(city){
  console.log(city);
  if (city !== "") {
    getCity(city);
  }
}


var getWeather = function (x, y) {
  // var city = document.getElementById("city").value;
  apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${x}&lon=${y}&units=imperial&appid=${apiKey}`;
  fetch(apiUrl1)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
     

      // set element city name
       var icon ="https://api.openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
          console.log(icon);

      //cityEl.innerHTML = cityEl.value + '<img src= icon />';
      tempEl.innerHTML = "Temp: " + data.current.temp + "°";
      windEl.innerHTML = "Wind: " + data.current.wind_speed + " mph";
      humidityEl.innerHTML = "Humidity: " + data.current.humidity + "%";
      // uviEl.innerHTML = "UVI Index: " + "<span>" + data.current.uvi + "<span>";
    });
};

userFormEl.addEventListener("submit", buttonHandler);
console.log("test");
