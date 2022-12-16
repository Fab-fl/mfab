function changeColor() {
    // Get the selected color value from the form element
    var color = document.getElementById('color-picker').value;
    document.documentElement.style.setProperty('--accent-color', color);
  }
