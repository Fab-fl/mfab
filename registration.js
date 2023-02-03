import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { auth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAIHoRktdnI7eP-u-kMKCK_B9OxoSUn1MA",
    authDomain: "mfabtk.firebaseapp.com",
    projectId: "mfabtk",
    storageBucket: "mfabtk.appspot.com",
    messagingSenderId: "749927009711",
    appId: "1:749927009711:web:f42471b86d1be2a10bf35a",
    measurementId: "G-56EJW286QZ"
};

const app = initializeApp(firebaseConfig);
const auth = auth(app);

function register() {
    // Get the email and password values from the input fields
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const username = document.querySelector("#username").value;
  
    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          //  get the user by its id
          var user = auth.currentUser;
          // update the user profile with the username
          user.updateProfile({
              displayName: username
          }).then(() => {
          // redirect the user to the home page
          window.location.href = "index.html";
          }).catch((error) => {
              alert(error.message);
          });
      })
      .catch((error) => {
        // Handle errors here
          alert(error.message);
      });
  }