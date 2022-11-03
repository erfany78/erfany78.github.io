importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyBF1G6ppbLKZL3VrPWRAaHlhGnHUkJhKEg',
    appId: '1:35039413630:web:0b7f3af1aa122d83d21f2f',
    messagingSenderId: '35039413630',
    projectId: 'house-app-102cc',
    authDomain: 'house-app-102cc.firebaseapp.com',
    storageBucket: 'house-app-102cc.appspot.com',
    measurementId: 'G-7LNQLDR0EH'
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});