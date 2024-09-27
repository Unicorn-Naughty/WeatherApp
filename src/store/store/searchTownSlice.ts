import { createSlice } from "@reduxjs/toolkit";

const searchTownSlice = createSlice({
    name: 'searchTownSlice',
    initialState: {
        cityName: ""
    },
    reducers: {
        setCityName: (state, action) => {
            state.cityName = action.payload
        },
        clearCityName: (state) => {
            state.cityName = ""
        },
    }
})

export const { setCityName,clearCityName } = searchTownSlice.actions
export default searchTownSlice

