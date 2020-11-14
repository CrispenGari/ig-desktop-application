import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-X6hs_8gsIxe18oO2hKqM3xj6D8EgSAM",
  authDomain: "ig-desktop-app.firebaseapp.com",
  databaseURL: "https://ig-desktop-app.firebaseio.com",
  projectId: "ig-desktop-app",
  storageBucket: "ig-desktop-app.appspot.com",
  messagingSenderId: "27903956192",
  appId: "1:27903956192:web:dd0a35d08603400ecd2c85",
  measurementId: "G-6P2BKSWDM1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()
const authentication = {
    googleAuthProvider : new firebase.auth.GoogleAuthProvider(),
    facebookAuthProvider : new firebase.auth.FacebookAuthProvider(),
    githubAuthProvider : new firebase.auth.GithubAuthProvider(),
    twitterAuthProvider : new firebase.auth.TwitterAuthProvider(),
    yahooAuthProvider : new firebase.auth.OAuthProvider('yahoo.com'),
    auth: auth
}
export const database = firebaseApp.firestore()
export default authentication