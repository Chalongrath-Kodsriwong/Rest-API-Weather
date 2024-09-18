const apiKey = "e0024578618a4e93dc685e09b9957e7d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".description h3").innerHTML = "description: " + data.weather[0].description;

    // Handle weather icons based on the main weather condition
    const weatherCondition = data.weather[0].main;

    if (weatherCondition === "Clouds") {
        weatherIcon.src = "images/Clouds.png";
    } else if (weatherCondition === "Clear") {
        weatherIcon.src = "images/Sun_Clear.png";
    } else if (weatherCondition === "Rain") {
        weatherIcon.src = "images/rainy_day.png";
    } else if (weatherCondition === "Drizzle") {
        weatherIcon.src = "images/Drizzle.png";
    } else if (weatherCondition === "Mist") {
        weatherIcon.src = "images/Mist.png";
    } else {
        // Fallback image if the weather condition is not covered
        weatherIcon.src = "images/default.png";
    }

    // document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// async
async function fetchData() {
    return "Data received"; // Return ค่าเป็น Promise.resolve("Data received")
}

fetchData().then(result => console.log(result)); // จะแสดง "Data received"

// async and await
async function fetchData2() {
    const result = await fetchData(); // รอให้ someAsyncOperation() เสร็จสิ้นก่อน
    console.log(result);
}

