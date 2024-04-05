import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 23,
    },
    reducers: {
        increment : (state) => {state.count += 1}
    }
})

export const {increment} = counterSlice.actions

export const counterReducer = counterSlice.reducer

export default counterSlice
