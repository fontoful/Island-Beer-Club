import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBnH95hW99VaFDKQ_hcmelm3zloe9UnMJA',
	authDomain: 'island-beer-club.firebaseapp.com',
	databaseURL: 'https://island-beer-club.firebaseio.com',
	projectId: 'island-beer-club',
	storageBucket: 'island-beer-club.appspot.com',
	messagingSenderId: '719727176349',
	appId: '1:719727176349:web:d33063340848bad2174274',
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export default firebase