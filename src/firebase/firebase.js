import * as firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyBcJVA1AB0AU-P1yYvF2B11-VWRtCOXAU8",
    authDomain: "expensify-182a9.firebaseapp.com",
    databaseURL: "https://expensify-182a9.firebaseio.com",
    projectId: "expensify-182a9",
    storageBucket: "expensify-182a9.appspot.com",
    messagingSenderId: "315214373963"
  };

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Cerci'
});