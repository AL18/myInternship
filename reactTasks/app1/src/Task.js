import React, { Component } from 'react';
import './App.css';

class Task extends Component {
    constructor() {
        super();
        this.state = { edit: false };
    };

    edit = () => {
        this.setState( {edit: true} )
    };

    remove = () => {
        this.props.deleteItem(this.props.index)
    };

    save = () => {
        this.props.update(this.refs.newTxt.value, this.props.index)
        this.setState( {edit: false} )
    };

    rendNorm = () => {
        return (
            <div className='box'>
                <div className='text'>{this.props.children}</div>
                <button onClick={this.edit} className='btn light'>Edit</button>
                <button onClick={this.remove} className='btn red'>Delete</button>
            </div>
        );
    };

    rendEdit = () => {
        return (
            <div className='box'>
                <textarea ref='newTxt' defaultValue={this.props.children}/>
                <button onClick={this.save} className='btn success'>Save</button>
            </div>
        );
    };

    render() {
        return this.state.edit ? this.rendEdit() : this.rendNorm();

    };

}

export default Task;
