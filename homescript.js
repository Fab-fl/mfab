function runninforever() { 
  var color = document.getElementById('color-picker').value;
  document.documentElement.style.setProperty('--accent-color', color);  

}


function login(){
  if(document.getElementById('code').value == "FL79J48"){
  window.location.href = "main.html";
  }else{
    alert("Wrong Code")
  }
}


document. addEventListener("DOMContentLoaded",function(){

  const togglecodeButton = document.getElementById('toggle-code-button');
  const codefield = document.getElementById('code');
  const icon = togglecodeButton.querySelector('i');
  var color = document.getElementById('color-picker').value;

  runninforever();
  setInterval(runninforever, 100);




  togglecodeButton.addEventListener('click', function() {
    if (codefield.type === 'password') {
      codefield.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      codefield.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }

  
  });
})

firebase.initializeApp({
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID"
});

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    console.log("User created successfully: ", user);
  })
  .catch(function(error) {
    console.error("Error creating user: ", error);
  });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(user) {
    console.log("User signed in successfully: ", user);
  })
  .catch(function(error) {
    console.error("Error signing in user: ", error);
  });



  





