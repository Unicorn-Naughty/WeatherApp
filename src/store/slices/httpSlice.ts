import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const httpSlice = createSlice({
    name: 'http',
    initialState: '',
    reducers: {
        setHttp: (_, action: PayloadAction<string>) => {
            return action.payload
        }
    },
})

export const { setHttp } = httpSlice.actions
export default httpSlice
