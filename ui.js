class UI{
    constructor(){
        this.city = document.getElementById('w-location');
        this.country = document.getElementById('w-country')
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.maxTemp = document.getElementById('w-max-temp');
        this.minTemp = document.getElementById('w-min-temp');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        }

    displayWeatherInfo(weather){
        this.city.textContent = 'City: ' + weather.name;
        this.country.textContent = 'Country: ' +  weather.sys.country;
        this.desc.textContent = 'weather Condition: ' +  weather.weather[0].description;
        this.temp.textContent = 'Temperature: ' + Math.floor(weather.main.temp - 273.15) + 'ºC';
        this.maxTemp.textContent = 'Max Temp: ' + Math.floor(weather.main.temp_max - 273.15) + 'ºC';
        this.minTemp.textContent = 'Min Temp: ' + Math.floor(weather.main.temp_min - 273.15) + 'ºC';
        this.icon.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        this.humidity.textContent = 'humidity: ' + weather.main.humidity + " %";
        this.pressure.textContent = 'Air Pressure: ' + weather.main.pressure + " º";
        this.wind.textContent = 'Wind Speed: ' + weather.wind.speed + " km/h";
    }
}
