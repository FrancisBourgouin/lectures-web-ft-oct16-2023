export default function CurrentWeather(props) {
  const { currentCity, weatherData } = props;

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const conditions = weatherData.weather[0].description;

  return (
    <section className="CurrentWeather">
      <h1>Current weather for {currentCity}</h1>
      <p>Temp is currently {temperature}°C</p>
      <p>Conditions are {conditions}</p>
    </section>
  );
}
