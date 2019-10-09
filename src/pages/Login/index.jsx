import React from 'react';

import Firebase from '../../helper/firebase';

import './Login.css';

class Login extends React.Component {
  handleClick = (e) => {
    e.preventDefault();

    const firebase = new Firebase();

    firebase.database.on('value', (snap) => {
      console.log(snap.val());
    });
  }

  render() {
    return (
      <div className="container login">
        <button
          className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
          type="submit"
          onClick={this.handleClick}
        >
          Sign in with Google&nbsp;
          <i className="fa fa-google" />
        </button>
      </div>
    );
  }
}

export default Login;
