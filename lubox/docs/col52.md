// {"collector": "5.2.1", "name": "TODO"}

require('luigis-collector');
// TODO: remove unused requires
var mo = require('luigis-collector/src/support/mutation_observables');
var all = require('luigis-collector/src/support/dom/select_all_elements');
var text = require('luigis-collector/src/support/helpers/text_without_child_nodes');
var closest = require('luigis-collector/src/support/dom/closest');
var getParam = require('luigis-collector/src/support/helpers/get_url_parameter');
var listNames = require('luigis-collector/src/core/list_names');
var getUrlPart = require('luigis-collector/src/support/helpers/get_url_part');
var getItemIds = require('luigis-collector/src/support/helpers/get_item_ids');
var extractPrice = require('luigis-collector/src/support/helpers/extract_price');
var toAbsoluteUrl = require('luigis-collector/src/support/helpers/to_absolute_url');
var {getTrackerId} = require('luigis-collector/src/support/dom/current_script');
var {createTrackerWithAutotrack: createTracker} = require('luigis-collector/src/create_tracker');

var ready = require('luigis-collector/src/support/dom/document_ready');

var wait = require('luigis-collector/src/support/wait');

// Filter dependencies
var filterPush = require('luigis-collector/src/support/filters/filter_push');

var compose = require('luigis-collector/src/core/compose').default;
var onPageView = require('luigis-collector/src/core/events/on_page_view').default;
var onClick = require('luigis-collector/src/core/events/on_click').default;
var onXhr = require('luigis-collector/src/core/events/on_xhr').default;
var onMutation = require('luigis-collector/src/core/events/on_mutation').default;

var schemaCollect = require('luigis-collector/src/support/dom/collect_schema');

var onExplicit = require('luigis-collector/src/core/events/on_explicit').default;

var debounce = require('lodash.debounce');

//AC
const INPUT_SELECTOR = 'TODO';
const AC_XHR_URL_PART = 'TODO';

//RS
const RS_XHR_URL_PART = null; 
const QUERY_PARAM_NAME = 'TODO';
const ITEMS_PER_PAGE = 20;
const PAGINATION_PAGE_PARAM = 'page';
const RS_RESULTS_SELECTOR = 'TODO'; 
const RS_NO_RESULT_SELECTOR = 'TODO'; 

//GENERAL
const CONVERSION_SELECTORS = '.TODO, .TODO';
const COVER_SELECTOR = 'body';
const SAMPLING_RATE = 100;

(function() {

  if (SAMPLING_RATE && SAMPLING_RATE < 100) {
    var match = document.cookie.match(/_lba=(true|false)/),
        activeFlag = false;
    if (match) {
      activeFlag = match[1] === 'true';
    } else {
      activeFlag = Math.random() * 100 <= 10;
      let date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = '_lba=' + activeFlag + '; domain=.TODO.com; path=/; expires=' + date + ';'; // TODO domain
    }
    if (!activeFlag) return;
  }

  //CanonizeURL if necessary
  var canonizeURL = (url) => { return url.split('?')[0]; };

  //Get items per page if necessary
  var getItemsPerPage = (selector) => { return Number(text(document.querySelector(selector))); };

  //Get current page if necessary
  var getCurrentPage = (selector) => { return Number(text(document.querySelector(selector))); };

  //Get elements from current page only
  var currentPageElements = (products, itemsPerPage) => { return products.filter((element) => products.indexOf(element) + 1 > +(products.length) - +itemsPerPage)}

  //Use textContent instead 'innerText' if necessary
  var textContent = (node) => node && node.textContent ? node.textContent.trim() : null;

  var collectRegularSearch = function() {

    if (!getParam(QUERY_PARAM_NAME)) {
      return;
    }

    // Determine the current page number
    var page = getParam(PAGINATION_PAGE_PARAM);
    if (isNaN(page) || page < 1) {
      page = 1;
    }

    // Determine the "items per page" amount
    var itemsPerPage = ITEMS_PER_PAGE;

    // Determine the offset
    var offset = 0;
    if (page && page > 1) {
      offset = (page - 1) * itemsPerPage;
    }

    return {
      list_name: listNames.searchResults,
      query: getParam(QUERY_PARAM_NAME),
      items: function() {
        // TODO
        return all(RS_RESULTS_SELECTOR).map(function(element, index) {
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
        var filters = {};
        
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
  };

  var collectAutocomplete = function(xhr) {
    var count = 1;

    //Check for input value, return if empty
    var inputValue = document.querySelector(INPUT_SELECTOR).value;
    if (inputValue == '') return
    
    return {
      list_name: listNames.autocomplete,
      query: inputValue,
      items: function() {
        if (xhr && xhr.responseText && xhr.responseText.length > 0 && xhr.responseText.replace(/ /g, '') != '[]') {
          return all('SELECTOR').map(function(element, index) {
            return {
              title: textContent(element.querySelector('SELECTOR')),
              url: toAbsoluteUrl(element.querySelector('SELECTOR').getAttribute('href')),
              price: extractPrice(textContent(element.querySelector('.price'))),
              position: count++,
              type: 'item',
              el: element
            };
          });
        }
        else {
          return [];
        }
      }(),
      filters: function() {
        var filters = {};

        return filters;
      }()
    };
  };

  var collectOriginalRecommender = function(recommender, recommenderName, context) { 

    if (!recommender || !recommenderName) return;

    const recommendedItems = Array.from(recommender.querySelectorAll('SELECTOR')).filter(i => toAbsoluteUrl(i.querySelector('SELECTOR').getAttribute('href')) != window.location.href);

    if (!recommendedItems || !recommendedItems.length) return;

    //create an array of css class names
    //check if any of classes is lbx-collected
    const isCollected = Array.from(recommender.classList).some(c => c == "lbx-collected");

    if (isCollected) return;

    recommender.classList.add('lbx-collected');
    
    return {
      list_name: listNames.recommendation,
      items: function() {
        // TODO
        return recommendedItems.map(function(element, index) {
          return {
            title: textContent(element.querySelector('SELECTOR')),
            url: toAbsoluteUrl(element.querySelector('SELECTOR').getAttribute('href')),
            position: index + 1,
            price: extractPrice(textContent(element.querySelector('.price'))),
            type: 'item',
            el: element
          };
        });
      }(),
      filters: function() {
        var filters = {};
        var basketItemsSelector = '';
        var basketPopUpItemsSelector = '';
          filterPush(filters, 'ItemIds', getItemIds(recommenderName, basketItemsSelector, basketPopUpItemsSelector) )
          filterPush(filters, 'Recommender', `${recommenderName}`);
          filterPush(filters, 'Type', `${recommenderName}`);
          //Use only if there are multiple recommenders that share the same type
          filterPush(filters, 'Context', `${context}`);
        return filters;
      }()
    };
  };

  var options = {
    fireMutationWhenElementExists: true,
    // coverSelector is the CSS selector for the main container that will fade
    // out while we are redirecting user to another query. The
    // header/navigation/footer should remain visible
    coverSelector: COVER_SELECTOR,
    gaTracking: true,
    gaTrackingId: 'default',
    conversionSelectors: CONVERSION_SELECTORS,
  };
  var tracker = createTracker(getTrackerId(), options);

  compose(
    //on page view
    onPageView((scope, done) => {
      ready(() => {
      if (window.location.href.includes(QUERY_PARAM_NAME)) {
        wait(function() {
          if(document.querySelector(RS_NO_RESULT_SELECTOR)){
            done([collectRegularSearch()])
            return;
          }
          if(!document.querySelector(RS_RESULTS_SELECTOR)) return false;
          done([collectRegularSearch()])
        })
      } else done();
      });
    }, options),

    // on click
    onClick(options),

    // on ajax
    onXhr((scope, xhr, done) => {
      let searches;
      if (xhr && xhr._url && xhr._url.indexOf(AC_XHR_URL_PART) > -1) {
        searches = [collectAutocomplete(xhr)];
      }

      if (xhr && RS_XHR_URL_PART && xhr._url && xhr._url.indexOf(RS_XHR_URL_PART) > -1) {
        wait([RS_RESULTS_SELECTOR], function() {
          searches = [collectRegularSearch()];
        })
      }
      done(searches);
    }, options),

    // Only use Mutation Observer in exceptional situations
    // onMutation('SELECTOR', debounce((scope, done) => {
    //   const searches = [collectRegularSearch()];
    //   done(searches);
    // }, 100), options),

    // Mutation Observer dedicated for collecting original recommenders
    // onMutation('', debounce((scope, done) => {
    //  let reco = document.querySelector('');
    //  let name = '';
    //  done([collectOriginalRecommender(reco, name)]);
    // }, 100), options),

    onExplicit()
  )(tracker);
})();