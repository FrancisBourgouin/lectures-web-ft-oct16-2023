export default function CityHistory(props) {
  const { cities, fetchWeather } = props;

  const parsedCities =
    cities &&
    cities.map((city) => (
      <li key={city}>
        <button onClick={() => fetchWeather({ city })}>{city}</button>
      </li>
    ));

  return (
    <section className="CityHistory">
      <h1>Previously Searched Cities</h1>
      <ul>{parsedCities}</ul>
    </section>
  );
}
