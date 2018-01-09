import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCVWywa9AxC7ktrHhioODOoVtglTZPGFmM",
    authDomain: "votezilla-12bd5.firebaseapp.com",
    databaseURL: "https://votezilla-12bd5.firebaseio.com",
    projectId: "votezilla-12bd5",
    storageBucket: "votezilla-12bd5.appspot.com",
    messagingSenderId: "399034244928"
}

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const goodleAuthProvider = new firebase.auth.GoogleAuthProvider();
