import React from 'react';
import PropTypes from 'prop-types';

import TechnicalSkills from '../components/TechnicalSkills';
import SoftSkills from '../components/SoftSkills';

const Skills = ({ technicalSkills, softSkills }) => (
  <section className="mh-skills" id="mh-skills">
    <div className="home-v-img">
      <div className="container">
        <div className="row section-separator">
          <div className="section-title text-center col-sm-12">
            <h2>Skills</h2>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-skills-inner">
              <div
                className="mh-professional-skill wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <h3>Technical Skills</h3>
                <TechnicalSkills skills={technicalSkills} />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div
              className="mh-professional-skills wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <h3>Soft Skills</h3>
              <SoftSkills skills={softSkills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Skills.propTypes = {
  technicalSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
  softSkills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Skills;
