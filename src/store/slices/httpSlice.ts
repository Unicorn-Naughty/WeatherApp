import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


type TIpFetch = {
    lat: number,
    lon: number,
    city: string,
    countryCode: string
}

export const fetchIP = createAsyncThunk(
    'http/fetchIP', async (url: string, thunkApi) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            const res = await response.json().then(data => data.ip)
            try {
                const resp2 = await fetch(`http://ip-api.com/json/${res}`)
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }

                return await resp2.json()
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
)
const httpSlice = createSlice({
    name: 'http',
    initialState: 'https://jsonplaceholder.typicode.com/todos',
    reducers: {
        setHttp: (state, action) => {
            console.log(state);
            return action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIP.fulfilled, (state, action) => {
            const { lat, lon, city, countryCode }: TIpFetch = action.payload
            console.log(lat, lon, city, countryCode)
            const currentUrl = `https://jsonplaceholder.typicode.com/posts`
            return state = currentUrl

        })
        builder.addCase(fetchIP.rejected, () => {
            console.log("oops");
        })
    },
})

export const { setHttp } = httpSlice.actions
export default httpSlice


// fetch('https://api.ipify.org?format=json')
// .then(res => res.json())
// .then(data => console.log(data.ip));
// fetch('http://ip-api.com/json/92.126.118.207')
// .then(res => res.json())
// .then(res => console.log(res));