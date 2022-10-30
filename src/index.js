import format from "date-fns/format";

const content = document.querySelector(".content");
const input = document.querySelector(".input");
const place_h = document.querySelector(".place");
const weather_h = document.querySelector(".weather");
const temp_h = document.querySelector(".temp");
const feels_h = document.querySelector(".feels-like");
const date_h = document.querySelector(".date");
const img = document.querySelector(".img");

let day = format(new Date(), "'Today is a' eeee");
date_h.textContent = day;

function getWeatherInfo(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=c4b056d22aca4491323fcab7b96db61c`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      formatData(response);
    })
    .catch(function (err) {
      console.log("Error " + err);
      alert("Enter a valid city");
    });
}


input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWeatherInfo(input.value);
  }
});

function formatData(data) {
  let temp = data.main.temp;
  let feelsLike = data.main.feels_like;

  let country = data.sys.country;
  let city = data.name;

  let weather = data.weather[0].main;
  let description = data.weather[0].description;
  // console.log(temp, feelsLike, weather, description, country, city);

  weather_h.innerHTML = weather + `<p class="description">${description}</p>`;
  temp_h.textContent = temp + "°";
  feels_h.textContent = "Feels like: " + feelsLike + "°";
  place_h.textContent = city + ", " + country;

  if (weather === "Clouds") {
    content.style.backgroundImage = "url(/src/background/cloudy.jpg)";
    img.src = '/src/icons/cloud.png'
  } else if (weather === "Rain") {
    content.style.backgroundImage = "url(/src/background/rainy.jpg)";
    img.src = '/src/icons/rain.png'
  } else if (weather === "Sunny") {
    content.style.backgroundImage = "url(/src/background/sunny.jpg)";
    img.src = '/src/icons/sunny.png'
  } else {
    content.style.backgroundImage = "url(/src/background/sunset.jpg)";
    img.src = '/src/icons/sunny.png'
  }
}

getWeatherInfo("Boston");
