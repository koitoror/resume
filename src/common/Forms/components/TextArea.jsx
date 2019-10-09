/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const TextArea = props => (
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      style={{ paddingTop: '0px', width: '100%', height: '187px' }}
    />
  </div>
);

export default TextArea;
