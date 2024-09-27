import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchWeather } from "./store/store/weatherSlice";



function WeatherData() {
  /*Проблема в том что ререндиртся все из-за инпута, но делать его ленивым тоже не вариант из-за того, что хочется дополнить выборку по подбору из ипута */
  const dispatch = useAppDispatch();
  const weatherState = useAppSelector((state) => state.weather);
  const httpState = useAppSelector((state) => state.http);



  useEffect(() => {
    dispatch(fetchWeather(httpState));
  }, [httpState]);
  console.log(weatherState);

  return (
    <div>
      {weatherState.loading ? (
        "loading"
      ) : (
        <div>
         
          <ul></ul>
        </div>
      )}
    </div>
  );
}

export default WeatherData;
