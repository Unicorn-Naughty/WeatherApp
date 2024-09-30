import WeatherData from "./components/WeatherData";
import SearchForm from "./components/SearchForm";
function App() {
  return (
    <div>
      <h1>Weather app</h1>
      <SearchForm />
      <WeatherData />
    </div>
  );
}

export default App;
