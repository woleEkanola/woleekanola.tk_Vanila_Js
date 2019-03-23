  let userNameTarget = document.querySelector('.userHeader span')

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  
  userNameTarget.innerText= user.displayName || user.email
  
     console.log(user)
  } else {
    location.pathname = '/training/'
  }
});

 signOut.addEventListener('click', function(){
    firebase.auth().signOut()
  })

