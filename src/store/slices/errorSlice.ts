import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: "error",
    initialState: {
        text: ""
    },
    reducers: {
        setError: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { setError } = errorSlice.actions
