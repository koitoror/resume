import React from 'react';
import PropTypes from 'prop-types';

import SocialIcons from '../components/SocialIcons';

const Home = ({ userInfo }) => (
  <section className="mh-home image-bg home-2-img" id="mh-home">
    <div className="img-foverlay img-color-overlay">
      <div className="container">
        <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
          <div className="col-sm-6">
            <div className="mh-header-info">
              <div
                className="mh-promo wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                <span>Hello I&#39;m</span>
              </div>

              <h2
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                {userInfo.name}
              </h2>
              <h4
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                {userInfo.title}
              </h4>

              <ul>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <i className="fa fa-envelope" />
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${userInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userInfo.email}
                  </a>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <i className="fa fa-phone" />
                  <a href="callto:">{userInfo.phone}</a>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.6s"
                >
                  <i className="fa fa-map-marker" />
                  <address>
                    {userInfo.address}
                  </address>
                </li>
              </ul>

              <SocialIcons
                className="social-icon wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.7s"
              />

            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="hero-img wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.6s"
            >
              <div className="img-border">
                <img
                  src={userInfo.pic}
                  alt={userInfo.name}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Home.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Home;
