import React from 'react';
import PropTypes from 'prop-types';
// import 'purecss';
// import p from 'purecss';
import s from '../../css/main.css';

const Link = ({ active, onClick, children }) => (
  <button
    disabled={active}
    onClick={onClick}
    className="pure-u-1 pure-md-1-3"
    // className={
    //   `${p['pure-button']}
    //    ${p['pure-button-primary']}
    //    ${p['pure-u-1']}
    //    ${p['pure-u-md-1-3']}
    //    ${s['button-xlarge']}`}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
