import React from 'react';
import store from './Store';
import { ADD, DEL } from './ActionTypes';

export default class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: store.getState().Todo.todos
        }
    }

    componentWillMount() {
        this.unSub = store.subscribe(() => {
            this.setState({ todos: store.getState().Todo.todos });
        })
    }

    componentWillUnmount() {
        this.unSub();
    }

    handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value.length > 0) {
            store.dispatch({ type: ADD, text: event.target.value });
            event.target.value = '';
        }
    }

    handleClick = (index) =>{
        store.dispatch({type:DEL,index});
    }

    render() {
        return <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input type="text" className="form-control" onKeyDown={this.handleKeyDown} />
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.todos.map((todo, index) => {
                            return <li key={index} className="list-group-item">{todo}
                                <button className="btn btn-danger btn-xs pull-right" onClick={()=>{this.handleClick(index)}}>X</button></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    }
}