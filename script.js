function switchScreen(screenNumber) {
  // Hide all screens
  var screens = document.querySelectorAll('.screen');
  screens.forEach(function(screen) {
      screen.classList.remove('active');
  });

  // Show the selected screen
  var selectedScreen = document.querySelector('.screen:nth-child(' + screenNumber + ')');
  selectedScreen.classList.add('active');
}

