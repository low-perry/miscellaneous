
document.addEventListener("DOMContentLoaded", function(){
  const upButton = document.getElementById("feedback-up");
  const downButton = document.getElementById("feedback-down");

  upButton.addEventListener("click", function() {
    // Remove selection from the other button, if needed
    downButton.classList.remove("selected");
    // Add the 'selected' class to turn the icon green
    upButton.classList.add("selected");
    
    // Send a custom event to Google Analytics
    gtag('event', 'feedback', {
      'event_category': 'User Feedback',
      'event_label': 'up'
    });
  });

  downButton.addEventListener("click", function() {
    // Remove selection from the other button
    upButton.classList.remove("selected");
    // Add the 'selected' class to turn the icon red
    downButton.classList.add("selected");
    
    // Send a custom event to Google Analytics
    gtag('event', 'feedback', {
      'event_category': 'User Feedback',
      'event_label': 'down'
    });
  });
});