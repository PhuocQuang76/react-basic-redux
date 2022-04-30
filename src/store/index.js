import {createStore} from 'redux';
import {configureStore, createSlice} from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         // Never write like this, always return a brand new object with full state object.
//         // if you missed one, that state value will be lost.
//         // state.counter ++;  ->
//         return{
//             showCounter:state.showCounter,
//             counter : state.counter + 1,
//         }
//     }
//     if(action.type === 'increase'){
//         return{
//             showCounter:state.showCounter,
//             counter : state.counter + action.amount,
//         }
//     }
//     if(action.type === 'decrement'){
//         return{
//             showCounter:state.showCounter,
//             counter : state.counter - 1,
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }
//     return state;
//
// };
// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);
// because in big project will have a lot od counterSlice
// So best way to combine all counterSlice
const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth: authReducer,
    }
})


// store.subscribe( ()=> {
//     const value1 = store.getState();
//     console.log(value1);
// })
//connect this store to project

//way to export all slice actions
//export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;