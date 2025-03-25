import { createSlice } from "@reduxjs/toolkit";

const initialCountState = { counter: 0, toggle: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload
        },
        toggleCounter(state) {
            state.toggle = !state.toggle;
        },
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
