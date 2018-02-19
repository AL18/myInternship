import * as types from '../actions/initialActions'


export const addTodo = (text) => ({
    type: types.ADD_TODO,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = (index) => ({
    type: types.TOGGLE_TODO,
    index
});

export const editTodo = (index) => ({
    type: types.EDIT_TODO,
    index
});

export const saveTodo = (index, text) => ({
    type: types.SAVE_TODO,
    index,
    text
});

export const deleteTodo = (index) => ({
    type: types.DELETE_TODO,
    index
});

export const uploadTodos = (url) => {
    return dispatch => {
        dispatch({type: types.UPLOAD_TODOS_REQUEST});

        fetch(url)
            .then(res => res.json())
            .then((response) => {
                dispatch({type: types.UPLOAD_TODOS_SUCCESS, response});
                dispatch({type: types.UPLOAD_TODOS_NOTFETCHING})
            })
            .catch((e = 'error') => {
                dispatch({type: types.UPLOAD_TODOS_FAILURE, error: e});
                dispatch({type: types.UPLOAD_TODOS_NOTFETCHING})
            })
    }
};



