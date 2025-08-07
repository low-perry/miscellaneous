document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const filterType = body.dataset.plpType;
    const filterValue = body.dataset.plpValue;

    if (!filterType || !filterValue) {
        return;
    }

    const productGrid = document.getElementById("product-grid");
    const pageTitle = document.getElementById("page-title");
    const facetsContainer = document.getElementById("facets-container");
    const paginationContainer = document.getElementById("pagination-container");

    let activeFilters = {};
    let currentPage = 1;
    
    const TRACKER_ID = "179075-204259";
    const API_ENDPOINT = "https://live.luigisbox.com/search";
    const ANALYTICS_API_URL = "https://api.luigisbox.com/";
    const RESULTS_PER_PAGE = 6;
    const CLIENT_ID = Math.floor(Math.random() * 1e18);

    async function getPLPResults(page = 1, filters = {}) {
        currentPage = page;
        activeFilters = filters;

        const params = {
            tracker_id: TRACKER_ID,
            'f[]': ['type:product', `${filterType}:${filterValue}`],
            plp: filterType,
            hit_fields: 'title,brand,image_link,url,id',
            facets: 'brand,price_amount',
            size: RESULTS_PER_PAGE,
            page: currentPage
        };

        for (const key in activeFilters) {
            activeFilters[key].forEach(value => {
                params['f[]'].push(`${key}:${value}`);
            });
        }

        try {
            const response = await axios.get(API_ENDPOINT, { params });
            const { hits, total_hits, facets } = response.data.results;
            renderProducts(hits, total_hits);
            renderFacets(facets);
            renderPagination(total_hits);
            trackListView(hits);
        } catch (error) {
            console.error("Error fetching products:", error);
            productGrid.innerHTML = "<p>Sorry, there was an error loading products.</p>";
        }
    }

    function renderProducts(hits = [], total_hits = 0) {
        pageTitle.textContent = `Products in ${filterValue} (${total_hits})`;
        if (hits.length === 0) {
            productGrid.innerHTML = "<p>No products found.</p>";
            return;
        }
        productGrid.innerHTML = hits.map(product => {
            const imageUrl = product.attributes.image_link || `https://placehold.co/300x200/eee/ccc?text=No+Image`;
            const productId = (product.attributes.id && product.attributes.id[0]) ? product.attributes.id[0] : null;
            const productIdAttribute = productId ? `data-product-id="${productId}"` : '';
            return `
                <div class="product-card">
                    <a href="${product.url}" class="product-link" ${productIdAttribute} target="_blank">
                        <img src="${imageUrl}" alt="${product.attributes.title}" onerror="this.onerror=null;this.src='https://placehold.co/300x200/eee/ccc?text=No+Image';">
                    </a>
                    <div class="product-info">
                        <p class="product-title">${product.attributes.title || 'Untitled'}</p>
                        <p class="product-brand">${(product.attributes.brand && product.attributes.brand[0]) || 'No Brand'}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderFacets(facets = []) {
        facetsContainer.innerHTML = facets.map(facet => {
            const values = facet.values.map(val => {
                const isChecked = (activeFilters[facet.name] || []).includes(val.value);
                return `
                    <li>
                        <label>
                            <input type="checkbox" name="${facet.name}" value="${val.value}" ${isChecked ? 'checked' : ''}>
                            ${val.value} <span>(${val.hits_count})</span>
                        </label>
                    </li>`;
            }).join('');
            return `
                <div class="facet-block">
                    <h3>${facet.name}</h3>
                    <ul style="list-style: none; padding: 0;">${values}</ul>
                </div>`;
        }).join('');
    }

    function renderPagination(totalHits) {
        const totalPages = Math.ceil(totalHits / RESULTS_PER_PAGE);
        paginationContainer.innerHTML = "";
        if (totalPages <= 1) return;

        let paginationHTML = '';
        paginationHTML += `<button class="pagination-button" data-page="1" ${currentPage === 1 ? 'disabled' : ''}>&laquo; First</button>`;
        paginationHTML += `<button class="pagination-button" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>&lt; Prev</button>`;

        const maxPagesToShow = 5;
        const halfPages = Math.floor(maxPagesToShow / 2);
        let startPage = Math.max(1, currentPage - halfPages);
        let endPage = Math.min(totalPages, currentPage + halfPages);

        if (currentPage - halfPages < 1) endPage = Math.min(totalPages, maxPagesToShow);
        if (currentPage + halfPages > totalPages) startPage = Math.max(1, totalPages - maxPagesToShow + 1);

        if (startPage > 1) {
            paginationHTML += `<button class="pagination-page" data-page="1">1</button>`;
            if (startPage > 2) paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `<button class="pagination-page ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) paginationHTML += `<span class="pagination-ellipsis">...</span>`;
            paginationHTML += `<button class="pagination-page" data-page="${totalPages}">${totalPages}</button>`;
        }

        paginationHTML += `<button class="pagination-button" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>Next &gt;</button>`;
        paginationHTML += `<button class="pagination-button" data-page="${totalPages}" ${currentPage === totalPages ? 'disabled' : ''}>Last &raquo;</button>`;

        paginationContainer.innerHTML = paginationHTML;
    }

    async function sendAnalyticsEvent(payload) {
        try {
            await axios.post(ANALYTICS_API_URL, payload);
            console.log('Analytics event sent:', payload.type);
        } catch (error) {
            console.error('Failed to send analytics event:', error);
        }
    }

    function trackListView(hits) {
        if (!hits || hits.length === 0) return;
        const analyticsPayload = {
            id: crypto.randomUUID(),
            type: "event",
            tracker_id: TRACKER_ID,
            client_id: CLIENT_ID,
            lists: { "Product Listing": { items: hits.map((hit, index) => ({ title: hit.attributes.title, url: hit.url, position: (currentPage - 1) * RESULTS_PER_PAGE + index + 1 })) } }
        };
        sendAnalyticsEvent(analyticsPayload);
    }

    function trackClickEvent(productId) {
        const clickPayload = {
            id: crypto.randomUUID(),
            type: "click",
            tracker_id: TRACKER_ID,
            client_id: CLIENT_ID,
            action: { type: "click", resource_identifier: productId }
        };
        sendAnalyticsEvent(clickPayload);
    }

    facetsContainer.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
            const facetName = e.target.name;
            const facetValue = e.target.value;
            if (!activeFilters[facetName]) activeFilters[facetName] = [];
            if (e.target.checked) {
                activeFilters[facetName].push(facetValue);
            } else {
                activeFilters[facetName] = activeFilters[facetName].filter(v => v !== facetValue);
                if (activeFilters[facetName].length === 0) delete activeFilters[facetName];
            }
            getPLPResults(1, activeFilters);
        }
    });

    paginationContainer.addEventListener('click', (e) => {
        const target = e.target.closest('.pagination-button, .pagination-page');
        if (target && !target.disabled) {
            const page = parseInt(target.dataset.page, 10);
            getPLPResults(page, activeFilters);
        }
    });

    productGrid.addEventListener('click', function(e) {
        const productLink = e.target.closest('.product-link');
        if (productLink) {
            const productId = productLink.dataset.productId;
            if (productId) {
                trackClickEvent(productId);
            }
        }
    });

    getPLPResults(1, {});
});