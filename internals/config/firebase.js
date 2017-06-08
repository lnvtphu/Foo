import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCx6YLbUIqdyup7HYYNnVk1sJphrERS_jY",
    authDomain: "foochat-9f30b.firebaseapp.com",
    databaseURL: "https://foochat-9f30b.firebaseio.com",
    projectId: "foochat-9f30b",
    storageBucket: "foochat-9f30b.appspot.com",
    messagingSenderId: "594264831089"
}

firebase.initializeApp(config)
console.log('Firebase Initialized')

export default firebase