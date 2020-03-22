import { ADD, DEL } from '../ActionTypes';

let reducer = (state = { todos: [] }, action) => {
    if (action === undefined) {
        return state;
    }
    switch (action.type) {
        case ADD: return { todos: [...state.todos, action.text] }
        case DEL: state.todos.splice(action.index, 1);
            return { todos:[...state.todos] };
        default: return state;
    }
}

export default reducer;
