document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('main-header');
    
    if (headerPlaceholder) {
        // Fetch the content of _header.html from the same directory
        fetch('./_header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                // Inject the header HTML into the placeholder
                headerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading header:', error);
                headerPlaceholder.innerHTML = '<p style="color: red;">Error loading navigation.</p>';
            });
    }
});