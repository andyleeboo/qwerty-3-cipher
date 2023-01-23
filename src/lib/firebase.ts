// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCmCGuZQfPGFb62V5epPT81WefBE9QSfn8',
	authDomain: 'qwerty-3-cipher.firebaseapp.com',
	projectId: 'qwerty-3-cipher',
	storageBucket: 'qwerty-3-cipher.appspot.com',
	messagingSenderId: '839605226321',
	appId: '1:839605226321:web:0affccb54dcfb261276170',
	measurementId: 'G-X2QZVR1VET'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
