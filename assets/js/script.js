 var userFormEl = document.querySelector("#user-form");
 var cityInputEl = document.querySelector("#searchBtn");
 
  var buttonHandler = function (event) {
    event.preventDefault();
 //get value from input
 var city = userFormEl.value;
//var  getCityForecast = function(city){ 

 if (city) {
    getCity(city);
    
 }

 var getCity = function(city) {
    const apiKey = "1243104a39fee9bac22480d3d97da492";
const apiUrl =
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
 
  //make a request
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data, city);
    });
}

  var selectedButton = document.getElementById("city-search").value;
  getCity(selectedButton);
};

// add event listeners to form and button container
userFormEl.addEventListener('click', buttonHandler);

