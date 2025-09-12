const weatherDescriptions = {
  0: "Sunny ☀️",
  1: "Mostly clear 🌤",
  2: "Partly cloudy ⛅",
  3: "Cloudy ☁️",
  45: "Fog 🌫",
  48: "Frosty fog 🌫",
  51: "Light drizzle 🌦",
  53: "Moderate drizzle 🌦",
  55: "Heavy drizzle 🌦",
  61: "Light rain 🌧",
  63: "Moderate rain 🌧",
  65: "Heavy rain 🌧",
  71: "Snow ❄️",
  73: "Moderate snow ❄️",
  75: "Heavy snow ❄️",
  95: "Thunderstorm ⛈",
  96: "Thunderstorm with light hail ⛈",
  99: "Thunderstorm with heavy hail ⛈"
};

async function loadWeather(cityInput) {
  const inputField = document.getElementById("weather-input");
  let city = cityInput || inputField.value.trim();

  if(!city) {
    city = localStorage.getItem("lastCity") || "";
  }

  const cityNameDisplay = document.getElementById("weather-city");

  try {
    if(city) {
      await fetchWeatherByCity(city);
    } else if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          await fetchWeatherByCoords(lat, lon);
        },
        async () => {
          await fetchWeatherByCity("Warsaw");
        }
      );
    } else {
      await fetchWeatherByCity("Warsaw");
    }
  } catch(e) {
    console.error("Error loading weather:", e);
    alert("Failed to load weather!");
  }

  async function fetchWeatherByCity(cityName) {
    localStorage.setItem("lastCity", cityName);

    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
    const geoData = await geoRes.json();

    if(!geoData.results) {
      alert("City not found!");
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];
    cityNameDisplay.innerText = name;
    await fetchWeatherByCoords(latitude, longitude);
  }

  async function fetchWeatherByCoords(lat, lon) {
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const weatherData = await weatherRes.json();
    const current = weatherData.current_weather;

    const iconMap = {
      0: "☀️", 1: "🌤", 2: "⛅", 3: "☁️",
      45: "🌫", 48: "🌫", 51: "🌦", 53: "🌦", 55: "🌦",
      61: "🌧", 63: "🌧", 65: "🌧",
      71: "❄️", 73: "❄️", 75: "❄️",
      95: "⛈", 96: "⛈", 99: "⛈"
    };

    document.getElementById("weather-icon").innerText = iconMap[current.weathercode] || "❓";
    document.getElementById("weather-temp").innerText = current.temperature + "°C";
    document.getElementById("weather-desc").innerText = weatherDescriptions[current.weathercode] || "Unknown";
    document.getElementById("weather-wind").innerText = `Wind: ${current.windspeed} km/h`;
    document.getElementById("weather-card").style.display = "block";
  }
}

window.onload = () => {
  const lastCity = localStorage.getItem("lastCity");
  loadWeather();
};
