class Weather{
    constructor(city){
        this.city = city;
        this.appid = '2d6a242864886272d5ab939272c6d4b3';
    }

    async getWeather() {
        const response = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`)).json();
        return response;
    }
}
