import { combineReducers } from 'redux';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false,
      });
    case 'TOGGLE_TODO':
      return state.map(todo =>
        ((todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo));
    default:
      return state;
  }
};

const visibilityReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: visibilityReducer,
});

export default rootReducer;
