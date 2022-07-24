 var userFormEl = document.querySelector("#user-form");
 var cityInputEl = document.querySelector("#searchBtn");
 
  var buttonHandler = function (event) {
    event.preventDefault();
 //get value from input
 var city = cityInputEl.value.trim();
//var  getCityForecast = function(city){ 

 if (city-search) {
    getCity(city-search);
    city ="";
 }

 var getCity = function(req) {
    const apiKey = "1243104a39fee9bac22480d3d97da492";
const apiUrl =
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
 }
  //make a request
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });

  document.getElementById("city-search").value = selectedButton;
  getCity(selectedButton);
};

// add event listeners to form and button container
userFormEl.addEventListener("btn", buttonHandler);

