import React, { Component } from 'react';
import Task from './Task'


export default class Field extends Component {

    constructor() {
        super();

        this.state = {
            tasks: [],
            edit: false,
            status: false,
            filter: 'all'
        }
    };

    addTask = (name) => {
        if(this.refs.newTask.value) {
            const arr = this.state.tasks.concat();

            arr.push({name: name, status: false});
            this.setState({tasks: arr})

            this.refs.newTask.value = null;
        } else alert('Empty field!')
    };

    deleteBlock = (i) => {
        let arr = this.state.tasks.concat()
        arr.splice(i, 1);
        this.setState({tasks: arr});
    };

    updateText = (text, i) => {
        let arr = this.state.tasks.concat();
        arr[i].name = text;
        this.setState({tasks: arr})
    };

    changeStatus = (i) => {
        this.setState(prevState => {
            const arr = prevState.tasks.concat();
            arr[i].status = !arr[i].status;
            return {tasks: arr}
        })
    };

    filterTasks = (currentItem) => {
        if (this.state.filter === 'done' && currentItem.status) return true;
        else if (this.state.filter === 'undone' && !currentItem.status) return true;
        else return this.state.filter === 'all';
    };

    eachTask = (item, i) => {
        return (
            <Task
                key={i}
                index={i}
                update={this.updateText}
                status={this.state.status}
                deleteItem={ () => this.deleteBlock(i) }
                changeStatus={ () => this.changeStatus(i) }
                task={item}
            />
        )
    };

    render(){

        const filterArr = this.state.tasks.filter(this.filterTasks)
         console.log(filterArr);

        return (
            <div className="field">

                <input
                    required
                    ref='newTask'
                    type="text"
                    placeholder = 'What to do?'
                />

                <button
                    onClick={ () => this.addTask(this.refs.newTask.value) }
                    className='btn new'
                >
                    Create task
                </button>

                <form>
                    <label><input
                        onClick={ () => (this.setState({filter: 'all'})) }
                        name='filter'
                        type="radio"
                        defaultChecked
                    />All</label>
                    <label><input
                        onClick={ () => (this.setState({filter: 'done'})) }
                        name='filter'
                        type="radio"
                    />Done</label>
                    <label><input
                        onClick={ () => (this.setState({filter: 'undone'})) }
                        name='filter'
                        type="radio"
                    />In progress</label>
                </form>

                {
                    filterArr.map(this.eachTask)
                }

            </div>
        );
    }
}

