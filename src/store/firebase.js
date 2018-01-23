import * as firebase from 'firebase';

let database;

// Initialize Firebase
export const init = () => {
  const config = {
    apiKey: 'AIzaSyAJv1IE0izfrobm9qenTgYSj60YsDpilec',
    authDomain: 'karikarios-6d711.firebaseapp.com',
    databaseURL: 'https://karikarios-6d711.firebaseio.com',
    projectId: 'karikarios-6d711',
    storageBucket: 'karikarios-6d711.appspot.com',
    messagingSenderId: '47869398909',
  };
  firebase.initializeApp(config);
  database = firebase.database();
};
