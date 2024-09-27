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


  // fetch('https://api.ipify.org?format=json')
  // .then(res => res.json())
  // .then(data => console.log(data.ip));
  // fetch('http://ip-api.com/json/92.126.118.207')
  // .then(res => res.json())
  // .then(res => console.log(res));