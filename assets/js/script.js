var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#searchBtn");
var cityEl = document.querySelector("#city-search");
var todayDate = moment().format("MM/DD/YYYY");

const apiKey = "1243104a39fee9bac22480d3d97da492";

var buttonHandler = function (event) {
  event.preventDefault();
  //get value from input
  var city = cityEl.value;
  //var  getCityForecast = function(city){
  console.log(city);
  if (city == "") {
    getCity(city);
    //getCoordinates(city);
  }

  var getCity = function (city) {
    //const apiKey = "1243104a39fee9bac22480d3d97da492";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    //make a request
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data, city);

        getWeather(city);
      });
  };

  var selectedButton = document.getElementById("city").value;
  //getCity(selectedButton);
};

// var getCoordinates = function(city) {
//     var apiUrl1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
//      fetch(apiUrl1)
//        .then(function (res) {
//          return res.json();
//        })
//        .then(function (data) {
//          console.log(data, city);
//        });
//     }
// add event listeners to form and button container

var getWeather = function (city) {
  var city = document.getElementById("city");


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
