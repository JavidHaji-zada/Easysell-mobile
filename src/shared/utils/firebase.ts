import firebase from "@react-native-firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyADiIqSNbeeuJRkOLGpQcCyFJnJgAyo06Y",
    authDomain: "easysell-9a8b0.firebaseapp.com",
    projectId: "easysell-9a8b0",
    storageBucket: "easysell-9a8b0.appspot.com",
    messagingSenderId: "61891594092",
    appId: "1:61891594092:web:a66d2edd42c315a441d549",
    databaseURL: 'https://easysell-9a8b0-default-rtdb.firebaseio.com/'
};
// Initialize Firebase
if (firebase.apps.length == 0)
    firebase.initializeApp(firebaseConfig);

export default firebase