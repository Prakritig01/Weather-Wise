const formElement = document.querySelector("#weather-form");

async function getTemp(url, city) {
    const responseVar = await fetch(url);
    console.log(responseVar);

    const dataItem = await responseVar.json();
    console.log(dataItem);

    // Convert temperature from Kelvin to Celsius
    const tempCelsius = (dataItem.main.temp - 273.15).toFixed(2);

    const weatherInfo = document.querySelector("#weather-info");
    weatherInfo.textContent = `Temperature for city : ${city} is : ${tempCelsius}°C`;
    weatherInfo.style.display = 'block'; // Show the weather-info div
}

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputField = document.querySelector("#city");
    const city = inputField.value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44de12b8de9e7d6ab1a241504f6b1366`;
    getTemp(url, city);
});
