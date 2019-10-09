/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const CheckBox = props => (
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">
      {props.title}
    </label>
    <div className="checkbox">
      {props.options.map(option => (
        <label key={option} className="checkbox-inline">
          <input
            id={props.name}
            name={props.name}
            onChange={props.handleChange}
            value={option}
            checked={props.selectedOptions.indexOf(option) > -1}
            type="checkbox"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default CheckBox;
