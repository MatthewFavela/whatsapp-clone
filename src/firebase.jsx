import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_UO6c47heJPrimINxI5Lqq3ZRdFKa8i8",
  authDomain: "whatsapp-clone-c8594.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c8594.firebaseio.com",
  projectId: "whatsapp-clone-c8594",
  storageBucket: "whatsapp-clone-c8594.appspot.com",
  messagingSenderId: "257015992493",
  appId: "1:257015992493:web:1a61197785c31df44e3624",
  measurementId: "G-H13S03SCDR",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db