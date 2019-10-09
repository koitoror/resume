import React from 'react';
import PropTypes from 'prop-types';

import SocialIcons from '../components/SocialIcons';
import ContactForm from '../components/ContactForm';

const Footer = ({ userInfo }) => (
  <footer className="mh-footer mh-footer-3" id="mh-contact">
    <div className="container-fluid">
      <div className="row section-separator">
        <div
          className="col-sm-12 section-title wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
        >
          <h3>Say Hello</h3>
        </div>
        <div className="map-image image-bg col-sm-12">
          <div className="container mt-30">
            <div className="row">
              <div className="col-sm-12 col-md-6 mh-footer-address">
                <div className="col-sm-12 xs-no-padding">
                  <div
                    className="mh-address-footer-item dark-bg shadow-1 media wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <div className="each-icon">
                      <i className="fa fa-location-arrow" />
                    </div>
                    <div className="each-info media-body">
                      <h4>Address</h4>
                      <address>
                        {userInfo.address}
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 xs-no-padding">
                  <div
                    className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <div className="each-icon">
                      <i className="fa fa-envelope-o" />
                    </div>
                    <div className="each-info media-body">
                      <h4>Email</h4>
                      <a href={`mailto:${userInfo.email}`}>
                        {userInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 xs-no-padding">
                  <div
                    className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <div className="each-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="each-info media-body">
                      <h4>Phone</h4>
                      <a href={`callto:${userInfo.email}`}>{userInfo.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
              <div
                className="col-sm-12 mh-copyright wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="text-left text-xs-center">
                      <p>
                        Made with
                        {' '}
                        <img className="footer-icons reactjs" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/64px-React-icon.svg.png" alt="" />
                        <img className="footer-icons firebase" src="https://img.icons8.com/color/48/000000/firebase.png" alt="" />
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <SocialIcons className="social-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Footer;
