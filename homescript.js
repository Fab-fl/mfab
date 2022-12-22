function changeColor() {
    // Get the selected color value from the form element
    var color = document.getElementById('color-picker').value;
    document.documentElement.style.setProperty('--accent-color', color);
  }


document. addEventListener("DOMContentLoaded",function(){
  const togglecodeButton = document.getElementById('toggle-code-button');
  const codefield = document.getElementById('code');
  const icon = togglecodeButton.querySelector('i');

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

var username = document.getElementById('username').value;
  var code = document.getElementById('code').value;

  if(code = "FL79J48"){
    window.location.href = "main.html";
  }





