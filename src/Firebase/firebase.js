import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCmO0JAsTO83g3Io6kyvYVu3wEsiQ7oY98',
  authDomain: 'coderki-app.firebaseapp.com',
  databaseURL: 'https://coderki-app.firebaseio.com',
  projectId: 'coderki-app',
  storageBucket: 'coderki-app.appspot.com',
  messagingSenderId: '801523551576',
  appId: '1:801523551576:web:1fd3be0123da8430ef692d',
});

const db = firebaseApp.firestore();

export default db;

// const config = {
//   apiKey: 'AIzaSyCmO0JAsTO83g3Io6kyvYVu3wEsiQ7oY98',
//   authDomain: 'coderki-app.firebaseapp.com',
//   databaseURL: 'https://coderki-app.firebaseio.com',
//   projectId: 'coderki-app',
//   storageBucket: 'coderki-app.appspot.com',
//   messagingSenderId: '801523551576',
//   appId: '1:801523551576:web:1fd3be0123da8430ef692d',
// };

// firebase.initializeApp(config);

// export default firebase;
