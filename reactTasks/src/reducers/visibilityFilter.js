import {ALL, SET_VISIBILITY_FILTER} from "../actions/initialActions";


const visibilityFilter = (state = ALL, action) => {
    switch (action.type) {
Пиши
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
};

export default visibilityFilter