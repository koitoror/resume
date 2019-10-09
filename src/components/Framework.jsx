import React from 'react';
import PropTypes from 'prop-types';

const Framework = ({ frameworks }) => {
  const list = frameworks.map(framework => (<li key={framework}><span>{framework}</span></li>));
  return (
    <ul>
      {list}
    </ul>
  );
};

Framework.propTypes = {
  frameworks: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Framework;
