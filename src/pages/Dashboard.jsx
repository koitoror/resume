import React, { Component } from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import { ToastContainer } from 'react-toastify';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Home from './Home';
import About from './About/About';
import Service from './About/Service';
import Skills from './Skills';
import Timeline from './Timeline';
import Experience from './Experience';

import mockApi from '../mockApi';

class Dashboard extends Component {
  state = { ...mockApi }

  render() {
    const {
      frameworks, softSkills, stacks, stories, technicalSkills, userInfo
    } = this.state;
    return (
      <BreakpointProvider>
        <ToastContainer />
        <Navbar />
        <Home userInfo={userInfo} />
        <About userInfo={userInfo} frameworks={frameworks} />
        <Service stacks={stacks} />
        <Skills technicalSkills={technicalSkills} softSkills={softSkills} />
        <Breakpoint small down><Experience stories={stories} /></Breakpoint>
        <Breakpoint medium up><Timeline stories={stories} /></Breakpoint>
        {/* <Portfolio /> */}
        <Footer userInfo={userInfo} />
      </BreakpointProvider>
    );
  }
}

export default Dashboard;
