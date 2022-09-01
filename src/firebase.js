// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCpeSvxGm3TPvKNq7sruKpRvDGAIdZ4H3w",
    authDomain: "shop-it-56111.firebaseapp.com",
    projectId: "shop-it-56111",
    storageBucket: "shop-it-56111.appspot.com",
    messagingSenderId: "535201073368",
    appId: "1:535201073368:web:bd17fa60360f80a877efad",
    measurementId: "G-LT7RVXHLK5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export{db , auth};
