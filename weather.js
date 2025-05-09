const apiKey = "8cdadcb9032a4348dfaa04d06f7e8c8c";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=8cdadcb9032a4348dfaa04d06f7e8c8c&units=metric";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}

document.querySelector(".city").innerHTML = data.name;

checkWeather();

