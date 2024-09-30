import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
    entities: object[],
    loading: boolean,
    lastUpdate: number | null
}
const initialState: TInitialState = { entities: [], loading: false, lastUpdate: null }


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather', async (url: string, thunkApi) => {
        if (url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                return await response.json();
            } catch (err) {
                if (err instanceof Error) {
                    return thunkApi.rejectWithValue(err.message);
                }
            }
        } else {
            try {
                const response = await fetch(`https://api.ipify.org?format=json`);
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const res = await response.json().then(data => data.ip)
                try {
                    const resp2 = await (await fetch(`http://ip-api.com/json/${res}`)).json().then(res => res)
                    console.log(resp2);

                    try {
                        const res3 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${resp2.city},${resp2.countryCode}&appid=92a343d2995882d9b1e03daab3b81510
`);
                        console.log(resp2);
                        if (!res3.ok) {
                            throw new Error(`${res3.status}: ${res3.statusText}`);
                        }
                        return await res3.json();
                    } catch (err) {
                        if (err instanceof Error) {
                            return thunkApi.rejectWithValue(err.message);
                        }
                    }

                } catch (err) {
                    if (err instanceof Error) {
                        return thunkApi.rejectWithValue(err.message);
                    }
                }

            } catch (err) {
                if (err instanceof Error) {
                    return thunkApi.rejectWithValue(err.message);
                }
            }
        }


    }
)
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.entities = action.payload;
            state.lastUpdate = Math.floor((Date.now() / (1000 * 60)) % 60)

        })
        builder.addCase(fetchWeather.rejected, (state) => {
            state.loading = false
            console.log("oops");
        })
    }
});

export default weatherSlice