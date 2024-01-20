let firebaseConfig = {
    // Enter your firebase credentials
        apiKey: "AIzaSyAnS3wKBlGHJ9Qt67xzkRPaujt1ItgNxhk",
        authDomain: "blogging-website-b92d4.firebaseapp.com",
        projectId: "blogging-website-b92d4",
        storageBucket: "blogging-website-b92d4.appspot.com",
        messagingSenderId: "46928639652",
        appId: "1:46928639652:web:5704969997e5ce18ac1831"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();