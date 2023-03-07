import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBO1mRXOGRkv0XJ-HtHUCtoelK3YlxcFR0",
  authDomain: "capycooking-site.firebaseapp.com",
  projectId: "capycooking-site",
  storageBucket: "capycooking-site.appspot.com",
  messagingSenderId: "479649108429",
  appId: "1:479649108429:web:c304550426ebf3caeb7484"
};

firebase.initializeApp(firebaseConfig);

const projectFirebase = firebase.firestore();

export { projectFirebase };