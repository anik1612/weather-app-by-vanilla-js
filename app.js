//init UI
const ui = new UI();

// Fetch city from IP
async function getCity(){
    const city = await fetch('https://ipapi.co/json');
    const data = await city.json();
    return data;
}

getCity().then(data => {
    const country = document.getElementById('w-country');
    country.TextContent = data.country;
    const weather = new Weather(data.city);
    weather.getWeather().then(data => {
        ui.displayWeatherInfo(data); 
    });
});

document.getElementById('w-change-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    console.log(city);
    const weather = new Weather(city);
    weather.getWeather().then(data => {
        ui.displayWeatherInfo(data); 
    });
})
