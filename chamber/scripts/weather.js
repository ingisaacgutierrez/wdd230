const forecast_url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-2.19&lon=-79.89&units=imperial&appid=8241637a5f1b31d8d03d0fbf10f496fd';

async function fetchForecast() {
    try {
        const response = await fetch(forecast_url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchForecast();

function displayForecast(data) {
    let forecastInfo = '';
    for (let i = 0; i < 4; i++) {
        let date = new Date();
        date.setDate(date.getDate() + i);
        let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dayName = dayNames[date.getDay()];
        
        const iconsrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
        let desc = data.list[i].weather[0].description;
        let descCapitalized = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        forecastInfo += `<div>${dayName}: ${data.list[i].main.temp}°F - ${descCapitalized}</div><br>`;
    }
    document.querySelector('#weather').innerHTML += forecastInfo;
}