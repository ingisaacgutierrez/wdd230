const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-2.19&lon=-79.89&units=imperial&appid=8241637a5f1b31d8d03d0fbf10f496fd';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    let descCapitalized = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    let weatherInfo = `<div><img id="weather-icon" src="${iconsrc}" alt="${desc}"></div><div>${data.main.temp}°F - ${descCapitalized}</div>`;
    document.querySelector('#weather').innerHTML = weatherInfo;
}
