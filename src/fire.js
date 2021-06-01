 import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyB5Ovzt9W249DEOSwvcaTeYX8Cp4qAVTzU",
    authDomain: "fir-authentication-129f3.firebaseapp.com",
    projectId: "fir-authentication-129f3",
    storageBucket: "fir-authentication-129f3.appspot.com",
    messagingSenderId: "119310778354",
    appId: "1:119310778354:web:c585646c1e4fac9170356b"
  };
 
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;