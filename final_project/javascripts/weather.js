const forecast_url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-2.19&lon=-79.89&units=imperial&appid=8241637a5f1b31d8d03d0fbf10f496fd';

function updateWeather() {
  fetch(forecast_url)
    .then(response => response.json())
    .then(data => {
      const weatherData = data.list[0];
      const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
      const weatherInfo = `
        <div>Current Temperature: ${weatherData.main.temp}°F</div><br>
        <div>Current Humidity: ${weatherData.main.humidity}%</div><br>
        <div>Tomorrow's Forecast at 15:00 (3:00pm): ${data.list[8].main.temp}°F</div><br>
        <div>Weather: ${weatherData.weather[0].description}</div>
        <img class="weather-img" src="${iconUrl}" alt="Weather Icon">

      `;
      document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch(error => console.error('Error al obtener los datos del clima:', error));
}

document.addEventListener('DOMContentLoaded', updateWeather);


function getHighTemp() {
    fetch(forecast_url)
      .then(response => response.json())
      .then(data => {
        const highTemp = data.list[0].main.temp_max;
        document.getElementById('high-temp').textContent = highTemp + '°F';
      })
      .catch(error => console.error('Error al obtener los datos del clima:', error));
}

document.addEventListener('DOMContentLoaded', getHighTemp);

function closeHighTempMessage() {
  document.querySelector('.high-temp-message').style.display = 'none';
}