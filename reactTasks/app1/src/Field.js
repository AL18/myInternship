import React, { Component } from 'react';
import Task from './Task'


class Field extends Component {

    constructor() {
        super();

        this.state = {
            tasks: []
        }
    };

    add = (text) => {
        if(this.refs.newTask.value) {
            const arr = this.state.tasks.concat();
            arr.push(text);
            this.setState({tasks: arr})
            this.refs.newTask.value = null;
            console.log(this.state);
        }
        else alert('Empty field!')
    };

    deleteBlock = (i) => {
        let arr = this.state.tasks.concat()
        arr.splice(i, 1);
        this.setState({tasks: arr});
    };

    updateText = (text, i) => {
        let arr = this.state.tasks.concat();
        arr[i] = text;
        this.setState({tasks: arr})
    };

    eachTask = (item, i) => {
        return (
            <Task
                key={i}
                index={i}
                update={this.updateText}
                deleteItem={this.deleteBlock}
            >
                {item}
            </Task>)
    };

    render(){
        return (
            <div className="field">

                <input
                    required
                    ref='newTask'
                    type="text"
                    placeholder = 'What to do?'
                />
                <button
                    onClick={ () => this.add(this.refs.newTask.value) }
                    className='btn new'

                >
                    Create task
                </button>

                {this.state.tasks.map(this.eachTask)}
            </div>
        );
    }
}

export default Field