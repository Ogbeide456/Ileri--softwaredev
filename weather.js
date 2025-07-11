const apiKey = "8cdadcb9032a4348dfaa04d06f7e8c8c"; // Your OpenWeatherMap API key
// Replace with your actual API key
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Base URL for the OpenWeatherMap API

const searchBox = document.querySelector(".search input"); // Select the search input box
const searchButton = document.querySelector(".search button"); // Select the search button

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data); // Log the data to the console for debugging

    // Check if the response is successful(Displaying the weather informations)
    document.querySelector(".city").innerHTML = `${data.name}, ${data.sys.country}`; // Display city name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃"; //Display temperature
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; //Display humidity
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`; //Display humidity
}
searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value); // Get the value from the search box
});
checkWeather(); // Call the function to check the weather

