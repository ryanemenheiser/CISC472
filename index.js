var firebaseConfig = {
    apiKey: "AIzaSyAPBsb0OAMyOLWp7uGLl0V7qb6nXGEbtvY",
    authDomain: "test-30292.firebaseapp.com",
    databaseURL: "https://test-30292.firebaseio.com",
    projectId: "test-30292",
    storageBucket: "test-30292.appspot.com",
    messagingSenderId: "794197413320",
    appId: "1:794197413320:web:4f5fbdaf97f1529b5484fd",
    measurementId: "G-WFPN1VXX9D"
  };

firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(user => {
//   if (!!user){
//     alert(`${user.displayName || user.email}`);
//   }
// });

// firebase.auth()
//   .signInWithEmailAndPassword(
//     "junk@novocin.com", 
//     "fartsfarts"
//    ).catch(function(error) {
//           alert(error.message);
//    }
// );

// firebase.auth().onAuthStateChanged(user => {
//   if (!!user){
//     alert(`${user.displayName || user.email}`);
//   }
// });

// $("#loginemail").click(()=>{
//   firebase.auth().signInWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage);
//   });
// });
// $("#register").click(()=>{
//   let pwd1 = $("#password").val();
//   let pwd2 = $("#password2").val();
//   if (pwd1 == pwd2){
//     firebase.auth().createUserWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       alert(errorMessage);
//     });
//   } else {
//     alert("passwords don't match");
//   }
// });
// $("#reset").click(()=>{
//   firebase.auth().sendPasswordResetEmail($("#email").val());
// });
var google_provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().onAuthStateChanged(user => {
//   if (!!user){
//     alert(`${user.displayName || user.email}`);
//   }
// });

$("#login").click(()=>{
  firebase.auth().signInWithRedirect(google_provider);
});

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
