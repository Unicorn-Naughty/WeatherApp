import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TEntities = {
    name: string
    main: {
        temp: number,
        temp_max: number,
        temp_min: number,
        feels_like: number,
        humidity: number,
    }
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        sunrise: number,
        sunset: number
    }
    weather: [{
        description: string,
        icon: string
        id: number,
        main: string
    }
    ],
    wind: {
        deg: number,
        speed: number
    }
    coord: {
        lon: number,
        lat: number
    }
} 

type TEntitiesInitial = Partial<TEntities>

type TInitialState = {
    entities: TEntitiesInitial,
    loading: boolean,
    lastUpdate: number | null
}
const initialState: TInitialState = { entities: {}, loading: false, lastUpdate: null }


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather', async (url: string) => {
        if (url) {
            try {
                const response = await fetch(url);
                if (response.status != 200) {
                    throw new Error(`По вашему запросу ничего не найдено. Code ${response.status}`);
                }
                return await response.json();
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err);
                    return "";
                }
            }
        } else {
            try {
                const response = await fetch(`https://api.ipify.org?format=json`);
                if (response.status !== 200) {
                    throw new Error(` ${response.status}: ${response.statusText}`);
                }
                const res = await response.json().then(data => data.ip)
                try {
                    const resp2 = await (await fetch(`http://ip-api.com/json/${res}`)).json().then(res => res)
                    try {
                        const res3 = await fetch(
                            `http://api.openweathermap.org/data/2.5/weather?q=${resp2.city},${resp2.countryCode}&APPID=92a343d2995882d9b1e03daab3b81510`
                        );
                        if (res3.status !== 200) {
                            throw new Error(`${res3.status}: ${res3.statusText}`);
                        }
                        return await res3.json();
                    } catch (err) {
                        if (err instanceof Error) {
                            console.log(`${err}. Checkout appID`);
                            return ""
                        }
                    }

                } catch (err) {
                    if (err instanceof Error) {
                        console.log(`${err}. checkout resp2 fetch`);
                        return "";
                    }
                }

            } catch (err) {
                if (err instanceof Error) {
                    console.log(`${err}, checkout getting IP from response`);
                    return "";
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
        builder.addCase(fetchWeather.fulfilled, (state, action: PayloadAction<TEntities>) => {
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