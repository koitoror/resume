import React from 'react';

const Stack = ({ stacks }) => {
  const icons = ['fa-bullseye', 'fa-code', 'fa-object-ungroup'];
  const colors = ['purple-color', 'iron-color', 'sky-color'];

  return stacks.map((stack) => {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className="col-sm-4" key={stack.id}>
        <div
          className="mh-service-item shadow-1 dark-bg wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.3s"
        >
          <i className={`fa ${icon} ${color}`} />
          <h3>{stack.title}</h3>
          <p>{stack.description}</p>
        </div>
      </div>
    );
  });
};

export default Stack;
