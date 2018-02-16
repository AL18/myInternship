
import {
    UPLOAD_TODOS_REQUEST,
    UPLOAD_TODOS_NOTFETCHING,
} from "../actions/initialActions";

const todosRequest = (state = false, action) => {
    switch (action.type) {
        case UPLOAD_TODOS_REQUEST:
            return true;

        case UPLOAD_TODOS_NOTFETCHING:
            return false;



        default: return state
    }
};

export default todosRequest