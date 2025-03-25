import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
    reducer: {
        counter: counterReduce,
        auth: authReducer
    }
});

export default store;

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "increment":
//             return { ...state, counter: state.counter + 1 };
//         case "decrement":
//             return { ...state, counter: state.counter - 1 };
//         case "increase":
//             return { ...state, counter: state.counter + action.amount };
//         case "toggle":
//             return { ...state, toggle: !state.toggle };
//         default:
//             return state;
//     }
// }

// const store = createStore(counterReducer);

