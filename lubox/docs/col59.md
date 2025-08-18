// {"collector": "5.9.0", "name": "TODO"}

require('luigis-collector');
// Collector modules
const all = require('luigis-collector/src/support/dom/select_all_elements');
const text = require('luigis-collector/src/support/helpers/text_without_child_nodes');
const wait = require('luigis-collector/src/support/wait');
const ready = require('luigis-collector/src/support/dom/document_ready');
const closest = require('luigis-collector/src/support/dom/closest');
const debounce = require('lodash.debounce');
const getParam = require('luigis-collector/src/support/helpers/get_url_parameter');
const listNames = require('luigis-collector/src/core/list_names');
const getItemIds = require('luigis-collector/src/support/helpers/get_item_ids');
const detectQuery = require('luigis-collector/src/support/detect_query');
const filterPush = require('luigis-collector/src/support/filters/filter_push');
const extractPrice = require('luigis-collector/src/support/helpers/extract_price');
const toAbsoluteUrl = require('luigis-collector/src/support/helpers/to_absolute_url');
const {getTrackerId} = require('luigis-collector/src/support/dom/current_script');
const {createTrackerWithAutotrack: createTracker} = require('luigis-collector/src/create_tracker');

// Event Triggers
const onXhr = require('luigis-collector/src/core/events/on_xhr').default;
const onClick = require('luigis-collector/src/core/events/on_click').default;
const compose = require('luigis-collector/src/core/compose').default;
const onExplicit = require('luigis-collector/src/core/events/on_explicit').default;
const onPageView = require('luigis-collector/src/core/events/on_page_view').default;
const onMutation = require('luigis-collector/src/core/events/on_mutation').default;
const onDataLayerPush = require('luigis-collector/src/core/events/on_datalayer_push').default;

/* Helper functions */
const isObject = (variable) => { 
  return variable && Object.prototype.toString.call(variable) === '[object Object]';
}

const canonizeURL = (url) => {
    return url && url.split('?')[0];
}

const getNumberFromElement = (selector) => {
    return Number(text(document.querySelector(selector)));
}

const currentPageElements = (products, itemsPerPage) => {
    return products.filter(function(element) {
        return products.indexOf(element) + 1 > +(products.length) - +itemsPerPage;
    });
}

const textContent = (node) => {
    return node && node.textContent ? node.textContent.trim() : null;
}

//AC
const INPUT_SELECTOR = 'TODO';
const AC_XHR_URL_PART = 'TODO';

//RS
const SEARCH_XHR_URL_PART = null; 
const QUERY_PARAM_NAME = 'TODO';
const ITEMS_PER_PAGE = 20;
const PAGINATION_PAGE_PARAM = 'page';
const SEARCH_RESULT_SELECTOR = 'TODO'; 
const SEARCH_NO_RESULT_SELECTOR = 'TODO'; 

//GENERAL
const CONVERSION_SELECTORS = '.TODO, .TODO';
const PDP_SELECTOR = 'TODO';

(function() {
  const options = {
    fireMutationWhenElementExists: true,
    coverSelector: 'body',
    gaTracking: true,
    gaTrackingId: 'default',
    conversionSelectors: CONVERSION_SELECTORS,
  };

  const trackerId = getTrackerId();
  const tracker = createTracker(trackerId, options);


  const dataLayerEventMappings = {
    search: {
      matches: (event, eventType, eventData) => (
        eventType === 'view_item_list' && 
        eventData && 
        eventData.item_list_name === 'Search Results' &&
        eventData.items &&
        eventData.search_term !== undefined
      ),
      extract: function(event, eventData) {
        const list = {
          list_name: listNames.searchResults,
          query: eventData.search_term,
          items: eventData.items.map((item, index) => ({
            title: item.item_name || '',
            url: item.item_id || '',
            position: item.index || index + 1,
            price: item.price,
            type: 'item',
          })) || [],
          filters: isObject(eventData.filters) && eventData.filters || {}
        }
        return { eventData: list, eventType: 'search' };
      },
    },
    productListing: {
      matches: (event, eventType, eventData) => (
        eventType === 'view_item_list' && 
        eventData && 
        eventData.item_list_name === 'Product Listing' &&
        eventData.items
      ),
      extract: function(event, eventData) { 
        const list = {
          list_name: listNames.searchResults,
          query: "",
          items: eventData.items.map((item, index) => ({
            title: item.item_name || '',
            url: item.item_id || '',
            position: item.index || index + 1,
            price: item.price,
            type: item.type || 'item'
          })) || [],
          filters: isObject(eventData.filters) && eventData.filters || {}
        }
        if (eventData.scopes) {
          list.scopes = { ...eventData.scopes };
          if (list.scopes.CategoryIdentity) {
              list.scopes._category_identity = list.scopes.CategoryIdentity;
              delete list.scopes.CategoryIdentity;
          }
          if (list.scopes.CategoryLabel) {
              list.scopes._category_label = list.scopes.CategoryLabel;
              delete list.scopes.CategoryLabel;
          }
        }

        // Always add _ProductListing filter
        list.filters["_ProductListing"] = true;

        return { eventData: list, eventType: 'search' };
      },
    },
    autocomplete: {
      matches: (event, eventType, eventData) => (
        eventType === 'view_item_list' && 
        eventData && 
        eventData.item_list_name === 'Autocomplete' &&
        eventData.items &&
        eventData.search_term
      ),
      extract: function(event, eventData) {
        const list = {
          list_name: listNames.autocomplete,
          query: eventData.search_term,
          items: eventData.items.map((item, index) => ({
            title: item.item_name || '',
            url: item.item_id || '',
            position: item.index || index + 1,
            price: item.price,
            type: item.type || 'item'
          })) || [],
          filters: isObject(eventData.filters) && eventData.filters || {}
        }
        return { eventData: list, eventType: 'search' };
      },
    },
    recommender: {
      matches: (event, eventType, eventData) => (
        eventType === 'view_item_list' && 
        eventData && 
        eventData.item_list_name === 'Recommendation' &&
        eventData.items
      ),
      extract: function(event, eventData) {
        const list = {
          list_name: listNames.recommendation,
          items: eventData.items.map((item, index) => ({
            title: item.item_name || '',
            url: item.item_id || '',
            position: item.index || index + 1,
            price: item.price,
            type: item.type || 'item'
          })) || [],
          filters: isObject(eventData.filters) && eventData.filters || {}
        }
        return { eventData: list, eventType: 'search' };
      },
    },
    viewItemList: {
      matches: (event, eventType, eventData) => (
        eventType === 'view_item_list' && 
        eventData && 
        eventData.items &&
        !eventData.search_term && detectQuery()
      ),
      extract: function(event, eventData) {
        const list = {
          list_name: eventData.item_list_name || 'Search Results',
          query: detectQuery(),
          items: eventData.items.map((item, index) => ({
            title: item.item_name || '',
            url: item.item_id || '',
            position: item.index || index + 1,
            price: item.price,
            type: item.type || 'item'
          })) || []
        }
        return { eventData: list, eventType: 'search' };
      },
    },
    click: {
      matches: (event, eventType, eventData) => (
        eventType === 'select_item' &&
        eventData &&
        eventData.items &&
        eventData.items[0] &&
        eventData.items[0].item_id
      ),
      extract: function(event, eventData) {
        const id = eventData.items[0].item_id;
        return { eventData: id, eventType: 'click' };
      },
    },
    buy: {
      matches: (event, eventType, eventData) => (
        eventType === 'add_to_cart' &&
        eventData &&
        eventData.items &&
        eventData.items[0] &&
        eventData.items[0].item_id
      ),
      extract: function(event, eventData) {
        const id = eventData.items[0].item_id;
        return { eventData: id, eventType: 'buy' };
      },
    },
    // Pageview events are handled automatically by the collector
    // Uncomment if you need to adjust the data
    /* transaction: {
      matches: (event, eventType, eventData) => (
        eventType === 'purchase' &&
        eventData &&
        eventData.items
      ),
      extract: function(event, eventData) {
        const list = {
          items: eventData.items.map(item => {
            return {
              title: item.item_name || '',
              url: item.item_id || '',
              total_price: Number(item.price || 0) * Number(item.quantity || 1),
              count: Number(item.quantity || 1)
            }
          })
        }
        return { eventData: list, eventType: 'transaction' }
      },
    },
    pageview: {
      matches: (event, eventType, eventData) => (
        eventType === 'view_item' &&
        eventData &&
        eventData.items &&
        eventData.items[0] &&
        eventData.items[0].item_id
      ),
      extract: function(event, eventData) {
        const itemId = eventData.items[0].item_id;
        return { eventData: itemId, eventType: 'pv' };
      },
    },*/  
  };

  const domCollection = {
    collectSearch: function() {
      if (!getParam(QUERY_PARAM_NAME)) {
        return;
      }
  
      // Determine the current page number
      let page = getParam(PAGINATION_PAGE_PARAM);
      if (isNaN(page) || page < 1) {
        page = 1;
      }
  
      // Determine the "items per page" amount
      const itemsPerPage = ITEMS_PER_PAGE;
  
      // Determine the offset
      let offset = 0;
      if (page && page > 1) {
        offset = (page - 1) * itemsPerPage;
      }
  
      return {
        list_name: listNames.searchResults,
        query: getParam(QUERY_PARAM_NAME),
        items: function() {
          // TODO
          return all(SEARCH_RESULT_SELECTOR).map(function(element, index) {
            return {
              title: textContent(element.querySelector('SELECTOR')),
              url: toAbsoluteUrl(element.querySelector('SELECTOR').getAttribute('href')),
              position: offset + index + 1,
              price: extractPrice(textContent(element.querySelector('SELECTOR'))),
              //TODO add type 'item', 'category' if it is category, 'brand' if it is brand
              type: 'item',
              el: element
            };
          });
        }(),
        filters: function() {
          const filters = {};
          
          /* var filterSelector = 'SELECTOR';
          if(document.querySelector(filterSelector)){
              all(filterSelector).forEach(filter => {
                  let key = '';
                  let value = '';
                  filterPush(filters, key, value);
              })
          } */
  
          return filters;
        }()
      };
    },
    collectAutocomplete: function() {
      let count = 1;
  
      //Check for input value, return if empty
      const inputValue = document.querySelector(INPUT_SELECTOR).value;
      if (inputValue == '') return
      
      return {
        list_name: listNames.autocomplete,
        query: inputValue,
        items: function() {
          return all('SELECTOR').map(function(element, index) {
            return {
              title: textContent(element.querySelector('SELECTOR')),
              url: toAbsoluteUrl(element.getAttribute('SELECTOR')),
              price: extractPrice(textContent(element.querySelector('SELECTOR'))),
