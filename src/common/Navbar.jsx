import React from 'react';

class Navbar extends React.Component {
  state = {
    active: ''
  };

  componentDidMount() {
    document.addEventListener('mousedown', () => {
      this.setState({ active: '' });
    });
  }

  openMenu = (e) => {
    e.preventDefault();
    this.toggleActive();
  }

  toggleActive = () => {
    this.setState(prevState => ({
      active: prevState.active === 'active' ? '' : 'active'
    }));
  }

  render() {
    const { active } = this.state;
    return (
      <header
        className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav"
      >
        <div className={`overlay ${active}`} />
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg mh-nav nav-btn">
              <button
                className={`navbar-toggler ${active}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.openMenu}
              >
                <span className="navbar-toggler-icon icon" />
              </button>

              <div className={`collapse navbar-collapse ${active}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto" id="mh-header">
                  <li className="nav-item active">
                    <a className="nav-link" href="#mh-home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mh-about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mh-skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mh-experience">
                      Experience
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#mh-portfolio">
                      Portfolio
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#mh-contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
