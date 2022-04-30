import {createSlice} from "@reduxjs/toolkit";


const initialCounterState = {
    counter: 0,
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',   //createSlice need a name, any name you want to put
    initialState: initialCounterState,   //CreateSlice need ann initialState, point to initial object
    reducers:{      //Then reducers object
        increment(state){
            state.counter++
            // /* we can mutate value here. because when we use toolkit, it will automatically clone
            // the existing state, create a new state object, keep all the state
            // that we are ont editing, and override the state which are
            // editting in an immutable way.
            // So, even it not look like immutable code here, but tool help.
            // so we do nnot need to manunal rewrite all code.
            // return{
            //    showCounter:state.showCounter,
            //    counter : state.counter + 1,
            // }
            //  */
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action){
            state.counter += action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;