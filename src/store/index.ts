import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./store/weatherSlice";
import httpSlice from "./store/httpSlice";
import searchTownSlice from "./store/searchTownSlice";

const store = configureStore({
    reducer: {
        http: httpSlice.reducer,
        weather: weatherSlice.reducer,
        search: searchTownSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store