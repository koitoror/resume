import React from 'react';
import PropTypes from 'prop-types';

import Stack from '../../components/Stack';

const Service = ({ stacks }) => (
  <section className="mh-service">
    <div className="container">
      <div className="row section-separator">
        <div
          className="col-sm-12 text-center section-title wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
        >
          <h2>What I do</h2>
        </div>
        <Stack stacks={stacks} />
      </div>
    </div>
  </section>
);

Service.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Service;
