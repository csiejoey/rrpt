import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClick }) => (
  // eslint-disable-next-line
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    <p>{text}</p>
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
