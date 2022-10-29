const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

function getWeatherInfo(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=c4b056d22aca4491323fcab7b96db61c`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
      // console.log(response.json());
    })
    .then(function (response) {
      // return response
      // let currentWeather = response.main.temp;
      // return currentWeather;
      // console.log(response);
      // console.log(formatData(response));
      formatData(response)
    })
    .catch(function (err) {
      console.log("Error " + err);
    });
}

btn.addEventListener("click", () => {
  getWeatherInfo(input.value);
});

function formatData(data) {
  // data.slice(data.main.temp);
  let temp = data.main.temp
  let feelsLike = data.main.feels_like;
  let humidity = data.main.humidity;

  let weather = data.weather[0].main;
  let description = data.weather[0].description;
  // console.log(temp, feelsLike, humidity, weather, description);
}
