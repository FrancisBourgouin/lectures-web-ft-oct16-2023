import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CurrentWeather from "./components/CurrentWeather";
import { useState } from "react";
import axios from "axios";
import CityHistory from "./components/CityHistory";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [weatherData, setWeatherData] = useState(undefined);
  const [cities, setCities] = useState([]);

  const updateCurrentCity = (formData) => {
    setCurrentCity(formData.city);

    !cities.includes(formData.city) && setCities([...cities, formData.city]);
  };

  const fetchWeather = (formData) => {
    const API_KEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${formData.city}&appid=${API_KEY}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then(setWeatherData)
      .then(() => updateCurrentCity(formData))
      .catch((err) => {
        console.log(err);
        setWeatherData(undefined);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={fetchWeather} />
        {!!cities.length && <CityHistory cities={cities} fetchWeather={fetchWeather} />}
        {weatherData && currentCity && (
          <CurrentWeather currentCity={currentCity} weatherData={weatherData} />
        )}
      </main>
    </div>
  );
}

export default App;
