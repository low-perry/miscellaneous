document.addEventListener("DOMContentLoaded", function () {
  const upButton = document.getElementById("feedback-up");
  const downButton = document.getElementById("feedback-down");

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
  }

  upButton.addEventListener("click", handleFeedbackClick);
  downButton.addEventListener("click", handleFeedbackClick);
});