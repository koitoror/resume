import React, { Component } from 'react';

import Routes from './routes';

// const url = window.location.origin;
// const script = [
//   'https://www.googletagmanager.com/gtag/js?id=UA-136921529-1',
//   `${url}assets/plugins/js/jquery.min.js`,
//   `${url}assets/plugins/js/bootstrap.min.js`,
//   `${url}assets/plugins/js/wow.min.js`,
//   `${url}assets/plugins/js/circle-progress.js`,
//   `${url}assets/plugins/js/jquery.nav.js`,
//   `${url}assets/plugins/js/isotope.pkgd.js`,
//   `${url}assets/js/google-analytics.js`,
//   `${url}assets/js/custom-scripts.js`
// ];

class App extends Component {
  render() {
    return (<Routes />);
  }
}

export default App;
