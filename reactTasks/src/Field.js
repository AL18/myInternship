import React, { Component } from 'react';
import Task from './Task'
import {addTodo} from './actions/index'
import { connect } from 'react-redux'
import {setVisibilityFilter, uploadTodos} from "./actions";
import {ALL, DONE, UNDONE} from "./actions/initialActions";

const url = 'http://www.json-generator.com/api/json/get/cpTxhFtFWq?indent=2';

class Field extends Component {

    getTodosFromServer

    getVisibleTodos = (todos, filter) => {
        return todos.map((cur) => {

            if (filter === ALL && cur) return cur;

            else if (filter === DONE && cur.done) return cur;

            else if (filter === UNDONE && !cur.done) return cur;

            else return null
        })
    };

    render(){

        if(this.props.todos.length < 1) {
            fetch(url)
                .then( (response) => {
                    return response.json();
                })
                .then( (arr) => {
                    console.log(...arr);
                    this.props.dispatch(uploadTodos(arr))
                });
        }


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
                        return (item) ?
                            (
                                <Task
                                    key={i}
                                    index={i}
                                    text={item.text}
                                    edit={item.edit}
                                    done={item.done}
                                />
                            )
                            : null;
                    })
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

