import React, { useState, useEffect, useCallback, useRef } from 'react';

// --- Reusable API fetching function (mocking axios with fetch) ---
const axios = {
  get: async (url, config) => {
    const queryParams = new URLSearchParams(config.params).toString();
    const fullUrl = `${url}?${queryParams}`;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // The API returns a JSON response
    return { data: await response.json() };
  },
  post: async (url, data) => {
    // Analytics API might not return a body, so we don't try to parse JSON
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    // Return a resolved promise as there's no body to parse
    return Promise.resolve();
  }
};

// --- Helper: A simple debounce custom hook ---
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}

// --- Autocomplete Component ---
const Autocomplete = () => {
    // --- STATE MANAGEMENT ---
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const debouncedSearchTerm = useDebounce(inputValue, 300);
    const wrapperRef = useRef(null);

    // --- CONFIGURATION & STABLE IDS ---
    const TRACKER_ID = "179075-204259"; // Demo tracker ID
    const TOP_ITEMS_API_URL = "https://live.luigisbox.com/v1/top_items";
    const AUTOCOMPLETE_API_URL = "https://live.luigisbox.com/autocomplete/v2";
    const ANALYTICS_API_URL = "https://api.luigisbox.com/";
    
    // ** FIX: Generate CLIENT_ID once and store it in state **
    // This prevents it from changing on every render.
    const [CLIENT_ID] = useState(() => Math.floor(Math.random() * 1e18));

    // --- ANALYTICS TRACKING ---
    const sendAnalyticsEvent = useCallback(async (payload) => {
        try {
            axios.post(ANALYTICS_API_URL, payload);
            console.log('Analytics event sent:', payload.type, payload);
        } catch (error) {
            console.error('Failed to send analytics event:', error);
        }
    }, [ANALYTICS_API_URL]);
    
    const trackAutocompleteView = useCallback((query, hits, customFilters = {}) => {
        if (!hits || hits.length === 0) return;
        const payload = {
            id: crypto.randomUUID(),
            type: "event",
            tracker_id: TRACKER_ID,
            client_id: CLIENT_ID,
            lists: {
                "Autocomplete": {
                    query: { string: query || "", filters: customFilters },
                    items: hits.map((hit, index) => ({
                        title: hit.attributes.title,
                        url: hit.url || hit.attributes.title,
                        position: index + 1
                    }))
                }
            }
        };
        sendAnalyticsEvent(payload);
    }, [TRACKER_ID, CLIENT_ID, sendAnalyticsEvent]);

    const trackAutocompleteClick = useCallback((itemId) => {
        const payload = {
            id: crypto.randomUUID(),
            type: "click",
            tracker_id: TRACKER_ID,
            client_id: CLIENT_ID,
            action: { type: "click", resource_identifier: itemId }
        };
        sendAnalyticsEvent(payload);
    }, [TRACKER_ID, CLIENT_ID, sendAnalyticsEvent]);

    // --- DATA FETCHING LOGIC ---
    const fetchTopItems = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(TOP_ITEMS_API_URL, {
                params: {
                    tracker_id: TRACKER_ID,
                    type: 'items:5,category:3',
                    hit_fields: 'title,url,price,image_link'
                }
            });
            const hits = response.data.hits || [];
            setSuggestions(hits);
            setIsOpen(hits.length > 0);
            trackAutocompleteView(null, hits, { source: 'top_items_on_focus' });
        } catch (error) {
            console.error("Failed to fetch top items:", error);
        } finally {
            setIsLoading(false);
        }
    }, [TRACKER_ID, trackAutocompleteView]);

    useEffect(() => {
        // This effect now ONLY handles fetching based on the search term
        const fetchQuerySuggestions = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(AUTOCOMPLETE_API_URL, {
                    params: {
                        tracker_id: TRACKER_ID,
                        q: debouncedSearchTerm,
                        type: 'product:5,category:3,query:5',
                        hit_fields: 'title,url,price,image_link'
                    }
                });
                const hits = response.data.hits || [];
                setSuggestions(hits);
                setIsOpen(hits.length > 0);
                trackAutocompleteView(debouncedSearchTerm, hits);
            } catch (error) {
                console.error("Failed to fetch autocomplete suggestions:", error);
                setSuggestions([]);
                setIsOpen(false);
            } finally {
                setIsLoading(false);
            }
        };

        if (debouncedSearchTerm) {
            fetchQuerySuggestions();
        } else {
            // Clear suggestions if search term is cleared, but don't fetch top items here
            setSuggestions([]);
            setIsOpen(false);
        }
    }, [debouncedSearchTerm, trackAutocompleteView, TRACKER_ID]);


    // --- EVENT HANDLERS ---
    const handleFocus = () => {
        if (!inputValue) {
            fetchTopItems();
        } else {
             setIsOpen(suggestions.length > 0)
        }
    };
    
    const handleResultClick = (item) => {
        const itemId = item.url || item.attributes.title;
        setInputValue(item.attributes.title);
        trackAutocompleteClick(itemId);
        setIsOpen(false);
        setSuggestions([]);
    };

    // --- Close dropdown on outside click ---
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // Empty dependency array means this runs only once


    // --- RENDERING LOGIC ---
    const groupedSuggestions = suggestions.reduce((acc, hit) => {
        (acc[hit.type] = acc[hit.type] || []).push(hit);
        return acc;
    }, {});
    
    const groupTitleMap = { item: 'Products', category: 'Categories', query: 'Popular Searches' };

    return (
        <div ref={wrapperRef} className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={handleFocus}
                placeholder="Search for products..."
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
                    {isLoading ? (
                        <div className="p-4 text-center text-gray-500">Loading...</div>
                    ) : suggestions.length > 0 ? (
                        Object.entries(groupedSuggestions).map(([type, items]) => (
                            <div key={type} className="border-b last:border-b-0">
                                <h3 className="px-4 py-2 text-xs font-bold text-gray-500 uppercase bg-gray-50">
                                    {groupTitleMap[type] || type}
                                </h3>
                                <ul>
                                    {items.map((item, index) => (
                                        <li
                                            key={`${type}-${item.url || index}`}
                                            onClick={() => handleResultClick(item)}
                                            className="px-4 py-3 flex items-center gap-4 cursor-pointer hover:bg-gray-100"
                                        >
                                            {item.attributes.image_link && (
                                                <img src={item.attributes.image_link} alt="" className="w-12 h-12 object-cover rounded"/>
                                            )}
                                            <span className="flex-grow" dangerouslySetInnerHTML={{ __html: item.attributes.title }} />
                                            {item.attributes.price && (
                                                <span className="text-gray-700 font-semibold">{item.attributes.price}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        !debouncedSearchTerm && <div className="p-4 text-center text-gray-500">No suggestions. Try a different search.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default function App() {
    return (
        <div className="bg-gray-50 min-h-screen flex items-start justify-center pt-20">
            <Autocomplete />
            <div>Hello</div>
        </div>
    );
}