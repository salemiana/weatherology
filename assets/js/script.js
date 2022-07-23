
const city = document.getElementById("city").value;

const apiKey = "1243104a39fee9bac22480d3d97da492";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&appid=${apiKey}`;
// var icon ="https://api.openweathermap.org/img/w/" + data.list.weather[0].icon + ".png";
//     console.log(icon);


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//`https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=${apiKey}`

const getCity= function(search)
{
    fetch(apiUrl).then(function(res) {
     res.json().then(function(data) {
        console.log(data);
    })
})
}