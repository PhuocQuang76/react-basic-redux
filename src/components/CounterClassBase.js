import React, {Component} from "react";
import classes from "./Counter.module.css";
import {connect} from "react-redux";
import { counterActions } from "../store/counter";

class CounterClassBase extends Component{
    incrementHandler(){
        this.props.increment();
    }
    decrementHandler(){
        this.props.decrement();
    }
    toggleCounterHandler(){
        this.props.toggle();
    }
    increaseHandler(){
        this.props.increase();
    }

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                {this.props.show && <div className={classes.value}>{this.props.counter}</div>}
                <div>
                    <button onClick={this.incrementHandler.bind(this)}> Increment </button>
                    <button onClick={this.increaseHandler.bind(this)}> Increment by 5 </button>
                    <button onClick={this.decrementHandler.bind(this)}> Decrement </button>
                </div>
                <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return{
        counter:state.counter ,
        show: state.showCounter,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // increment: ()=> dispatch ( {type:'increment'} ),
        // decrement: ()=> dispatch ( {type:'decrement'} ),
        // increase: () => dispatch ( {type:'increase' , amount:5} ),
        // toggle: () => dispatch ( { type: 'toggle'}),
        increment: ()=> dispatch ( counterActions.increment(1) ),
        decrement: ()=> dispatch ( counterActions.decrement(1) ),
        increase: () => dispatch ( counterActions.increase(5) ),
        toggle: () => dispatch ( counterActions.toggle(false)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterClassBase)