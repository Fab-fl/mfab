function runninforever() { 
  var color = document.getElementById('color-picker').value;
  document.documentElement.style.setProperty('--accent-color', color);  
}


function login(){
  if(document.getElementById('code').value == "FL79J48"){
  window.location.href = "main.html";
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




  





