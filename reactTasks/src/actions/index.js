import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    DELETE_TODO,
    EDIT_TODO,
    SAVE_TODO,
    UPLOAD_TODOS
} from '../actions/initialActions'


export const addTodo = (text) => ({
    type: ADD_TODO,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index
});

export const editTodo = (index) => ({
    type: EDIT_TODO,
    index
});

export const saveTodo = (index, text) => ({
    type: SAVE_TODO,
    index,
    text
});

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index
});

export const uploadTodos = (newTodos) => ({
    type: UPLOAD_TODOS,
    newTodos
});


