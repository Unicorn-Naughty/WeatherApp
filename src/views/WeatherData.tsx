import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchWeather } from "../store/slices/weatherSlice";
import { Text, Title } from "../styles/components";
import Spinner from "../components/Spinner";
import {
  WeatherDataContent,
  WeatherDataDescr,
  WeatherDataTemp,
  WeatherDataWrapper,
} from "../styles/weatherData";
import unixTimeToJs from "../utilities/unixTimeToJs";

function WeatherData() {

  const dispatch = useAppDispatch();
  const weatherState = useAppSelector((state) => state.weather);
  const httpState = useAppSelector((state) => state.http);

  useEffect(() => {
    dispatch(fetchWeather(httpState));
  }, [httpState]);
  console.log(weatherState);
  if (!weatherState.entities) {
    return <div>{`По вашему запросу ничего не нашлось`}</div>;
  }
  return (
    <>
      <WeatherDataWrapper>
        {weatherState.loading ? (
          <Spinner />
        ) : (
          <WeatherDataContent>
            <>
              <Title>{weatherState.entities.name}</Title>
              <img
                style={{ width: "80px" }}
                src={`https://openweathermap.org/img/wn/${weatherState.entities.weather?.[0].icon}.png`}
                alt=""
              />
              <div>
                <WeatherDataTemp>
                  <Text>{`Temp: ${
                    weatherState.entities.main?.temp &&
                    `${
                      Math.floor(weatherState.entities.main?.temp - 273) + "℃"
                    }`
                  }`}</Text>
                  <Text>{`Feels like: ${
                    weatherState.entities.main?.feels_like &&
                    `${
                      Math.floor(weatherState.entities.main?.feels_like - 273) +
                      "℃"
                    }`
                  }`}</Text>
                </WeatherDataTemp>
                <Text>{`Wind: ${`${weatherState.entities.wind?.speed} m/sec`}`}</Text>
                <Text>{`Sunset: ${unixTimeToJs(
                  weatherState.entities.sys?.sunset
                    ? weatherState.entities.sys?.sunset
                    : 0
                )}`}</Text>
                <WeatherDataDescr>
                  <Text>{`Main Weather: ${weatherState.entities.weather?.[0].main}`}</Text>
                  <Text>{`Weather Description: ${weatherState.entities.weather?.[0].description}`}</Text>
                </WeatherDataDescr>
              </div>
            </>
          </WeatherDataContent>
        )}
      </WeatherDataWrapper>
    </>
  );
}

export default WeatherData;
