// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/firestore"
import "firebase/storage"
//  TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-vpjdG3gI9AkBKHDNbMDKYb80vblb42A",
  authDomain: "firegram-11de2.firebaseapp.com",
  projectId: "firegram-11de2",
  storageBucket: "firegram-11de2.appspot.com",
  messagingSenderId: "224921049987",
  appId: "1:224921049987:web:bfad648312601f6d12f4b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFireStore = firebase.firestore()

export {projectStorage,projectFireStore};