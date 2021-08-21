import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useLogin, useLoginUpdate } from "../components/LoginContext";


/* Firebase Configuration */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDERS_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// const [displayName, setDisplayName] = useState('');
// const [isLoggedIn, setIsLoggedIn] = useState('');
// const [error, setError] = useState(null);

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      
    }).catch((error) => {
      console.log("error: ", error);
    });
}

const e1 = function()  {
    let u = '', i = 0;
    while(i++ < 36) {
        var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i-1],r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);
        u += (c=='-'|| c=='4') ? c: v.toString(16)
    }
  return u.toString();
}



export const generateUserDocument = async (usercred, password) => {
  if (!usercred) return;
  const uid = e1();
  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = usercred;
    try {
      await userRef.set({
        displayName,
        email
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(usercred.uid);
};

const getUserDocument = async uid => {

  if (!uid) return null;

  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };

    //redirect

  } catch (error) {
    console.error("Error fetching user", error);
  }
};