const input = document.querySelector(".input");
const place_h = document.querySelector(".place1");
const weather_h = document.querySelector(".weather");
const description_h = document.querySelector(".description");
const temp_h = document.querySelector(".temp");
const feels_h = document.querySelector(".feels-like");
const date_h = document.querySelector(".date");

const date = new Date()
// const btn = document.querySelector(".btn");

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
      formatData(response);
    })
    .catch(function (err) {
      console.log("Error " + err);
    });
}

// btn.addEventListener("click", () => {
// });

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWeatherInfo(input.value);
  }
});

function formatData(data) {
  // data.slice(data.main.temp);
  let temp = data.main.temp;
  let feelsLike = data.main.feels_like;
  // let humidity = data.main.humidity;

  let weather = data.weather[0].main;
  let description = data.weather[0].description;
  console.log(temp, feelsLike, weather, description);

  // place_h.textContent = input.value;
  weather_h.textContent = weather;
  description_h.textContent = weather;
  temp_h.textContent = temp + '°';
  feels_h.textContent = feelsLike + '°';
  // date_h.textContent = date;  
}
