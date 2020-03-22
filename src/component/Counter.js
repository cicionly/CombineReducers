import React from 'react';
import store from './Store';
import { INCREASE, DECREASE } from './ActionTypes';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: store.getState().Counter.number
        }
    }

    componentWillMount() {
        this.unsub = store.subscribe(() => {
            this.setState({ number: store.getState().Counter.number })
        })
    }

    componentWillUnmount() {
        this.unsub();
    }

    render() {
        return <div className="container">
            <button style={{marginRight:"5px"}} className="btn btn-primary btn-xs" onClick={()=>{store.dispatch({type:INCREASE,amount:2})}}>+</button>
            {this.state.number}
            <button style={{marginLeft:"5px"}} className="btn btn-primary btn-xs" onClick={()=>{store.dispatch({type:DECREASE,amount:2})}}>-</button>
        </div>
    }
}