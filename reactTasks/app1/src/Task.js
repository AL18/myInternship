import React, { Component } from 'react';
import './App.css';


export default class Task extends Component {

    constructor() {
        super();
        this.state = {
            edit: false
        }
    }

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
                <div>
                    <input
                        type="checkbox"
                        onChange={this.props.changeStatus}
                        // defaultChecked={this.props.status}

                    />
                    <span className={this.props.task.status ? 'text notDone' : 'text'}>{this.props.task.name}</span>
                </div>
                <div>
                    <button onClick={this.edit} className='edit'><i className="far fa-edit" /></button>
                    <button onClick={this.remove} className='delete'><i className="far fa-trash-alt" /></button>
                </div>
            </div>
        );
    };

    rendEdit = () => {
        return (
            <div className='box'>
                <textarea ref='newTxt' defaultValue={this.props.task.name} />
                <button onClick={this.save} className='btn success'>Save</button>
            </div>
        );
    };

    render() {
        return this.state.edit ? this.rendEdit() : this.rendNorm();

    };

}

