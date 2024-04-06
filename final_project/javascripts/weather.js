const forecast_url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-2.19&lon=-79.89&units=metric&appid=8241637a5f1b31d8d03d0fbf10f496fd';

function updateWeather() {
  fetch(forecast_url)
    .then(response => response.json())
    .then(data => {
      const weatherData = data.list[0];
      const weatherInfo = `
        <div>Current Temperature: ${weatherData.main.temp}°C</div>
        <div>Current Humidity: ${weatherData.main.humidity}%</div>
        <div>Tomorrow's Forecast at 15:00 (3:00pm): ${data.list[8].main.temp}°C</div>
        <div>Weather: ${weatherData.weather[0].description}</div>
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
        document.getElementById('high-temp').textContent = highTemp + '°C';
      })
      .catch(error => console.error('Error al obtener los datos del clima:', error));
  }
   
  document.addEventListener('DOMContentLoaded', getHighTemp);

  function closeHighTempMessage() {
    document.querySelector('.high-temp-message').style.display = 'none';
  }
  