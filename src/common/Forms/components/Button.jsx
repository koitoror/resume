/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Button = props => (
  <button
    type="button"
    style={props.style}
    className={
      props.type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'
    }
    onClick={props.action}
  >
    {props.title}
  </button>
);

export default Button;
