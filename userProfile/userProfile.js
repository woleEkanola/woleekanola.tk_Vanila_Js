
const name = document.getElementById('name')
 const number = document.getElementById('number')
   const eemail = document.getElementById('email')
const updateProfile = document.getElementById('updateProfile') 

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  
   
    // User is signed in.
  updateProfile.addEventListener('click', function(){
    user.updateProfile({
      displayName: name,
      phoneNumber: number
    })
    location.pathname = '/signedIn/'
  })
     console.log(user)
  } else {
    location.pathname = '/training/'
  }
});

 
  
  
