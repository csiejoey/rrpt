import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed === true);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => todo.completed === false);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
