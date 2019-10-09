import React from 'react';
import PropTypes from 'prop-types';

const SoftSkills = ({ skills }) => {
  const items = skills.map(skill => (
    <li key={skill + Math.random()}>
      <div
        className="mh-progress mh-progress-circle"
        data-progress={skill.level}
      />
      <div className="pr-skill-name">{skill.attribute}</div>
    </li>
  ));

  return (
    <ul className="mh-professional-progress">
      {items}
    </ul>
  );
};

SoftSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SoftSkills;
