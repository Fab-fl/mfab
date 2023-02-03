function changeColor() {
    // Get the selected color value from the form element
    var color = document.getElementById('color-picker').value;
    document.documentElement.style.setProperty('--accent-color', color);
  }

  var checkbox = document.getElementById("checkbox");
  var currentTime = new Date();
  if (currentTime.getHours() >= 18) {
    checkbox.checked = false;
  } else {
    if (localStorage.getItem("checkbox") === "true") {
      checkbox.checked = true;
    }
  }
  function saveCheckbox() {
    // Save the checkbox's state to local storage
    localStorage.setItem("checkbox", checkbox.checked);
  }




