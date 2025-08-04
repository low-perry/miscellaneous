document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const filterType = body.dataset.plpType;
    const filterValue = body.dataset.plpValue;

    // If the required data attributes aren't on this page, do nothing.
    if (!filterType || !filterValue) {
        console.log("Not a PLP page, Search.js will not be initialized for listing.");
        return;
    }

    // This function runs AFTER the header has been loaded by layout.js.
    // We need to wait for the #search-input to exist in the DOM.
    // A simple MutationObserver is a robust way to do this.
    const observer = new MutationObserver((mutations, obs) => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            // The search input now exists, so we can initialize Search.js
            initializeSearchJs(filterType, filterValue);
            obs.disconnect(); // Stop observing
            return;
        }
    });

    observer.observe(document.getElementById('main-header'), {
        childList: true,
        subtree: true
    });

    function initializeSearchJs(type, value) {
        // 1. Initialize the UI
        Luigis.Search({
            TrackerId: '179075-204259', // Your Tracker ID
            Theme: 'boo',
            Facets: ['brand', 'price_amount'],
            DefaultFilters: {
                type: 'product'
            }
        }, 
        '#search-input', 
        '#plp-ui-container'
        );

        // 2. Execute the listing using the dynamic values from the HTML
        Luigis.Search.Search(
            null,
            {
                ProductListingFilter: type,
                IntentFilters: { 
                    [type]: value 
                }
            }
        );
    }
});