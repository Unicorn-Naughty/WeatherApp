/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import createHttp from "../api/httpRequest";
import { setHttp } from "../store/slices/httpSlice";
import { setCityName, clearCityName } from "../store/slices/searchTownSlice";
import { Button, Input } from "../styles/components";
import { FaSearch } from "react-icons/fa";
export default function SearchForm() {
  const cityName = useAppSelector((state) => state.search.cityName);
  const dispatch = useAppDispatch();

  const url = createHttp(cityName);

  function onKeyPress(e: any) {
    if (e.keyCode === 13) {
      dispatch(setHttp(url));
      dispatch(clearCityName());
    }
  }

  function handleOnclick() {
    dispatch(setHttp(url));
    dispatch(clearCityName());
  }
  return (
    <div style={{display: "flex", alignItems:"center"}}>
      <Input
        type="text"
        placeholder="Город или страна"
        value={cityName}
        onKeyDown={(e) => onKeyPress(e)}
        onChange={(e) => dispatch(setCityName(e.target.value))}
      />
      <Button onClick={() => handleOnclick()}>
        <FaSearch />
      </Button>
    </div>
  );
}
