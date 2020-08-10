class Weather{
    constructor(city){
        this.city = city;
        this.appid = '7223c4bc76b4cc2a4e8e15674409d2fe';
    }

    async getWeather() {
        const response = await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`)).json();
        return response;
    }
}