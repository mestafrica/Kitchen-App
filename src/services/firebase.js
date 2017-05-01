import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCjLbLaqnzjt52v1JipjNKtxjJyS9SsTkQ",
    authDomain: "mest-kitchen-app-7b87f.firebaseapp.com",
    databaseURL: "https://mest-kitchen-app-7b87f.firebaseio.com",
    projectId: "mest-kitchen-app-7b87f",
    storageBucket: "mest-kitchen-app-7b87f.appspot.com",
    messagingSenderId: "737181260592"
};

export const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();
export const usersRef = database.ref('users');
