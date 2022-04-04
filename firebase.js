// Import the functions you need from the SDKs you need
import  firebase  from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoMr5f6VfkYGe5IPG9P7eTSw1lZJBt7ZM",
  authDomain: "uber-eat-rn.firebaseapp.com",
  projectId: "uber-eat-rn",
  storageBucket: "uber-eat-rn.appspot.com",
  messagingSenderId: "75147241270",
  appId: "1:75147241270:web:1f14dabb663379163cf597"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// Initialize Firebase
export default firebase;