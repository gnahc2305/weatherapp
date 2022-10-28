const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

function getWeatherInfo(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=c4b056d22aca4491323fcab7b96db61c`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let currentWeather = response.main.temp;
      console.log(currentWeather);
    })
    .catch(function (err) {
      console.log("Error " + err);
    });
}

btn.addEventListener('click', () => {
    getWeatherInfo(input.value)
})
