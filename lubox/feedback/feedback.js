document.addEventListener("DOMContentLoaded", function() {
  const upButton = document.getElementById("feedback-up");
  const downButton = document.getElementById("feedback-down");

  function animateButton(button) {
    const svg = button.querySelector("svg");
    svg.classList.add("animate");
    svg.addEventListener("animationend", () => {
      svg.classList.remove("animate");
    }, { once: true });
  }

  upButton.addEventListener("click", () => {
    downButton.classList.remove("selected");
    upButton.classList.add("selected");
    animateButton(upButton);

    gtag('event', 'feedback', {
      'event_category': 'User Feedback',
      'event_label': 'up'
    });
  });

  downButton.addEventListener("click", () => {
    upButton.classList.remove("selected");
    downButton.classList.add("selected");
    animateButton(downButton);

    gtag('event', 'feedback', {
      'event_category': 'User Feedback',
      'event_label': 'down'
    });
  });
});