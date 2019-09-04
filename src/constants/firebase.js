import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCF_yM26d7ntHfIvgaCFMX35GXfb2YeNrk',
  authDomain: 'levieindustries.firebaseapp.com',
  databaseURL: 'https://levieindustries.firebaseio.com',
  projectId: 'levieindustries',
  storageBucket: 'levieindustries.appspot.com',
  messagingSenderId: '673836380053',
  appId: '1:673836380053:web:e60178141f52fe91',
};

firebase.initializeApp(config);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
