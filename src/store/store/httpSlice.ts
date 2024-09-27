import { createSlice } from "@reduxjs/toolkit";

const httpSlice = createSlice({
    name: 'http',
    initialState: 'https://jsonplaceholder.typicode.com/todos',
    reducers: {
        setHttp: (state, action) => {
            console.log(state);
            return action.payload
        }
    }
})

export const { setHttp } = httpSlice.actions
export default httpSlice