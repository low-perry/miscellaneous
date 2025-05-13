document.addEventListener('DOMContentLoaded', () => {
    const quickstartBtn = document.getElementById('quickstartBtn');
    if (quickstartBtn) {
      quickstartBtn.addEventListener('click', () => {
        window.location.href = 'quickstart-personas.html';
      });
    }
});
