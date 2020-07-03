var firebaseConfig = {
    apiKey: "AIzaSyC36Bm2L9Cm5O6umSwN9bSMIprqE6Igcfo",
    authDomain: "aveux-7b85d.firebaseapp.com",
    databaseURL: "https://aveux-7b85d.firebaseio.com",
    projectId: "aveux-7b85d",
    storageBucket: "aveux-7b85d.appspot.com",
    messagingSenderId: "906402512005",
    appId: "1:906402512005:web:b98afcf7dca42b9481fdec",
    measurementId: "G-LFMZNB80QE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();