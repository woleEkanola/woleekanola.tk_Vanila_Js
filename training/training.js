 var config = {
    apiKey: "AIzaSyBW78s8D12Wl7mk8PYP-yoFKOopKSZ2MH8",
    authDomain: "woleekanola-48a60.firebaseapp.com",
    databaseURL: "https://woleekanola-48a60.firebaseio.com",
    projectId: "woleekanola-48a60",
    storageBucket: "woleekanola-48a60.appspot.com",
    messagingSenderId: "72886914677"
  };
  firebase.initializeApp(config);
const email= document.getElementById('email')
const password= document.getElementById('password')

const submit = document.getElementById('submit')

submit.addEventListener('click', function(){
firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
  // Handle Errors here.
  console.log(error.message)
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
email.value = ''
password.value = ''
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user)
  } else {
       console.log('No user Sign In')
    // No user is signed in.
  }
});
  