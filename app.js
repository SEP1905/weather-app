function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    return '${day} ${hours}:${minutes}';
}

function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#tempeerature");
    let cityElement = document.querySelector(#city);
    let descriptionElement = document.querySelector(#description);
    let humidityElement = document.querySelector(#humidity);
    let windElement = document.querySelector(#wind);
    let dateElement = document.querySelector(#date);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt* 1000);
}
 let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);