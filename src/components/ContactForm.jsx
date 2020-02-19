import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../helper/firebase';
// import { sendMail } from '../components';
// eslint-disable-next-line prefer-destructuring
const sendMail = require('../components').sendMail;


class ContactForm extends React.Component {
  initialState = {
    name: '',
    email: '',
    message: ''
  }

  state = { ...this.initialState }

  handleSubmit = (e) => {
    e.preventDefault();

    // const sendMail = firebase.functions().httpsCallable('sendMail');
    const contactUs = firebase.database().ref().child('contactUs');
    contactUs.push(this.state).then(() => {
      this.setState({ ...this.initialState });
      toast.success('Message Sent');
      // eslint-disable-next-line no-console
      // sendMail().then(res => console.log(res.data));
      sendMail()
        // eslint-disable-next-line no-console
        .then(res => console.log(`Message sent: ${res.message}`))
        // eslint-disable-next-line no-console
        .catch(error => console.log(error));
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div
        className="col-sm-12 col-md-6 wow fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.2s"
      >
        <form
          id="contactForm"
          className="single-form quate-form wow fadeInUp"
          data-toggle="validator"
          onSubmit={this.handleSubmit}
        >
          <div id="msgSubmit" className="h3 text-center hidden" />
          <div className="row">
            <div className="col-sm-12">
              <input
                name="name"
                className="contact-name form-control"
                id="name"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-12">
              <input
                name="email"
                className="contact-subject form-control"
                id="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-12">
              <textarea
                className="contact-message"
                id="message"
                name="message"
                rows="6"
                placeholder="Message"
                required
                value={message}
                onChange={this.handleChange}
              />
            </div>

            <div className="btn-form col-sm-12">
              <button
                type="submit"
                className="btn btn-fill btn-block"
                id="form-submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
