import {
    ADD_TODO,
    EDIT_TODO,
    SAVE_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
} from '../actions/initialActions'

const todos = (todos = [], action) => {
    let arr;
    switch(action.type) {
        case ADD_TODO:
            return [
                ...todos,
                {
                    text: action.text,
                    done: false,
                    edit: false
                }
            ];

        case EDIT_TODO:
            arr = todos.concat();
            if (arr[action.index].done) {
                alert('You can not edit done tasks')
                return arr;
            }
            else {
                arr[action.index].edit = true;
                return arr;
            }

        case TOGGLE_TODO:
            arr = todos.concat();
            arr[action.index].done = !arr[action.index].done;
            return arr;

        case SAVE_TODO:
            arr = todos.concat();
            arr[action.index].text = action.text;
            arr[action.index].edit = false;
            return arr;

        case DELETE_TODO:
            return todos.filter( (todo, index) => index !== action.index);

        default: return todos;
    }
};

export default todos