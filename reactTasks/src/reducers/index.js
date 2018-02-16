import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import isFetching from './isFetching'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    isFetching
});

export default todoApp