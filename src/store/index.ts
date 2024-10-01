import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slices/weatherSlice";
import httpSlice from "./slices/httpSlice";
import searchTownSlice from "./slices/searchTownSlice";

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

