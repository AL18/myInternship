import React, { Component } from 'react';
import Task from './Task'
import {addTodo} from './actions/index'
import { connect } from 'react-redux'
import {setVisibilityFilter} from "./actions";
import {ALL, DONE, UNDONE} from "./actions/initialActions";



class Field extends Component {

    getVisibleTodos = (todos, filter) => {
        console.log(todos, filter);
        if (filter === ALL)
            return todos;
        else if (filter === UNDONE)
            return todos.filter(todo => !todo.done);
        else if (filter === DONE)
            return todos.filter(todo => todo.done);
    };

    render(){

        const visibleTodos = this.getVisibleTodos(
            this.props.todos,
            this.props.visibilityFilter
        );

        return (
            <div className="field">

                <input
                    required
                    ref='newTask'
                    type="text"
                    placeholder = 'What to do?'
                />

                <button
                    onClick={ () => {
                        this.props.dispatch( addTodo(this.refs.newTask.value) );
                        this.refs.newTask.value = null;
                        }
                    }
                    className='btn new'
                >
                    Create task
                </button>

                <form>
                    <label>
                        <input
                            onClick={ () => (this.props.dispatch(setVisibilityFilter(ALL))) }
                            name='filter'
                            type="radio"
                            defaultChecked
                        />

                        All
                    </label>
                    <label>
                        <input
                            onClick={ () => (this.props.dispatch(setVisibilityFilter(DONE))) }
                            name='filter'
                            type="radio"
                        />
                        Done
                    </label>
                    <label>
                        <input
                            onClick={ () => (this.props.dispatch(setVisibilityFilter(UNDONE))) }
                            name='filter'
                            type="radio"
                        />
                        In progress
                    </label>
                </form>

                {
                    visibleTodos.map( (item, i) => {
                        return (
                            <Task
                                key={i}
                                index={i}
                                text={item.text}
                                edit={item.edit}
                                done={item.done}
                            />)}
                    )
                }

            </div>
        );
    }
}

const mapStateToProps = ({todos, visibilityFilter}) => ({
    todos,
    visibilityFilter
});

export default connect(mapStateToProps)(Field)

