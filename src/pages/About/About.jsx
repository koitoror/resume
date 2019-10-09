import React from 'react';
import PropTypes from 'prop-types';

import Framework from '../../components/Framework';

const About = ({ userInfo, frameworks }) => (
  <section className="mh-about" id="mh-about">
    <div className="container">
      <div className="row section-separator">
        <div className="col-sm-12 col-md-6">
          <div
            className="mh-about-img shadow-2 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.4s"
          >
            <img src="assets/images/ab-img.png" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="mh-about-inner">
            <h2
              className="wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.1s"
            >
              About Me
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              {userInfo.bio}
            </p>
            <div
              className="mh-about-tag wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <Framework frameworks={frameworks} />
            </div>
            <a
              href="https://resume.github.io/?koitoror"
              className="btn btn-fill wow fadeInUp"
              rel="noopener noreferrer"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
              target="_blank"
            >
              Github Resume
              {' '}
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

About.propTypes = {
  frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired
};

export default About;
