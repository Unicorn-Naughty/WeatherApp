import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setCityName, clearCityName } from "../store/store/searchTownSlice";
import createHttp from "../pluggins/http";
import { setHttp } from "../store/store/httpSlice";
export default function SearchForm() {
  const cityName = useAppSelector((state) => state.search.cityName);
  const dispatch = useAppDispatch();

  const url = createHttp(cityName);

  function onKeyPress(e) {
    if (!cityName) {
      console.log("text smtng");
    } else {
      if (e.keyCode === 13) {
        dispatch(setHttp(url));
        dispatch(clearCityName());
      }
    }
  }

  function handleOnclick() {
    if (!cityName) {
      console.log("text smtgn");
    } else {
      dispatch(setHttp(url));
      dispatch(clearCityName());
    }
  }
  return (
    <>
      <input
        type="text"
        value={cityName}
        onKeyDown={(e) => onKeyPress(e)}
        onChange={(e) => dispatch(setCityName(e.target.value))}
      />
      <button onClick={() => handleOnclick()}>Search</button>
    </>
  );
}
