class UI{
    constructor(){
        this.city = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    displayWeatherInfo(weather){
        this.city.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.temp.textContent = Math.floor(weather.main.temp - 273.15) + 'ºC';
        this.icon.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        this.humidity.textContent = 'humidity: ' + weather.main.humidity + " %";
        this.pressure.textContent = 'Air Pressure: ' + weather.main.pressure + " º";
        this.wind.textContent = weather.wind.speed + " km/h";
    }
}