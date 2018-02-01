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
        let arr = this.state.tasks
        arr.push(text)
        this.setState({tasks: arr})
    };

    deleteBlock = (i) => {
        let arr = this.state.tasks
        arr.splice(i, 1);
        this.setState({tasks: arr});
    };

    updateText = (text, i) => {
      let arr = this.state.tasks;
      arr[i] = text;
      this.setState({tasks: arr})
    };

    eachTask = (item, i) => {
        return (<Task key={i} index={i} update={this.updateText} deleteItem={this.deleteBlock}>
                    {item}
                </Task>)
    };

    render(){
        return (
            <div className="field">
                <button onClick={this.add.bind(null, 'Simple task')} className='btn new'>New task</button>
                {this.state.tasks.map(this.eachTask)}
            </div>
        );
    }
}

export default Field