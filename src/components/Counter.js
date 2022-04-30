import { counterActions } from "../store/counter";
import classes from './Counter.module.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector( (state) => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        // dispatch({type:'toggle'})
        dispatch(counterActions.toggle(false));
    };
    const incrementHandler = () => {
        // dispatch({type: 'increment'});
        dispatch(counterActions.increment(1));
    }
    const increaseHandler = () => {
        // dispatch({type:'increase', amount: 5});
        dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
    }

    const decrementHandler = () => {
        // dispatch({type:'decrement'});
        dispatch(counterActions.decrement(1));
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}> Increment </button>
                <button onClick={increaseHandler}> Increment by 5 </button>
                <button onClick={decrementHandler}> Decrement </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;