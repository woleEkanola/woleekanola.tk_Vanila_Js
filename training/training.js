 
  // User Management

  //  Sign Up
signUp.addEventListener('click', function(){
firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
  // Handle Errors here.
  console.log(error.message)
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  if(error){
    document.write(errorMessage)
    return
  }
});
location.pathname = '/signedIn/'

})

  // Sign In

  signIn.addEventListener('click', function(){
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
  // Handle Errors here.
  console.log(error.message)
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  })

   

  // Monitor if sign out or In

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  
   
    // User is signed in.
    
   
     location.pathname = '/signedIn'
     console.log(user)
  } else {
 
       console.log('No user Sign In')
    // No user is signed in.
  }
});

const signInUp = document.querySelector('.signInUp')
const userProfile = document.querySelector('.userProfile')
 const userHeader = document.querySelector('.userHeader') 
 const courseList = document.querySelector('.courseList') 
 const userCourseList = document.querySelector('.userCourseList') 
 const unRegisteredUser = document.querySelector('.unRegisteredUser') 
  const courseAdvert = document.querySelector('.courseAdvert') 

    // Hide any element
  
  function hide(x){
     
   
    if(x.length > 0){

      for(let i = 0;  i < x.length; i++ ){
       
        x[i].style.display='none'
      }
    }else{
      console.log( x, 'is hidden')
      x.style.display = 'none'
    }
  }

    // Show any element
   function show(x){
     
     
    if(x.length > 0){
      for(let i = 0;  i < x.lenght; i++ ){
       
        x[i].style.display='block'
      }
    }else{
      console.log( x, 'is showing')
      x.style.display = 'block'
    }
  }

  const privateRoute = [userProfile, userHeader, userCourseList ]
  const publicRoute = [signInUp, courseList, unRegisteredUser]


