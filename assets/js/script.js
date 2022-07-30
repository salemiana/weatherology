var todayEl = document.querySelector("#today");
var todayWeatherEl = document.createElement("span");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uviEl = document.querySelector("#uvi");
var userFormEl = document.querySelector("#user-form");
var cityEl = document.querySelector("#city-search");
var dailyTitleEl = document.createElement("div");
var dailyWeatherEl = document.createElement("div");
var todayDate = moment().format("MM/DD/YYYY");


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
      getWeather(lat, lon, city);
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

var getWeather = function ( x, y, city) {
  // var city = document.getElementById("city").value;
  apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${x}&lon=${y}&units=imperial&appid=${apiKey}`;
  fetch(apiUrl1)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
var iconImg = document.createElement('img');


      // set element city name
      var icon =
        "https://api.openweathermap.org/img/w/" +
        data.current.weather[0].icon +
        ".png";
      console.log(icon);

      iconImg.setAttribute('src', icon);
      todayEl.appendChild(iconImg);

      cityEl.innerHTML = city + icon;
      tempEl.innerHTML = "Temp: " + data.current.temp + "°";
      windEl.innerHTML = "Wind: " + data.current.wind_speed + " mph";
      humidityEl.innerHTML = "Humidity: " + data.current.humidity + "%";
      uviEl.innerHTML = "UVI Index: " + "<span>" + data.current.uvi + "<span>";

      todayEl.appendChild(cityEl);
      todayEl.appendChild(tempEl);
      todayEl.appendChild(windEl);
      todayEl.appendChild(humidityEl);
      todayEl.appendChild(uviEl);

      for (var i = 0; i < 5; i++) {
        forecastDate = moment(todayDate,"MM/DD/YYYY").add((i+1), "days");
        forecastDate = moment(forecastDate).format("MM/DD/YYYY");

        dailyTitleEl.innerHTML = "<h4>" + forecastDate + "</h4>";

        dailyWeatherEl.innerHTML =
          "<img src='https://openweathermap.org/img/w/" +
          data.daily[i].weather[0].icon +
          ".png' />" +
          "<br />" +
          "Temp: " +
          data.daily[i].temp.day +
          "°" +
          "<br />" +
          "Wind: " +
          data.daily[i].wind_speed +
          "mph" +
          "<br />" +
          "Humidity: " +
          data.daily[i].humidity +
          "%" +
          "<br />" +
          "UV Index: " +
          data.daily[i].uvi +
          "<br />" +
          data.daily[i].weather[0].description;

        var weatherDay = i + 1;
        displayData(weatherDay, dailyTitleEl, dailyWeatherEl);
      }
    });

  var displayData = function (weatherToDay, dailyTitleEl, dailyWeatherEl) {
    var dayOneEl = document.querySelector("#dayOne");
    var dayTwoEl = document.querySelector("#dayTwo");
    var dayThreeEl = document.querySelector("#dayThree");
    var dayFourEl = document.querySelector("#dayFour");
    var dayFiveEl = document.querySelector("#dayFive");

    switch (weatherToDay) {
      case 1:
        dayOneEl.innerHTML =
          dailyTitleEl.innerHTML + "<br />" + dailyWeatherEl.innerHTML;
        break;

      case 2:
        dayTwoEl.innerHTML =
          dailyTitleEl.innerHTML + "<br />" + dailyWeatherEl.innerHTML;
        break;

      case 3:
        dayThreeEl.innerHTML =
          dailyTitleEl.innerHTML + "<br />" + dailyWeatherEl.innerHTML;
        break;

      case 4:
        dayFourEl.innerHTML =
          dailyTitleEl.innerHTML + "<br />" + dailyWeatherEl.innerHTML;
        break;

      case 5:
        dayFiveEl.innerHTML =
          dailyTitleEl.innerHTML + "<br />" + dailyWeatherEl.innerHTML;
        break;
    }
  };
};

userFormEl.addEventListener("submit", buttonHandler);

