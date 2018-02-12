import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import {deleteTodo, editTodo, saveTodo, toggleTodo} from "./actions";


class Task extends Component {

    rendNorm = () => {
        return (
            <div className='box'>
                <div>
                    <input
                        type="checkbox"
                        onChange={ () => this.props.dispatch(toggleTodo(this.props.index)) }
                        checked={this.props.done}
                    />
                    <span className={this.props.done ? 'text notDone' : 'text'}>{this.props.text}</span>
                </div>
                <div>
                    <button
                        onClick={ () => this.props.dispatch(editTodo(this.props.index)) }
                        className='edit'>
                        <i className="far fa-edit" />
                    </button>
                    <button onClick={ () => this.props.dispatch(deleteTodo(this.props.index)) }
                            className='delete'>
                        <i className="far fa-trash-alt" />
                    </button>
                </div>
            </div>
        );
    };

    rendEdit = () => {
        console.log('g');
        return (
            <div className='box'>
                <textarea ref='newTxt' defaultValue={this.props.text} />
                <button onClick={ () => this.props.dispatch(saveTodo(this.props.index, this.refs.newTxt.value)) }
                        className='btn success'>
                    Save
                </button>
            </div>
        );
    };

    render() {

        return this.props.edit ? this.rendEdit() : this.rendNorm();

    };

}

Task = connect()(Task);
export default Task
