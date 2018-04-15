import React from 'react';
// import p from 'purecss';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const Footer = () => (
  <div
    // className={p['pure-g']}
    role="group"
  >
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
  </div>
);

export default Footer;
