import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchTownSlice = createSlice({
    name: 'searchTownSlice',
    initialState: {
        cityName: ""
    },
    reducers: {
        setCityName: (state, action: PayloadAction<string>) => {
            state.cityName = action.payload
        },
        clearCityName: (state) => {
            state.cityName = ""
        },
    }
})

export const { setCityName, clearCityName } = searchTownSlice.actions
export default searchTownSlice

// try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error(`${response.status}: ${response.statusText}`);
//     }
//     const res = await response.json().then(data => data.ip)
//     try {
//         const resp2 = await (await fetch(`http://ip-api.com/json/${res}`)).json().then(res => res)
//         if (!response.ok) {
//             throw new Error(`${response.status}: ${response.statusText}`);
//         }
//         try {
//             const res3 = await fetch(`https://weather-api-by-any-city.p.rapidapi.com/weather/${resp2.city}, options`);
//             if (!response.ok) {
//                 throw new Error(`${response.status}: ${response.statusText}`);
//             }
//             return await res3.json();
//         } catch (err) {
//             if (err instanceof Error) {
//                 return thunkApi.rejectWithValue(err.message);
//             }
//         }

//     } catch (err) {
//         if (err instanceof Error) {
//             return thunkApi.rejectWithValue(err.message);
//         }
//     }

// } catch (err) {
//     if (err instanceof Error) {
//         return thunkApi.rejectWithValue(err.message);
//     }
// }