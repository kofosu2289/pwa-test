// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiNCSspr-H3-ltHvCOWER6CpChYkzCqiw",
  authDomain: "recipeze-pwa.firebaseapp.com",
  databaseURL: "https://recipeze-pwa.firebaseio.com",
  projectId: "recipeze-pwa",
  storageBucket: "recipeze-pwa.appspot.com",
  messagingSenderId: "62512796439",
  appId: "1:62512796439:web:2c3cce3e3f4a20a349dd52",
  measurementId: "G-Q2843W6FCR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();