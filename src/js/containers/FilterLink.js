import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Link from '../components/Link';
// import { setVisibilityFilter } from '../actions';

// const mapStateToProps = (state, ownProps) => ({
//   active: state.filter === ownProps.filter,
// });
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Link);

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{ textDecoration: 'none', color: 'pink' }}
  >
    {children}
  </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
