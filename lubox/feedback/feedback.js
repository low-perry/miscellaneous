document.addEventListener("DOMContentLoaded", function () {
  const upButton = document.getElementById("feedback-up");
  const downButton = document.getElementById("feedback-down");
  const feedbackContainer = document.getElementById("feedback-container"); // Parent container for the buttons

  const FeedbackType = {
    UP: "up",
    DOWN: "down",
  };

  function handleFeedbackClick(event) {
    const clickedButton = event.currentTarget;
    const otherButton = clickedButton === upButton ? downButton : upButton;

    otherButton.classList.remove("selected");
    clickedButton.classList.add("selected");

    // Animate the clicked button
    const svg = clickedButton.querySelector("svg");
    svg.classList.add("animate");
    svg.addEventListener(
      "animationend",
      () => {
        svg.classList.remove("animate");
      },
      { once: true }
    );

    // Send feedback to Google Analytics
    const feedbackType = clickedButton === upButton ? FeedbackType.UP : FeedbackType.DOWN;
    gtag("event", "feedback", {
      event_category: "User Feedback",
      event_label: feedbackType,
    }); 

    
    feedbackContainer.classList.add("fade-out");

    setTimeout(() => {
      feedbackContainer.innerHTML = `<p>Your opinion matters to us! 🩵</p>`;
      feedbackContainer.classList.add("fade-in");
    }, 500); 
  }

  upButton.addEventListener("click", handleFeedbackClick);
  downButton.addEventListener("click", handleFeedbackClick);
});