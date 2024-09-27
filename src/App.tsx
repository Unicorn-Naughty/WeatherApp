import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchWeather } from "./store/store/weatherSlice";
import createHttp from "./pluggins/http";
import { setHttp } from "./store/store/httpSlice";
import ControledInput from "./components/ControledInput";
function App() {
  const dispatch = useAppDispatch();
  const weatherState = useAppSelector((state) => state.weather);
  const httpState = useAppSelector((state) => state.http);
  const [value, setValue] = useState("");
  const url = createHttp(value);

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
          <ControledInput value={value} setValue={setValue} />
          <button onClick={() => dispatch(setHttp(url))}></button>
        </div>
      )}
    </div>
  );
}

export default App;
