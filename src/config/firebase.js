import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBmEKmKa4d2m_aqya8nH_45FkdQqb7-KQI',
  authDomain: 'https://koitoror-70cbe.web.app/',
  databaseURL: 'https://personal-resume-f81c4.firebaseio.com',
  projectId: 'personal-resume-f81c4',
  storageBucket: 'personal-resume-f81c4.appspot.com',
  messagingSenderId: '1005730961132',
  appId: '1:1005730961132:web:8cae6f664ed66144'
};

firebase.initializeApp(config);

export default firebase;
