import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchWeather } from "../store/slices/weatherSlice";
import { Text, Title } from "../styles/components";
import Spinner from "../components/Spinner";

function WeatherData() {
  const dispatch = useAppDispatch();
  const weatherState = useAppSelector((state) => state.weather);
  const httpState = useAppSelector((state) => state.http);

  function unixTimeToJs(time: number) {
    const unix_timestamp = time;
    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  }

  useEffect(() => {
    dispatch(fetchWeather(httpState));
  }, [httpState]);
  console.log(weatherState);
  if (!weatherState.entities) {
    return <div>{`По вашему запросу ничего не нашлось`}</div>;
  }
  return (
    <div>
      <div style={{ marginBottom: "50px", height: "300px" }}>
        {weatherState.loading ? (
          <Spinner />
        ) : (
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid #000",
                width: "700px",
                padding: "25px ",
                borderRadius: "10px",
              }}
            >
              {
                <>
                  <Title>{weatherState.entities.name}</Title>
                  <img
                    style={{ width: "80px" }}
                    src={`https://openweathermap.org/img/wn/${weatherState.entities.weather?.[0].icon}.png`}
                    alt=""
                  />
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "5px",
                      }}
                    >
                      <Text>{`Temp: ${
                        weatherState.entities.main?.temp &&
                        `${
                          Math.floor(weatherState.entities.main?.temp - 273) +
                          "℃"
                        }`
                      }`}</Text>
                      <Text>{`Feels like: ${
                        weatherState.entities.main?.feels_like &&
                        `${
                          Math.floor(
                            weatherState.entities.main?.feels_like - 273
                          ) + "℃"
                        }`
                      }`}</Text>
                    </div>
                    <Text>{`Wind: ${`${weatherState.entities.wind?.speed} m/sec`}`}</Text>
                    <Text>{`Sunset: ${unixTimeToJs(
                      weatherState.entities.sys?.sunset
                        ? weatherState.entities.sys?.sunset
                        : 0
                    )}`}</Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{`Main Weather: ${weatherState.entities.weather?.[0].main}`}</Text>
                      <Text>{`Weather Description: ${weatherState.entities.weather?.[0].description}`}</Text>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        )}
      </div>
      <div style={{display: "flex"}}
      >
        <iframe
          width="700"
          height="315"
          src="https://www.youtube.com/embed/J2i0cZWCdq4?si=WxKrldvczytU8SNf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default WeatherData;
