import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionsData} from 'react-firebase-hooks/firestore';

const appConfig = {
  apiKey: "AIzaSyAV29mWzRl_vrJWMtM5-rybW41bh-Ow2NQ",
  authDomain: "mw-toastmasters.firebaseapp.com",
  projectId: "mw-toastmasters",
  storageBucket: "mw-toastmasters.appspot.com",
  messagingSenderId: "250259988930",
  appId: "1:250259988930:web:208e4fe51dc47ba663365b",
};
const app = initializeApp(appConfig);
export const auth = getAuth();
export default app;
