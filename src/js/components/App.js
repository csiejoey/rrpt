import React from 'react';
import PropTypes from 'prop-types';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import '../../css/font.css';

const App = ({ match: { params } }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Footer />
  </div>
);

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
