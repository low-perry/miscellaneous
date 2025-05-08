document.addEventListener("DOMContentLoaded", function () {
  const upButton = document.getElementById("feedback-up");
  const downButton = document.getElementById("feedback-down");
  const feedbackContainer = document.getElementById("feedback-container"); // Parent container for the buttons

  const FeedbackType = {
    UP: "up",
    DOWN: "down",
  };

  const FeedbackForms = {
    ONSUCCESS_FORM: "https://docs.google.com/forms/",
    ONISSUE_FORM: "https://docs.google.com/forms/",
  };

  function createFeedbackButton(feedbackType) {
    const button = document.createElement("button");
    button.classList.add("button-styles");

    if (feedbackType === FeedbackType.UP) {
      button.textContent = "Help us improve our docs";
      button.onclick = () => {
        window.open(FeedbackForms.ONSUCCESS_FORM, "_blank");
      };
    } else {
      button.textContent = "Report an issue";
      button.onclick = () => {
        window.open(FeedbackForms.ONISSUE_FORM, "_blank");
      };
    }

    return button;
  }

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

      const button = createFeedbackButton(feedbackType);
      feedbackContainer.appendChild(button);
      feedbackContainer.classList.add("fade-in");
    }, 500); 
  }

  upButton.addEventListener("click", handleFeedbackClick);
  downButton.addEventListener("click", handleFeedbackClick);
});
