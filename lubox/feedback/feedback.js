document.addEventListener("DOMContentLoaded", function () {
  const upButton = document.getElementById("feedback-up");
  const downButton = document.getElementById("feedback-down");
  const feedbackContainer = document.getElementById("feedback-container"); // Parent container for the buttons

  const FeedbackType = {
    UP: "up",
    DOWN: "down",
  };

  const FeedbackForms = {
    ONSUCCESS_FORM: "https://docs.google.com/forms/d/e/1FAIpQLScsv_-1lx09vDCYdIfP4Q6Gpt3K6WUyqvGXQe3yQN03Z7nm2A/viewform?usp=pp_url&entry.2144526813=SOURCE_URL_PLACEHOLDER",
    ONISSUE_FORM: "https://docs.google.com/forms/d/e/1FAIpQLSfdlN8_MBbvQH8OvJHpv7LRIuM7IVdM9Qn6gqS-bqI5ApP0VA/viewform?usp=pp_url&entry.233291793=SOURCE_URL_PLACEHOLDER",
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