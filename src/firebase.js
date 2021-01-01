import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyBzPis2c3Joctmu5bJ8xy_1_mwIhkOjE1Q",
    authDomain: "fir-48b8c.firebaseapp.com",
    projectId: "fir-48b8c",
    storageBucket: "fir-48b8c.appspot.com",
    messagingSenderId: "689470342733",
    appId: "1:689470342733:web:3dd252aa7230df058fbe04",
    measurementId: "G-M4PP0BBXL1"
  }; 
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: "AIzaSyCiaxJQ3Wr3xFyMHtdL9CgFt9JCBhyXcgI",
  authDomain: "fir-f6c00.firebaseapp.com",
  projectId: "fir-f6c00",
  storageBucket: "fir-f6c00.appspot.com",
  messagingSenderId: "183075938289",
  appId: "1:183075938289:web:ba5fd9d138568e1dd7ee50",
  measurementId: "G-JLQGK3YD3G"
}; */
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  export{db,auth};