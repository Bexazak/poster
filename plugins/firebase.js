import * as firebase from 'firebase/app'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRsy0bESW4akz2l8mk7OL8pu8Y94gNL3g",
    authDomain: "nuxt-poster.firebaseapp.com",
    databaseURL: "https://nuxt-poster.firebaseio.com",
    projectId: "nuxt-poster",
    storageBucket: "nuxt-poster.appspot.com",
    messagingSenderId: "795130034826",
    appId: "1:795130034826:web:c19a830ff0d531c3234b73",
    measurementId: "G-BSWRVXMQMC"
};


let app = null
if (!firebase.apps.length) {
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig);
}


export default firebase;
