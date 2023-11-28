// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyC87DnnPR3mRhBGdhWREG617OsPoYs_ALQ',
   authDomain: 'midjourney-5bb1f.firebaseapp.com',
   projectId: 'midjourney-5bb1f',
   storageBucket: 'midjourney-5bb1f.appspot.com',
   messagingSenderId: '894893485110',
   appId: '1:894893485110:web:dc3d73d52b94f776757c97',
   measurementId: 'G-LC55WDT416',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
