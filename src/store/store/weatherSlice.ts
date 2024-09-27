import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
    entities: object[],
    loading: boolean,
    lastUpdate: number | null
}
const initialState: TInitialState = { entities: [], loading: false, lastUpdate: null }


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather', async (url: string, thunkApi) => {
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