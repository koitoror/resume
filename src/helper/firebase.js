import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/functions';

const config = {
  apiKey: 'AIzaSyBP4WgLY_e0mmbSIjC0TRJvgOtkPx-OI9A',
  authDomain: 'koitoror-70cbe.firebaseapp.com',
  databaseURL: 'https://koitoror-70cbe.firebaseio.com',
  projectId: 'koitoror-70cbe',
  storageBucket: '',
  messagingSenderId: '399163668226',
  appId: '1:399163668226:web:c3547c8cdb8cb68279741b',
  measurementId: 'G-M75QW6EBCR'
};

firebase.initializeApp(config);

export default firebase;
