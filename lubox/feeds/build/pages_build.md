<?xml version="1.0" encoding="utf-8"?>
<root>
    <page>
      <url>/</url>

      <title>Unlock the Power of Luigi's Box</title>
      <content><![CDATA[Unlock the Power of Luigi's Box
    
      Your comprehensive guide to integrating, customizing, and mastering
      our AI-powered search and discovery solutions. Find everything you
      need to enhance your e-commerce platform.
    
    
      
        
          
        
        Quickstart guides
      
      Explore the documentation
    
    Overview
  



  
    Try Luigi's Box Search
    
      Use the controls to preview the search widget in different device views.
    
    
      
      
        
          
          
        
      
      
      
        
          
          
        
      
      
      
        
          
          
          
          
        
      
    
    
  
    AI-Powered Autocomplete
    
      Instantly suggest relevant products and categories as users type, powered by advanced AI algorithms.
    
  
  
    Personalized Results
    
      Deliver search results tailored to each user’s behavior and preferences for higher conversion.
    
  
  
    Analytics &amp; Insights
    
      Track search performance and user behavior with actionable analytics built right in.
    
  




  
    
  





  
    ×
    
  



document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('searchDemoFrame');
  const tabletBtn = document.getElementById('tabletBtn');
  const mobileBtn = document.getElementById('mobileBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const modal = document.getElementById('search-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeModalBtn = modal.querySelector('.close-modal');

  document.getElementById('quickstartBtn').addEventListener('click', function() {
  window.location.href = '/quickstart.html';
});
  

  tabletBtn &amp;&amp; tabletBtn.addEventListener('click', () => {
    iframe.style.width = '600px';
    iframe.style.height = '800px';
    iframe.style.borderRadius = '18px';
    iframe.style.display = 'block';
    modal.classList.remove('active');
  });

  mobileBtn.addEventListener('click', () => {
    iframe.style.width = '375px';
    iframe.style.height = '700px';
    iframe.style.borderRadius = '32px';
    iframe.style.display = 'block';
    modal.classList.remove('active');
  });

  fullscreenBtn.addEventListener('click', () => {
    modal.classList.add('active');
    iframe.style.display = 'none';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    iframe.style.display = 'block';
  });

 const handleResponsiveChange = () => {
  const demoText = document.querySelector('.demo-left p');
  const originalText = "Use the controls to preview the search widget in different device views.";
  const mobileText = "Open the site in desktop to see how it looks on different screen sizes.";
  
  if (window.innerWidth  {
    if (e.key === 'Escape' &amp;&amp; modal.classList.contains('active')) {
      closeModalBtn.click();
    }
  });
});]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/ab/intro.html</url>

      <title>Intro to AB testing</title>
      <content><![CDATA[Intro to AB testing
The first thing about AB tests is that we are trying to predict the future. What happens if we do X instead of Y. How much will we earn? Predicting the future is why we need to use statistical methods.

It’s not enough to just create two groups, measure some transactions and look which earned more.

Extreme example: What if you have two groups, each has exactly one session. Group A has a transaction, group B does not. Can you reliably say group A is better, or was the transaction done in this group by chance? Most likely it was by chance. 

Now how many sessions do you need to be certain to tell if it was an actual cause of the difference between groups, and not by chance? Ten sessions? A hundred? A thousand? We can’t tell until we look at the variability of the data (how much they naturally fluctuate).

Enter A:A testing.
Why we need A:A tests
A:A tests simply put two groups against each other while there is no real difference between them. Every day, one group will be slightly better than the other. Which side is better will change often, as the data fluctuate.

We need this to see how much fluctuation there is, and therefore, how long we need to run the AB test to detect certain amount of difference. If the group A is +8% better than B one day and -10% the next day, we’ll not be able to measure a difference of 0.3% simply because it’ll drown in the noise. 

Often making the AB test run longer helps to detect the difference more reliably, but sometimes the noise is too large and the difference too small to detect anything.

In such cases the test is inconclusive.

This happens and we need to keep that in mind when running AB tests.

Actually most of the tests in ecommerce end up inconclusive. It’s ok that they do. Many of the changes we think might do well actually don’t have any detectable effect.
A:B tests
When we know the variability of the data, we get an idea how long the test needs to run to detect a difference of a given amount. Then we can plan the test itself.

Best practices for running the test:


Clearly define what are the changes you’re going to test.
Determine the subset of users you’ll assign the test to. Will it be all users divided into A and B groups evenly, or otherwise? Try to have the groups as even in relevant metrics as possible, especially if the number of users will be too small to rely on natural random distribution. An example is 1000 users making tens or hundreds of thousands of orders per month in a B2B store. Consider excluding unusual groups of users (e.g. exclude B2B users if your shop is predominantly B2C).
Consider outliers beforehand. How will you tell which orders are too extreme? Top 1% of orders by their value?
Determine what metrics you’re going to track and where. Google Analytics? Data warehouse? Test if the metrics are being measured and are reliable.
Determine what type of calculation will be used to determine statistical significance. Frequentist or Bayesian?
Determine what are your criteria to consider the test to be conclusive (e.g. p-value  85%)
Don’t change anything while the AB test is running. You want to control the variables.
Make sure the users are divided evenly during the AB test. Take care not to accidentally boost one group by for example sending it more users from a marketing campaign.
It is generally advised against running multiple AB tests simultaneously (if there is a chance they could interfere with each other).
Note if there were some outages or disruptions in service during the AB test. Consider discarding the test if the disruption was too large or affected one group of visitors disproportionately.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/plp.html</url>

      <title></title>
      <content><![CDATA[Core concepts
Beyond choosing an integration path, it's important to understand the features that make Luigi's Box Product Listing powerful.



Personalized ranking: Products are ranked based on a feedback loop provided by analytics. This allows for a personalized display of products in listings and respects all merchandising rules you have set up.

Pairing: To use product listing, you must provide a mapping between categories and products. The default mapping expects your category object to contain an id attribute and your product object to contain a category_id attribute. If you need to change this default, you must contact support.

Hierarchical filtering: When dealing with hierarchical categories, you can use special filters like category_path and all_categories_path. Individual categories in the hierarchy should be separated by a double pipe ||. It is important that the filter value perfectly matches the product value, including letter case.]]></content>
      <icon>boxes</icon>
    </page>
    <page>
      <url>/lbx/requirements/platforms.html</url>

      <title>Ecommerce platforms</title>
      <content><![CDATA[Ecommerce platforms
Luigi's Box is compatible with several Ecommerce platforms. If you are using a supported platform, the Luigi's Box data connector will take care of synchronizing your catalog data automatically. Follow platform-specific instructions below.
Woocommerce
Luigi's Box can connect to Woocommerce API and synchronize the data. You will
need to generate the API key by following the instructions in the official
documentation.

You will need to generate a "consumer key" and "consumer secret" keys.
Prestashop
Luigi's Box can connect to Prestashop API and synchronize the data. You will
need to generate the API key which has access to the following resources:


languages
currencies
categories
tags
manufacturers
products
stock_availables
content_management_system
combinations
product_options (both options and option values)
product_features (both features and feature values)

commercetools
Luigi's Box can connect to commercetools API and synchronize the data. You will
need to supply the following information:


project_key
client_id
client_secret
api_host
auth_host

Idosell
Luigi's Box can connect to Idosell API and synchronize the data. You will need to provide the following information:


API key
shop_id
language_id

Magento
Luigi's Box can integrate with Magento. For setup instructions, please watch the installation video.
Shoptet
Please install the official Luigi's Box extension from the Shoptet App Store.
Shopify
Please install the official Luigi's Box extension from the Shopify App Store.
Shopware
Luigi's Box can integrate with Shopware. For setup instructions, please watch our installation video.
BSShop
Luigi's Box has partnered with BSShop to synchronize your data across both platforms seamlessly. There is no action necessary on your side.
Bigcommerce
Luigi's Box can connect to Bigcommerce API and synchronize the data. You will need to provide the following information:


Store Hash (unique store identifier), used in the API base URL: https://api.bigcommerce.com/stores/{store_hash}/v3/

API Access Token, which must be included in headers to authenticate requests: X-Auth-Token: {token}


Creative Sites
Luigi's Box have partnered with Creative Sites to synchronize your data across both platforms seamlessly. There is no action necessary on your side.
Programia
Luigi's Box have partnered with Programia to synchronize your data across both platforms seamlessly. There is no action necessary on your side.
Upgates
Luigi's Box can process standard Upgates export feeds. You will need to provide links to the existing feeds, but there is no other work necessary on your side.]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/requirements/product_identification.html</url>

      <title>Product identification</title>
      <content><![CDATA[Product identification

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


For effective learning of the AI models, we need to agree on the data identities that we will use for pairing. These identities will have to be present in the catalog data that you are pushing to Luigi's Box (via API or feeds). They also have to be present on the website where the analytics module can pick them up and use them for reporting.
You are using Google analytics enhanced ecommerce
If you use enhanced ecommerce in Google analytics and report ecommerce events via dataLayer, Luigi's Box analytics will pick them up automatically. The identities that you use for GA should also be used for Luigi's Box.

Below is an example "purchase" event that you can find the official GA documentation. Look inside the products and id field.

Please note that we are not asking you to implement enhanced ecommerce tracking for GA. If you don't already have a similar code on your site that's ok and you are ok to choose arbitrary product identity. If you already have enhanced ecommerce implemented, to use it effectively in tandem with Luigi's Box, we should align on using the same product identity.

Luigi's Box reads the events for "product detail view" - the detail event. See an example event from the GA documentation

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          
// Measure a view of product details. This example assumes the detail view occurs on pageload,
// and also tracks a standard pageview of the details page.
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  'ecommerce': {
    'detail': {
      'actionField': {'list': 'Apparel Gallery'},
      'products': [{
        'name': 'Triblend Android T-Shirt',
        'id': '12345',           // This should be the product identity for Luigi's Box
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray'
       }]
     }
   }
});


        
      
    
  

Luigi's Box reads the events for purchase - the purchase event. See an example event from the GA documentation

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          
// Send transaction data with a pageview if available
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'T12345',
        'affiliation': 'Online Store',
        'revenue': '35.43',
        'tax':'4.90',
        'shipping': '5.99',
        'coupon': 'SUMMER_SALE'
      },
      'products': [{
        'name': 'Triblend Android T-Shirt',
        'id': '12345',            // This should be the product identity for Luigi's Box
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
        'quantity': 1,
        'coupon': ''
       },
       {
        'name': 'Donut Friday Scented T-Shirt',
        'id': '67890',           // This should be the product identity for Luigi's Box
        'price': '33.75',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Black',
        'quantity': 1
       }]
    }
  }
});


        
      
    
  


If you are using GA4 and emit enhanced ecommerce events, you don't have to do anything else in terms of product identification.

You are not using Google analytics enhanced ecommerce
If you are not using enhanced ecommerce tracking, feel free to chose an immutable product identifier, such as SKU or your internal product ID. You will have to inlude this identifier in the product data you are pushing to Luigi's Box and also include it on your website in the product detail page.

Add the meta header for lb:id including the product identifier.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    
    ...]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/requirements/plp_instructions.html</url>

      <title>Provide instructions for Product listing rendering</title>
      <content><![CDATA[Provide instructions for Product listing rendering

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


When integrating product listings, Luigi's Box needs to identify the products that it should render for the particular listing. Depending on your business requirements, you may need to provide explicit identification about which products Luigi's Box should load. Think about it as the "query", which selects the products and Luigi's Box AI provides ranking and personalization to sort them. Instead of textual "query" which is inherently absent in product listings, you will use "filers" to instruct Luigi's Box which products it should load. For example, you may want to say: for this listing, load all products from category id 2342.
Loading products by category/brand URL
In the simplest but most frequent case you will only want to integrate category and brand listings. In this case, you don't need to do anything special as long as:


You are indexing nested category/brand objects via API or provide separate category/brand feeds
You are providing URL for category/brand objects


In this case, the integration provided by Luigi's Box team can use the URL of the category/brand listing page to identify the products. For example, the user visits this URL:

https://example.com/c/men/shirts

The integration will use this URL and load all products which belong to a category with this URL. In more technical terms, the integration will load all products using filters f[]=nested_category_url:/c/men/shirts.
Explicit instructions for complex scenarios
For product listings where the loading filters are more complex and do not depend on the URL, you need to provide explicit loading instructions in form of a short Javascript code.

These loading instructions are represented as a Javascript object with keys representing attribute names and values representing attribute values. For example, to populate the listing with new products, identified by their label, you may use the following notation:

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  window.LbxPlp = { labels: "new" }


        
      
    
  

A configuration like this will translate to an API filter f[]=labels:new

You may use combination of attributes and values, e.g., to load new products for "Men", use:

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  window.LbxPlp = { labels: "new", gender: "male" }


        
      
    
  

Note that the attribute names must match your indexed data, so if you provide instructions for label, your indexed data must contain label attribute.]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/requirements/add_to_wishlist.html</url>

      <title>Add to wishlist</title>
      <content><![CDATA[Add to wishlist

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


Adding to wishlist is conceptually very similar to Add to cart in the sense that this feature requires deeper integration with your web backend. The Luigi's Box team will provide the visual HTML element which allow the user to add the product to wishlist, but it is your responsibility to provide the technical means to make the wishlist buttons alive and working.

The integration is however, slightly more complex than for Add to cart, since the wishlist button usually serves 3 different interactions:
- Add the product to wishlist
- Remove the product from the wishlist
- Indicate if the product is in the wishlist already

If you require the "add to wishlist" button on your product tile, we will discuss the best way to implement it during the onboarding phase. In general, there are 3 ways that we can integrate the wishlist, depending on your preference, ease of implementation or your existing solution.

Choose just one of the options below, preferably the one that you are already using internally or that is easiest to implement.


    
    
        
        
 Using HTML markup

        
    
    
    
    
        
        
 Using your API

        
    
    
    
    
        
        
 Using Javascript functions

        
    
    

Using HTML markup
In some cases, you may already have the neccessary technical infrastructure in place which supports your wishlist and your implementation is being driven by the HTML annotations. In this case, it is enough if you specify the HTML structure that the Luigi's Box team needs to adhere to. Note that for successfull and complete integration, you need to cover all of the 3 scenarios mentioned above (add/remove/indicate).

See the following examples to illustrate how the HTML markup may be specified.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  


        
      
    
  

The data-wishlist-product-id is the data attribute that you use to set up the Javascript implementation on your side, to e.g.:


On initialization, call your internal API to detect if the product with the given ID (8382 in this example) is in the wishlist. Based on your API response, set the appropriate class that indicated if the product is in wishlist already or not. E.g., you can set icon-heart-empty CSS class to indicate that the product is not in the wishlist and icon-header-fill to indicate that the product is already in the wishlist.
Add onclick listener which, depending on the wishlist state, either removes or adds the product with the given ID to the wishlist, by caling your internal API and then updating the CSS class to change the wishlist indicator for this product.


Note that any listeners that you define must be declared as "live listeners" to pick up any elements that are created after your website is done rendering, since the Luigi's Box services are integrated as an SPA component.
Using your API
You can provide us with 3 API calls, each taking care of one of the 3 wishlist interactions.
Add to wishlist
You will provide an API which the Luigi's Box integration calls and passes it the product ID as the query string parameter. The API is responsible for adding the product to wishlist. The Luigi's Box integration will read the reponse HTTP code and if the request was successfull (HTTP status 2xx), it will update the wishlist indication to reflect the change. For example:

POST http://yoursite.com/api/wishlist/add?product_id=45345
Remove from wishlist
You will provide an API which the Luigi's Box integration calls and passes it the product ID as the query string parameter. The API is responsible for removing the product from wishlist. The Luigi's Box integration will read the reponse HTTP code and if the request was successfull (HTTP status 2xx), it will update the wishlist indication to reflect the change. For example:

POST http://yoursite.com/api/wishlist/remove?product_id=45345

or

DELETE http://yoursite.com/api/wishlist/45345
Check wishlist status
To allow the integration to display the appropriate state of the wishlist icon (usually a blank heart/heart with a fill), you will provide a bulk API which accepts the list of product IDs and responds with wishlist status. For example:

GET http://yoursite.com/api/wishlist/status?product_ids=45345,17266,99982

The response should be JSON data, which reflects back the product IDs along with their wishlist status, e.g.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  45343: true,  // product is in user's wishlist
  17266: false, // product is not in user's wishlist
  99982: true
}

        
      
    
  
Using Javascript functions
As an alternative to the API, you can provide 3 Javascript functions, each taking care of one of the 3 wishlist interactions. These Javscript functions will usually be just the wrappers for your internal HTTP API:


To add to the wishlist, implement a function with the signature: addToWishlist(productId).
To remove from the wishlist, implement a function with the signature: removeFromWishlist(productId).
To check if a product is in the wishlist, implement a function with the signature: isInWishlist(productIds) which accepts an array of product IDs and returns a JSON object in the same structure as the API call above, reflecting the product IDs as the keys in the object structure.

Mix
A mix of the approaches outlined above is possible. You may use prepare a Javascript functions to take care of adding to and removing from the wishlist, and provide an API to check the product-wishlist status. As long as you cover all of the 3 interactions, you can freely mix different approaches.
CORS
If you are providing us with an API endpoint, and that API lives on another domain or a subdomain than the main website, then you will need to provide CORS headers.
The request to your API will be done with withCredentials: true, in order to allow the browser to send cookies which allow you to identify the user. Using withCredentials: true in the request has an impact on the CORS headers that you need to set.

These are the response HTTP headers that you need to set. Please replace https://www.yourstore.com in the example with your domain.

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://www.yourstore.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: *

        
      
    
  

Note that you can't simply set Access-Control-Allow-Origin: * because the wildcard mode is not compatible with the credentials mode.]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/requirements/spa_events.html</url>

      <title>Single page applications (SPAs)</title>
      <content><![CDATA[Single page applications (SPAs)

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


If your website is written as a Single page application you need to take an extra step to make it compatible with Luigi's Box integration via the LBX script.

How to know if your website is a Single page application?


It is written in React
It is written in Vue.js
It is written in Angular


To be 100% sure, consult your developers to confirm.
Page load events
The SPAs are avoiding a regular page loading mechanism by design. If you navigate the website, e.g. click into a category listing or view a product detail, the browser is not reloading the page, instead the page loading is handled by the application.

To notify Luigi's Box that a page has been loaded, emit a JavaScript event called lbx:page:load. You can use the sample code below.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          const event = new Event("lbx:page:load");
document.dispatchEvent(event);

        
      
    
  

You have to emit this event for every page "load" where the contens of the page change.


You only have to do this if your website is written as a Single page application.]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/requirements/recommender_wrappers.html</url>

      <title>Recommender wrappers</title>
      <content><![CDATA[Recommender wrappers

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


Recommenders will occupy a space on your website which must be prepared upfront. This space is denoted by wrappers - a specifically designated HTML elements in your website structure, which are just placeholders, waiting to be replaced by the real content generated by the recommenders.

These wrappers/placeholders are necessary to maintain a good user experience and avoid shifting contents of the website down, as new content generated by the recommenders appear. It is technically possible to integrate the recommenders even without wrappers, but this leads to "layout shifts". As the recommenders fill the space, the contents of the page move down. These shifts will worsen your Cumulative Layout Shift metric, which is part of Core Web Vitals and impacts your SEO score.

When the placeholders are present on the web, there are no layout shifts, becase the recommenders simply fill in the space previously occupied by the placeholders.

See the video below for a more detailed explanation.


Placeholders
To avoid the negative effects of layout shifts, we will ask you to create the wrapper elements for every recommender that we will be integrating.

The wrappers will be very simple, they will usually require adding a snippet of HTML code and respective CSS rules which indicate that the recommenders are loading.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  

Every wrapper must have a unique id which we can target. It is very important that every wrapper fills in the intended space and has a height set up. See the CSS below for an example.

  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          #lbx-recommender-homepage {
  height: 200px;
}

        
      
    
  

The element below demonstrates the placeholder with the loading state. The loading state would disappear once the Luigi's Box recommender initializes and takes over.

You can build more complex wrappers by providing a loading state, see the example below for inspiration.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
 


        
      
    
  

And the respective CSS.

  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          #lbx-recommender-homepage {
  height: 200px;
}
.recommender-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
  background: #eee;
}
.spinner {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.spinner:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #000 transparent #000 transparent;
  animation: spinner 2.2s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

        
      
    
  


#lbx-recommender-homepage {
  height: 200px;
}
.recommender-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
  background: #eee;
}
.spinner {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.spinner:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #000 transparent #000 transparent;
  animation: spinner 2.2s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


Placeholder:]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/requirements/add_to_cart.html</url>

      <title>Add to cart</title>
      <content><![CDATA[Add to cart

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


Adding products to cart is heavilly dependent on the specifics of your ecommerce store technical solution. If you want us to implement "add to cart" button from the product tile (in search, autocomplete, recommender or any service that we are integrating) you will need to provide us with the technical interface which we can use to add the product to cart.

The technical interface that you provide must serve the full UX interaction including:


Add the product to cart
Display the confirmation popup
Update the cart icon in the menu


Based on our experience, we list some of the frequently used interfaces that we can use.
Using a Javascript function
You can implement a Javascript function which accepts 2 arguments - ID of the product and optionally a quantity of the product to add to cart.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function AddToCart(productId, quantity) {
}

        
      
    
  

In the product tile implementation, we will call this function and pass it the product id that you specify. This function will take care of full UX interaction as stated above.
Using a specific HTML structure
Adding to cart can often be integrated by setting up the HTML structure in a certain way, which your ecommerce platform recognizes. If your ecommerce platform works this way, it is enough for us if you specify the HTML structure. For example, you may specify that the add to cart button must be incorporated in the following structure.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
  
  Add to cart


        
      
    
  

In most cases, this scenario relies on Javascript listeners which intercept clicking on the "add to cart" button, read the prescribed HTML structure and handle the user interaction. For this solution to work, these listeners must be set up as "live listeners" and handle product tiles which are added dynamically. In other words, this solution must handle product tiles which are added after the page has been rendered, e.g., when the user clicks next page in the pagination. Luigi's Box services are integrated as single page applications and there will be no page load.]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/solutions.html</url>

      <title>Solutions</title>
      <content><![CDATA[Solutions

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


The solutions below describe the standard approach to some of the more complex situations. Take the questionnaire to see what applies to your situation.


      
        
          
            Pricing API
            
            
            Read the docs →
          
        
      
      
        
          
            Pricing levels
            
            
            Read the docs →]]></content>
      <icon>easel2-fill</icon>
    </page>
    <page>
      <url>/lbx/robustness/marking_search_fields.html</url>

      <title>Marking search fields</title>
      <content><![CDATA[Marking search fields

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


When integrating autocomplete and search, we need to hook into your existing searchboxes. We will identify all of your searchboxes (there may be several of them, e.g. on desktop and on mobile) by their CSS classes.

If at any point in the future you change the CSS classes for the searchbox, the integration will break, as Luigi's Box will no longer be able to find the searchboxes and autocomplete and search will stop working. We will usually be able to provide a fix and update the selectors very easilly, but the downtime of autocomplete and search may impact your business in a negative way.

To avoid unexpected breakage, you can mark the searchboxes with a CSS class dedicated to Luigi's Box. See the examples below.

The example below shows how the HTML code for a searchbox typically looks like.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  

To avoid unexpected breakage, you can add the lbx-searchbox CSS class and change the HTML code to:

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  

This way it will be more obvious to your developers that the searchbox has special purpose for Luigi's Box and as long as they keep this class, they can add or remove style-related CSS classes.]]></content>
      <icon>tsunami</icon>
    </page>
    <page>
      <url>/lbx/robustness/wrapper.html</url>

      <title>Marking wrapper element for search and product listing</title>
      <content><![CDATA[Marking wrapper element for search and product listing

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


The search and product listing integration provided by the Luigi's Box team needs an existing HTML element that it will replace with the search/listing user interface. Luigi's Box team will identify a suitable HTML element in your existing HTML structure and use it. To avoid breaking the integration in the future when you do a minor redesign, we recommend that you explicitely mark this HTML element with a CSS class lbx-wrapper. This way you will avoid an accidental search/product listing downtime when you deploy a design change.

The example below shows how the HTML code for a wrapper typically looks like.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    ..
    
    
  


        
      
    
  

To avoid unexpected breakage, you can add the lbx-wrapper CSS class and change the HTML code to:

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    ..
    
    
  


        
      
    
  

This way it will be more obvious to your developers that the wrapper has special purpose for Luigi's Box and as long as they keep this class, they can add or remove style-related CSS classes.]]></content>
      <icon>tsunami</icon>
    </page>
    <page>
      <url>/lbx/solutions/pricing_levels.html</url>

      <title>Pricing levels</title>
      <content><![CDATA[Pricing levels

You are reading about requirements for the
integration done by the Luigi's Box team.
You can safely skip this part of the documentation if you are integrating yourself using either
API or Luigi's Box frontend libraries.


If your store is using several pricing levels and the prices that your end-users see are dependent on
their assigned pricing level, we will follow this solution to render correct prices.

Note that this solution is only applicable if the number of pricing levels is finite and relatively
small (up to 20 pricing levels). The more complex pricing scenarios can be solved using thePricing API.

This solution consists of 2 parts.
Identify all prices for the product
In the data you are pushing to Luigi's Box (applies to both the API
and feeds) you will include the prices for all of the pricing levels, for
every product. See example below for a reference.

  
    
      
        
          xml
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          
  13.9 EUR
  13.9 EUR
  12.8 EUR


        
      
        
          {
  fields: {
    price_level_1: 13.9;
    price_level_2: 13.9;
    price_level_3: 12.8;
  }
}

        
      
    
  

This example shows scenario for 3 pricing levels, if your particular case involves more levels, enumerate
prices for all of them. Make sure to identify every pricing level with a unique identifier. This
example identifies pricing levels with a numerical ID, but it's possible to use text labels, such
as in the example below.

  
    
      
        
          xml
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          
  13.9 EUR
  13.9 EUR
  12.8 EUR


        
      
        
          {
  fields: {
    price_level_regular: 13.9;
    price_level_gold_membership: 13.9;
    price_level_vip: 12.8;
  }
}

        
      
    
  
Identify user's pricing level
On the frontend, identify the pricing level that the user belongs to. You can use any of the options
below, but make sure that you use the same pricing level identifier as in the product data. Referring
to the example in this scenario that would be one of regular, gold_membership or vip.


Use a cookie to set the user's pricing level, e.g. pricing_level=regular.
Set a meta header in the HTML code]]></content>
      <icon>easel2-fill</icon>
    </page>
    <page>
      <url>/lbx/solutions/pricing_api.html</url>

      <title>Pricing API</title>
      <content><![CDATA[Pricing API

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


The pricing API is used mostly in B2B store for the complex scenarios where you are using a pricing model where the same product can have different price for different customers. Note that if you have relatively small number (less than 20) of pricing levels, we can use a simpler solution than the pricing API. The pricing API is usually used for cases where there are infinite numbers of pricing combinations and they are impossible to enumerate.

Luigi's Box can use a pricing API to load prices for the specific products for the currently logged in customer.

The pricing API has to be implemented by you and respect the specification in this document.
Specification
GET /api/pricing?products=2342,2343,4525

We will call the API passing it the comma delimited list of products along with all of the user cookies. You are supposed to use the cookies to identify the user and respond back with the structured data about per product pricing. If the product is discounted, you may also include price_old attribute to denote theoriginal price. The expected response is noted below.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  2342: {
    price: "34 EUR",
    price_old: "37 EUR"
  },
  2343: {
    price: "18 EUR",
    price_old: "22 EUR"
  },
  4525: {
    price: "13.90 EUR"
  }
}

        
      
    
  

The flow of the API call is as follows:


Your end-user types into the searchbox
Our integration code calls the respective service API (autocomplete, search, recommender, etc.) and loads the results
Results are rendered without prices, instead of prices, we show just loading indicator
We call your pricing API, passing in the product IDs and wait for your API to respond
While the API call is in-flight, the loading indicator is shown instead of prices. The latency of your API impacts the perceived loading speed.
Once your pricing API responds, we replace the loading indicators with the prices returned by the API

CORS
If you are providing us with an API endpoint, and that API lives on another domain or a subdomain than the main website, then you will need to provide CORS headers.
The request to your API will be done with withCredentials: true, in order to allow the browser to send cookies which allow you to identify the user. Using withCredentials: true in the request has an impact on the CORS headers that you need to set.

These are the response HTTP headers that you need to set. Please replace https://www.yourstore.com in the example with your domain.

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://www.yourstore.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: *

        
      
    
  

Note that you can't simply set Access-Control-Allow-Origin: * because the wildcard mode is not compatible with the credentials mode.]]></content>
      <icon>easel2-fill</icon>
    </page>
    <page>
      <url>/lbx/robustness.html</url>

      <title>Robustness</title>
      <content><![CDATA[Robustness

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


This sections describes optional changes in your website that make the Luigi's Box integration more robust and less likely to break in case of changes on your side. None of the changes described here are necessary to start the integration and we recommend to leave these out to a phase when the integration is finished. Take the questionnaire to see what applies to your situation.


      
        
          
            Marking search fields
            
            
            Read the docs →
          
        
      
      
        
          
            Marking wrapper
            
            
            Read the docs →]]></content>
      <icon>tsunami</icon>
    </page>
    <page>
      <url>/lbx/form.html</url>

      <title>Questionnaire</title>
      <content><![CDATA[Questionnaire
Fill in the following form to learn about the requirements that you will need to deliver before we are able to start the integration.
We are not able to provide you an estimate in hours, but we provide a complexity estimate which can help you roughly understand the development effort on your side.


Trivial - Can be usually done within an hour
Easy - Can be usually done within a couple of hours
Medium - Can be usually done within a day or two
Hard - Usually takes several days


Talk to your developers to get a more precise estimate.


  
    
      Choose services that you wish to integrate
      
        
        Autocomplete + Search
      
      
        
        Product listing
      
      
        
        Recommender
      

      Which platform is your store running on?
      
        Choose
        Custom platform
        Woocommerce
        Prestashop
        commercetools
        Shoptet
        Shopify
        BSShop
        Creative Sites
        Programia
        Upgates
      

      
        Do you want to push data via feeds or via API?
        
          Choose
          Feeds
          API
        
      

      
        Do you want to enable variants-aware search?
        
            
            Yes
        
      

      
        Do you want to enable variants-aware search?
        
            
            Yes
        
      

      Is your store implemented as a Single Page Application?
      
        
        SPA
      

      Do you want to integrate "Add to cart" from the product tile?
      
        Choose
        Integrate "add to cart"
        Product tile without "add to cart"
      

      Do you use dynamic (b2b) pricing?
      
        Choose
        No, every user sees the same pricing
        Yes, the store has a couple of pricing levels
        Yes, the store has complex pricing rules and the number of combinations is high or infinite
      
    

  
  
    
      
        
          Reference
          Requirement
          Complexity
        
      
      
        
          M.1
          Expose product identity on the frontend
          Trivial
        
        
          M.2
          Prepare HTML wrapper for every recommender
          Easy
        
        
          M.3
          Index data via API
          Hard
        
        
          M.3.1
          Provide variants as nested objects
          Medium
        
        
          M.4
          Prepare data feeds
          Easy
        
        
          M.4.1
          Provide variants and the grouping indefier in the feed
          Easy
        
        
          M.5
          Follow the platform-specific guide to set up data synchronization
          Trivial
        
        
          M.6
          Emit page ready event
          Easy
        
        
          M.7
          Provide add to cart callbacks
          Medium
        
        
          M.8
          Implement pricing API
          Medium
        
        
          M.9
          Provide pricing levels in the data and on the frontend
          Medium
        
        
          M.10
          Identify products which populate the product listing
          Medium
        
        
          O.1
          Mark search fields with a CSS class
          Trivial
        
        
          O.2
          Mark wrapper with a CSS class
          Trivial
        
      
    
  



  function summarize() {
    reset();

    document.querySelectorAll('[data-toggle]').forEach(function(el) {
      if (el.parentNode.classList.contains('r-hidden') || el.parentNode.parentNode.classList.contains('r-hidden')) {
        return;
      }

      const idsToToggle = el.dataset.toggle.split(',');

      idsToToggle.forEach(function(id) {
        if (id == '@value') {
          const toggle = el.selectedOptions[0].dataset.toggle;
          if (toggle) {
            toggle.split(',').forEach(function(innerId) {
                document.querySelector(innerId).classList.remove('r-hidden');
            });
          }
        } else {
          if (el.checked) {
            document.querySelector(id).classList.remove('r-hidden');
          }
        }
      });
    });
  }

  function reset() {
    document.querySelectorAll('.js-requirements tbody tr, .r-adaptive').forEach(function(tr) {
      tr.classList.add('r-hidden');
    });
  }

  document.querySelectorAll('[data-toggle]').forEach(function(el) {
    el.addEventListener('change', summarize);
  });

  summarize();]]></content>
      <icon>patch-question</icon>
    </page>
    <page>
      <url>/lbx/requirements.html</url>

      <title>Requirements</title>
      <content><![CDATA[Requirements

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


The requirements in this section may be applicable to your situation to enable effective integration. Take the questionnaire to see what applies to your situation.


      
        
          
            Product identification
            
            
            Read the docs →
          
        
      
      
        
          
            Platforms
            
            
            Read the docs →
          
        
      
      
        
          
            SPA events
            
            
            Read the docs →
          
        
      
  
  
      
        
          
            Add to cart
            
            
            Read the docs →
          
        
      
      
        
          
            Add to wishlist
            
            
            Read the docs →
          
        
      
      
        
          
            Recommender wrappers
            
            
            Read the docs →
          
        
      
  
  
      
        
          
            Product listing instructions
            
            
            Read the docs →]]></content>
      <icon>columns-gap</icon>
    </page>
    <page>
      <url>/lbx/design.html</url>

      <title>Design</title>
      <content><![CDATA[Design

You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.


The design of the services is delivered in the standard Luigi's Box design which is defined in the Figma document attached below. We will automatically adjust the following styles to match the design of your web:


Color scheme
Fonts
Product tile in search, PLP and recommenders, to match the design of your original product tile.


Other adjustments are possible, but are not included in the standard integration package and may be billed extra using the agreed hourly customization rate.


Customizations
The design of all of the Luigi's Box services can be customized. Note that this part of the documentation only deals with the scenario where the services are integrated by the Luigi's Box team. When you are integrating the services yourself, either using the API or frontend libraries, you get unlimited flexibility and can implement the design in any way that's most appropriate for your business.

When you request customizations during the onboarding phase, the Luigi's Box team will provide the initial time and price estimate of the amount of work necessary to implement your customizations. Based on the initial estimate, you may adjust the scope of the customizations. In case of more complex customizations, we recommend that you integrate the services yourself using either API or the frontend libraries.]]></content>
      <icon>file-earmark-image</icon>
    </page>
    <page>
      <url>/autocomplete/autocomplete_js.html</url>

      <title>Autocomplete.js</title>
      <content><![CDATA[Autocomplete.js
We provide a JavaScript autocomplete widget which works directly with the JSON
API. No programming is necessary, just include the
script and CSS into your webpage and provide a simple configuration.

The library provides 3 built-in layouts which you can use out of the box.


  
    
      
      
        Hero layout
        Recommended
        Shows a grid of products with one product standing out.
        Basic demo
        Grid demo
      
    
  

  
    
      
      
        Line layout
        
        Shows results in a top-down list. May be turned into 2 columm layout.
        Basic demo
        2 column demo
      
    
  

  
    
      
      
        Grid layout
        
        Shows results in a grid. This layout is deprecated, consider using hero layout in grid mode.
        Basic demo
      
    
  

Autocomplete integration

Note that the widget uses autocomplete endpoint which is cached internally. If you are using this
widget to check your data after you've issued a content update, you might need to wait up to 5 minutes for
the recent changes to show up. Consider checking the data through raw REST endpoints as described in content updates.


Add dns-prefetch instructions for browsers, for faster autocomplete experience and add autocomplete.css reference to your  element.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          


        
      
    
  

Locate the HTML element of your search box, and add the initialization code
after its input element.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
  



  function LBInitAutocomplete() {
    AutoComplete(
      {
        Layout: 'line',
        TrackerId: '1234-5678',
        Locale: 'en',
        Types: [
          {
            type: 'item',
            name: 'Items',
          },
        ],
      },
      '#autocomplete'
    );
  }



        
      
    
  

You can configure the autocomplete widget to enable extra features. See Options reference for details and examples.


If you are pushing data into Luigi's Box via API make sure you are also indexing Web URL, otherwise the links in autocomplete may not work.


If you are using Cookiebot to manage cookie consent, we have seen cases where Cookiebot is interfering with the script onload event. If you initialize autocomplete via the onload event such as in the example above, the onload handler will never be executed. If you see this issue, try initializing via Cookiebot's CookiebotOnTagsExecuted event.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          


  window.addEventListener('CookiebotOnTagsExecuted', function (e) {
    LBInitAutocomplete();
  });


        
      
    
  
Autocomplete parameters
AutoComplete object accepts 4 main parameters:

REQUIRED1. settings as a JSON object of the options.

REQUIRED2. selector of the input element.

optional3. HTML document.

optional4. Array of selectors to wait for bafore initializing autocomplete.js

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  function LBInitAutocomplete() {
    AutoComplete(
      {
        Layout: 'line',
        TrackerId: '1234-5678',
        Locale: 'en',
        Types: [
          {
            type: 'item',
            name: 'Items',
          },
        ],
      },
      '#autocomplete',
      document,
      ['.selector-to-wait']
    );
  }


        
      
    
  
Content Security Policy
If your website is using Content Security Policy, you need to add following
rules to allow Luigi's Box autocomplete.js to work.
      
        
CSP directive
Value


        
connect-src
https://live.luigisbox.com


script-src
https://cdn.luigisbox.com


style-src
https://cdn.luigisbox.com


      
Options reference
The example below shows a more complex example of autocomplete setup. Consult the options reference below for explanations.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  



  AutoComplete(
    {
      Layout: 'line',
      TrackerId: '1234-5678',
      Locale: 'en',
      Types: [
        {
          type: 'item',
          name: '',
          size: 6,
          attributes: ['category.hl->1', 'brand.last', 'ean'],
        },
        {
          type: 'category',
          name: 'Categories',
          size: 2,
          attributes: ['categories_hierarchy.last-1

        
      
    
  

AutoComplete accepts these options:
      
        
Option
Comment
Example


        

LayoutREQUIRED string

String, which specifies what kind of layout will be used. Supported layouts are heromobile, hero, line or grid. If you do not specify this option, we will fallback to an obsolete layout, which is no longer supported and most of the features described here won't work.
Layouts



TrackerIdREQUIRED string

Identifier of your site within Luigi's Box.




TypesREQUIRED array

List of content types which should be searched and displayed. Each content type must have a separate configuration. See Types parameters.
Types parameters



Widthoptional number

Autocomplete width (px). If not set, the autocomplete widget will inherit width of the search box input element.




DidYouMeanoptional function

Function that gets called with three parameters input, matches and resultSetType , which returns a text information to show on the top of the search results to distinguish different match modes: exact match (we found exactly what was typed as a query), fuzzy/partial match (we found only similar results when considering typos and misspellings) or mixed match (a combination of exact and partial matches).




FollowSuggestedUrloptional boolean

Boolean indicating whether to redirect users to a url suggested by the server, which could be a matching category page or a Fixit url. (default: false)




CloseWhenQueryIsEmptyoptional boolean

Boolean - by default true, if set to false, AutoComplete will not close when user clears input (with backspace for example) and top recommendations will be shown instead.




TypingSuggestionsoptional boolean

Boolean, if true, the searchbox will show simulated typing of example queries, drawing attention to the searchbox.
Typing Suggestions



FormatForDisplayoptional function

function(result), called for each result before it is displayed and provides a way to update result attributes when necessary, or to not display the result at all (return null).




Selectoptional function

function(event, result, row), called when result is selected (either by clicking or by keyboard selection). Allows custom action on selection - cancel the event by calling event.preventDefault and handle the selection yourself.




BeforeRender function

function(query, results), called before autocomplete widget is rendered and must return an array of results.




AfterRenderoptional function

function(query, results), called when autocomplete widget is rendered.




BeforeOpenoptional function

Callback function, called before autocomplete widget is shown. It is called before the widget opens, e.g., when you type first letter into the search box which causes the widget to appear.




AfterCloseoptional function

Callback function, called after autocomplete widget is closed (either explicitly, or implicitly, because there are no results to be shown).




Actionsoptional array

Array of actions that may be applicable for a row. Each element of the array is an object with the following properties see Action properties.
Add to cart



Alignoptionalstring

String, with two options: input or center. Setting Align to center will keep the widget centered on the screen. Setting align to input will keep the widget's left side aligned with the left side of the search box. Supported only in Grid layout.




GridPositionoptionalstring

String, with two options: left or right. This option drives the column layout of the grid. Settings this option to left will place the "main" type (usually products) with images and prices on left side while the other types will be in the right column. With GridPosition: right the main type will be on the right side, and the other types in the left column.




ShowHeroProductoptional boolean

Boolean - by default true, specifies whether the hero product is displayed separately in its own wrapper.
Hero/Grid layout



ShowAllCallbackoptional function

Search-form submission callback. Useful if autocomplete should submit the searchbox in a non-standard way, e.g. when the enclosing form is missing.




AutoRepositionoptional boolean

Boolean, default false. When enabled, Autocomplete widget is recalculating its position based on the input field, to be nicely aligned in every situation (after resizing, scrolling...).




LocaleREQUIRED string

If set, appropriate localisation patterns will be used. This is useful if your website has multiple language versions.
Localisation



Translationsoptional object

Object used as dictionary, including locale keys and translation themselves.
Localisation



Preferoptionalarray

Array of key/value pairs to use for query-time boosting.
Query-time boosting



PostponeDataCollection optional

Boolean indicating whether data collection should be postponed after the OnDone function is called
Postponing data collection



Personalization optional

Boolean, default false. When enabled, it can drive personalization of results. The option will take effect only if personalization is also enabled on the backend.



      
Types parameters      
        
Types parameter
Comment
Example


        

typeREQUIRED string

Type identifier (e.g., item or category).




nameREQUIRED string or function

Title shown at the top of the autocomplete section where items of this type will be shown.




sizeoptional number

How many items of that particular type you want to show.




placementoptional string

Position, where results will be placed. If one of the types has placement defined, it has to be defined in all other types. Only supported placement parameters are:  main - items will be placed in the main section in Grid layout and wrapped with luigi-ac-main class,  others - items will be placed in the sidebar section in Grid layout and wrapped with luigi-ac-others class. Placement is also supported in Line layout and is especially useful when using the 2-column variant, because it lets you precisely specify which column a type should go into.




attributesoptional array

Array of attribute expressions which will be evaluated to show item attributes alongside its title. Supported only in Line layout. See example on the right, or the Attributes expressions section.




recommendoptional object

Display autocomplete section populated by most popular items when user clicks into the search field without typing a query. Value is an object which may contain name and size keys for specifying different name at the top of the section and how many top items to display. If you use an empty object, name and size values will be inherited from the parent type configuration.
Display recommended items



defaultFiltersoptional

Object with key/value pairs, representing the filters to apply when querying for autocomplete suggestions.
Filtering in autocomplete



filtersoptional

Custom function which must return key/value pairs, representing the filters to apply when querying for autocomplete suggestions.
Filtering in autocomplete


      
Action properties      
        
Actions property
Comment


        

forRowoptional function

function(row) which must return a boolean indicating if the action is applicable for the given row (passed as a function parameter). If this function retuns false than all other parameters have no effect.



iconUrloptional string

Full URL address of an image that will appear as the action icon. We recommend using a 60x60 px PNG image with transparent background.



titleoptional string

Text that will appear on mouseover action over the icon.



actionoptional function

function(event, result), called when user clicks the icon. This function is passed 2 arguments, the JavaScript event and the result object. It is a responsibility of this function to do the necessary work, e.g., put item to cart.


      
Returning self reference
The AutoComplete constructor returns references to all created widgets, so you
can access its public functions and
options. The references are returned as an array, one
object for each HTML selector that was matched by the provided input box
selector.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  var ac = AutoComplete(
    {
      Layout: 'line',
      TrackerId: '1234-5678',
      Locale: 'en',
      Types: [
        {
          type: 'item',
          name: '',
          size: 6,
        },
      ],
    },
    '#autocomplete'
  );

  ac[0].Close();
  ac[0].Reposition();


        
      
    
  
Public functions
AutoComplete widget provides these public functions. You'll need to obtain a
reference to the widget first, before you can call these functions.
      
        
Function
Comment
Example


        

Repositionfunction

Reposition the widget and align it with your search input box. You don't need to call this function under normal circumstances. A typical use case for this function is when your website layout changes due to a user interaction and you need to reposition the autocomplete widget. A case we see quite often is that you have a fixed "bar" at the top of the page with a notification which the user can close. This can lead to a situation where a user types query into the search box, the autocomplete widget renders itself aligned under the bottom, and then the user closes the notification bar, which causes the page content to shift a few pixels up, and suddenly the widget is not aligned properly. In this case, you can call the Reposition() function when the bar is closed to fix the alignment.




OpenEmptyfunction

Opens an empty widget, with just the bare UI. You must provide your own HTML which will be rendered as the body of the autocomplete. This is useful in situation where you want to render the autocomplete widget with your custom content and keep all the standard behaviour and listeners active.




Destroyfunction

Destroys the widget, removes event listeners and drops caches. This function is useful mostly for SPAs where you need to reconfigure the widget between page loads, or remove the autocomplete completely for certain pages.



      
Layouts
We provide these built-in layouts:
      
        
Layout
Comment
Example


        
Hero
Specify Layout: 'hero' or Layout: 'heromobile' for a responsive mobile version.
Hero Layout


Line
Specify Layout: 'line'.
Line Layout


Grid
Specify Layout: 'grid'.
Grid Layout


      
Shared public CSS classes      
        
Class
Comment


        
luigi-ac-main
Wraps the (visually) "main" section of the widget. See Placement of items for more details.


luigi-ac-others
Wraps the (visually) less important section of the widget. See Placement of items for more details.


luigi-ac-item
All "rows" in autocomplete widget are wrapped in this class.


luigi-ac-header
Wraps results header.


luigi-ac-product
Class for each product.


luigi-ac-category
Class for each item which is not a product or query.


luigi-ac-query
Class for each item which is type query.


luigi-ac-image
Class for each item's image.



luigi-ac-title or luigi-ac-text

Class for each item's title.


luigi-ac-attrs
Wraps attributes.


luigi-ac-attr
Class for each attribute.


luigi-ac-price
Wraps price of an item.


luigi-ac-button
Wraps button block for 'Show All Items'.


      
Hero layout
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'hero',
    TrackerId: '1234-5678',
    Locale: 'en',
    ShowHeroProduct: true,
    Types: [
      {
        type: 'item',
        placement: 'main',
        size: 7,
        attributes: ['category'],
      },
      { type: 'query', size: 4, placement: 'others' },
      {
        type: 'category',
        size: 3,
        placement: 'others',
      },
      {
        type: 'brand',
        size: 5,
        placement: 'others',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  


Public CSS classes
We provide these classes in hero layout as part of the widget's public interface:
      
        
Class
Comment


        
luigi-ac-hero
Wraps the autocomplete widget for Hero layout.


luigi-ac-hero-color
Class for styling queries and caret with top strip. Basically this class defines main color of this layout.


luigi-ac-hero-color-clickable
Class for styling "show all products" button and queries rectangles.



luigi-ac-actions and luigi-ac-action

Wraps actions like 'Buy' or 'Sell'.


luigi-ac-first-main
Wrapper for "Hero product" - the first one appeared.


luigi-ac-rest-main
Wrapper for all other products except "Hero product".


      
Line layout
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'line',
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        name: 'Items',
      },
      {
        type: 'category',
        name: 'Categories',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  


Public CSS classes
We provide these classes as part of the widget's public interface:
      
        
Class
Comment


        
luigi-ac-line
Wraps the autocomplete widget for Line layout.



luigi-ac-actions and luigi-ac-action

Wraps actions like 'Buy' or 'Sell'.


      
Grid layout
Grid layout consists of two parts – a main "grid" part with images and
prices, and an additional, more condensed column.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    ShowBranding: true,
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        name: 'Products',
      },
      {
        type: 'category',
        name: 'Categories',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  


Public CSS classes
We provide these classes as part of the widget's public interface:
      
        
Class
Comment


        
luigi-ac-grid
Wraps the autocomplete widget for Grid layout.


      
Position of Grid layout
This can be done by defining GridPosition: left or GridPosition: right as autocomplete widget's option.

Default position of grid is left, that means, that items with defined placement: 'main' are on left side, but you can explicitly define that state.

If placement is not defined, then first specified type is considered main and will be on the left side. Other types will be on the right side.


Grid layout autocomplete with GridPosition: 'left'


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    ShowBranding: true,
    GridPosition: 'left',
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        placement: 'main',
        name: 'Products',
      },
      {
        type: 'category',
        name: 'Categories',
      },
      {
        type: 'query',
        name: 'Queries',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  




Grid layout autocomplete with GridPosition: 'right'


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    ShowBranding: true,
    GridPosition: 'right',
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        placement: 'main',
        name: 'Products',
      },
      {
        type: 'category',
        name: 'Categories',
      },
      {
        type: 'query',
        name: 'Queries',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  


Align Grid to center or with search box
This can be done by defining Align: 'center' or Align: 'input' as autocomplete widget's option.

Default state of Grid layout is Align: center.

If you want to move the autocomplete along with input search box, set Align: 'input', otherwise it will be centered on the page.


Grid layout autocomplete with Align: 'input'. See, that left side of the autocomplete is aligned same as input search box.


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    ShowBranding: true,
    TrackerId: '1234-5678',
    Locale: 'en',
    Align: 'input',
    Types: [
      {
        type: 'item',
        placement: 'main',
        name: 'Products',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  




Grid layout autocomplete with Align: 'center'. See, that the autocomplete is centered on the page.


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    ShowBranding: true,
    TrackerId: '1234-5678',
    Locale: 'en',
    Align: 'center',
    Types: [
      {
        type: 'item',
        placement: 'main',
        name: 'Products',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  


Placement of items
Grid Layout
Line Layout

This can be done by defining placement: 'main' or placement: 'others' parameter in Types. These are the only two supported placements.

Note, that if it used for one of the Types, it has to be defined for all other Types to have an effect.

If placement is not defined, then first specified type or type 'item' is considered "main" and will be wrapped with luigi-ac-main class.

If placement is defined, then items set to placement: main will be wrapped with luigi-ac-main class. Note that these items expect images.

If placement is defined, then items set to placement: others will be wrapped with luigi-ac-others class.

Typical usage of this placement in Line Layout is for example Two-column layout.


Grid layout autocomplete with custom placement of "item" and "category" in the middle


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    ShowBranding: true,
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        placement: 'main',
      },
      {
        type: 'category',
        placement: 'main',
        name: 'Categories',
      },
      {
        type: 'query',
        placement: 'others',
        name: 'Queries',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  




Grid layout autocomplete with custom placement of all Types in the middle


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    ShowBranding: true,
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        placement: 'main',
      },
      {
        type: 'category',
        placement: 'main',
        name: 'Categories',
      },
      {
        type: 'query',
        placement: 'main',
        name: 'Queries',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  


Attribute expressions
Grid Layout
Line Layout

Attribute expressions allow you to specify which item attributes will be shown
in the second line of a single autocomplete row.

A generic form of attribute expression is attribute.start->after10 and positive number.


      

-> delimits after context and 1TV', 'LED', '50"']
will find the first highlighted value (i.e. the value which matched the query) and
take one value after it and one value before it. In this case, the result would
be Electronics, Smart TV, LED shown in the second line, under the
item's title.


Autocomplete for showing one highlighted category, last brand and second to last category from hierarchy


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'line',
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        name: 'Items',
        attributes: ['category.hl', 'brand.last', 'categories.hierarchy.last-1'],
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  

For start value, you can use one of the following:
      
        
Value
Comment
Example


        
a number
interpreted as an index into the value array. First value is indexed as 0.
category.1


hl
which is interpreted as index of highlighted value, or index of last value if nothing was highlighted.
category.hl


last
index of last value
category.last


last-1
index of second to last value
category.last-1


      

Some note on edge cases and limitations:


if you specify non-existent attribute name, that expression will be skipped
if you specify start position which is out of bounds for the current item,
that expression will be skipped
behind or after context will never go out of bounds, if you write
category.0->1000 this will show all category values and is equivalent to
just writing (category)

Localisation
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'hero',
    TrackerId: '1234-5678',
    Locale: 'en', // current language of website
    Translations: {
      en: {
        // override translations you want to change
        showAllTitle: 'Show me more!',
        showBuyTitle: '', // set to empty string to disable button
        priceFilter: {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
          locale: 'en',
          prefixed: true,
          symbol: '$',
        },
      },
      // you can define your own language and use it in Locale option
      esperanto: {
        // define all translations
        // ...
      },
    },
  },
  '#luigi-ac-input'
);

        
      
    
  

To customize texts and settings depending on language version of your website, you can use Locale and Translations options.

First step is to set Locale option to string containing locale key. We provide default dictionaries for following languages: en, de, sk, cz, pl, hu, ro. You can also define your own locale in Translations option and use it.

Translations option should be object with locales keys, each locale key containing dictionary for specific language. This object will be merged with our default translations, so you need to specify only translations you want to override. If you are using custom locale key, you need to define all translations.


This is default dictionary for english, use it as reference for overriding / creating dictionaries:


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "showAllTitle": "Show all products",
  "showBuyTitle": "Add to basket",
  "placeholderText": "Search for...",
  "hint": "Press Enter to search for :query",
  "noResultsMessage": "Your search term :query did not match any of our products. Please try another search term.",
  "noResultsMessageOne": "We only found one product for query :query.",
  "types": {
    "item": {
      "name": "Products",
      "recommendHeroName": "Top products",
      "heroName": "Top product",
      "recommendName": "Top product"
    },
    "query": {
      "name": "Queries",
      "recommendName": "Top queries"
    },
    "category": {
      "name": "Categories",
      "recommendName": "Top categories"
    },
    "brand": {
      "name": "Brands",
      "recommendName": "Top brands"
    },
    "article": {
      "name": "Articles",
      "recommendName": "Top articles"
    }
  },
  "priceFilter": {
    "minimumFractionDigits": 0,
    "maximumFractionDigits": 2,
    "locale": "en",
    "prefixed": true,
    "symbol": "$"
  }
}

        
      
    
  

These are all options you can define in Translations if you want to override them:
Filtering in autocompletedefaultFilters option
You can explicitely set filters to scope autocomplete results to only when the specified attributes match the provided values. You can specify as many attributes and as many values as necessary. The provided value of the attribute can be either a scalar, or an array. If you specify an array, the request is interpreted such that all individual values from the array must match for the result to match.

This filtering is similar to what you can achieve with autocomplete contexts, but unlike contexts, it does not require any changes on your part in how you index the data.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        name: 'Products',
        defaultFilters: {
          category: 'her',
          set: ['summer dress', 'skirts'],
        },
      },
      {
        type: 'category',
        name: 'Category',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  
filters option
You can use your own code to define logic for using filters in autocomplete. Functionality is the same as defaultFilters, but this is dynamic.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'grid',
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        name: 'Products',
        filters: function () {
          var customFilters = {
            category: 'her',
            set: ['summer dress', 'skirts'],
          };
          return customFilters;
        },
      },
      {
        type: 'category',
        name: 'Category',
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  
Pricing API integration
If you are using different pricing levels depending on the signed-in user, one
of the strategies that you can use to render correct user prices in
autocomplete is using your pricing API.

  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 50%;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

        
      
    
  

Start by defining a loader element which will render instead of prices.

  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          .luigi-ac .luigi-ac-price-new {
  visibility: hidden;
}

        
      
    
  

Hide the prices in autocomplete via CSS.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          FormatForDisplay: function(result) {
  if (result &amp;&amp; result.attributes &amp;&amp; result.attributes.price_amount) {
    result._after_price = ""
  }

  return result;
}

        
      
    
  

And display the loading indicator.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          FormatForDisplay: function (result) {
  if (result &amp;&amp; result.attributes &amp;&amp; !result.attributes.price) {
    result.attributes.price = "&amp;nbsp;";
    result._after_price = "";
  }

  return result;
}

        
      
    
  

If the products in your catalog don't have a price attribute, make sure to add a placeholder for the price.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete(
  {
    Layout: 'line',
    TrackerId: '1234-5678',
    Locale: 'en',
    Types: [
      {
        type: 'item',
        name: 'Items',
        attributes: ['id'],
      },
    ],
  },
  '#luigi-ac-input'
);

        
      
    
  

In order to have the .luigi-ac-attr--id element available in the product
tile, configure it in attributes for the type.

  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          .luigi-ac .luigi-ac-attrs .luigi-ac-attr.luigi-ac-attr--id {
  display: none;
}

        
      
    
  

Hide the ids in autocomplete via CSS.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AfterRender: function(query, results) {
  if (results &amp;&amp; results.length > 0) {
    var renderedResults = document.querySelectorAll('.luigi-ac-product');

    // collect IDs of the found products, here, we are using the id attribute
    var ids = [];
    results.forEach(function(result) {
        if (result.attributes.id) {
            ids.push(result.attributes.id)
        }
    })

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var jsonParsed = JSON.parse(this.responseText);

        // Update the HTML for each result with the price from the pricing API
        renderedResults.forEach(function(result) {
            var productId = result.querySelector('.luigi-ac-attr--id').textContent;
            if (jsonParsed[productId]) {
                result.querySelector('.luigi-ac-price-new').innerText = jsonParsed[productId];
            }
        })

        // Show the (now updated) prices
        var prices = document.querySelectorAll('.luigi-ac-price-new');
        for (var i = 0; i window._bind =
Function.prototype.bind; before the script tag that loads
mootols. It will save the original bind function into a _bind variable. If
we detect that your website is using Mootools, we will automatically fallback
to this _bind function and the widget will work.
Postponing data collection
To ensure accurate price collection in situations where the standard price_amount attribute is not available, utilize the PostponeDataCollection method. This may occur when interacting with the pricing API, leading to the complete absence of the price_amount attribute.

Without access to the price_amount attribute, schema.org annotations are generated without information about the price, resulting in the inability to collect prices for autocomplete results. Consequently, this leads to an inability to measure cart value at all.

Upon activation, it employs an emitAnalyticsEventFn callback function passed to the afterRender function. This enables you to add the missing schema.org annotation in the afterRender with a price obtained from the pricing API response.

The following code example refers to the example in pricing API:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          PostponeDataCollection: true,
AfterRender: function(query, results, emitAnalyticsEventFn) {
  // Update the HTML for each result with the price from the pricing API
  renderedResults.forEach(function(result) {
      var productId = Number(result.querySelector('.luigi-ac-attr--id').textContent)
      if (jsonParsed[productId]) {
          result.querySelector('.luigi-ac-price-new').innerText = jsonParsed[productId];
          // Add missing schema.org annotations to the price element
          const priceElement = result.querySelector('.luigi-ac-price');
          priceElement.setAttribute('itemprop', 'offers');
          priceElement.setAttribute('itemtype', 'http://schema.org/Offer');
          priceElement.setAttribute("itemscope", "");
          // Append the missing meta tag with the correct price
          const priceTagMarkup = ``;
          priceElement.insertAdjacentHTML('afterbegin', priceTagMarkup);
      }
  })
  // Call the emitAnalyticsEventFn once the schema.org annotations are complete
  emitAnalyticsEventFn()
}]]></content>
      <icon>speedometer2</icon>
    </page>
    <page>
      <url>/autocomplete/trending_queries.html</url>

      <title>Trending queries API</title>
      <content><![CDATA[Trending queries API
The Trending queries API provides list of popular and relevant phrases based on the analytics events. These phrases are customizable from the Luigi's Box application dashboards.


  
    
      Autocomplete API integration tutorial
      
        
 See the full guide to integrating Luigi's Box Autocomplete using API
        See the tutorial
      
    
  


Trending queries endpoint is particularly suited for building a "trending queries" widget on your site.

Calling this endpoint gives you a list of your top queries for the past 30 days but you can customize this list in the main Luigi's Box application.
There are no API parameters, the output is only controlled from Luigi's Box application UI.

From the management UI, you can:


Set the number of returned queries
Ban some queries from appearing in the API output
Rewrite query text, e.g., to add accents or change caps
Add your own queries, even if they are not trending at the moment
Enable top hit loading for a query, you can use the top hit URL in the widget to send users directly to the most popular result for the query

Get trending queries
GET https://live.luigisbox.com/v2/trending_queries
Required Parameters      
        
 
 


        
tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


      
Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Example request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/v2/trending_queries?tracker_id=1234-5678")

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XGET --compressed\
  "https://analytics.luigisbox.com/v2/trending_queries?tracker_id=1234-5678"\




        
      
        
          request('GET', "https://analytics.luigisbox.com/v2/trending_queries?tracker_id=1234-5678", [
  'headers' => [
    'Accept-Encoding' => 'gzip'
  ]
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This endpoint requires no authentication

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "title": "Query A",
    "links": [{
      "rel": "top_content",
      "href": "https://example.com/news/"
    }]
  },
  {
    "title": "query B"
  }
]]]></content>
      <icon>speedometer2</icon>
    </page>
    <page>
      <url>/autocomplete/top_items.html</url>

      <title>Top items API</title>
      <content><![CDATA[Top items API
You can use our Top items endpoint to get the list of most popular items of any type in the same output manner as with Autocomplete.


  
    
      Autocomplete API integration tutorial
      
        
 See the full guide to integrating Luigi's Box Autocomplete using API
        See the tutorial
      
    
  



The top items endpoint is publicly available and requires no authentication.

Get top items
GET https://live.luigisbox.com/v1/top_items
Required parameters      
        
 
 


        
type
Comma separated list of required types and their quantity, e.g. items:6,category:3



tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


      
Optional parameters      
        
 
 


        

f_type[]optional

Filter, where type part of the parameter name is a name of a requested type. The value itself is using key:value syntax. E.g., use f_item[]=color:green to filter hits of type item which have an attribute color with a value green.You can use several filters in one request, e.g., f_item[]=color:green together with f_brand[]=promoted:true.Filtering on top of numerical and date attributes supports ranges, using pipe as a separator, e.g., f_item[]=price:5|7. This range can be left open from either side, e.g., f_item[]=price:6|. If a combination of filters for the same field is provided, they are applied with OR. E.g., filters f_item[]=color:green&amp;f_item[]=color:blue will retrieve products, that have either green OR blue color.



hit_fieldsoptional

A comma separated list of attributes and product parameters. Only these fields (in addition to some default ones) will be retrieved and present in results. If not provided, all fields will be present in results. The use of this feature is recommended. Try to specify only those field that are necessary for the frontent of the autocomplete window. This can help the retrieval of the results to be faster.



ctx[]optional

drives model selection, using key:value syntax e.g., ctx[]=warehouse:berlin. you can provide multiple key:value pairs, that are combined into one context definition. order of key:value pairs in request is not important. however, please note that key:value pairs must match one of the contexts which are being reported into luigi's box search analytics. see the multi-warehouse solution and context in analytics for more details.


      
Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Example request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'

connection = Faraday.new(url: 'https://live.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/v1/top_items")

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XGET --compressed\
  "https://live.luigisbox.com/v1/top_items"\




        
      
        
          request('GET', "https://live.luigisbox.com/v1/top_items", [
  'headers' => [
    'Accept-Encoding' => 'gzip'
  ]
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This endpoint requires no authentication

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this. The exact content of attributes field depends on the content of your product catalog.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
    "hits": [
        {
            "url": "http://www.e-shop.com/products/123456",
            "attributes": {
                "image_link": "http://www.e-shop.com/assets/imgs/products/123456.jpg",
                "description": "Description field from your product catalog",
                "categories": [
                    "Gadgets",
                    "Kids"
                ],
                "title": "Product X",
                "availability_rank_text": "true",
                "price": "5.52 EUR",
                "condition": "new"
            },
            "type": "item",
            "exact": true
        },
        {
            "url": "http://www.e-shop.com/products/456789",
            "attributes": {
                "image_link": "http://www.e-shop.com/assets/imgs/products/456789.jpg",
                "description": "Description field from your product catalog",
                "categories": [
                    "Gadgets",
                    "Kids"
                ],
                "title": "Product Y",
                "availability_rank_text": "preorder",
                "price": "12.14 EUR",
                "condition": "new"
            },
            "type": "item",
            "exact": true
        }
    ]
}

        
      
    
  
Personalized top items/last searched queries
Serves personalized top items for a given user. 
In case of queries type, it returns last searched queries by the given user.

GET https://live.luigisbox.com/v1/personalized_top_items
Required parameters      
        
 
 


        
type
Comma separated list of required types and their quantity, e.g. items:6,category:3



tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


user_id
Identifier of the user for whom you want to get personalized top items. See User identification for more details.


      
Optional parameters      
        
 
 


        

ctx[]optional

drives model selection, using key:value syntax e.g., ctx[]=warehouse:berlin. you can provide multiple key:value pairs, that are combined into one context definition. order of key:value pairs in request is not important. however, please note that key:value pairs must match one of the contexts which are being reported into luigi's box search analytics. see the multi-warehouse solution and context in analytics for more details.]]></content>
      <icon>speedometer2</icon>
    </page>
    <page>
      <url>/autocomplete/api.html</url>

      <title>Autocomplete API</title>
      <content><![CDATA[Autocomplete API
Use the autocomplete API endpoint to get a search-as-you-type functionality.

To use this feature, you need to synchronize your product database with Luigi's Box
search index. See Indexing the data for more details.

Luigi's Box Autocomplete can learn the best results ordering. In order to
enable learning, you need to integrate Luigi's Box Search Analytics service
with your website by following the instructions.

We strongly recommend that you do not implement the JSON API directly, but
instead use our integrated Autocomplete.js library which allows you
to build an autocomplete widget with minimum programming effort.


The autocomplete endpoint is publicly available and requires no authentication.

Get autocomplete results
GET https://live.luigisbox.com/autocomplete/v2
Required parameters      
        
 
 


        
tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


q
User input


type
Comma separated list of required types and their quantity, e.g. item:6,category:3



      
Optional parameters      
        
 
 


        

user_idoptional

If supplied and is equal to user id collected in analytics, it can drive personalization of results. In case you use identifiers of logged in users (customer_id in analytics), please put the ID of logged in user here and fill in parameter client_id as well.



client_idoptional

Set this parameter to client_id (sent in analytics) in case you store identifier of logged in user into user_id.



f_type[]optional

Filter, where type part of the parameter name is a name of a requested type. The value itself is using key:value syntax. E.g., use f_item[]=color:green to filter hits of type item which have an attribute color with a value green.You can use several filters in one request, e.g., f_item[]=color:green together with f_brand[]=promoted:true.Filtering on top of numerical and date attributes supports ranges, using pipe as a separator, e.g., f_item[]=price:5|7. This range can be left open from either side, e.g., f_item[]=price:6|. If a combination of filters for the same field is provided, they are applied with OR. E.g., filters f_item[]=color:green&amp;f_item[]=color:blue will retrieve products, that have either green OR blue color.



sort_typeoptional

Sort, where type part of the parameter name is a name of a requested type. The value itself is using key:value syntax. E.g., use sort_item=price_amount:asc to sort hits of type item by their price in ascending order.You can use several sorts in one request, e.g., sort_item=price_amount:asc together with sort_article=introduced_at:desc.



prefer[]optional

Allows preferation of products. It uses key:value syntax e.g., prefer[]=category:Gadgets to prefer hits according to chosen criteria. Results matching the specified attribute and its value will be sorted higher. Note that unlike f_type, the prefer is applied to all requested types. See Query-time boosting for more details.



hit_fieldsoptional

A comma separated list of attributes and product parameters. Only these fields (in addition to some default ones) will be retrieved and present in results. If not provided, all fields will be present in results. The use of this feature is recommended. Try to specify only those field that are necessary for the frontent of the autocomplete window. This can help the retrieval of the results to be faster.



contextoptional

Refer to context in search for explanation and Multi-warehouse solution for a use-case scenario.



ctx[]optional

drives model selection, using key:value syntax e.g., ctx[]=warehouse:berlin. you can provide multiple key:value pairs, that are combined into one context definition. order of key:value pairs in request is not important. however, please note that key:value pairs must match one of the contexts which are being reported into luigi's box search analytics. see the multi-warehouse solution and context in analytics for more details.



non_collapsed_variantsoptional

Used in conjunction with Variant search. See Variant search for further detail. Does not collapse all variants into singular item and instead retrieves all variants. Use non_collapsed_variants=true to turn on, it is off by default.


      
Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Example request

Note that this endpoint is cached internally and it may take some time (in the
order of minutes) for changes to underlying data to propagate.


To invoke the endpoint, use this code (the simplest example):

  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'

connection = Faraday.new(url: 'https://live.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/autocomplete/v2?q=harry+potter&amp;tracker_id=1234-5678&amp;type=item:5")

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XGET --compressed\
  "https://live.luigisbox.com/autocomplete/v2?q=harry+potter&amp;tracker_id=1234-5678&amp;type=item:5"\




        
      
        
          request('GET', "https://live.luigisbox.com/autocomplete/v2?q=harry+potter&amp;tracker_id=1234-5678&amp;type=item:5", [
  'headers' => [
    'Accept-Encoding' => 'gzip'
  ]
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This endpoint requires no authentication

// This endpoint requires no body


        
      
    
  

The above command returns a JSON structured like this. The exact content of attributes field depends on the content of your product catalog.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
    "exact_match_hits_count": 6,
    "partial_match_hits_count": 0,
    "partial_match_terms": [],
    "hits": [
        {
            "url": "http://www.e-shop.com/products/123456",
            "attributes": {
                "image_link": "http://www.e-shop.com/assets/imgs/products/123456.jpg",
                "description": "Description field from your product catalog",
                "categories": [
                    "Gadgets",
                    "Kids"
                ],
                "title": "Product X",
                "title.untouched": "Product X",
                "availability_rank_text": "true",
                "price": "5.52 EUR",
                "condition": "new"
            },
            "type": "item",
            "updated_at": "2017-11-23T00:00:00+00:00"
        },
        {
            "url": "http://www.e-shop.com/products/456789",
            "attributes": {
                "image_link": "http://www.e-shop.com/assets/imgs/products/456789.jpg",
                "description": "Description field from your product catalog",
                "categories": [
                    "Gadgets",
                    "Kids"
                ],
                "title": "Product Y",
                "title.untouched": "Product Y",
                "availability_rank_text": "preorder",
                "price": "12.14 EUR",
                "condition": "new"
            },
            "type": "item",
            "updated_at": "2017-11-23T00:00:00+00:00"
        }
    ],
    "campaigns": [
        {
            "id": 9,
            "target_url": "https://www.e-shop.com/harry-potter",
            "banners": {
                "autocomplete_list": {
                    "desktop_url": "https://www.e-shop.com/harry-potter-1.jpg",
                    "mobile_url": "https://www.e-shop.com/harry-potter-2.jpg"
                }
            }
        },
        {
            "id": 12,
            "target_url": "https://www.e-shop.com/rowling",
            "banners": {
                "autocomplete_top": {
                    "desktop_url": "https://www.e-shop.com/rowling-1.jpg",
                    "mobile_url": "https://www.e-shop.com/rowling-2.jpg"
                }
            }
        }
    ],
    "suggested_url": "http://www.e-shop.com/special_landing_site/HP?lb_redirected_from=harry+potter"
}

        
      
    
  
Integration with other Luigi's Box servicesFixits
Autocomplete endpoint integrates the "fixit" rules that you can set up in the application.

The endpoint will also return a URL of a Fixit redirect if such a rule for this query exists. Look for suggested_url in response.
The entered search query must be an exact match with a query set in the Fixit rule for the suggested_url to appear in the response.

On seeing the suggested_url in the response, you may want to redirect the user directly to this URL instead of submitting the autocomplete query to search.
Banners
Autocomplete API response will include data related to banner campaigns set up in the application. Refer to the Banner campaigns documentation for more details.
Query rewrite
Query rewrite is a way to control your search and autocomplete results.
You can set up query rewrites in Luigi's Box application and they
will have an effect on autocomplete and search results.

If you are using search.js then query rewrite
will work out of the box and no integration is necessary on your side.

If you are using API to build search, then you must adapt your
code to incorporate some functionality of query rewrite.

Each query rewrite has exactly one search query it responds to (diacritics and case do not matter).
You can choose if you want to rewrite query, or keep the original one. You can also define filters,
which will be applied to your search requests for given query.

When creating query rewrite, you can choose if you want to admit to the customer, that you have
rewritten the original query. You can also define a message, which will be shown in case of applying query rewrite.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "query_rewrite": {
        "id": 9,
        "original_query": "mini guitar",
        "admit_rewrite": true,
        "message": "We rewrote your entered query to another with better search results for you."
    }
}

        
      
    
  
Sample requests
The requests below use the sample Luigi's Box data. You will have to adapt the examples to your specific situation and adapt:


The tracker_id parameter
The type names

Get autocomplete results for several types in a single request
This is the most basic request where you only provide the query and request the types.

GET https://live.luigisbox.com/autocomplete/v2?tracker_id=179075-204259&amp;type=product:7,query:6,category:6&amp;q=ukulele

Try it live →
Limit results based on a specific attribute
The request below will only return results from the "Ukulele straps" category. This is a slightly contrived example but you may use to filter for gender, warehouse or other use cases.

GET https://live.luigisbox.com/autocomplete/v2?tracker_id=179075-204259&amp;type=product:7,query:6,category:6&amp;q=ukulele&amp;f_product[]=category:Ukulele+Straps

Try it live →
Limit fields
To achieve better performance, list the fields that you need in the response in hit_fields.

GET https://live.luigisbox.com/autocomplete/v2?tracker_id=179075-204259&amp;type=product:7,query:6,category:6&amp;q=ukulele&amp;hit_fields=title,category,images

Try it live →
Best practicesAvoid proxying requests
If you choose to implement the JSON API, we recommend that you consume
it on the frontend side, i.e., directly from the HTML page. This API was
designed for this use case and no
sensitive information is required to call it (e.g., your private key). Do not
proxy calls to Luigi's Box Autocomplete API via your backend servers as this
will introduce additional latency.
Prefetch DNS
We recommend that you add DNS prefetch instruction to your HTML code to
avoid the DNS lookup penalty on the first autocomplete request. Add the
following code anywhere to your  to instruct browser to do the DNS
lookup in advance.


  

Fetch only the fields you will use
To avoid a performance penalty, only request the fields that you will use. Use hit_fields parameter to list the fields.]]></content>
      <icon>speedometer2</icon>
    </page>
    <page>
      <url>/autocomplete.html</url>

      <title></title>
      <content><![CDATA[Core concepts
Beyond the primary integration paths, Autocomplete is enhanced by several key APIs and concepts that create a complete experience.



Trending Queries API: This API fetches the most popular and relevant search queries based on your site's analytics. These phrases can be used as placeholders in the search bar or to provide typing suggestions to guide users.

Top Items API: Use this API to populate a recommender popup with your most popular items. It's designed to engage users the moment they click into the search box, even before they start typing anything.

Performance: The Autocomplete feature is engineered for speed. To achieve low latency, it fetches only the top results (top-k hits) rather than scanning the entire index, which means it does not provide a total hits count.]]></content>
      <icon>speedometer2</icon>
    </page>
    <page>
      <url>/search/search_js.html</url>

      <title>Search.js</title>
      <content><![CDATA[Search.js
Search.js is a self-hosted JavaScript library which can be used to rapidly build an interactive, single-page-application user interface around the Luigi’s Box Search API.

You can integrate Luigi's Box search by including the search.js script, setting configuration parameters and providing custom templates to customize the visual appearance.


  
    
      Live demo
      
        
 Basic example
        Try the live example
      
    
  

Features
There is more to search than just search results. Besides support for
typical search-related components, such as pagination and sorting, search.js
also supports more advanced features.
Faceted search
With search.js, you can rapidly build search user interface which supports
advanced filtering and drill-downs. Your users can enter a text query and
quickly drill down to search results, by e.g., specifying a category (or
categories) they are interested in and selecting a price range.

Search.js will automatically build facets from your data, you only need to set
a configuration option.
"Search also in..."
You usually have one primary type of content (products/articles/...)
and search.js takes care of searching within this content and generating
facets for it. However, you might also want to provide results matching
some other types of content (categories/brands/...), regardless of generated
facets and selected filters.

For example, you can setup search.js to search primarily in products
but also look into categories and brands. When your users search for "samsung tv"
they will see a list of products matching this query along with facets
 allowing them to filter by various criteria such as screen size or resolution. Plus, they
will also see another list with matched brands (e.g., "Samsung") and categories
(e.g., "TVs"). These results will not be affected by faceting.


  
        
      
    

  
  
    Info
    
         Understanding the result count discrepancy
  When using search.js, you might notice that the number of results shown (e.g., “Results for query”) does not match the number of product tiles rendered. This is not a bug, it's a result of how Luigi's Box calculates total hits.
  The total reflects all matched types for the search query: products, categories, brands, etc. For example, if your query matches 3 products, 3 categories, and 2 brands, the total shown will be 8, even though only 3 product cards are displayed.

    
  

"You might also like"
Great search lets you make mistakes. You can configure search.js to separate
results with good match from results with an approximate match. You can keep
your list of results clean while at the same time provide additional results which
might be of interest to your visitors. These can also effectively circumvent getting
a "no results" in case when there is no good match between results and user query.
Redirecting to category listings
You can setup search.js to skip the search altogether when the user's query
matches a category and redirect the user to this category listing instead. When you
spent time optimizing category listings, you probably prefer to send your users to these
instead of fulltext search results.

Note that this feature requires that you are indexing a type with a name
category.
Custom HTML templates
When you want to render search results using search.js, you have access to all the data
that you have indexed for that content — all the data is accessible from within the result
template. However, sometimes your rendering requires access to data that you have not indexed
or that is even impossible to index properly, e.g. number of visitors currently looking at the product.

You can setup search.js to use your custom server-side rendering API
to render the individual results. Search.js will call the API with the product IDs and use
the HTML fragments generated by the API as the results representation.
Banner campaigns
Search.js will automatically render search banners defined in Luigi's Box
application.
You will define phrases which will activate banners, you will
define the banner images, and they will be rendered out of the box, without any
additional development needed.


  
      
      
      
  
  
      
        
        
          Banner in the results section
        
      
      
        
        
          Banner in the header section
        
      
      
        
        
          Banner in the aside panel section
        
      
  
  
    
    Previous
  
  
    
    Next
  

Query rewrite
Search.js will automatically render a query rewrite and the accompanying message (if any message was defined).


  
      
      
      
  
  
      
        
        
          Not admitting query rewrite
        
      
      
        
        
          Admitting query rewrite
        
      
      
        
        
          Admitting query rewrite with message
        
      
  
  
    
    Previous
  
  
    
    Next
  

Integration
By following this guide you will configure your site, such that when your users type into the search box and press Enter, their browser will send them to a search page where our search.js library requests search results and renders the search UI.


Example layout for the /search page


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    
    
    
      
    
    
  


        
      
    
  
1. Create new search page
Create a new HTML page (e.g., /search) which includes your standard application layout (i.e., header, menus, footer, etc.) and define an placeholder element where search.js will render search UI. The placeholder should indicate that the search is loading, see Loading states for more details.


2. Submit all search queries to new search page
Update your existing search forms to submit to this newly created webpage via GET method (default when no method is given). You need to ensure that when users type in a query and press Enter or click the search button, they are sent to page you created in step 1 and the query is passed as an URL parameter.

The easiest way to do this, is to wrap all your search fields with a  tag, with action attribute set to the path of the page from step 1.
E.g. 

If your search fields are already wrapped in a  tag, then just update the action attribute and make sure that the form is submitted via GET method.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          







  Luigis.Search({
    TrackerId: '2291-22343',
    Theme: 'boo',
    Size: 20,
    Facets: ['brand', 'category', 'price_amount'],
    DefaultFilters: {
       type: 'item'
    },
    UrlParamName: {
      QUERY: 'q',
    }
  }, '[name="q"]', '#search-ui')


        
      
    
  
3. Setup search.js
Include the script and set configuration parameters. See the right column for an example.

Please note that:


You must define your templates before you initialize search.js script. Templates are looked up when search.js initializes and when they are not present in the page at that time, search.js will fall back to the default built-in templates.
You must initialize the search by calling Luigis.Search. The initialization function takes 3 arguments: configuration object, CSS selector for the input element and CSS selector for the placeholder element where it will render the Search UI.
You must define the initialization script (call to Luigis.Search) in the HTML after the search input element and after the placeholder element. The script expects to find both elements on initialization.
It is important that the search form input name parameter matches the query parameter (UrlParamName.QUERY) in configuration.




Without defining custom templates, you will get a very simple and unstyled search UI. You will most likely want to define custom templates where you can reuse your existing styles.

If you define the templates to match the HTML you are using today, there should be no extensive styling necessary.
Content Security Policy
If your website is using Content Security Policy, you need to add following
rules to allow Luigi's Box search.js to work.
      
        
CSP directive
Value


        
connect-src
https://live.luigisbox.com


script-src
https://cdn.luigisbox.com


      
Options reference
Luigis.Search accepts these arguments:
      
        
Option
Comment
 


        

TrackerIdREQUIRED

Identifier of your site within Luigi's Box




Themeoptional

Theme controls the visual style of the search UI. Search.js currently supports 3 themes: 'default', 'luigis' and 'boo'. We recommend that you start your integration with 'boo' theme, and override template / style with CSS only what is necessary. See Theming for more details.




Sizeoptional

Specifies how many results should the API return in each request (default: 10)




ResultsRendereroptional

When the ResultsRenderer parameter is present, search.js invoke this URL via GET, replacing ${product_ids} placeholder with the comma-separated IDs of all results that should be rendered. For example https://example.shop/api/teasers?ids=23,456,33,62. Returned result will be rendered instead of results template. See Backend results rendering for more details.




Facetsoptional

Array of default facets requested in every search request. See Faceting for more details.




DynamicFacetsSizeoptional

Number of dynamic facets or string with two numbers delimited by colon, for example 2:5 which will render max of 2 dynamic facets, each with max 5 options, other options will be hidden with "show more" option, (default: null).  See Dynamic Facets for more details.




DefaultFiltersoptional

Object with key/value pairs. Value can be string or array of strings. You can use this to setup a default search filters, regardless of user's selection in the search UI. See Default filters for more details.




Preferoptional

Array of key/value pairs to use for query-time boosting. See Query-time boosting for more details.




DefaultSortoptional

Sort specification in format field:direction, where field is the field name that you want to sort on, and direction can be either asc or desc.




Sortsoptional

Array of sort specifications in format field:direction, where field is the field name that you want to sort on, and direction can be either asc or desc. If the theme supports sorting (the luigis theme does), it will render a sorting component allowing users to sort results by these fields.




FacetsOrderoptional

Object with facets names as keys. It will determine order of values in facets. See sorting facet values recipe for more info.




QuicksearchTypesoptional

Array or string of types to run quicksearch on. This is useful for showing hits in categories or brands.




UrlParamNameoptional

Sets the URL parameter names. This is useful if you want to preserve your existing URLs, because you can map your existing URL parameters to search.js parameters. See the default values in the right column.




BaseUrloptional

String containing base url used to redirect to when in-place search triggered. Prefer a relative url. (default: page origin)




OnDoneoptional

A function called after results are rendered (even when ResultsRenderer is used).




SeparateExactResultsoptional

Boolean indicating whether to separate exact results from non exact (default: false). When set to true, you need to add  component to template to show non exact results.




FollowSuggestedUrloptional

Boolean indicating whether to redirect users to a matching category (default: false).




Locale optional

String, indicating a locale identifier which will setup the default translations and price format. See Localisation for more information.




HitFieldsoptional

Array of strings, used for selecting which result attributes to return in API response. This can be useful in order to limit response size and speed (default: undefined, all attributes will be returned)




Translations optional

Object, including translation keys and translation themselves. See Localisation for more information.




PriceFilter optional

Object, including configuration for price formatting. See Localisation for more information.




ActiveAnywhere optional

Boolean, indicating whether to activate search on any subpage where the search query parameter is present. (default: false, search is activated only on BaseUrl).




TopItems optional

Array of {type}:{count} strings to generate top items displayed in no results template. To disable displaying top items in no results template use (TopItems: []). See Top items for more information.




QueryUnderstanding optional

Boolean indicating whether to automatically try to recognize filters (default: false).




Variant optional

String, used for adding _SearchVariant filter into JSON+LD (default: '').




IsSPA optional

Boolean, set to true if page is Single Page Application (e.g. turbolinks) and Luigis.Search() is called more than once without page reload (default: false).




ModifyRequestParams optional

Function to modify params of API call which recevies (params, state, getters) parameters, must return modified params object (default: undefined).




SingleChoiceFacets optional

Array of strings with facet names which will only allow the user to select a single option. See Single choice facet. Only applicable to boo theme.




CollapsedFacets optional

Array of strings with facet names which should be collapsed by default. Only applicable to boo theme.




PostponeDataCollection optional

Boolean indicating whether data collection should be postponed after the OnDone function is called.  See Postponing data collection for more information.



      

Luigis.Search also accepts two mandatory CSS selectors:

Search input:
- [name="q"]: Selector for search input. This will trigger search when enter key is pressed in the selected input field, OR if the parent form is submitted.

Search element:
- #search: Id selector for element where Luigi’s Box search component should be rendered.
Templates
Luigi's Box Search.js is using templates to render the Search UI. While we
include all templates in the default search.js distribution, they are not
styled. Usually, you will want to define your custom template which matches the
styling of your site. Templates are using Vue.js template
syntax under the hood.

You should define these templates directly in your HTML code. Each template
must be defined in its own  tag. Templates are
looked up by their id attribute — make sure to not change it. You don't
have to redefine every template, only those that you will actually use.

In each template you have access to these variables which you can use to
adjust the layout:



isLoading: Boolean, true if search.js is waiting for Luigi's Box API response.

isInitialLoading: Boolean, true if search.js is waiting for first load of Luigi's Box API response.

isNoResults: Boolean, true if search returned 0 hits.



Note that the templates shown here are simplified versions of the templates that are delivered via the built-in themes. You can download all of the templates for the selected themes below, if you need to override and customize them:


  
boo theme - boo.templates.zip, updated on January 12th 2023


Search template

Example of a main search template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        
            
            
        
        
            Search results for query "{{ query }}", {{ hitsCount }} results
            
              We have modified the search phrase for you: {{ correctedQuery }}
            
            
                
            
            
            
            
            
            
            
            
        
    


        
      
    
  

This is the root template used for rendering search layout. Use this template
to define how your Search UI should look and which features it should support.
Should it support faceting and sorting? Should the pagination component go above or
below search results?

You have access to correctedQuery property. Luigi’s Box Search API corrects typos and optimizes search query automatically, you can show these changes to your vistitors.

You can reference these main components:



: Facet component which will render faceting (filtering) controls.

: Sort component, which will render sorting controls.

: Loading component, which will indicate that search results are
loading.

: Results component, which will render results.

: Optional. You need to define this if you want to include "Did you mean?" results.

: Pagination component, which will render pagination controls.

: Quicksearch component, which will render "search also in" results.

: Banner component, applicable only if you are using Luigi's Box banner campaigns. If you are missing this component in the main search template, banner feature will not work. The  component takes a position parameter, which specifies which banner position to use. Valid values are: header, footer and panel. Note that the banner inside results is rendered as part of the  component.

Facets component

Example of a facets component definition


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        
    


        
      
    
  

Referenced as .

Used for generating list of facets. The default definition will render each
facet in a separate div. Override this template if you want to render facets in
a custom structure, such as  list.
      
        
Name
Description


        
facets
Array of facets


      

To render a single facet reference  component.  component is
a special component that will detect facet type and render a template designed
specifically for that component. The  component accepts these
arguments:
      
        
Name
Description


        
:facet
A facet object


:key
Recommended unique value. Used for better performance while rendering. See Vue key



      

Note that you have to explicitly ask for the facets to be generated by setting
the Facets initialization option.
Multichoice facet

Example of a multichoice facet template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    {{ name }}
    
      
        
          
          {{ val.value }} ({{ val.hits_count }})
        
      
    
  


        
      
    
  

Multichoice facet is the most common facet type. It represents a filter that
can take multiple choices at the same time. A "brand" facet is a good example:
users can search for "phone" and then tick "Apple" and "Samsung" in the brand
facet to search only for Apple or Samsung phones.


      
        
Name
Description


        
name
Facet name. Note that this is the field name (in your source data) and not a human readable label so you will need to translate it for display


values
Array of objects with histogram data. Each object contains:


values.hits_count
Number of results that will remain when users selects this choice. This value is computed from the current query and values of all other active filters


values.value
Choice value


values.used
Boolean flag indicating whether this choice is selected


      

A multichoice facet can behave as singlechoice facet by setting the SingleChoiceFacets option.
Tips
Both facet names and values can be translated using the Translations mechanism.

To translate facet name use the facet.name.$name path in the translation json, e.g.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Translations: {
  en: {
    facet: {
      name: {
        "brand": "Manufacturer",
        "availability_rank_text": "Availability"
      }
    }
  }
}

        
      
    
  

To translate facet value use the facets.values.$facet_name.$value_name path in the translation json, e.g.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Translations: {
  en: {
    facets: {
      values: {
        availability: {
          "0": "Out of stock",
          "1": "In stock"
        }
      }
    }
  }
}

        
      
    
  
Range facet
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    {{ name }}
    From {{ min }} - To {{ max }} ({{ value }})
    
  


        
      
    
  

Range facet allows you to build a slider-like filtering component. Range facets
are most commonly used for prices, where users can select their acceptable
price range by adjusting a slider.



Range facet is automatically built from your numerical attributes. When your
source data includes integer or floating point attribute and you request a
facet for it, we will automatically build a range facet.

Search.js bundles a  component which you can use to easily build
a slider.
Template parameters      
        
Name
Description


        
name
Facet name. Note that this is the field name (in your source data) and not a human readable label so you will need to translate it for display


min
The minimal value of this attribute with respect to other facets and query. You may have a product priced at $1, but when the user sets e.g. a brand filter to "Samsung", then the minimum value will be the minimum price of Samsung products.


max
The maximum value if this attribute with respect to other facets and query.


value
Currently selected range encoded as the 2-elements array. The [0] element is the range lower bound, [1] is the range upper bound.


callback
Function that you need to call after the user changes the range to trigger search. If you are using the bundled , then pass the callback as @callback (see the example on the right.


      
Date facet

Example of a date facet template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    {{ name }}
    {{ dates }}
    
        Smaller than
        get
    
    Exact day:
    
    Bigger then:
    
    Range:
    
  


        
      
    
  

Date facet allows you to build a calendar-based filter. Date facets are
automatically built from your source data attributes which contain date values.

Search.js bundles a custom  component which you can use to
build a user-friendly calendar selection filters.
Template parameters      
        
Name
Description


        
name
Facet name. Note that this is the field name (in your source data) and not a human readable label so you will need to translate it for display


dates
Currently selected date range encoded as the 2-elements array. The [0] element is the range lower bound, [1] is the range upper bound.


onDateChange
Function that you need to call after the user changes the date range to trigger search. If you are using the bundled  component, then pass the callback as @change (see the example on the right.


      
Luigi's Box datepicker component

Component invocation


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  

The  supports 2 different modes, integrated with the Luigi's
Box Search API so you can just set the mode and search.js will send the correct
search API request:



Single date mode, where a user can pick a single date which will be
interpreted as an exact match on the backing date field.

Range mode, where a user can pick two dates in calendar which will be
interpreted as a range query in search, i.e., search.js will make a request to
Luigi's Box Search API and add conditions that the attribute value must be
within the date range selected in the component.


The range mode can be furthermore specialized to:
- Later than mode, where a user can pick a single date and search.js will make
a search request and specify that the attribute value must be bigger than
(later than) the selected date.
- Sooner than mode, where a user can pick a single date and search.js will make
a search request and specify that the attribute value must be sooner than
(smaller than) the selected date.


optionsObject example


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
    dateFormat: 'Y-m-d', // Displayed date format
    mode: 'range'        // If you want to select multiple dates
    biggerThan: true,    // Optional, set to true to turn on the *Later than* mode
    smallerThan: true,   // Optional, set to true to turn on the *Sooner than* mode
}

        
      
    
  
      
        
Name
Description


        

idREQUIRED

Each datepicker must have a unique ID.


options
JavaScript Object with options. See full reference on the right.


      
Using custom datepicker component

Example onDateChange to execute range search


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          onDateChange({
  dates: [new Date('2018-01-20'), new Date('2018-12-31')]
})

        
      
    
  


Example onDateChange to execute later than search


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          onDateChange({
  dates: [new Date('2018-01-20')],
  options: {
    biggerThan: true
  }
})

        
      
    
  


Example onDateChange to execute sooner than search


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          onDateChange({
  dates: [new Date('2018-01-20')],
  options: {
    smallerThan: true
  }
})

        
      
    
  

If you want to use your custom date picker component, make sure to call the
onDateChange callback to trigger search. The function takes a single Object
argument with 2 keys: dates and options
      
        
Name
Description


        
dates
Array. In range mode, use 2 values to denote interval. In later than or sooner than mode use an Array with single date.


options
None for single and standard range search. {biggerThan: true} for later than search, {smallerThan: true} for sooner than search.


      
Boolean facet

Example of a boolean facet template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    
      {{ name }}
      ({{ hits_count }})
      
    
  


        
      
    
  

Boolean facet is useful for filtering on boolean attributes. Boolean facet is
automatically generated for all boolean fields in your source data.

It is often used for "In stock" or "Free shipping" filtering.

Note, that the semantics of the boolean facet is that it can be used to filter
for "true"-ness of an attribute, or no filtering at all. If you have an "In
stock" facet, rendered as checkbox:


when the user checks the checkbox, search.js makes a search request requiring
that returned items are "in stock"
when the checkbox is not checked, search.js does not filter by that attribute
at all and displays items regardless of whether they are, or are not in stock.

      
        
Name
Description


        
name
Facet name. Note that this is the field name (in your source data) and not a human readable label so you will need to translate it for display


hits_count
Number of results that will remain when users selects this choice. This value is computed from the current query and values of all other active filters


      
Hierarchical facet

Example of a hierarchical facet template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
      
          
              {{ trans('facet.name.'.concat(name)) }} ({{values.length}})
          
      
      
          
          
      
      
          
              
                  
                  
                      {{ activeChildren[val.value] }}
                  
                  
              
              
          
          
              
                  
                  
                      
                      
                          {{ activeChildren[val.value] }}
                      
                      
                  

                  
                  
              
              
                  
                      {{ trans('facet.multichoice.showLess', { count: hiddenValues.length }) }}
                  
                  
                      {{ trans('facet.multichoice.showMore', { count: hiddenValues.length }) }}
                  
              
          
      
      
          {{ trans('facet.multichoice.search.nothingFound', { facet: name, facetTranslated: trans('facet.name.'.concat(name)).toLowerCase(), search:search }) }}
      
  
  
      
              
                  
                  
                      {{ activeChildren[val.value] }}
                  
                  
              
              
          
  


        
      
    
  

This type of facet is very similar to Multichoice facet, but it has multiple levels that respect hierarchy and can be collapsed or expanded as needed for better UX.

Right now, this facet type is only available for category_path facet. If your data feed is structured correctly and items contain hierarchical information about their respective categories (ancestors), this facet is available to you. Maximum of 3 levels if currently supported.

Template for this facet is fairly complicated, if you absolutely need to customize it, contact us for more information.


Sort component

Example of a sort component template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        
            Price {{ sortDir }}
        
        
            Price
        
    


        
      
    
  

The sort component allows you to build a UI element where users can change the
way the search results are sorted.

When building a sort component, you must decide the attributes which you want
to sort on. Our recommendation is to keep things simple and keep "less is more"
on your mind.

When you don't specify any sort parameters, Luigi's Box Search API will order
the results by our proprietary sorting algorithm, which in many cases is all
you need. Often times, sorting is used as a workaround in the absence of more
powerful faceting functions. Take for example "Sort by availability". You can
provide vastly enhanced user experience and convenience when you implement this
as an "availability" facet. This way, your users can instantly see how many
items are in stock, how many are ready for immediate shipment, how many are
unavailable, etc., and they are able to drill down to specific availability
states they are interested in, while also keeping the filtered items sorted by
relevance.
Template parameters      
        
Name
Description


        

sortBy string

Name of the attribute the results are currently sorted by.  This can be null if no explicit sort was requested.



sortDir string

Sort direction (asc/desc) currently in use.



sortDirReverse string

Reverse sort direction (desc/asc). This is mainly for convenience as you don't have to reverse the sort direction manually.



doSort function

Call this function to execute search with the requested sorting parameters.


      
Loading component

Example of a loading component template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        LOADING ... {{ isLoading }}
    


        
      
    
  

Loading component is visible only during the time we are requesting resources
from external APIs. This includes calls to Luigi's Box Search API to retrieve
the results and (if you are using it), calls to your own ResultsRenderer API.

This component is mainly useful if you want to provide a global loading
indicator, e.g. an overlay over search results with a spinner animation.

You can also access special variables in any of the components:



isLoading to see whether app is waiting for external API

isInitialLoading to see whether app is loading for the first time.


Having the isLoading flag available in every component allows you to build
very flexible loading states. Want to fade out the Search UI on loading? Use a
 on the main Search template to set a specific CSS class.
Want to replace facet templates with a loading animation for each facet? Use a
 in the Facet template to render a different HTML when
loading.
Results component

Example of a results component template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        
    


        
      
    
  

Referenced as .

Used for rendering search results.


Template rendered when no results were found


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        No results found
    
    


        
      
    
  

Note that in case the Search API returns no results, search.js will render
template with id template-no-results.
Template parameters      
        
Name
Description


        
hitsCount
Number of search results in total (including those that are not displayed and only accessible via pagination) that are matching the queries and filters.


results
Array of search results that you should individually pass to a  component via its :result property.


      
Single result component
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        {{ attributes.title }} - {{ url }}
    


        
      
    
  

Referenced as 

Use this component to render a single product representation. You can directly reference all
attributes that you have indexed for this type of content.

For convenience, each result can have the template based on its type.

If the result is of type product, template engine will search for template id template-result-product, and if not found fallback to template with id template-result-default.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        Result {{ type }}
    


        
      
    
  
Additional results component
Referenced as .

Used for displaying additional results only when SeparateExactResults option set to true. When set up, then



 component will display only results found via exact match.

 component will display items found via approximate match exact: false.


When there are no approximate matches, then this component will not be rendered. When
all matches are approximate, then by default all of them will be rendered inside
 component

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    You may also like
    Show after additional results


        
      
    
  

Content wrapped inside  will be displayed before
additional results. You can use this to show a title. You can use a special
"after" slot marker to display content after additional results, e.g., .

Since this content is wrapped inside the component template
it is not shown when the component is not shown, e.g., when there are no
approximate matches.

This component is using the same mechanism and templates as the 
component.

If you are using ResultsRenderer, then the product representation will be generated by
your external ResultsRenderer API via a separate API call. If part of your
search result hits are exact and part is approximate, search.js will call the
ResultsRenderer endpoint twice. You should consider this additional load in
your capacity planning.
Pagination component
Referenced as .

Used for displaying pagination component. Search.js only supports the
"next-page" style pagination where users can request another page of results
and the next page of results is appended to the already displayed results.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        
            Load page {{ page }}
        
    


        
      
    
  
      
        
Name
Description


        

page integer

Next page number.



isNextPage boolean

Indicates whether a next page of results is available.



nextPage function

Call this function to trigger loading of next page of results.


      
"Also search in" component
Referenced as 

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
     0">
        Quick search name
        
            {{ item.attributes.title }} - {{ item.url }}
        
    


        
      
    
  

Displays matches within additional types if QuicksearchTypes option is present.
These templates are scoped to specified type. Each type must have its own
template with the type name embedded in the template id. E.g., if quicksearch
type is brand, template engine will search for template-quick-search-brand.
      
        
Name
Description


        

items array

Array of quick search results for current type. You can access the indexed attributes directly on each array element.


      
RecipesTheming
Search.js comes with 3 themes which control the visual style of the search UI.



boo - which will give you a full-featured and nicely styled search, facets and more modern look. Use this theme, unless you have special requirements and plan to implement the search UI yourself from scratch.

luigis - which will give you a full-featured and nicely styled search. This used to be default theme, now deprecated in favor of "boo".

default - which is a barebone visual style, which only provides a very basic and unstyled UI. If you plan on implementing all templates by yourself, use this template.



Note that for compatibility reasons, the default theme is the barebones default theme. We recommend that you use the boo or luigis theme for faster implementation. Make sure to set Theme: 'boo' or Theme: 'luigis' in the configuration options.


When using the boo or luigis template, you should also set the Facets and Sorts options, to get built-in faceting and sorting support. In our experience, you will usually want to override the template for result tile (template-result-default), based on the product data that you have available.
Localisation
Localisation is controlled by 2 parameters: Translations which contains the
translation keys and translated strings and PriceFilter, which controls the
price format. There is also a 3rd parameter — Locale which just sets up
built-in translations and price formats.

When localising the search UI, we recommend that you configure Locale to load
the defaults and then adjust translations or price format as necessary.

The locales supported out of the box are:


Bulgarian (bg)
Czech (cz)
German (de)
English (en)
Croatian (hr)
Hungarian (hu)
Polish (pl)
Romanian (ro)
Slovenian (si)
Slovak (sk)


To load the default locale settings, use the country code, e.g. Locale: 'de'.
Translations
Translations are configured as a JavaScript object (JSON). See the defaults for
English in the column with code examples. Note that the object that you pass to
Translations is merged with the built-in translations. You can add new
translations, you can override built-in translations, but you cannot delete a
translation.

The Translations object must include the locales as the top-level keys. Note
that you don't have to define the translation for all supported locales, but
only for those that you care about.

For example, to override translation for pagination button, set Translations:
{"en": {"pagination": {"nextPage": "More results"}}}.

Some translations support dynamic parameters, those are indicated with
colon-started variables in the built-in translation. E.g., the default
translation for search title is Results for :query (:hitsCount) — where
:query will be replaced with the current query and :hitsCount with number
of hits. See the built-in translations to see where a dynamic parameter is
supported.

The translations configuration is flexible enough to allow you to configure
translations which depend on configuration in other parts of the search UI,
namely: faceting, quicksearches and sorting. The localisation of all these 3
features depends on how you configure them and on your exact attributes in your
data. For example, you can configure faceting on attribute called
customer_rating_stars by setting Facets: ['customer_rating_stars']. When
search.js renders the facet, it will automatically try to lookup the facet
title as facet.name.customer_rating_stars inside the translations. If it
finds such key, it will use the translation, otherwise, it will fall back to
the attribute name (customer_rating_stars in this case).

To provide custom facet name, set:


Translations: {
  "en": {
    "facet": {
      "name": {
        "customer_rating_stars": "Customer rating"
      }
    }
  }
}


If necessary, you can access the translation mechanism by calling a trans
function from within the search.js templates. Pass it the translation key as an
argument, e.g. trans('pagination.nextPage').


Default English translations


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
    "activeFilter": {
        "remove": "Cancel"
    },
    "activeFilters": {
        "title": "Used filters",
        "cancelAllFilters": "Cancel all filters"
    },
    "additionalResults": {
        "title": "You may also like"
    },
    "error": {
        "title": "The server is currently unavailable, sorry!",
        "titleAgain": "An unexpected error has occurred, we are trying again."
    },
    "facet": {
        "name": {
            "brand": "Manufacturer",
            "category": "Catalogue",
            "details": {
                "value": "Detail",
                "values": "Detail"
            },
            "price": "Price",
            "price_amount": "Price",
        },
        "multichoice": {
            "showMore": "More (:count)",
            "showLess": "Hide others"
        }
    },
    "facetDate": {
        "smallerThan": "Before",
        "exactDay": "Exact day",
        "biggerThan": "After",
        "range": "From-To",
        "get": "get"
    },
    "facetNumericRange": {
        "changed": "We couldn't find any results in the price range you chose",
        "from": "from",
        "to": "to",
        "histogramBucketTitle": ":count"
    },
    "facets": {
        "closeFilter": "Close"
    },
    "loading": {
        "isLoading": "Loading ..."
    },
    "noResults": {
        "noResults": "We couldn't find any suitable results"
    },
    "pagination": {
        "nextPage": "Load more"
    },
    "quickSearch": {
        "title": {
            "category": "Categories",
            "brand": "Brands"
        },
        "topItemTitle": {
            "category": "Top categories",
            "brand": "Top brands"
        }
    },
    "resultDefault": {
        "actionButton": "Detail",
        "availability": {
            "0": "Unavailable"
        },
        "result": "Result"
    },
    "search": {
        "title": "Results for :query (:hitsCount)",
        "titleShort": "Search",
        "filter": "Filter",
        "queryUnderstanding": {
            "title": "We detected the following filters",
            "cancel": "Repeat without automatic filter detection"
        }
    },
    "sort": {
        "availability": "Availability",
        "price": "Price",
        "price_amount": "Price",
        "name": "Name",
        "title": "Name",
        "headlineTitle": "Sort by: &amp;nbsp;"
    },
    "site": {
        "title": "Search",
        "titleResults": "Results for :query (:hitsCount)"
    },
    "topItems": {
        "title": "You might be interested",
        "results": {
            "title": "Top products"
        }
    }
}

        
      
    
  
Price format
Price format is controlled by a price filter, which is automatically called
from within the default templates, such as {{ attributes.price_amount | price }}.

You can control the price filter options by setting PriceFilter parameter
in the configuration options.


PriceFilter: {"decimals": 0, "prefixed": false, "symbol": "CZK"}

      
        
option
description


        
decimals
Specifies rounding precision


prefixed
Boolean, specifies if the price symbol should be displayed before or after the price ($42 or 42$)


symbol
The currency symbol


      
Faceting
Faceting (also known as filtering or aggregations) allows you to build a more
powerful Search UI — one that makes it possible for the user to drill down the
results and further refine their query.

For example, a user may enter "wireless earbuds" and get back thousands of
results. Facets allow the user to see "groupings" of results, to see that of
those thousands, there are products made by Apple, HTC, Lenovo, Samsung. Now
the user can click on "Apple" in the facet and see just those "wireless
earbuds" which are made by Apple.



There are usually more facets, and the crucial property that allows effective
filtering, is that the facets are linked together. If there is a facet for
"brand" and a facet for "color", and the user selects "Apple" in the brand
facet, then the "color" facet must respect that choice and only show colors for
"wireless earbuds" made by "Apple. This linking works for unlimited number of
facets - all facets respect choices in other facets and allow the users to
effectively explore and browse the results.


Example Facets configuration


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          Facets: ['brand', 'category', 'color', 'price_amount']

        
      
    
  

To implement facets in search.js, start by configuring the Facets
configuration option. It is an array of attribute names, from which you want to
build the facets.



Reload the page and if you are using luigis theme, you should see a nice
search UI with 4 facets in the left column — one facet for each attribute
in the Facets array. Search.js will automatically render correct template for
each facet type:



Multichoice facet for string attributes

Range facet for numeric attributes

Boolean facet for boolean attributes

Date facet for date attributes


Besides configuring Facets, you may also need to configure more human
readable facet titles. Search.js will attempt to translate the facet names via
its standard translation mechanism, but when it does not a
translation, it will use the attribute name as facet title.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          Locale: 'en'

        
      
    
  

To get more human readable facet titles, start by configuring Locale in initialization options.



Then configure translations for facet titles by settings Translations initialization options.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          Translations: {
  "en": {
    "facet": {
      "name": {
        "brand": "Brand",
        "category": "Category",
        "color": "Main color",
        "price_amount": "Price"
      }
    }
  }
}

        
      
    
  



  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          Facets: ['brand:5', 'category:3', 'color']

        
      
    
  

The Facets configuration also supports a special syntax which will (if the
theme supports it) show a limited amount of facet values, and allow the user to
expand the list.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          Translations: {
  "en": {
    "facet": {
      "multichoice": {
         "showMore": "More (:count)",
         "showLess": "Hide others"
      }
    }
  }
}

        
      
    
  

If you suffix the attribute name by a colon followed by a number, luigis
theme will understand this as a collapsing instruction and show a limited
number of facet values, followed by a link to expand more values. If you want
to customize the expansion link, configure the text via a standard translation
mechanism.
Sorting facet values
Facet values are sorted by number of potential hits by default. There are some
cases where there's a more natural ordering, e.g. apparel sizing, or product
availability. Since the "natural" ordering of the values in general is very
specific, you must use FacetsOrder option or re-sort the facet values in the facet template.
FacetsOrder option
Pass FacetsOrder option when initializing Search.js. This option accepts object with facets names as keys. Values can be following strings: hits, alphabetical or sizes. You can also pass custom sort function as value.

If some facet is not defined in this object, or hits is passed as value, default sorting is used.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
  // other options,
  FacetsOrder: {
    brands: 'alphabetical',
    sizes: 'sizes',
    colors: function(a, b){
      return a.value - b.value
    }
  }
}, ...)

        
      
    
  
Dynamic facets

Rendering 10 facets, selected by Luigi's Box AI


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
  // other options,
  DynamicFacetsSize: '10'
}, ...)

        
      
    
  


Rendering 10 facets, each showing the first 8 options and the rest available via "Show more"


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
  // other options,
  DynamicFacetsSize: '10:8'
}, ...)

        
      
    
  


Mixing explicit and dynamic facets


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
  // other options,
  Facets: ['price_amount', 'category'],
  DynamicFacetsSize: '5'
}, ...)

        
      
    
  

For stores with a product portofolio spanning several verticals, selecting filters to display with search is a very challenging problem. When searching for "lightbulbs" you want the users to be able to filter on "Energy efficiency", while searching for "office chair", you want a filter on "Material". Luigi's Box dynamic facets streamline and automate the filter selection process. You simply enable dynamic facets, set the number of desired facets and the API will use an AI model to select the most appropropriate filters for every query.

We sometimes see attempts to solve this problem by brute force - you specify every possible attribute inside Facets. This will work to some extent, bceause the filters are constrained by the result set. Continuing with the simple example above, imagine setting Facets: ['Energy efficiency', 'Material'] for all searches. When searching for "office chairs", none of the chairs will have "Energy efficiency" attribute, so the facet for "Energy efficiency" will not be computed. However, performance of such queries will be terrible.

The selection is driven by 2 different characteristics:


Statistical properties of the data, e.g. selectivity of the filters.
Feedback from search analytics - the filters that are being used more will bubble up to higher positions.


The filter selection process will get more smart over time, as it adapts to user behavior. Note that this feature enables additional AI model which is not being trained by default. If you plan to use dynamic faceting, get in touch with us at support@lugisbox.com
Single choice facet
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
  // other options,
  Facets: ['price_amount', 'category', 'labels'],
  SingleChoiceFacets: ['labels']
}, ...)

        
      
    
  

The builtin behavior for string/text facets is to enable multiple selections, with an implicit "OR" boolean operator between individual values. For certain use-cases, you may want to enable only a single choice within a facet by setting the SingleChoiceFacets option. The option takes an array of facets (attribute names) which will only allow a single choice. If the user selects a facet value while a value is already selected, the originally selected value will automatically unselect.
Sorting in template

This recipe is deprecated, you should probably use FacetsOrder instead.


Instead of a simple v-for over all facet values in the Multichoice
template, sort the facet values in-place. See the code
for an example. The array at the beginning specifies the natural ordering. Due
to the constraints of the underlying templating engine (vue.js), you have to
make sure that the code in v-for is a single-line code, without newline
characters.

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          v-for="val in ['S', 'M', 'L', 'XL'].map(function(v) {return values.filter(function(f) { return f.value == v })[0]}).filter(function(el) { return el})

        
      
    
  
Sorting facets alphabetically

This recipe is deprecated, you should probably use FacetsOrder instead.


Since the "natural" ordering of the names in general is specific, you must re-sort the facet names in the facets template.

Instead of a simple v-for over all facets in the Facets template, sort the facet names in-place. See the code
for an example. The array at the beginning specifies the natural ordering. Due
to the constraints of the underlying templating engine (vue.js), you have to
make sure that the code in v-for is a single-line code, without newline
characters.

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          v-for="(facet, i) in facets.sort(function(a,b) {if (a.name.toUpperCase()  b.name.toUpperCase()) {return 1;} return 0;})"

        
      
    
  
Loading states
There are 2 separate loading states which you should handle in your UI.
1. Loading state before search.js loads
When you are redirecting users to a standalone search page, that search page usually contains just the bare minimum, most often just the header, footer and an empty placeholder element for search results. You should make sure that this page looks good, because that bare minimum is what your users will see for a split second while search.js loads.

We recommend that the search placeholder element is not empty, but instead shows a loading message. A loading spinner that you use elsewhere on your site is a good placeholder. Make sure that the placeholder is correctly spaced — it is usually desirable to set some height CSS property to push the footer all the way down to the bottom of the page.
2. Loading state while search.js loads search results
To implement loading state inside the search UI, you can ether define your custom loading template which will be rendered as an overlay on top of the results. You may need to adjust the CSS. If you don't need an overlay on top of the results, you can use a isLoading variable to create a simple loading effect in CSS.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
  ...


        
      
    
  

For example, to fade-out results while new results are loading, you can set a custom search-loading class somewhere in the template.
Note that the isLoading property is accessible from all templates.




Example CSS style which will create a fade-out effect


  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          .search-loading { opacity(0.7); }

        
      
    
  

Use a matching CSS to create an fade-out effect.



Use loading state as an overlay over results to avoid flicker and scroll position reset.


Example of a bad UX. Having a code like this in your template-search will lead to flicker and scroll reset.


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    Loading..
  
    
  


        
      
    
  

Make sure that when implementing loading states, you are not inadvertedly
hiding the results. This leads to bad UX and possibly an unwanted behavior in
different browsers. It's easy to write a loading state as shown in the code
example: when loading flag is active, simply render loading state, otherwise
render the results. This implementation will in effect cause the browser to
remove the results HTML from the DOM and replace it with HTML of the loading
component, and subsequently, adding back the HTML of results, along with
next-page resuls. This will lead to:


Flicker. As the results are removed from HTML and re-added, your users will
experience a content flicker.
Scroll reset. Some browsers (most notably Firefox) will lose current scroll
position and when results are added back to HTML, scroll the user all the
way to the top of the results list.

Frontend results rendering
Search.js supports a mixed rendering mode, where the frontend library renders the UI, and handles user interaction, but the results grid is rendered by a Javascript function that you provide.

To activate this mode, set the ResultsRenderer option to point to a Javascript function which will be responsible for rendering the product tiles. The function must accept 3 parameters:


array of product data,
the DOM element reference for the wrapper container where the results should be appended, and
a boolean flag indicating whether the wrapper container should be reset with fresh tiles, or if the tiles should be appended to existing content (e.g. when user is using pagination)


The function must return a Javscript Promise, which will resolve once the rendering is completed. Resolving the promise will yield control back to the search.js library, which will finish rendering the UI and disable the loading indication.

An example implementation is shown below.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          ResultsRenderer: function rr(results, element, next) {
    return new Promise(function p(resolve) {
        var text = results.map(r => r.url);
        element.innerText = next
            ? element.innerText + JSON.stringify(text)
            : JSON.stringify(text);
        resolve(null);
    });
}

        
      
    
  
Backend results rendering
Search.js supports a mixed rendering mode, where the frontend library renders the UI, and handles user interaction, but the results grid is rendered by your backend. This mode is useful in the rare cases, when for some reason, you cannot synchronize all product data with Luigi's Box. However, note that this mode introduces additional latency from the point of end user. If you can, avoid this mode and synchronize all the data necessary to render the product box in the list of results.

To activate this mode, set the ResultsRenderer option to point to a URL which will return the rendered product HTML. This URL must accept product IDs via a URL parameter. When setting the URL, use a special "variable" called ${product_ids} to interpolate IDs of results. This variable contains a comma-separated list of item_id attribute of each found product.

When you activate this mode, the rendering workflow will change to this:


For example, when you set:

ResultsRenderer: "https://api.example.shop/render?ids=${product_ids}"

And the search request returns 3 hits, with item_id-s 10292, 87261 and 21827 — in this order, your API will receive a GET request:

GET https://api.example.shop/render?ids=10292,87261,21827

And should return a response like this


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  Product 10292


  Product 87261


  Product 21827


        
      
    
  


User types in a query and submits search
Loading state is set — if your templates allow this, the UI enters the loading mode, e.g. a loading spinner is shown.
search.js sends an XHR request to Luigi’s Box search API and gets back the standard search response, including facets, quicksearch and search results.
Loading state is kept active.
search.js renders quicksearch and facets
Loading state is still active.
search.js collects the item_id attributes from each of the search results, joins them via a comma symbol, and interpolates them into the ResultsRenderer option by replacing the ${product_ids} placeholder.
search.js sends another XHR request to the URL retrieved in the previous step.
If the XHR call responds with HTTP 200, the response is interpreted as an HTML code and rendered instead of the template-results.
Loading state is unset


When rendering the HTML, keep to these simple rules:


Render the results in the order they are given in the comma-separated ID list
Render the results without a "wrapper" element. When the user request another page of the results (via pagination), the response from the ResultsRenderer API will be appended to the already present results.

Google Analytics tracking
When you configure GATrackingCode in initialization options, search.js will
automatically start to track events into Google Analytics profile, specified in
the GATrackingCode option.

By configuring this option:


On each search, search.js will send a virtual page view to Google Analytics,
with the URL of the search. This virtual page view will ensure, that if you
have Site search tracking configured in GA, you will continue seeing search
data even after deploying Luigi's Box search. It is necessary that the query
URL parameter name in search.js is configured to the same value as in your
"old" search, otherwise GA Site search tracking will not work.
Search.js will detect whether you are using "urlChangeTracker" GA plugin, and
not send additional virtual page views if the plugin is active.
On each search, search.js will send a custom GA event with "Event Category"
set to "Search" and "Event Action" set to "display".
On each click on a search result, search.js will send a custom GA event with
"Event Category" set to "Search" and "Event Action" set to "click".


When you activate Google Analytics integration, each template will have access
 to a special ga object, which you can use to implement your custom,
 fine-grained tracking. The ga object provides a generic function which will
 send an event to the GA profile specified in the GATrackingCode option. To use
 it, call ga.sendGAEvent(hitType, category, action, label) with appropriate arguments, e.g.
 ga.sendGAEvent('event', null, 'Search', 'paginate').
Top items

Example TopItems configuration which will show 4 most popular items, 4 most
popular categories and 4 most popular brands


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          TopItems: ['item:4', 'category:4', 'brand:4']

        
      
    
  

Top items are the most "popular" products/categories/brands/etc. displayed when
there are no results for the current query. It is simply a last-resort fallback
that allows you to show at least some results instead of an empty page.

Following the universal syntax, TopItems specifier is composed of type and count: {type}:{count}

Default configuration is built from DefaultFilters.type and QuicksearchTypes.

The screenshot below illustrates how "Top Items" are rendered:


Default filters
The DefaultFilters configuration option allows you to specify default filters
that are sent along with each search request (unless the user overrides them).

You will most likely want to always specify a default for the type attribute
to set which type to search by default. If you don't set a default filter for
type, search.js will search all your types by default and you will get a mix
of products/categories/brands etc. in the results. To prevent this, set
DefaultFilters: {type: 'item'} to instruct search.js to search only objects
where type attribute is set to item.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          DefaultFilters: {
  type: 'item',
  availability_rank: [1, 2, 5, 7]
}

        
      
    
  

DefaultFilters can be set for a subset of your attributes, e.g.:


There are two modes of DefaultFilters:


default filters that are always sent on the background and the user doesn't
know about it and has no option to change their values. This is typically the
case for the type attribute.
default filter which the users can modify. To enable modifications, include
the filter attribute in the Facets configuration. This will enable a facet
for the attribute, but that facet will respect values from the DefaultFilters
configuration as its default. Unless the user changes the facet values, the
facet will respect DefaultFilters. Once the user changes values for the
facet, search.js will respect the user selection until the search intent changes.


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          DefaultFilters: {
  type: 'item',
  availability_rank: [1, 2, 5, 7]
},
Facets: ['availability_rank']

        
      
    
  

Following configuration will set default filters for the availability_rank
attribute and limit the search results to objects where availability_rank is
1, 2, 5 or 7. By enabling availability_rank in Facets, search.js will
render the availability_rank facet and pre-check some of the availability
ranks, as specified by DefaultFilters.
Banners with custom (overriden) templates
If you are overriding templates and banners campaigns are not rendering at all, make sure that you are referencing the  components at the appropriate places.


Rendering results with the result template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  


To override the result template (but not the banner template), override template-result-default.

      
        
Banner type
Rendering mechanism


        
Header banner
Reference  in your custom template (most commonly in template-search).


Footer banner
Reference  in your custom template (most commonly in template-search).


Side banner
Reference  in your custom template (most commonly in template-search).


5th result banner
Make sure you are rendering results via  component, which will make sure that the banner is rendered within results.


      
Postponing Data Collection
To ensure accurate price collection in situations where the standard price_amount attribute is not available, utilize the PostponeDataCollection method. This may occur when interacting with the pricing API, leading to the complete absence of the price_amount attribute or when a different attribute, such as price_en_amount, is used.

Without access to the price_amount attribute, collecting prices for results accurately becomes impossible. This, in turn, results in the inability to measure cart value at all.

Upon activation, it employs an emitAnalyticsEventFn callback function passed to the onDone function. This enables you to provide the missing price_amount attribute in the OnDone function by assigning a price from the pricing API response or utilizing a different attribute that contains information about the resulting price.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          PostponeDataCollection: true,
OnDone: function(query, results, emitAnalyticsEventFn) {
  results.map(result => {
      // Add custom logic to retrieve the correct price
      result.attributes.price_amount = result.price_en_amount;
  })
  emitAnalyticsEventFn();
}

        
      
    
  
Pricing API integration
If you are using different pricing levels depending on the signed-in user, one
of the strategies that you can use to render correct user prices in
search is using your pricing API.

Search.js is written in Vue.js and that means that you can use the concept of reactivity to re-render prices after you load them from your API.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          OnDone: function(query, results, emitAnalyticsEventFn) {
  window.Luigis.Search.$app.$store.commit('setItgState', {key: 'prices', data: null});

  if (results &amp;&amp; results.length > 0) {
      // generate ids for API call
      var ids = [];
      if (results) {
          results.forEach(function(result) {
              if (result.attributes.item_id) {
                  ids.push(result.attributes.item_id);
              }
          });
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
          // when we get API response
          // set itgState.prices to new prices from API
          // response is in format {id1: 9.99, id2: 19.99}
          var jsonParsed = JSON.parse(this.responseText);
          window.Luigis.Search.$app.$store.commit('setItgState', {key: 'prices', data: jsonParsed});
      };

      // call API
      var apiUrl = 'https://www.example.com/pricing-api?ids='+ids.join(',');
      xhttp.open("GET", apiUrl);
      xhttp.send();
  }
}

        
      
    
  

The bulk of the code lives in the OnDone callback where you collect the identifiers of the results (in this example, item_id is used) and make an API request to your pricing API. When the XHR request completes, you set a special itgState reactive property and Vue.js will re-render the product tiles.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
     {{ itgState.prices[attributes.id] | price }}
     {{ attributes.price_amount | price }}


        
      
    
  

Template uses attributes.price_amount by default (feel free to use a loader element) and when the API call succeeds, Vue.js will automatically re-render component and use itgState.prices instead. You can use the xxx | price filter just like with price_amount.]]></content>
      <icon>search</icon>
    </page>
    <page>
      <url>/search/shopping_assistant.html</url>

      <title>Shopping Assistant API</title>
      <content><![CDATA[Shopping Assistant API
Use the Shopping Assistant API endpoint to design interactive, guided product discovery experiences tailored for your users.

This API endpoint navigates conversation flows you have already created. To get started first create an assistant in the Luigi's Box app.

Luigi's Box Assistant can learn from user interactions to provide better recommendations. To enable learning, integrate Luigi's Box Search Analytics service with your website by following the instructions.


The assistant endpoint is publicly available and requires no authentication.

Endpoint
POST https://live.luigisbox.com/v1/assistant
RequestQuery parameters      
        
 
 


        
tracker_id
Your site identifier within Luigi's Box. You can find this identifier in every URL in the Luigi's Box app once you are logged in.


assistant_handle
The unique handler of the assistant to use.


user_id
The unique identifier of the end-user. If it matches the user ID collected in analytics, it can drive personalization of the assistant results.


      
Request body parameters

  
    
       
       
    
    
      
assistant_version REQUIRED integer

      The version of the assistant. Use -1 for the latest version.
    
    
      
next_question_handleoptional string

      The handle of the next question to be presented to the user. If omitted, the API determines the next question automatically.
    
    
      
price_fieldoptional string

      The product field used for calculating price ranges. Defaults to price_amount. If you want to use a different field, specify it here. If the field does not exist or is not numeric, an error will be returned.
    
    
      
stepsoptional array[object]

      An array of previous interactions (questions and answers) in the conversation. Each step contains the question handle and the selected option handle.
    
    
      
sortoptional string

      Sorting criteria for the product results (e.g., price:asc, price:desc,title:asc, etc.). If not provided, the default sorting will be applied.
    
    
      
contextoptional object

      Override fields used by search. The fields available for overriding are availability_field, availability_rank_field, freshness_field, boost_field, geo_location_field, margin_field, absolute_margin_field, and discount_field.
    
    
      
foptional array[string]

      An array of OR filters to apply to the product results (e.g., category:electronics, price:1|5, etc.).
    
    
      
f_mustoptional array[string]

      An array of AND filters that must match the product results (e.g., category:electronics, price:1|5, etc.).
    
    
      
neg_foptional array[string]

      An array of OR filters to exclude product results (e.g., category:electronics, price:1|5, etc.).
    
    
      
neg_f_mustoptional array[string]

      An array of AND filters to exclude the product results (e.g., category:electronics, price:1|5, etc.).
    
    
      
search_in_variantsoptional boolean

      A boolean value indicating whether to search in product variants. If set to true, the search will include variants of products. Defaults to the search setting set in the app.
    
    
      
non_collapsed_variantsoptional boolean

      A boolean value indicating whether to return non-collapsed variants in the results. If set to true, variants will be returned as separate items in the results. Works only when search_in_variants is allowed.
    
  

Request headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Example request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'

connection = Faraday.new(url: 'https://live.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.post("/v1/assistant?tracker_id=1234-5678&amp;assistant_handle=piano_finder&amp;user_id=123456") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.body = '{
  "assistant_version": 1,
  "steps": [
    {
      "question_handle": "color",
      "option_handles": [
        "color-blue"
      ]
    }
  ]
}'
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XPOST --compressed\
  "https://live.luigisbox.com/v1/assistant?tracker_id=1234-5678&amp;assistant_handle=piano_finder&amp;user_id=123456"\

   -d '{
  "assistant_version": 1,
  "steps": [
    {
      "question_handle": "color",
      "option_handles": [
        "color-blue"
      ]
    }
  ]
}'


        
      
        
          request('POST', "https://live.luigisbox.com/v1/assistant?tracker_id=1234-5678&amp;assistant_handle=piano_finder&amp;user_id=123456", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
  ],
  'body' => '{
  "assistant_version": 1,
  "steps": [
    {
      "question_handle": "color",
      "option_handles": [
        "color-blue"
      ]
    }
  ]
}'
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This endpoint requires no authentication

// Example request body

{
  "assistant_version": 1,
  "steps": [
    {
      "question_handle": "color",
      "option_handles": [
        "color-blue"
      ]
    }
  ]
}


        
      
    
  
HTTP response
The response to an assistant request is a structured JSON.
Success response (200 OK)
A successful response includes the current state of the conversation, such as the next question, and a filtered list of products.

Response fields
      
        
 
 


        
assistant_handle
The handle of the assistant being used.


tracker_id
Your site identifier within Luigi's Box.


hits
An array of product results that match the current state of the conversation.


important_attributes
An array of important attributes that should be displayed for each product in the results.


avatar_image_link
The URL to an avatar image for the assistant, if available.


question.title_html
An HTML-formatted title of the current question.


question.description_html
An HTML-formatted description of the current question, if available.


question.image_link
The URL to an image related to the current question, if available.


question.type
The type of the question, which can be single_choice or multi_choice.


question.handle
The unique identifier for the current question.


question.options[].title_html
An HTML-formatted title of the option.


question.options[].description_html
A HTML-formatted description of the option, if available.


question.options[].option_handle
The unique identifier for the option.


question.options[].next_question_handle
The handle of the next question to be presented if this option is selected.


question.options[].image_link
The URL to an image related to the option, if available.


question.options[].color_code
The color code associated with the option, if applicable.


question.options[].hits_count
The number of products that match this option.


question.options[].price_range
The price range of products matching this option, formatted as "min - max".


      

Example success response

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "assistant_handle": "piano_finder",
  "tracker_id": "1234-5678",
  "hits": [
    {
      "id": "product_1",
      "title": "Grand Piano",
      "price_amount": 5000,
      "image_link": "https://example.com/images/grand_piano.jpg",
      "important_attributes": ["brand", "model"],
      "updated_at": "2024-10-01T12:00:00Z"
    }
  ],
  "important_attributes": ["brand", "model"],
  "avatar_image_link": "https://example.com/images/avatar.png",
  "question": {
    "title_html": "What type of piano are you looking for?",
    "description_html": "Please select one of the options below.",
    "image_link": "https://example.com/images/question_image.jpg",
    "type": "single_choice",
    "handle": "piano_type",
    "options": [
      {
        "title_html": "Grand Piano",
        "description_html": "A large and elegant piano.",
        "option_handle": "grand_piano",
        "next_question_handle": null,
        "image_link": null,
        "color_code": null,
        "hits_count": 10,
        "price_range": "$4000 - $6000"
      }
    ]
  }
}

        
      
    
  
Error Responses
The API uses standard HTTP status codes. Note that the format of the error response body can vary depending on the type of error.

Client-side errors

These errors indicate a problem with the request that was sent.



400 Bad Request: 
Indicates malformed input, such as a missing parameter or incorrect data type. The response is a structured JSON object.


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "type": "malformed_input",
  "reason": "incorrect parameters provided",
  "caused_by": {
    "assistant_version": ["must be an integer"]
  }
}

        
      
    
  



404 Not Found: 
Indicates that the requested assistant or question does not exist.


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  "Assistant with id 'Webnar Guitars' for tracker_id 'YOUR_TRACKER_ID' not found"
]

        
      
    
  

Server-side errors

These indicate a temporary problem with the service. You should retry the request after a short delay. If the problem persists, contact support.
      
        
Status code
Response body (text/plain)
Reason


        
408 Request Timeout
Request timed out
The request took too long to process.


500 Internal Server Error
Internal server error Request-Id: ...
Indicates a generic server error.


503 Service Unavailable
Service Unavailable
A backend service is temporarily down. Please retry after a short delay.


      
Integration guideBuilding a conversation flow
The Assistant API is designed to create a conversational product discovery experience. Here's how to implement a basic flow:



Start the conversation: Make an initial request with only the tracker_id, assistant_handle, and assistant_version parameters.

Present options: Display the question and options returned in the response to the user.

Track selections: When a user selects an option, add this interaction to the steps array in your next request.

Show results: Display the products returned in the hits array at each stage of the conversation.

Continue the conversation: The API will automatically determine the next most relevant question based on previous answers, or you can specify the next question using next_question_handle.


Example conversation flow

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          const TRACKER_ID = 'YOUR_TRACKER_ID'; 
const ASSISTANT_HANDLE = 'Webinar Guitars';
const ASSISTANT_VERSION = -1;
const API_ENDPOINT = 'https://live.luigisbox.com/v1/assistant';
const USER_ID = 'some_user_id';

let steps = []; // This array will store the history of the conversation.

// Initial API call to start the conversation
async function startConversation() {
    const url = `${API_ENDPOINT}?tracker_id=${TRACKER_ID}&amp;assistant_handle=${ASSISTANT_HANDLE}&amp;user_id=${USER_ID}`;
    const payload = {
        assistant_version: ASSISTANT_VERSION,
        steps: [] // Sending an empty array
    };

    const response = await axios.post(url, payload);
    renderQuestion(response.data); 
}

function handleOptionClick(questionHandle, selectedOption) {
    // 1. Record the answer by adding it to our state array
    steps.push({
        question_handle: questionHandle,
        option_handles: [selectedOption.option_handle] // API expects an array
    });

    // 2. Get the handle for the next question from the selected option
    const nextQuestionHandle = selectedOption.next_question_handle;

    // 3. Call the API again with the updated steps and the next question handle
    callAssistantAPI(nextQuestionHandle);
}

async function callAssistantAPI(nextQuestionHandle = null) {
    const url = `${API_ENDPOINT}?tracker_id=${TRACKER_ID}&amp;assistant_handle=${ASSISTANT_HANDLE}&amp;user_id=${USER_ID}`;
    const payload = {
        assistant_version: ASSISTANT_VERSION,
        steps: steps // The steps array now contains the user's history
    };

    // Add the handle to the payload to continue the conversation flow
    if (nextQuestionHandle) {
        payload.next_question_handle = nextQuestionHandle;
    }

    const response = await axios.post(url, payload);
    renderQuestion(response.data);
}

function renderQuestion(data) {
    if (data.question &amp;&amp; data.question.options.length > 0) {
        // Render the question and options...
    } else {
        // No more questions, the conversation is over.
        displayCompletionMessage();
    }
}

        
      
    
  
Price range display
The Assistant API automatically calculates price ranges for each option, helping users understand the price distribution of products that match each option. This is calculated using the field specified in the price_field parameter (defaults to price_amount).
Best practicesDesign effective questions
Create questions that help users narrow down their choices effectively. Each question should:


Address a specific aspect of the product selection process.
Have options that meaningfully divide the product catalog.
Present clear, concise option text.

Track user journeys
Analyze how users navigate through your assistant to optimize the question flow and product recommendations. Use the analytics integration to:


Identify common paths through the assistant.
Detect questions where users frequently abandon the process.
Measure conversion rates from assistant interactions.

Show relevant results early
While the assistant is designed to guide users to the perfect product through a series of questions, showing relevant results early in the process can improve user satisfaction. The API returns matching products at each step, so consider:


Displaying a selection of top matches alongside questions.
Highlighting the diversity of available options.
Showing how each answer changes the result set.

Ensure mobile compatibility
Design your assistant interface to work well on mobile devices, where users may prefer a guided experience over traditional filtering.]]></content>
      <icon>search</icon>
    </page>
    <page>
      <url>/search/facet_value.html</url>

      <title>Facet value search</title>
      <content><![CDATA[Facet value search
The facet value search endpoint enables targeted searching within specific facet values. This is particularly useful when working with facets that contain many options, where the standard facet listing doesn't provide sufficient filtering capabilities.

This endpoint processes the facet_q parameter to search within a specified facet's values and returns only matching facet values with their corresponding hit counts.


  📋 Prerequisites
  
    Luigi's Box must synchronize your product database with its search index before using this feature.
  
  
    See Indexing the data for setup instructions.
  



This endpoint is publicly available and does not require authentication.

Endpoint
GET https://live.luigisbox.com/v1/facet_value
Required Parameters      
        
 
 


        
tracker_id
Your site identifier within Luigi's Box (visible in all URLs when logged into the Luigi's Box app)


facet_q
User input - the query string to search within facet values.


facets
Name of the facet to search within (e.g., facets=category)


      


  ⚠️ Important limitations
  
    You can only specify one facet (e.g., facets:brand).
    The facet_q parameter only works with this endpoint; it's ignored in regular search requests
    While facet_name:values_count syntax is supported (e.g., facets=category:10), it limits returned results
  

Optional Parameters
This endpoint supports most optional parameters from the standard search endpoint, allowing you to maintain the consistent filtering and context when searching within facet values.
Please refer to the Search API for a complete list of optional parameters.
You can reuse URL parameters from your search requests, simply change the endpoint to v1/facet_value and add the required facet_q and facets parameters.


❗ Don't forget the context!

To get the right results, you must include the user's current search context. Without it, the API may return irrelevant facet values and misleading hit counts.


Always pass the original q and any active f[] filters from the main search to this endpoint. For example, if a user's search for "pianos" is filtered by type:product and color:White, your facet search call needs to include the original q=piano and both f[] filters.

ExamplesStandard search request
GET https://live.luigisbox.com/search?tracker_id=111111-111111&amp;f[]=type:product&amp;f[]=color:White&amp;q=piano&amp;facets=brand,color,price_amount&amp;size=24
Corresponding facet value search
GET https://live.luigisbox.com/v1/facet_value?tracker_id=111111-111111&amp;f[]=type:product&amp;f[]=color:White&amp;q=piano&amp;facets=brand&amp;size=24&amp;facet_q=yamaha
Response format
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "results": {
    "query": "piano",
    "corrected_query": null,
    "facet_value_query": "yamaha",
    "filters": [
      "type:product",
      "color:White"
    ],
    "filters_negative": [],
    "facets": [
      {
        "name": "brand",
        "type": "text",
        "values": [
          {
            "value": "Yamaha",
            "hits_count": 25
          }
        ]
      }
    ]
  }
}

        
      
    
  
Implementation examples
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'

BASE_URL = 'https://live.luigisbox.com'
FACET_VALUE_ENDPOINT = '/v1/facet_value'
TRACKER_ID = 'YOUR_TRACKER_ID'

def search_facet_values(facet_query, search_query, filters)
  connection = Faraday.new(url: BASE_URL) do |conn|
    conn.use FaradayMiddleware::Gzip
  end

  response = connection.get(FACET_VALUE_ENDPOINT, {
    tracker_id: TRACKER_ID,
    'f[]' => filters,
    q: search_query,
    facets: 'brand',
    size: 24,
    facet_q: facet_query
  })

  if response.success?
    puts JSON.pretty_generate(JSON.parse(response.body))
  else
    puts "Error, HTTP status #{response.status}"
    puts response.body
  end
end

# Usage for "white pianos" context
search_facet_values('yamaha', 'piano', ['type:product', 'color:White'])

        
      
        
          request('GET', BASE_URL . FACET_VALUE_ENDPOINT, [
            'query' => [
                'tracker_id' => TRACKER_ID,
                'f[]' => $filters,
                'q' => $searchQuery,
                'facets' => 'brand',
                'size' => 24,
                'facet_q' => $facetQuery
            ],
            'headers' => [
                'Accept-Encoding' => 'gzip'
            ]
        ]);

        echo "Status: " . $response->getStatusCode() . "\n";
        echo $response->getBody();

        return json_decode($response->getBody(), true);
    } catch (RequestException $e) {
        echo "Error: " . $e->getMessage() . "\n";
        if ($e->hasResponse()) {
            echo "Status: " . $e->getResponse()->getStatusCode() . "\n";
            echo $e->getResponse()->getBody();
        }
        throw $e;
    }
}

// Usage for "white pianos" context
searchFacetValues('yamaha', 'piano', ['type:product', 'color:White']);
?>

        
      
        
          const axios = require('axios');

const BASE_URL = 'https://live.luigisbox.com';
const FACET_VALUE_ENDPOINT = '/v1/facet_value';
const TRACKER_ID = 'YOUR_TRACKER_ID';

const searchFacetValues = async (facetQuery, searchQuery, filters) => {
  const params = {
    tracker_id: TRACKER_ID,
    'f[]': filters,
    q: searchQuery,
    facets: 'brand',
    size: 24,
    facet_q: facetQuery
  };

  try {
    const response = await axios.get(BASE_URL + FACET_VALUE_ENDPOINT, {
      params: params,
      headers: { 'Accept-Encoding': 'gzip' }
    });

    console.log('Status:', response.status);
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.status || error.message);
    if (error.response) {
      console.error(error.response.data);
    }
    throw error;
  }
};

// Usage for "white pianos" context
searchFacetValues('yamaha', 'piano', ['type:product', 'color:White']);

        
      
    
  
Error handlingCommon errors
Multiple or missing facets (400 Bad Request)

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
    "facet_q": [
        "facet_q The request contained zero or more than one facet. Please specify one and only one facet with this type of request."
    ]
}

        
      
    
  
Best practices


Single facet requirement: Always specify exactly one facet in the facets parameter.

Carry over full context: To ensure relevant results, always pass the q parameter and all active f[] filters from the user's main search to the facet value search request.

Error handling: Implement proper error handling for HTTP status codes and API-specific error responses.]]></content>
      <icon>search</icon>
    </page>
    <page>
      <url>/search/variants.html</url>

      <title>Variant search</title>
      <content><![CDATA[Variant search
If your products are structured into variants, Luigi's Box search can consider the variants and treat them separately. See the video below for a demonstration and visual explanation.


Variant search modes
There are three modes that can be used in case your data contains product variants.
Searching variants separately
In this mode, your variants will be searched and displayed separately, as individual tiles on the search results page. If your product contains five different color variants and this product matches the search phrase, each variant (color variation) will be displayed separately and the user will see five copies of the product tile, each with a different color.

Note that there is no guarantee that the variants will be displayed next to each other, as each variant is treated as a separate product. If a variant is not available it will be automatically demoted, plus each variant has its own feedback loop from the analytics.

To activate this mode, simply index each variant as if it was a standalone product. If you are using API do not index nested variants and if you are using feeds, there's no need to include the grouping parameter.
Retrieving best variant
In this mode, the search is variants-aware and it will always retrieve the variant that is matching the user's phrase best. All of the other variants of the product will be included as the nested objects of the product.

In this mode, the master product serves as a virtual parent for the variants and it is not searched or retrieved at all. Only the individual variants will be searched and retrieved. The variant selection applies the following logic:


Score the variants by their similarity to the input phrase. E.g., for the phrase "blue t-shirt" the product "Blue T-shirt" is a better match than "Black T-shirt" and would thus score higher.
If there is a tie and you are indexing a numeric _variant_preference attribute, the variant with the highest _variant_preference is selected. You can use this attribute to get control over the tie-breaking algorithm.
Otherwise, if there is a tie and there are several variants with an equal score, the variant with the lowest price is selected.


To activate this mode, index nested variants via API or provide grouping identifier in the feed and contact our support to active variant search for you.
Merging variants data into the master product
In rare cases you may need to index variants data as separate nested variants but do not want to use variants-aware search. Contact our support and we will configure variants flattenning, where we merge all of the variants data into the master product and search and retrieve master products. Note that behavior-wise, this is the same mode as when Searching variants separately which you should use directly, unless you have some specific restrictions.
Data requirements
Refer to the docs for instructions for getting variants data into Luigi's Box.


  
    
      
        Indexing variants via API
        
        Read the docs →
      
    
  

  
    
      
        Providing variants via feeds
        
        Read the docs →
      
    
  

Should you use variants?
Using variants makes sense in the cases where there is a visual difference between the variants. Some good examples of when variants make sense are e.g. color or material, because it is clear to the end-user what the differences between variants are. Ultimately, the decision whether to use variants or not will be driven by your business needs. For some businesses, displaying all of the color variants of the same product on separate tiles is a better decision than using variants-aware search, simply because it fosters product visibility and discoverability.

An example where we recommend to not use variants would be sizes in fashion. There are no differences between the variants — the product image, title and even the price is usually the same and your users would not be able to tell a difference between different product variants.

Most importantly, stay consistent with the rest of your website. If you are not using variants in your product listings, it is usually very confusing to the users when you introduce them to search.
Performance impact
Note that variants search comes with a minor performance impact. To avoid increasing latencies, we recommend to keep the number of variants per product below 10 on average. If you have need to index more variants you are probably trying to use variants-aware search for a scenario where it may not make sense and search performance may suffer.]]></content>
      <icon>search</icon>
    </page>
    <page>
      <url>/search/ranking.html</url>

      <title>Ranking</title>
      <content><![CDATA[Ranking
When ordering search results, Luigi's Box ranks (sorts) the products using a multitude of signals and an ensemble of global and local models. There are several rules and main principles that guide the final ranking.
Standard ranking model
At the basic level, the ranking is based on:


Fulltext match. Luigi's Box will show products with the best match against the user phrase. If you are familiar with the was standard fulltext works, you may know about the concept of "score" - a number that represents the strength of the match. This concept has several problems and we are using a concept of "match quality" instead to rank the results. You will see the results assigned into distinct match quality levels and sorted in this order:


Exact matches
Matches with typo tolerance allowed
Partial matches where some parts of the user phrase did not match


Availability. The ranking prefers available products over unavailable products. We allow for different "levels" of availability, which allow us to rank products "in stock, available now" over products "in stock, available in 48 hours". See Availability rank for more details.
Signals from the analytics feedback loop. This makes sure that better selling products take precedence over products with no sales.
Personalization features, i.e., Luigi's Box ranks results with respect to user profile. The ranking of the product will be dependent on the user who is submitting the query.

Influencing ranking
Luigi's Box considers other signals in ranking, depending on their presence in the product data. If you want to activate additional rankers, simply start indexing the respective attribute in the data.
Ranking by margin
When you include the margin in the product data, the rankers will take it into consideration and prefer products where your margin is higher. See Margin for more details about the product data attribute.

Note that margin is considered as a ranking signal but it does not drive ranking completely. In other words, when you include margin in the data, the results won't be sorted by margin, only influenced by margin, as the other signals will get a vote too.
Ranking by freshness
Freshness ranker depend on the information about when the product started to sell. You can index this data in an introduced_at attribute. See Introduced at for more details about the indexing part.

Freshness ranker promotes products which are new (considering the different against current timestamp, i.e., now() - introduced_at). The newer the product the more boosting it earns. The freshness ranker considers the freshness up to 60 days after the introduced_at date/timestamp and uses a log-decay to gradually decrease the boosting, as the product ages.

The main purpose of the freshness ranker is to compensate for the lack of business metrics from the analytics feedback loop that the new products inevitable experience. When a new product enters the store it has no user interactions and no conversions and the freshness ranker balances this out.
Boosting
You can boost an object by setting its boost attribute in the data. See Boost for more details about the indexing part.

Boosting is a very strong ranking signal. Once you boost the object, the boosting will take precedence over any other ranking signal except the match quality.
Manual interference
If you need to affect ranking of a product in general, or on a per-query basis, you can use Luigi's Box app to adjust the ranking in real-time, using these features:


Catalog management > Boosting, which allows for manual boosting.
Search > Search results customizations, where you can set manual per-query rules.]]></content>
      <icon>search</icon>
    </page>
    <page>
      <url>/search/api.html</url>

      <title>Search API</title>
      <content><![CDATA[Search API
Use the search endpoint to get a fulltext search functionality with advanced filtering options.


  
    
      Search API integration tutorial
      
        
 See the full guide to integrating Luigi's Box Search using API
        See the tutorial
      
    
  


To use this feature, we need to synchronize your product database with our
search index. See Indexing the data for more details.

Luigi's Box Search can learn the best results ordering. In order to
enable learning, you need to integrate Luigi's Box Search Analytics service
with your website by following the instructions.


The search endpoint is publicly available and requires no authentication.

Search
GET https://live.luigisbox.com/search
Required Parameters      
        
 
 


        
q
User input - query. Optional, if you do not send q parameter, the API will only apply filters (f[] parameter). This is useful for generating listing pages.


tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


      
Optional Parameters      
        
 
 


        

f[]optional

Filter using key:value syntax e.g., f[]=categories:Gadgets to filter hits according to chosen criteria. Filtering on top of numerical and date attributes supports ranges, using pipe as a separator, e.g., f[]=price_amount:5|7. This range can be left open from either side, e.g., f[]=price_amount:6|. If a combination of filters for the same field is provided, they are applied with OR. E.g., filters f[]=categories:jackets&amp;f[]=categories:coats will retrieve products, that have either jackets OR coats category.



f_must[]optional

The same logic applies as for the f[] parameter, except when there are several f_must for the same attribute, they are treated as boolean AND.



sizeoptional

How many hits you want the endpoint to return. Defaults to 10, maximum is capped to 200.



sortoptional

Allows you to specify ordering of the results, using attr:{asc|desc} syntax, e.g., sort=created_at:desc. In the case of sorting by geo field (e.g., sort=geo_location:asc), search request needs to contain also context[geo_location] representing visitors location.



sort_typeoptional

Sort, where type part of the parameter name is a name of a requested type. Allows you to specify ordering of the specific types of the results, using attr:{asc|desc} syntax, e.g., sort_item=created_at:desc.You can use several sorts in one request, e.g., sort_item=price_amount:asc together with sort_article=introduced_at:desc.



quicksearch_typesoptional

A comma separated list of other content types (e.g., category, brand, helpdesk content), which should be (also) searched for alongside the main type (products). These will be without any facets though.



facetsoptional

A comma separated list of facets you want to have included in the response. Can be provided as coma separated list, where any value can be provided as facet_name:values_count, e.g. facets=category,material:5 (default values count is 30). Limiting values_count is only possible for facets of type text (e.g. facets=categories:5) and will not work on float type facets like price_amount.



dynamic_facets_sizeoptional

If you wish our service to include additional, dynamically identified facets in the response, send the maximum number of such facets in this parameter. Defaults to 0 , i.e., no dynamically identified facets are returned. Dynamic identification of facets is based mainly on categories of retrieved items and their interesting attributes.



pageoptional

Which page of the results you want the endpoint to return. Defaults to 1.



fromoptional

If you prefer to use an equivalent of offset instead of page number, you can pass it as from parameter, which should be a non-negative integer. An equivalent of page=1 would be from=0.



use_fixitsoptional

Allows to control use of fixit rules. Use use_fixits=1 or use_fixits=true to explicitly enable usage of fixit rules. Use other values (such as use_fixits=false) to disable fixit rules for current request. Default value is true, so fixit rules are enabled by default. Look for suggested_url in response to find out whether our system indicates that a redirect should be performed and what should be the destination (based on a matched fixit rule).



prefer[]optional

Soft filter, using key:value syntax e.g., prefer[]=category:Gadgets to prefer hits according to chosen criteria. See Query-time boosting for more details.



hit_fieldsoptional

A comma separated list of attributes and product parameters. Only these fields (in addition to some default ones) will be retrieved and present in results. If not provided, all fields will be present in results.



remove_fieldsoptional

A comma separated list of attributes and product parameters. If provided, these fields will be omitted from the results. If not provided, all fields will be present in results.



user_idoptional

If supplied and is equal to user id collected in analytics, it can drive personalization of search results. In case you use identifiers of logged in users (customer_id in analytics), please put the ID of logged in user here and fill in parameter client_id as well.



client_idoptional

Set this parameter to client_id (sent in analytics) in case you store identifier of logged in user into user_id.



ctx[]optional

drives model selection, using key:value syntax e.g., ctx[]=warehouse:berlin. you can provide multiple key:value pairs, that are combined into one context definition. order of key:value pairs in request is not important. however, please note that key:value pairs must match one of the contexts which are being reported into luigi's box search analytics. see the multi-warehouse solution and context in analytics for more details.



quoptional

Allows to control query understanding process. Use qu=1 or qu=0 to turn it on or off. This feature is currently off by default. Important: if you want to use this feature, you must also include user_id parameter with the value of _lb cookie from your site. Look for suggested_url in response to find out whether our system indicates that a redirect should be performed and what should be the destination (based on results of the query understanding process).



non_collapsed_variantsoptional

Used in conjunction with Variant search. See Variant search for further detail. Does not collapse all variants into singular item and instead retrieves all variants. Use non_collapsed_variants=true to turn on, it is off by default.


      
Context Parameters
See the standard solutions for more information about context parameter usage.


  
    
      
        
 Multi-warehouse
        Read more →
      
    
  

      
        
 
 


        

context[geo_location]optional

A coma separated list of geographical coordinates (lat, lon) representing visitors location, e.g., context[geo_location]=49.0448,18.5530. Allows to consider distance between a visitor and the items she is searching for. To be able to consider geographical context in search, catalog objects also need to contain an attribute which holds geo coordinates. By default, we assume that these are stored at geo_location.



context[geo_location_field]optional

A definition of a custom field with geo coordinates to be used for geo search by context[geo_location]. If not defined, we assume that these are stored at geo_location field but you can override this by specifying context['geo_location_field']=my_field.



context[availability_field]optional

Allows to change or disable consideration of item availability on results ranking. Without context definition, the default availability field is considered for ranking. Supply context[availability_field]=my_custom_field parameter to override this to your custom field. This field must contain integer value (0 for unavailable items or 1 for available items). If you want to disable influence of items availability on results ranking, set this context explicitly to nil: context[availability_field]=nil.



context[availability_rank_field]optional

Allows to change or disable consideration of item availability_rank on results ranking. Without context definition, the default availability_rank field is considered for ranking. Supply context[availability_rank_field]=my_custom_field parameter to override this to your custom field. This field must contain integer value (15 for unavailable items or 1-14 for available items with descending priority (1 is most available)). If you want to disable influence of items availability_rank on results ranking, set this context explicitly to nil: context[availability_rank_field]=nil. In case of both availability_rank_field and availability_field are defined, availability_rank_field has priority. If either attribute is set to nil, availability will be disabled.



context[boost_field]optional

Allows to change the default field used for boosting or disable boosting on results ranking. Without context definition, the default boost field is considered for ranking. Provide context[boost_field]=my_custom_field to change this to your custom field. Make sure that your custom field contains integer values from the interval 0-3 (where higher number means higher boosting priority). If you want to disable influence of boosting on results ranking, set this context explicitly to nil: context[boost_field]=nil.



context[freshness_field]optional

Allows to change or disable consideration of item freshness (boosting of new items) on results ranking. Without context definition, the default freshness field is considered for ranking. Provide context[freshness_field]=my_custom_field to change this to your custom field. Make sure that your custom field holds date/timestamp value in ISO 8601 format. If you want to disable influence of freshness on results ranking, set this context explicitly to nil: context[freshness_field]=nil.


      
Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Example request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'

connection = Faraday.new(url: 'https://live.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/search?q=harry+potter&amp;tracker_id=1234-5678")

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XGET --compressed\
  "https://live.luigisbox.com/search?q=harry+potter&amp;tracker_id=1234-5678"\




        
      
        
          request('GET', "https://live.luigisbox.com/search?q=harry+potter&amp;tracker_id=1234-5678", [
  'headers' => [
    'Accept-Encoding' => 'gzip'
  ]
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This endpoint requires no authentication

// This endpoint requires no body


        
      
    
  
HTTP Response
The response to search request is a structured json.
You will see two top-level fields: results and next_page. The results field contains all information
about requested results. The next_page field contains link used for pagination to second page of result.
Results fields      
        
 
 


        
query
Requested query (q request parameter) as a string.



corrected_queryoptional

This field is returned only if Luigi's Box altered the requested query. See corrected_query.


total_hits
Number of hits found for requested type.


hits
A list of results for requested type. Content of each result item depends on data stored in catalog.


facets
A list of facets (requested or automatically identified) calculated for matched items.


filters
A list of filters used for matching results.


quicksearch_types
A list of results for all requested quicksearch_types.


suggested_facet
Optional. Indicates one facet with its facet values which Luigi's Box evaluated as most useful for the current situation. Can be used to provide an "assistant-like" user interface, where a user is presented with one question in each step, allowing her to efficiently narrow-down the result set.


suggested_url
Optional. In case when LB algorithm recognizes the possibility to redirect the requested query (query understanding of fixit), it returns this url for redirect in this field.


offset
Deprecated, please ignore.



campaignsoptional

A list of campaigns for the query. See banner campaigns



      

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "results": {
    "total_hits": 223,
    "hits": [
      {
        "url": "http://www.e-shop.com/products/123456",
        "attributes": {
          "image_link": "http://www.e-shop.com/assets/imgs/products/123456.jpg",
          "description": "Description field from your product catalog",
          "categories": [
            "Gadgets",
            "Kids"
          ],
          "categories_count": 2,
          "title": "Product X",
          "title.untouched": "Product X",
          "availability_rank_text": "true",
          "price": "5.52 EUR",
          "condition": "new"
        },
        "type": "item",
        "updated_at": "2017-11-23T00:00:00+00:00"
      },
      {
        "url": "http://www.e-shop.com/products/456789",
        "attributes": {
          "image_link": "http://www.e-shop.com/assets/imgs/products/456789.jpg",
          "description": "Description field from your product catalog",
          "categories": [
            "Gadgets",
            "Kids"
          ],
          "categories_count": 2,
          "title": "Product Y",
          "title.untouched": "Product Y",
          "availability_rank_text": "preorder",
          "price": "12.14 EUR",
          "condition": "new"
        },
        "type": "item",
        "updated_at": "2017-11-23T00:00:00+00:00"
      }
    ],
    "facets": [
      {
        "name": "type",
        "type": "text",
        "values": [
          {
            "value": "item",
            "hits_count": 123
          },
          {
            "value": "article",
            "hits_count": 14
          }
        ]
      },
      {
        "name": "price_amount",
        "type": "float",
        "values": [
          {
            "value": "0.0|9.0",
            "hits_count": 1
          },
          {
            "value": "9.0|18.0",
            "hits_count": 1
          }
        ]
      },
      {
        "name": "categories_count",
        "type": "float",
        "values": [
          {
            "value": "1.0|2.0",
            "hits_count": 147
          },
          {
            "value": "2.0|3.0",
            "hits_count": 71
          }
        ]
      },
      {
        "name": "created_at",
        "type": "date",
        "values": [
          {
            "value": "2017-10-23T00:00:00+00:00|2017-11-23T00:00:00+00:00",
            "hits_count": 18
          },
          {
            "value": "2017-11-23T00:00:00+00:00|2017-12-23T00:00:00+00:00",
            "hits_count": 80
          }
        ]
      }
    ],
    "offset": "20",
    "campaigns": [
      {
        "id": 13,
        "target_url": "https://www.e-shop.com/harry-potter",
        "banners": {
          "search_header": {
            "desktop_url": "https://www.e-shop.com/harry-potter-1.jpg",
            "mobile_url": "https://www.e-shop.com/harry-potter-2.jpg"
          },
          "search_footer": {
            "desktop_url": "https://www.e-shop.com/harry-potter-3.jpg",
            "mobile_url": "https://www.e-shop.com/harry-potter-4.jpg"
          }
        }
      }
    ]
  },
  "next_page": "https://live.luigisbox.com/search?q=harry+potter&amp;tracker_id=1234-5678&amp;page=2"
}

        
      
    
  
Facets
The returned facets are available for the given query. Only the filtered facet returns all available values, other facets and their values are returned only for the filtered results.

Example:

This example illustrates how the facets change when a filter is applied. 



Initial search



Search query: yamaha


Available facets:



Condition: new (822), used (1)


Category: guitars (423), pianos (400)






After applying a filter



Action: The user filters by Condition: used.

Updated facets:



Condition:  Remains unchanged, still showing new (822), used (1) so the user can easily switch their selection.

Category: Updates to show counts relevant only to "used" items, now displaying guitars (1). The "pianos" option disappears as there are no used pianos in the results.





Integration with other Luigi's Box servicesQuery rewrite
Query rewrite is a way to control your search and autocomplete results.
You can set up query rewrites in Luigi's Box application and they
will have an effect on autocomplete and search results.

If you are using search.js then query rewrite
will work out of the box and no integration is necessary on your side.

If you are using API to build search, then you must adapt your
code to incorporate some functionality of query rewrite.

Each query rewrite has exactly one search query it responds to (diacritics and case do not matter).
You can choose if you want to rewrite query, or keep the original one. You can also define filters,
which will be applied to your search requests for given query.

When creating query rewrite, you can choose if you want to admit to the customer, that you have
rewritten the original query. You can also define a message, which will be shown in case of applying query rewrite.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "query_rewrite": {
        "id": 9,
        "original_query": "mini guitar",
        "admit_rewrite": true,
        "message": "We rewrote your entered query to another with better search results for you."
    }
}

        
      
    
  
Banners
Search API response will include data related to banner campaigns set up in the application. Refer to the Banner campaigns documentation for more details.
ScenariosFiltering search results
To implement filtering, use the f[] and f_must[] parameters.

By default when searching filters of same type are applied with OR and
filters of different types are applied with AND. E.g., request with filters
f[]=category:jackets&amp;f[]=category:windproof will find products, that have
category jackets OR category windproof OR both, and request with
filters f[]=category:jackets&amp;f[]=protection:windproof will find products,
that have category jackets AND protection windproof.

If you want to combine two filters of same type in AND like fashion, use
f_must[] instead of f[]. E.g., you want to find only products that have
category jackets and category windproof matching query 'adidas'. So instead
of using the following request:

GET https://live.luigisbox.com/search?tracker_id=*your_tracker_id*&amp;f[]=type:item&amp;f[]=category:jackets&amp;f[]=category:windproof&amp;query=adidas

you should use this request:

GET https://live.luigisbox.com/search?tracker_id=*your_tracker_id*&amp;f[]=type:item&amp;f_must[]=category:jackets&amp;f_must[]=category:windproof&amp;query=adidas
Filtering using complex compound filters (OR, NOT)
You might have a use-case where you need to submit a more complex filter, perhaps a compound of nested conditions, mixing logic of and, or or not.
You can achieve this by changing the request method to POST from default GET and submitting the complex filter within request body as JSON.
Keep all the other parameters (tracker_id, q, ...) in the request URL. You can even put additional filters in the request URL. These will be combined using AND logic with the complex filter.

POST https://live.luigisbox.com/search?tracker_id=*your_tracker_id*&amp;f[]=type:item&amp;f[]=category:jackets&amp;query=adidas`

The payload must have filters on a top-level, which is a Hash/Dict. Within filters, you first define a type
for which the filter should be applied to (e.g., item or product) and define the desired filter as a compound of
(even more deeply) nested combination of and, or and not. The actual individual low-level filter follows the same
syntax as other filters (key-value separated by a colon, pipe used for ranges) and should be placed under filter key where needed.
See example below:

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "filters": {
    "item": {
      "and": [
        {
          "or": [
            {
              "or": [
                {
                  "filter": "price_amount:1|3"
                },
                {
                  "filter": "price_amount:9|"
                }
              ]
            },
            {
              "and": [
                {
                  "filter": "category:foo"
                },
                {
                  "filter": "price_amount:6"
                }
              ]
            }
          ]
        },
        {
          "not": [
            {
              "filter": "price_amount:2"
            }
          ]
        }
      ]
    }
  }
 }

        
      
    
  
Notice about complex filters and facets
Unlike traditional filters, which are made not to influence the facet of the same type (e.g., you can see other categories in a category facet despite having a category filter turned on),
the complex filter is always applied and facets cannot show values outside the scope defined by the filter.
Filtering with geographical distance
To filter results based on geographical distance from the user's current location, for example to
to find result within 50km, use f[]=geo_range:|50km. This way, all
results with geo location farther than 50km will be filtered out. (For this filter to
work, you must have a geo field indexed within your data, and provide geo location context
in search parameters.)

The pattern for value of geo range filter is lower_range|upper_range, and lower and upper range
need to match the pattern of /\d+km/. You can also omit the lower or upper range to achieve an
open interval.
Filtering and allowing missing values
By default, when filter is used, items that have the required attribute missing are filtered out.
However, if you don't want to filter out items that have the required attribute missing, you can use
special value 'value_missing' for the filter.

So for example, if you would want to get all the items that have the color attribute set to red
OR they don't have the color attribute specified at all, you could use this combination of filters.


f[]=color:red&amp;f[]=color:value_missing


This special filter value is allowed for numeric, date, boolean and text filters.
Query correction
Luigi's Box search endpoint offers optional functionality that allows it to avoid no-results or low-relevance results for the search query.
If it recognizes that the requested query would end in a no-result state, it automatically augments the query to provide higher chances of finding results.
There are two ways a query can be augmented, depending on the type of entered query. If a query includes a typo, such as searching for sheos instead of shoes,
Luigi's Box can "fix" the typo prior the actual search, in order to avoid fuzzy search with uncertain results.

In this case, the corrected_query would be a string looking like this:

sheos shoes

If there is no typo but a part of query is causing the no result state, for example if there is no whiskey or whiskey shoes in catalog and query would be shoes whiskey, the corrected query would be this:

shoes whiskey

The last case is a search query consisting of a code. For example, 6834a88asc. But, there is no product in catalog with this code. There is only one with 6834a77asb. Since Luigi's Box is strict with codes and does not allow fuzziness for them, the query would end in no result state. But Luigi's Box can try to get a match with corrected query, in which case it would look like this:

6834a88asc

In every case, the corrected query is an HTML representation of the augmented query, that can be used to inform the user on the site, that the original query was in fact altered in some way.
Best practicesProvide filter for the main type
Make sure that you are requesting only the type that you want to search in.
The API will search in all types by default — you send a request with a
query and we will return a mix of results from all types. Even if you are not
explicitly indexing multiple types, we are always automatically indexing your
users' queries (type = queries), so you will always get mixed results by
default. We sometimes see that clients are requesting large numbers of results
and then filter only the relevant types locally, but there is a much simpler
and more efficient way to do this. Simply request search results only for the
relevant type by adding a type filter: f[]=type:item.
Request all types in a single HTTP request
Searching across multiple types is a very frequent requirement, e.g. you want
to show search results for products, brands and categories on a single search
results page. You can get results for several types by using quicksearch_types.
The facets, sorting, filtering and pagination only applies to the main type
that you are specifying vie the f[] filter on type attribute.

The results for the quicksearch_types will be in the quicksearch_hits structure in the JSON response.

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;quicksearch_types=category,brand&amp;q=ukulele

Try it live →
Use pagination
The API supports pagination, you can page through the result set by using the page parameter. Request a smaller size of results for better performance and let the user request more.

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;q=ukulele&amp;size=30&amp;page=2

Try it live →
Avoid default explicit sorting
The results are sorted by Luigi's Box AI by default. The AI models are only involved if you do not specify explicit sorting though. Once you set the sort parameters, the results are ordered by the sort field you requested and not by AI.


  
        
      
      !
    

  
  
    Warning
    
        
    Using the sort parameter does more than just reorder results. It overrides the default AI-driven relevance ranking, which can cause the total_hits count to change. Additionally, this may alter the results for quicksearch_types (e.g., categories, brands). This is due to a known limitation where these secondary results are inferred from the paginated list of products; as the sort order changes this list, the quicksearch results also change.
  

    
  

Use dynamic facets
For products with hundreds, perhaps thousands of different parameters, it is often impossible to settle on a static list of filters (facets) to show to the users. Use the dynamic_facets_size parameter to let the AI model choose the most suitable facets for the given phrase. Compare the two requests below. The search request for "ukulele" will compute facets such as "Bridge" or "Finish", while the search request for "piano" responds with facets such as "Number of Keys".

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;q=ukulele&amp;facets=price_amount,category&amp;dynamic_facets_size=3

Try it live →

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;q=piano&amp;facets=price_amount,category&amp;dynamic_facets_size=3

Try it live →
Avoid loading unnecessary data
By default, the search API will include all of visible product attributes in the search response. Most of the time, that is not necessary and you can improve performance and decrease latency by only asking for the attributes that you will need and use. The hit_fields parameter drives the attribute selection. You pass it a list of comma separated attributes that you require to be included in the API response, such as hit_fields=image_link,price. Note that title is always returned by default, whether you specify it or not.

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;q=ukulele&amp;hit_fields=image_link,price

Try it live →

Note that the API response has 2.13kB (at the time of writing) while the original unfiltered API response has 8.23kB. That's roughly a 4-fold improvement.

Alternatively, you can use a reverse approach and instead of specifying what should be included, specify what attributes should be excluded by setting remove_fields. It is, again, a comma separated list of attributes that you want to remove from the API response, such as remove_fields=image_link,price.

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;q=ukulele&amp;remove_fields=image_link,price

Try it live →

Notice that the nested data is included in the API response implicitly and you can remove it via remove_fields. For the smallest possible API response size and the best latency, combine hit_fields with remove_fields=nested.

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;q=ukulele&amp;hit_fields=image_link,price&amp;remove_fields=nested

Try it live →

Notice that the API response is only 1.8kB for this scenario (at the time of writing).]]></content>
      <icon>search</icon>
    </page>
    <page>
      <url>/search/searchPage.html</url>

      <title></title>
      <content><![CDATA[.h-100 {
    min-height: 200px;
  }

  @media (max-width: 768px) {
    .h-100 {
      min-height: 150px
    }
  }

  .lb-results-wrapper {
    margin: var(--bs-gutter-x) 0 0 0;
  }
  .lb-result-default {
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
    margin-bottom: var(--bs-gutter-x);
    max-height: 100%;
    div.mb-2, a, .card-body {
      height: 100%;
    }
    @media (max-width: 769px) {
      width: 100%;
    }
  }

  .card-body {
    transition: box-shadow .3s ease;

    @media (min-width: 769px) {
      min-height: 120px;
    }
    @media (max-width: 768px) {
      min-height: 165px;
    }

    &amp;:hover {
      -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* For WebKit browsers */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Standard */
      border-radius: 8px; /* Optional: softens the popup corners */
      cursor: pointer;
    }

    &amp; a {
      text-decoration: none;
      color: #212529;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;

      @media (min-width: 769px) {
        min-height: 180px;
      }
      @media (max-width: 768px) {
        min-height: 135px;
      }

      &amp;  .card-link {
        color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
        margin: 0;
        margin-top: auto;
      }
    }

    @media (max-width: 768px) {
      &amp; a { 
        min-height: 120px;
      }
    }
  }

  .mb-2 {
    margin-bottom: var(--bs-gutter-x) !important;
  }
  .lb-sorts,
  .lb-pagination {
    padding-left: calc(.5 * var(--bs-gutter-x));
  }
  .lb-pagination__pager {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

    &amp;  span.lb-pagination_page {
      margin: 0 10px;
    }
  }

  .lb-pagination__info {
    justify-content: center;
    display: flex;
  }

  .lb-pagination__btn {
    display: none;
  }

  .lb-pagination_page {
    font-size: 1.2rem;

    &amp;:hover {
      color: #a57dac;
      cursor: pointer;
    }
  }

  .is-no-results + .lb-pagination {
    display: none;
  }

  #lb-search-element {
    @media (min-width: 992px) and (max-width: 1600px) {
      width: 75vw;
  }

  }
  #lb-search-element h1,
  .lb-no-results {
    margin: 0;
    margin-left: calc(.5 * var(--bs-gutter-x));
  }

  .search-headline {
    display: flex;
    align-items: flex-start;
    margin: 40px 0px 30px;
    .count-badge {
      margin-top: 5px;
      margin-left: 10px;
      padding: 2px 16px;
      background-color: #682175;
      border-radius: 10px;
      p {
        margin: auto;
        font-size: 0.8rem;
        color: white;
      }
    }
    @media (max-width: 769px) {
      h1 {
        font-size: calc(1.275rem + .3vw);
      }
      .count-badge p {
        font-size: 0.75rem;
      } 
    }
    @media (max-width: 469px) {
      h1 {
        font-size: calc(1.1rem + .3vw);
      }
      .count-badge p {
        font-size: 0.7rem;
      } 
    }
  }

  .lb-top-items__results .lb-results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;
    margin-left: calc(-.5 * var(--bs-gutter-x));
  }

  .search-loading { 
    opacity: 0.7; 
  }

  




  
    
     
      Search results for query "{{ query }}"
      {{ hitsCount }} 
    
      
        We have modified the search phrase for you: {{ correctedQuery }}
      
      
      
      
      
      
      
      
    
  



  
    
  



  
    
      
        
          
            
               {{ attributes.title }}
            
            
              ${query.toLowerCase()}`) +
                '...'"
              >
              
            
            
              {{ attributes.description.substring(0, 125) + '...' }}
            
            Read the docs →]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/analytics/collector.html</url>

      <title>DataLayer collector</title>
      <content><![CDATA[DataLayer collector
Luigi's Box leverages Google Analytics' ecommerce events for efficient data collection. In simple terms, the process involves the collector monitoring the dataLayer object and gathering all pertinent events that are pushed. If you are not currently pushing ecommerce events to the dataLayer, there are two methods to implement this:


Using gtag manager:
Utilize the gtag manager to seamlessly push ecommerce events to the dataLayer.
Using native dataLayer.push method:
Alternatively, employ the native dataLayer.push method to achieve the same outcome of logging events to the dataLayer.


Both options yield equivalent results, as they effectively record events in the dataLayer, which the collector can subsequently access. It's worth noting that there is a slight disparity in the structure of events within the dataLayer object between the two methods, but the collector is designed to interpret both seamlessly.
Collector initialization
Collector script will be added via LBX script. Please insert the LBX script to the  element of each page.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  
Collector option parameters breakdown      
        
Parameter
Description


        
GetCookieConsent
A function that returns a boolean value indicating whether the user has granted cookie consent.


customDataLayerName
The name of the object where the collector should look for ecommerce events.


      
Event parameters breakdown
This section outlines event paramteres related to ecommerce events. When reporting events, include the necessary fields based on the specific context.
      
        
Parameter
Description


        
event
The name of the event. Supported event names are: view_item_list, view_item, select_item, add_to_cart, purchase.


item_list_name
Name of the reported list. Supported list names are: Autocomplete, Search Results, Product Listing, Recommendation.


items
An array containing list results.


item_id

Identity of an item within the reported list.


item_name
Name of an item within the reported list.


index
Position of an item within the reported list.


type
Type of an item within the reported list. Supported types are: item, category, brand, article.


price
Price of an item within the reported list.


query
The query that the user entered (required only for search results and autocomplete).


filters
Object containing filter name(s) with their respective value(s). When a single filter has multiple values, you can include all values at once in an array.


transaction_id
The unique identifier of a transaction.


value
The monetary value of the event.


currency
Currency of the items associated with the event, in 3-letter ISO 4217 format.


      
Identity
Ensure that the item_id event property matches the identity of the indexed data.
Event examples
The collector is equipped to read and interpret data from the following ecommerce events. Please be aware that the examples use a structure that represents the minimum required parameters. If you choose to include additional parameters for your own needs, it is completely acceptable.
Autocomplete example
Luigis box's collector utilizes view_item_list ecommerce event to gather a list of autocomplete results that a user is presented with.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Autocomplete",
    search_term: "phone",
    items: [
      {
        item_id: "CAT_12345",
        item_name: "Phones",
        index: 1,
        type: "category", // Define a result type. If left empty, fallbacks to "item".
      },
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 2, // If pagination is used, offset the index by the number of items before the current page.
        price: 9.99,
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        index: 3,
        price: 20.99,
        type: "item",
      }
    ],
    filters: {
      "Color": ["Black", "Silver"],
      "Operating system": "Android"
    }
  },
});


        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_id: "autocomplete",
  item_list_name: "Autocomplete",
  search_term: "Phone",
  items: [
    {
      item_id: "CAT_12345",
      item_name: "Phones",
      index: 1, 
      type: "category", // Define a result type. If left empty, fallbacks to "item".
    },
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 2, // If pagination is used, offset the index by the number of items before the current page.
      price: 9.99,
      type: "item",
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 3,
      price: 20.99,
      type: "item",
    }
  ],
  filters: {
    "Color": ["Black", "Silver"],
    "Operating system": "Android"
  }
});

        
      
    
  
Search example
Luigis box's collector utilizes view_item_list ecommerce event to gather a list of search results that a user is presented with. 

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Search Results",
    search_term: "Phone",
    items: [
      {
        item_id: "CAT_12345",
        item_name: "Phones",
        index: 1, 
        type: "category", // Define a result type. If left empty, fallbacks to "item".
      },
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 2, // If pagination is used, offset the index by the number of items before the current page.
        price: 9.99,
        type: "item",
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        index: 3,
        price: 20.99,
        type: "item",
      }
    ],
    filters: {
      "Color": ["Black", "Silver"],
      "Operating system": "Android"
    }
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_name: "Search Results",
  search_term: "Phone",
  items: [
    {
      item_id: "CAT_12345",
      item_name: "Phones",
      index: 1, 
      type: "category", // Define a result type. If left empty, fallbacks to "item".
    },
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 2, // If pagination is used, offset the index by the number of items before the current page.
      price: 9.99,
      type: "item",
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 3,
      price: 20.99,
      type: "item",
    }
  ],
  filters: {
    "Color": ["Black", "Silver"],
    "Operating system": "Android"
  }
});

        
      
    
  
Product Listing example
Luigis box's collector utilizes view_item_list ecommerce event to gather a list of product listing page results that a user is presented with. 

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Product Listing",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Black phone 256gb",
        index: 1, // If pagination is used, offset the index by the number of items before the current page.
        price: 9.99,
        type: "item",
      },
      {
        item_id: "SKU_12346",
        item_name: "Black phone 128gb",
        index: 2,
        price: 20.99,
        type: "item",
      }
    ],
    scopes: {
      "CategoryLabel": "Electronics | Phones | Black Phones",
      "CategoryIdentity": "12345",
    },
    filters: {
      "Operating system": "Android" // Pass additional filters selected by the user
    }
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_name: "Product Listing",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Black phone 256gb",
      index: 1,
      price: 9.99,
      type: "item",
    },
    {
      item_id: "SKU_12346",
      item_name: "Black phone 128gb",
      index: 2,
      price: 20.99,
      type: "item",
    }
  ],
  scopes: {
    "CategoryLabel": "Electronics | Phones | Black Phones",
    "CategoryIdentity": "12345",
  },
  filters: {
    "Operating system": "Android" // Pass additional filters selected by the user
  }
});

        
      
    
  

For product listing events, you must include scopes object with these parameters:
      
        
Scope name
Scope value


        

CategoryLabelREQUIRED

Category path in a human-readable format, with specific categories separated by a pipe. The current category name has to be included in the path. If the full path is not available, the current category name suffices.



CategoryIdentityREQUIRED

An identifier of the category, which must match the identity in the catalog.


      
Recommender example
Luigis box's collector utilizes view_item_list ecommerce event to gather a list of recommender results that a user is presented with. 

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Recommendation",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 1,
        price: 9.99,
        type: "item",
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        index: 2,
        price: 20.99,
        type: "item",
      }
    ],
    filters: {
      "RecommenderClientId": "Basket",
      "ItemIds": ["/products/123", "/products/129"],
      "Type": "basket",
      "RecommendationId": "1abc2de3-f456-7890-1g23-hijk45l6789m",
    }
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_name: "Recommendation",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 1,
      price: 9.99,
      type: "item",
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 2,
      price: 20.99,
      type: "item",
    }
  ],
  filters: {
    "RecommenderClientId": "Basket",
    "ItemIds": ["/products/123", "/products/129"],
    "Type": "basket",
    "RecommendationId": "1abc2de3-f456-7890-1g23-hijk45l6789m",
  }
});

        
      
    
  

For the recommendation, you can use the following filters (and you must always include at least RecommenderClientId):
      
        
Filter name
Filter value


        

RecommenderClientIdREQUIRED

Unique identifier of the recommender  (recommender_client_identifier from recommendation result). Its value should define type of recommender user along with its position on the site (e.g., product_detail_bottom_alternatives).



RecommendationIdoptional

Unique identifier of a set of recommended items (recommendation_id from recommendation result).



ItemIdsoptional

List of input items of a recommendation request (item_ids from recommendation request).



Recommenderoptional

Name of the recommender (recommender from recommendation result).



Typeoptional

Type of the recommender (recommendation_type from recommendation result).



_Variantoptional

Determines variant in A/B


      


  
        
      
    

  
  
    Note
    
      
The importance of RecommendationId
Sending the RecommendationId in your analytics events is critical for the performance of your recommendations. This ID allows Luigi's Box to:

Run internal A/B tests to improve models.
Attribute user interactions (clicks, purchases) to the exact set of recommendations that were displayed.
Power the machine learning models to improve recommendation quality over time.

While the field is technically optional to support legacy integrations, it should be considered mandatory for all new Luigi's Box recommender integrations. Luigi's Box strongly recommends for existing integrations to be updated to include it. Failing to send it will negatively impact your recommendation quality.

    
  

No results example
When your search returns no results, you need to add push an event to dataLayer anyway. You must add parameters for the query, the used filters and the search name (Search Results/Autocomplete). Since your search returned no results, set items to empty array.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Search Results",
    search_term: "Phone",
    items: [],
    filters: {
      "Color": ["Burgundy"],
      "Operating system": "Android"
    }
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_name: "Search Results",
  search_term: "Phone",
  items: [],
  filters: {
    "Color": "Yellow"
  }
});

        
      
    
  
Click example
Luigis box's collector utilizes select_item ecommerce event to collect a click action that was performed on a result.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "select_item",
  ecommerce: {
    items: [
      {
        item_id: "SKU_12345",
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "select_item", {
  items: [
    {
      item_id: "SKU_12345",
    }
  ]
});

        
      
    
  
Add to cart example
Luigis box's collector utilizes add_to_cart ecommerce event to collect a click action that was performed on a result.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    currency: "EUR",
    value: 7.77,
    items: [
      {
        item_id: "SKU_12345",
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "add_to_cart", {
  currency: "EUR",
  value: 7.77,
  items: [
    {
      item_id: "SKU_12345",
    }
  ]
});

        
      
    
  
Transaction example
Luigis box's collector utilizes purchase ecommerce event to collect a click action that was performed on a result.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "purchase",
  ecommerce: {
    transaction_id: "T_12345",
    // Sum of (price * quantity) for all items
    value: 72.05,
    currency: "EUR",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 0,
        // Price of a single unit of an item (not the total price)
        price: 10.01,
        quantity: 3
      },
      {
        item_id: "SKU_12346",
        item_name: "Grey Women's Tee",
        index: 1,
        // Price of a single unit of an item (not the total price)
        price: 21.01,
        quantity: 2
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "purchase", {
  transaction_id: "T_12345",
  value: 30.98,
  currency: "EUR",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 0,
      price: 9.99,
      quantity: 1
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 1,
      price: 20.99,
      quantity: 1
    }
  ]
});

        
      
    
  
Impression example
Luigis box's collector utilizes view_item ecommerce event to collect an item impression, when the product detail page is visited.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item", {
  items: [
    {
      item_id: "SKU_12345",
    }
  ]
});

        
      
    
  
User identifiers
By default Luigi's Box Search Analytics script assigns each user a unique identifier and saves it in a _lb cookie. We use this cookie to count various usage metrics in Luigi's Box application and it serves also as a basis for personalization of search and recommendation services. However, there are some use cases when it might be better to use your own unique user identifiers:


If you would like to integrate Luigi's Box Search as a Service with personalization enabled or Recommender on backend without using our JavaScript libraries, using you own unique user identifiers enables you to use the services up to their full potential by sending user identifier also for the first visit of a user, when you do not have our _lb cookie identifier available on your backend.
If you know that most or all of your users are logged in while browsing your site, you may leverage your user identifiers to get insight into their behavior cross-device.


If you would like to set your own unique user identifiers, you can send a luigisbox.collector.customer_id event to the dataLayer as shown below:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: 'luigisbox.collector.customer_id',
  customer_id: "12345", // Replace with the actual ID
});

        
      
    
  

If the luigisbox.collector.customer_id event is not sent, the default behavior will apply. In this case, Luigi's Box Search Analytics will automatically assign a unique identifier using the _lb cookie as described earlier.
Troubleshooting
While you are developing the integration, we recommend that you turn on data linter to see debugging information. Make sure that Luigi's Box integration script is included in the page and then, in your web browser, open the developer console (usually by pressing the F12 key), find the "Console" tab and type in the following command: Luigis.lint = true

After that, reload the page, but do not close the developer console. Each time, the integration collects search-related data, you will see what was parsed from your site and you'll get a report about data quality in the console tab of the developer tools.

If you've done everything correctly, you should see a blue Luigi's Box logo. If there were some problems with the data, you will see a red logo and a list of errors.

If you are not seeing the linter messages and logos, the most probable cause is that you are already running an early version of integration that does not support linting. Let us know and we will upgrade your integration.


Support
Troubles? Different nesting? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!]]></content>
      <icon>tornado</icon>
    </page>
    <page>
      <url>/analytics/debugging.html</url>

      <title>Debugging</title>
      <content><![CDATA[Debugging
To ease the debugging of analytics events you can use the Session explorer screen in the Luigi's Box application. This screen shows a real-time overview of all sessions which are in-progress and not yet flushed to Luigi's Box analytics. The screen shows you the list of sessions and a view of all events associated with that session.



Click the session to explore individual events.



You can find the session explorer in the "General settings" menu.]]></content>
      <icon>tornado</icon>
    </page>
    <page>
      <url>/analytics/data-layer.html</url>

      <title>Javascript collector</title>
      <content><![CDATA[Javascript collectorDataLayer-based collection
Luigi's Box leverages Google Analytics' ecommerce events for efficient data collection. In simple terms, the process involves the collector monitoring the dataLayer object and gathering all pertinent events that are pushed. If you are not currently pushing ecommerce events to the dataLayer, there are two methods to implement this:


Using gtag manager:
Utilize the gtag manager to seamlessly push ecommerce events to the dataLayer.
Using native dataLayer.push method:
Alternatively, employ the native dataLayer.push method to achieve the same outcome of logging events to the dataLayer.


Both options yield equivalent results, as they effectively record events in the dataLayer, which the collector can subsequently access. It's worth noting that there is a slight disparity in the structure of events within the dataLayer object between the two methods, but the collector is designed to interpret both seamlessly.
Collector initialization
Insert the LBX script to the  element of each page.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  

Send a collector configuration event to the dataLayer.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: 'luigisbox.collector.configure',
  options: {},
});

        
      
    
  

Initialize the collector by sending a initialization event to the dataLayer.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
    event: 'luigisbox.collector.initialize',
});

        
      
    
  
Collector option parameters breakdown      
        
Parameter
Description


        
GetCookieConsent
A function that returns a boolean value indicating whether the user has granted cookie consent.


customDataLayerName
The name of the object where the collector should look for ecommerce events.


      
Event parameters breakdown
This section outlines event paramteres related to ecommerce events. When reporting events, include the necessary fields based on the specific context.
      
        
Parameter
Description


        
event
The name of the event. Supported event names are: view_item_list select_item, add_to_cart, purchase.


item_list_name
Name of the reported list. Supported list names are: Autocomplete, Search Results, Recommendation.


items
An array containing list results.


item_id
Identifier of an item within the reported list.


item_name
Name of an item within the reported list.


index
Position of an item within the reported list.


price
Price of an item within the reported list.


query
The query that the user entered (required only for search results and autocomplete).


filters
Object containing filter name(s) with their respective value(s). When a single filter has multiple values, you can include all values at once in an array.


transaction_id
The unique identifier of a transaction.


value
The monetary value of the event.


currency
Currency of the items associated with the event, in 3-letter ISO 4217 format.


      
Event examples
The collector is equipped to read and interpret data from the following ecommerce events. Please be aware that the examples use a structure that represents the minimum required parameters. If you choose to include additional parameters for your own needs, it is completely acceptable.
Autocomplete example
Luigis box's collector utilizes view_item_list ecommerce event to gather a list of autocomplete results that a user is presented with.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Autocomplete",
    search_term: "phone",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 0,
        price: 9.99,
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        index: 1,
        price: 20.99,
      }
    ],
    filters: {
      "Color": ["Black", "Silver"],
      "Operating system": "Android"
    }
  },
});


        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_id: "autocomplete",
  item_list_name: "Autocomplete",
  search_term: "Phone",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 0,
      price: 9.99,
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 1,
      price: 20.99,
    }
  ],
  filters: {
    "Color": ["Black", "Silver"],
    "Operating system": "Android"
  }
});

        
      
    
  
Search example
Luigis box's collector utilizes view_item_list ecommerce event to gather a list of search results that a user is presented with. 

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Search Results",
    search_term: "Phone",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 0,
        price: 9.99,
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        index: 1,
        price: 20.99,
      }
    ],
    filters: {
      "Color": ["Black", "Silver"],
      "Operating system": "Android"
    }
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_name: "Search Results",
  search_term: "Phone",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 0,
      price: 9.99,
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 1,
      price: 20.99,
    }
  ],
  filters: {
    "Color": ["Black", "Silver"],
    "Operating system": "Android"
  }
});

        
      
    
  
Recommender example
Luigis box's collector utilizes view_item_list ecommerce event to gather a list of recommender results that a user is presented with. 

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Recommendation",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 0,
        price: 9.99,
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        index: 1,
        price: 20.99,
      }
    ],
    filters: {
      "RecommenderClientId": "Basket",
      "ItemIds": ["/products/123", "/products/129"]
    }
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_name: "Recommendation",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 0,
      price: 9.99,
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 1,
      price: 20.99,
    }
  ],
  filters: {
    "RecommenderClientId": "Basket",
    "ItemIds": ["/products/123", "/products/129"]
  }
});

        
      
    
  

For the recommendation, you can use the following filters (and you must always include at least RecommenderClientId):
      
        
Filter name
Filter value


        

RecommenderClientIdREQUIRED

Unique identifier of the recommender  (recommender_client_identifier from recommendation result). Its value should define type of recommender user along with its position on the site (e.g., product_detail_bottom_alternatives).



ItemIdsoptional

List of input items of a recommendation request (item_ids from recommendation request).



Recommenderoptional

Name of the recommender (recommender from recommendation result).



Typeoptional

Type of the recommender (recommendation_type from recommendation result).



_Variantoptional

Determines variant in A/B


      
No results example
When your search returns no results, you need to add push an event to dataLayer anyway. You must add parameters for the query, the used filters and the search name (Search Results/Autocomplete). Since your search returned no results, set items to empty array.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  query: "Phone",
  ecommerce: {
    item_list_id: "search_results",
    item_list_name: "Search Results",
    items: [],
    filters: {
      "Color": "Yellow"
    }
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item_list", {
  item_list_id: "search_results",
  item_list_name: "Search Results",
  search_term: "Phone",
  items: [],
  filters: {
    "Color": "Yellow"
  }
});

        
      
    
  
Click example
Luigis box's collector utilizes select_item ecommerce event to collect a click action that was performed on a result.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "select_item",
  ecommerce: {
    item_list_id: "related_products",
    item_list_name: "Related products",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "select_item", {
  item_list_id: "related_products",
  item_list_name: "Related products",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
    }
  ]
});

        
      
    
  
Add to cart example
Luigis box's collector utilizes add_to_cart ecommerce event to collect a click action that was performed on a result.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    currency: "EUR",
    value: 7.77,
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Product Name",
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "add_to_cart", {
  currency: "EUR",
  value: 7.77,
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Product Name"
    }
  ]
});

        
      
    
  
Transaction example
Luigis box's collector utilizes purchase ecommerce event to collect a click action that was performed on a result.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "purchase",
  ecommerce: {
    transaction_id: "T_12345",
    value: 25.42,
    currency: "EUR",
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        index: 0,
        price: 9.99,
        quantity: 1
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        index: 1,
        price: 20.99,
        quantity: 1
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "purchase", {
  transaction_id: "T_12345",
  value: 25.42,
  currency: "EUR",
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      index: 0,
      price: 9.99,
      quantity: 1
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      index: 1,
      price: 20.99,
      quantity: 1
    }
  ]
});

        
      
    
  
Impression example
Luigis box's collector utilizes view_item ecommerce event to collect an item impression, when the product detail page is visited.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      }
    ]
  }
});

        
      
    
  

gtag alternative

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          gtag("event", "view_item", {
  items: [
    {
      item_id: "SKU_12345",
    }
  ]
});

        
      
    
  
User identifiers
By default Luigi's Box Search Analytics script assigns each user a unique identifier and saves it in a _lb cookie. We use this cookie to count various usage metrics in Luigi's Box application and it serves also as a basis for personalization of search and recommendation services. However, there are some use cases when it might be better to use your own unique user identifiers:


If you would like to integrate Luigi's Box Search as a Service with personalization enabled or Recommender on backend without using our JavaScript libraries, using you own unique user identifiers enables you to use the services up to their full potential by sending user identifier also for the first visit of a user, when you do not have our _lb cookie identifier available on your backend.
If you know that most or all of your users are logged in while browsing your site, you may leverage your user identifiers to get insight into their behavior cross-device.


If you would like to set your own unique user identifiers add the following code to the  element of your website.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          
  window._lbcq = [];
  window.Luigis = window.Luigis || {};
  window.Luigis.User = '...'; // Your user identifier goes here
  window.Luigis.Scan = window.Luigis.Scan || function(a, r) {
    window._lbcq.push([a, r]);
  }


        
      
    
  

If the window.Luigis.User property is not set or empty the default behavior will be triggered and Luigi's Box Search Analytics script will assign a unique identifier as describe.

The window._lcbq and window.Luigis.Scan are part of asynchronous loading of the script and help to make sure everything works even in case Luigi's Box Search Analytics script is not yet loaded. See more details when implementing via embedded JSON+LD.
Troubleshooting
While you are developing the integration, we recommend that you turn on data linter to see debugging information. Make sure that Luigi's Box integration script is included in the page and then, in your web browser, open the developer console (usually by pressing the F12 key), find the "Console" tab and type in the following command: Luigis.lint = true

After that, reload the page, but do not close the developer console. Each time, the integration collects search-related data, you will see what was parsed from your site and you'll get a report about data quality in the console tab of the developer tools.


When running in linting mode, the data you send is not stored and analyzed. You won't see it in any of the reports in Luigi's Box application.


If you've done everything correctly, you should see a blue Luigi's Box logo. If there were some problems with the data, you will see a red logo and a list of errors.

If you are not seeing the linter messages and logos, the most probable cause is that you are already running an early version of integration that does not support linting. Let us know and we will upgrade your integration.


Support
Troubles? Different nesting? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/analytics/api.html</url>

      <title>Event API</title>
      <content><![CDATA[Event API
The Events API accepts structured JSON events describing the interaction of the users with the website or mobile app. The events received via the Events API feed into the feedback loop, allow the system to learn and contribute to the performance of many of the models used in the background.

Note that sending events directly via the low-level API is an advanced use-case and you should consider using the JavaScript collector for websites. Using the Events API directly is mostly useful when:


You want to provide feedback from a mobile app
You want to avoid relying on a 3rd party script (the Luigi's Box JavaScript collector on your website.


The API can receive following types of events:


impression (“pv”) - which can hold information about a pageview (if the site has a URL available) or a catalog object shown to the user
click - which is used to capture interaction with the site, mainly with products lists
event - an event, which is analogous to impression, but triggered without an actual page reload - mainly if you need to report a new list, which appeared asynchronously.


All events are expected to be HTTP POST-ed to https://api.luigisbox.com.
Impression event
The impression event is a basic event which tracks a visit on a page (when a user visits a page that has URL). This event can be also used to track an object impression done by the user -- when the user displays a "detail" of any object that you have indexed in Luigi's Box catalog.

All impression events that track object are automatically paired to the catalog data using the "url" attribute, which must contain the object identity. The attribute is called url historically (you can read a story about the "why" here), but it holds the object identity.

You should send Impression event in these scenarios:

  user visits any page on your website that has a URL (homepage, basket, ...)
  user visits a detail of an object that is present in our catalog
  
    Products
    Category listing pages
    Brand listing pages
    Article (blog posts)
  


POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "type": "pv",
  "id": "f3f6917c-2e94-4e38-a744-24cbb82f284d", // Globally unique identifier of the event
  "url": "2372711",   // In case of catalog object, use object identity, even though the field is called "url"
  "tracker_id": "1234-56678",
  "client_id": 6969470340316755000,
  // The rest of the attributes is optional, feel free to leave them out
  "title": "White sneakers GLX 23",
  "customer_id": 4739473924329473000,
  "local_timestamp": 1626386701,
  "platform": "iOS",
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0",
  "referer": "",
  "context": {
    "warehouse": "Berlin"
  },
  "ab_test_variant": "Luigis",
  "consent_granted": true,
  "recommendation_id": "1abc2de3-f456-7890-1g23-hijk45l6789m"
}

        
      
    
  

The impression event defines the basic event structure that you'll be using for all other event types:
      
        
attribute
explanation


        

typeREQUIRED

Use pv for impression.



idREQUIRED

Globally unique ID of the event



urlREQUIRED


Object identity of the object as indexed in the Luigi's Box catalog




tracker_idREQUIRED

The site's tracker_id, you can find it in the Luigi's Box application in "General settings" > "Integration settings" screen.



client_idREQUIRED

A generated unique numeric identifier of the user.



customer_idoptional

Your system identifier of the logged in user. Make sure that it is unique for each registered user.



local_timestampoptional

Local timestamp in seconds. The event will be automatically timestamped by Luigi's Box servers and you don't have to send one explicitly. Make sure that the timestamp is in seconds and not in milliseconds. Sending an incorrect timestamp (in the future or too far in the past will cause the event to get dropped).



user_agentoptional

User agent string (read more).



titleoptional

Title of the page. Only used for presentation in Luigi's Box analytics, has no impact on the feedback loop.



platformoptional

Platform of your integration (iOS, Android, desktop). If you want to specify both the platform and the version of your app, please use an array format (e.g., [iOS, 1.0.2]). When this field is filled in, the app_version attribute will be ignored and replaced with the value from platform field. You can use this field for segmentation in Luigi's Box analytics later (App Version segmentation filter).



refereroptional

Referer URL.



contextoptional

Context of the session / user (e.g. used warehouse within session). Should hold the key-value pairs consistent with what is pushed into the catalog data. See context in analytics and the Multi-warehouse solution for a use-case.



ab_test_variantoptional

Variant of the session / user in case there is an ongoing AB test (example values: Original, Luigis).



consent_grantedoptional

Set true, if a user has granted consent for personalization.



recommendation_idoptional

Identifier of the recommendation list from which the user was redirected to your site (e.g. identifier of the newsletter recommendation list). Only applicable for use-cases where you are generating recommendations into email newsletters.



app_versiondeprecated

Deprecated. Version string of your integration. To explicitly differentiate platform (iOS, Android), please use "platform" field. You can use this field for segmentation in Luigi's Box analytics later.


      


Pay special attention to local_timestamp and make sure that it is in seconds. A very common mistake that we see is that the timestamp is in milliseconds. If you send the timestamp in milliseconds, we will decode it to a date far in the future and drop the event as invalid.

Client ID vs. Customer ID
The client_id attribute is what identifies every user and maintains a continuity in the event stream of a single user. customer_id is an ID of the logged in customer that will not be available until the user signs in to you app/website. To reiterate:


Always send the client_id.
When the user signs in keeps sending both client_id and customer_id.
When the user signs out, keep sending just the client_id.


The client_id must always be the same for the same user even in the most complex scenario when the user starts as anonymous guest, signs in and then signs out. If you switch to a different client_id mid-session, the original session will be closed and a new session will start for the new user.
AB Tests reporting
In the ongoing AB test, you can use ab_test_variant field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.
Search event
Report searches and search results as a search event which describes the search inputs (query and filters) and search results.


Note that the search API calls you make do not track data into analytics implicitly and you have to report searches explicitly. There are many reasons for this, mainly:

The analytics should track what the user has seen. Sometimes, you may want to filter out some products that the search API returned or display a slight variations of the results that the API returned.
The information presented to the user may be different than what the API returned, this is most frequently the case with B2B pricing where you load and display different prices for different customers.
Some information is only available on the frontend, such as you user ID or cookie consent information.



POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
 "id": "f3f6917c-2e94-4e38-a744-24cbb82f284d",
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "type": "event",
 "lists": {
   "Search Results": {
     "items": [
       {
         "title": "White shirt v-neck",
         "type": "item", // The catalog type
         "url": "39818", // Object identity
         "position": 1,
         "price": 19
       },
       {
         "title": "White button-up shirt",
         "type": "item", // The catalog type
         "url": "288828", // Object identity
         "position": 2,
         "price": null
       },
       {
         "title": "White shirt, short-sleeves",
         "type": "item", // The catalog type
         "url": "928127", // Object identity
         "position": 3,
         "price": 351.36
       }
     ],
     "query": {
       "string": "white shirt",
       "filters": {
          "brand": "Loona fashion",
          "sort by": "price_amount:asc",
          "_Variant": "Luigis"
        }
     }
   }
 },
 "platform": "iOS",
 "ab_test_variant": "Luigis",
 "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}

        
      
    
  

Search event contains a "Search Results" list (this exact name is important, do not change it) which contains list of search results and query definition including search query and search filters applied for that search.
Search results
The search results (inside the "items" attribute) contain the following attributes:
      
        
attribute
explanation


        

titleREQUIRED

Title of the item. Only used in Luigi's Box analytics for presentation purposes, has no impact on the feedback loop.



typeREQUIRED

Type of the search result, consistent with the type that object is indexed with in the Luigi's Box catalog.



urlREQUIRED


Identity of the object, consistent with how the object is indexed in the Luigi's Box catalog.



positionREQUIRED

Position of the item in a list. Does not necessarily have to start at 1, e.g. when sending an event for 2nd page of the search results, the position will be offset by the number of results on the previous page.



priceoptional

Price of the item, used for presentation purposes in Luigi's Box analytics to calculate cart values.


      

If you are using pagination, then you must send a pv event for every subsequent pagination view. Positions of the items should be relative to the first page, e.g., if a user was presented with second page of results and you have 20 items per page, the first item position should be 21. If you are using infinite-scroll style pagination, make sure that you are only sending the list items that were appended to the infinite list and NOT all items from the beginning.
Query
The "query" part of the list consists of "string" and "filters". The query "string" (always needs to be a string) is required and represents a query that the user typed in the searchbox, the "filters" part is optional and represents the filters that the user selected to narrow down the search. Read more about the concept of filters, including an example.

Filters can hold not only information about real filters, but also about other factors that influence search results
and their ordering ("sort by" option) or even internal information with effect on search results (algorithm version etc.).
You can segment sessions based on presence of filters later on in Luigi's Box Analytics application.
AB Tests reporting
In the ongoing AB test, use "filters" to report the AB test variant of a particular list. The selected variant should be stored in the _Variant filter (example values: Original, Luigis). You can use this field for all types of lists (Autocomplete, Search, Product Listing, and Recommendation).

Alternatively, you can use ab_test_variant field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.
Autocomplete event
See the description of Search event above for more details. The Autocomplete has mostly the same structure and semantics. The notable differences from the Search event are:


The list name in the JSON data is "Autocomplete". It is important that you use exactly this name without modifications.
Autocomplete usually does not have any filtering, it is safe to skip the "filters" part inside "query".
Defer sending the Autocomplete event until the user stopped typing (we recommend a 500ms cutoff time). Even if you don't implement the defer, the Events API will automatically detect and ignore autocomplete queries which are prefix of a following query in the user's stream of events. The ignored list will not contribute to the feedback loop, it will however count towards your units usage.


POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "b1a371fb-e7a2-4ed9-a86c-ce6747f4f65c",
  "tracker_id": "1234-5678",
  "client_id": 6667519810961010000,
  "type": "event",
  "lists": {
    "Autocomplete": {
      "items": [
        {
          "title": "Shirts",
          "type": "category", // The catalog type
          "url": "c398818", // Object identity
          "position": 1
        },
        {
          "title": "White shirt v-neck",
          "type": "item", // The catalog type
          "url": "39818", // Object identity
          "position": 2,
          "price": 19
        },
        {
          "title": "White button-up shirt",
          "type": "item", // The catalog type
          "url": "288828", // Object identity
          "position": 3,
          "price": null
        },
        {
          "title": "White shirt, short-sleeves",
          "type": "item", // The catalog type
          "url": "928127", // Object identity
          "position": 4,
          "price": 351.36
        }
      ],
      "query": {
        "string": "white shirt",
        "filters": {
          "_Variant": "Luigis"
        }
      }
    }
  },
  "platform": "iOS",
  "ab_test_variant": "Luigis",
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}

        
      
    
  
Product Listing event
Report products listing as a Product listing event which contains the listing scope (filters such as category, brand etc.) along with any additional listing criteria and listing results.


Note that the Product listing API calls you make do not track data into analytics implicitly and you have to report impressions of listings explicitly. There are many reasons for this, mainly:

The analytics should track what the user has seen. Sometimes, you may want to filter out some products that the Product listing API returned or display a slight variations of the results that the API returned.
The information presented to the user may be different than what the API returned, this is most frequently the case with B2B pricing where you load and display different prices for different customers.
Some information is only available on the frontend, such as user ID or cookie consent information.



POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
 "id": 6667520098487994000,
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "type": "event",
 "lists": {
   "Product Listing": {
     "items": [
       {
         "title": "White shirt v-neck",
         "type": "item", // The type of record in catalog
         "url": "39818", // Record identity
         "position": 1,
         "price": 19
       },
       {
         "title": "White button-up shirt",
         "type": "item", // The type of record in catalog
         "url": "288828", // Record identity
         "position": 2,
         "price": null
       },
       {
         "title": "White shirt, short-sleeves",
         "type": "item", // The type of record in catalog
         "url": "928127", // Record identity
         "position": 3,
         "price": 351.36
       }
     ],
     "query": {
       "filters": {
          "sort by": "price_amount:asc",
          "_Variant": "Luigis"
        },
        "scopes": {
          "_category_label": "Clothing||Shirts"
          "_category_identity": "category_10283"
        }
     }
   }
 },
 "platform": "iOS",
 "ab_test_variant": "Luigis",
 "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}

        
      
    
  

Product Listing event contains a "Product Listing" list (this exact name is important, do not change it) which includes list of results and filters definition with filters and scopes applied for that listing (see details below).
Results
Each item in the product listing results (inside the items attribute) contains the following attributes:
      
        
attribute
explanation


        

titleREQUIRED

Title of the item. Only used in Luigi's Box analytics for presentation purposes, has no impact on the feedback loop.



typeREQUIRED

Type of the product listing result, consistent with the type that object is indexed with in the Luigi's Box catalog.



urlREQUIRED


Identity of the object, consistent with how the object is indexed in the Luigi's Box catalog. It does not need to be an url, the name of the attribute (url) is for legacy reasons.



positionREQUIRED

Position of the item in a list. Does not necessarily have to start at 1, e.g. when sending an event for 2nd page of the product listing results, the position will be offset by the number of results on the previous page.



priceoptional

Price of the item, used for presentation purposes in Luigi's Box analytics to calculate cart values.


      

If you are using pagination, then you must send an Impression event (pv) for every subsequent pagination view. Positions of the items should be relative to the first page, e.g., if a user was presented with second page of results and you have 20 items per page, the position of the first reported item should be 21. If you are using infinite-scroll style pagination, make sure that you are only sending the list items that were appended to the infinite list and NOT all items from the beginning.
Scopes and Filters
The "query" part of the list consists of "scopes" and "filters". While scopes define implicit criteria for a given product listing page (a category, brand, or your custom predefined set of filters), filters are used to catch subsequent filtering of the result set. For example, if a user clicks on the category link in your menu, that category is considered a scope. Another example can be a link to a landing page that shows products that have a specific tag (for example "Christmas products") -- a set of filters that pre-select desired products are considered a scope. When a user later narrows down the results by picking additional (explicit) filters, these are reported in filters.

The "scopes" part is required. There are three common scenarios which are covered by it:


Category - input of the Product listing is a category (for example a user visits some category from the menu on your site),

Brand - input of the Product listing is a brand (for example a user visits some brand from the product detail page),

Custom filters - input of the Product listing is a combination of one or more filters (for example you have an ad that directs user to the listing of t-shirts for women).


You can also combine Category / Brand with Custom filters. Custom filters follow the same structure as "filters" (see "filters" below). The difference here is that the filters within scopes are implicitly set by the product listing page. There is a specific structure for the Category and Brand scope.

If an input of the Product listing is a category, report information about category in scopes using the following keys:
      
        
key
explanation


        

_category_labelREQUIRED

Human readable name of the category.



_category_identityREQUIRED

Identity of the category. Please use the same identity as in our catalog.


      

Alternatively, you can report a category identity with the filters you use when sending a request to get Product Listing results. In this case, you can replace _category_identity with the name of the filter(s) you use. Please note, that the _category_label is still required.

For example, for the request

GET https://live.luigisbox.com/search?tracker_id=123456-789&amp;f[]=type:product&amp;f[]=nested_category_id:10283&amp;f[]=color:blue

report Product Listing query part of the event as follows:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          "query": {
  "filters": {
    "color": "blue"
  },
  "scopes": {
    "_category_label": "Clothing||Shirts"
    "nested_category_id": "10283"
  }
}

        
      
    
  

Note: In case you have a category within the category tree, provide the full category path in _category_label. Divide particular levels with pipe symbol ||. For example, category Women -> Clothing -> T-Shirts should be stored in _category_label as follows: Women||Clothing||T-Shirts.

If an input of the Product listing is a brand, report information about brand in scopes using the following keys:
      
        
key
explanation


        

_brand_labelREQUIRED

Human readable name of the brand.



_brand_identityREQUIRED

Identity of the brand. Please use the same identity as in our catalog.


      

Alternatively, you can report a brand identity with the filters you use when sending a request to get Product Listing results. In this case, you can replace _brand_identity with the name of the filter(s) you use. Please note, that the _brand_label is still required.

For example, for the request

GET https://live.luigisbox.com/search?tracker_id=123456-789&amp;f[]=type:product&amp;f[]=nested_brand_id:123456&amp;f[]=color:blue

report Product Listing query part of the event as follows:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          "query": {
  "filters": {
    "color": "blue"
  },
  "scopes": {
    "_brand_label": "Samsung"
    "nested_brand_id": "123456"
  }
}

        
      
    
  

If a user decided to further narrow down the results of a shown listing by using filters (facets), for instance by choosing to see only products under certain price amount, report such behavior using "filters" (an explicit user input). Read more about the concept of filters, including an example.

Filters can hold not only information about real filters, but also about other factors that influence results
and their ordering ("sort by" option) or even internal information with effect on results (algorithm version etc.).
You can segment sessions based on presence of filters later on in Luigi's Box Analytics application.
AB Tests reporting
In the ongoing AB test, use "filters" to report the AB test variant of a particular list. The selected variant should be stored in the _Variant filter (example values: Original, Luigis). You can use this field for all types of lists (Autocomplete, Search, Product Listing, and Recommendation).

Alternatively, you can use ab_test_variant field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.
Recommendation event
Report recommended products as a recommendation event which describes the recommendation inputs (query and filters) and recommended objects.


Note that the recommender API calls you make do not track data into analytics implicitly and you have to report recommendations explicitly. There are many reasons for this, mainly:

The analytics should track what the user has seen. Sometimes, you may want to filter out some products that the recommender API returned or display a slight variations of the recommendations that the API returned.
The information presented to the user may be different than what the API returned, this is most frequently the case with B2B pricing where you load and display different prices for different customers.
Some information is only available on the frontend, such as you user ID or cookie consent information.



POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
 "id": "3f1a615c-fce8-4d48-87bd-3a0fed760bcd",
 "type": "event",
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "lists": {
   "Recommendation": {
     "items": [
       {
         "title": "Off-white long-sleeve shirt",
         "type": "item",
         "url": "283838", // Object identity
         "position": 1,
         "price": 89
       },
       {
         "title": "Khaki slacks",
         "type": "item",
         "url": "881818", // Object identity
         "position": 2,
         "price": 45.50
       },
       {
         "title": "Knitted sweater",
         "type": "item",
         "url": "993939", // Object identity
         "position": 3,
         "price": 351.36
       }
     ],
     "query": {
       "filters": {
          "ItemIds": ["39818"],
          "RecommendationId": "1abc2de3-f456-7890-1g23-hijk45l6789m",
          "Recommender": "homepage_personalized",
          "RecommenderClientId": "homepage_personalized",
          "Type": "complementary_combined_assoc",
          "_Variant": "Luigis"
        }
     }
   }
 },
 "platform": "iOS",
 "ab_test_variant": "Luigis",
 "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}

        
      
    
  

Each recommendation list event must contain query filters with the following key-value pairs. Values for the keys can be found in the recommendation request or recommendation request result.
      
        
key
explanation


        

RecommenderClientIdREQUIRED

Unique identifier of the recommender  (recommender_client_identifier from recommendation result). Its value should define type of recommender user along with its position on the site (e.g., product_detail_bottom_alternatives). See Placement and model reuse for more details.



RecommendationIdoptional

Unique identifier of a set of recommended items  (recommendation_id from recommendation result). Required for new integrations of Luigi's Box Recommender. We strongly recommend to update existing integrations as well.



ItemIdsoptional

List of input items of a recommendation request (item_ids from recommendation request).



Recommenderoptional

Name of the recommender (recommender from recommendation result).



Typeoptional

Type of the recommender (recommendation_type from recommendation result).


      


  
        
      
    

  
  
    Note
    
      
The importance of RecommendationId
Sending the RecommendationId in your analytics events is critical for the performance of your recommendations. This ID allows Luigi's Box to:

Run internal A/B tests to improve models.
Attribute user interactions (clicks, purchases) to the exact set of recommendations that were displayed.
Power the machine learning models to improve recommendation quality over time.

While the field is technically optional to support legacy integrations, it should be considered mandatory for all new Luigi's Box recommender integrations. Luigi's Box strongly recommends for existing integrations to be updated to include it. Failing to send it will negatively impact your recommendation quality.

    
  

RecommenderClientId
RecommenderClientId usually consists of three parts:


placement of the recommender (e.g., item_detail, basket, basket_popup, homepage),
recommendation type (same as recommendation_type, e.g. alternatives, newsoptional),
A/B test variant (original/luigis, when not requesting Luigis' Box Recommender, always use original).


These three parts must always be lowercased and joined by a symbol _. Please, avoid using any other characters than a-z and _.

Several examples of Recommender Client Identifiers:


in item's detail:item_detail_complement_original, item_detail_original, item_detail_alternatives_original,
basket: basket_popup_original, basket_original,
homepage: homepage_personalized_original, homepage_last_seen_original, homepage_trends_original,
other: category_original, news_original, discounted_original.

AB Tests reporting
In the ongoing AB test, use "filters" to report the AB test variant of a particular list. The selected variant should be stored in the _Variant filter (example values: Original, Luigis). You can use this field for all types of lists (Autocomplete, Search, Product Listing, and Recommendation).

Alternatively, you can use ab_test_variant field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.
Click Event
Report a click event for any click interaction with search results, autocomplete results or recommendations.

POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "cecceeef-f82f-4fd0-9caf-aaeef2981370",
  "type": "click",
  "tracker_id": "1234-5678",
  "client_id": 6667519810961010000,
  "action": {
    "type": "click",
    "resource_identifier": "983838"
  },
  "platform": "Android",
  "ab_test_variant": "Luigis",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1"
}

        
      
    
  

Click event contains an action attribute:
      
        
attribute
explanation


        

typeREQUIRED

Must contain value click.



resource_identifierrequired

Identity of the clicked item which points to a clicked item from the search results / recommendation. If the type of the clicked item is query, resource_identifier should contain its title. Otherwise, it should contain item identity exactly as it is reported in other lists (Autocomplete, Search Results, Recommendation).


      
Conversion event
Conversion event represents a user's explicit interest into an item displayed in a list (search, autocomplete or recommender). This will typically be "add to cart", "add to wishlist", "add to favorite".

POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "4a6de937-4e16-48fc-b2c9-024c45d0ef29",
  "type": "click",
  "tracker_id": "1234-5678",
  "client_id": 6667519810961010000,
  "action": {
    "type": "buy",
    "resource_identifier": "https://www.eshop.com/another-product"
  },
  "platform": "Android",
  "ab_test_variant": "Luigis",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1"
}

        
      
    
  

Anything different from action.type "click" is considered a conversion (e.g., "buy", "add-to-favorites", "add-to-comparison"). Make sure to provide the resource_identifier (see "Click event" section above).

Send the conversion event from the following places:


The page/mobile app screen where the search/recommendation list is shown, e.g. a search results page, or a title page with a recommender box.
The product detail page/mobile app screen.


The identity in the resource_identifier field will be used to scan the event stream backwards and attribute the conversion to a prior list and service interaction.
Transaction event
To report a purchase use a transaction event, which contains all the items with their quantities and applied discounts.

POST https://api.luigisbox.com/

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
 "id": "03dd16c3-4dd5-44c0-87c4-b3a652c06a87",
 "type": "transaction",
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "items": [
    {
      "title": "White shirt, round neck, short sleeves",
      "url": "9339993",
      "count": 1,
      "total_price": 19,
      "was_discounted": false,
      "was_volume_discounted": false
    },
    {
      "title": "Brown overcoat",
      "url": "299299",
      "count": 2,
      "total_price": 268.50,
      "was_discounted": true,
      "was_volume_discounted": false
    }
  ],
  "ab_test_variant": "Luigis",
}

        
      
    
  

Each transaction must contain a list of items that were purchased. Each item is a hash with the following key-value pairs:
      
        
key
explanation


        

titleoptional

The title of the product.



urlREQUIRED

The identity of the purchased product



countREQUIRED

The quantity of the purchased product.



total_priceREQUIRED

The price of the product after taking into account quantity, discounts, and volume discounts (e.g., product with price 10 was added to basket 3 times, thus total_price is 30).



was_discountedoptional

A boolean value. True only if an extra discount lowered the price below catalog price_amount.



was_volume_discountedoptional

A boolean value. True if a volume-based discount was applied (e.g., buy 3, get 1 free).


      
Scenarios
This section provides a rough guidelines for the events in different environments.
Web application
Note that these are just rough guidelines and the events may vary depending on your use case, the Luigi's Box services you use and the content that you index.
      
        
When
Event


        
Product detail page shown
Send Impression event for the product identity.


Category listing page shown
Send Impression event for the category identity.


Brand listing page shown
Send Impression event for the brand identity.


Search results shown
Send Search event describing the search.


Autocomplete results shown
Send Autocomplete event describing the autocomplete.


Search or autocomplete result clicked
Send Click event with a resource_identifier set to the identity of the clicked object.


Recommendation shown
Send Recommendation event describing the recommendations.


Recommendation clicked
Send Click event with a resource_identifier set to the identity of the clicked object.


Product added to cart
Send Conversion event with a resource_identifier set to the identity of the clicked object. Make sure to send this from every place where the product can be added to basket.


Transaction completed / products purchased
Send Transaction event describing the purchase.


      
Mobile application
Note that these are just rough guidelines and the events may vary depending on your use case, the Luigi's Box services you use and the content that you index.
      
        
When
Event


        
Product detail screen shown
Send Impression event for the product identity.


Category listing screen shown
Send Impression event for the category identity.


Brand listing screen shown
Send Impression event for the brand identity.


Search results shown
Send Search event describing the search.


Autocomplete results shown
Send Autocomplete event describing the autocomplete.


Search or autocomplete result clicked
Send Click event with a resource_identifier set to the identity of the clicked object.


Recommendation shown
Send Recommendation event describing the recommendations.


Recommendation clicked
Send Click event with a resource_identifier set to the identity of the clicked object.


Product added to cart
Send Conversion event with a resource_identifier set to the identity of the clicked object. Make sure to send this from every place where the product can be added to basket.


Transaction completed / products purchased
Send Transaction event describing the purchase.


      
Limits
Events API has the following limits tied to the combination of Tracker ID and User (the value of client_id from events):


A maximum of 30 events per User per 15 seconds.
A maximum of 400 events per User per session. A session ends after 30 minutes of inactivity.

Support
Troubles? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!]]></content>
      <icon>tornado</icon>
    </page>
    <page>
      <url>/analytics/json+ld.html</url>

      <title>Annotations Introduction (deprecated)</title>
      <content><![CDATA[Annotations Introduction (deprecated)

The JSON+LD annotations and schema.org have been deprecated. To collect data, please use the dataLayer-based collector.


Luigi’s Box recognizes search and product microdata annotations in schema.org format - a standard and accepted way to give structure to data and make it understandable to machines.

You want to use schema.org annotations, because:


Google, Bing, Yahoo and other search engines use them to show rich snippets about your product directly on the search results page. Compare the following results and see how the first one with metadata stands out. Using schema.org is an amazing way to draw attention to your listing and stand out from the competition.

Apple’s Siri and Google’s Assistant can use them to answer questions about shopping. “Hey Siri, where can I buy a new phone?”


There are 2 ways to add schema.org annotations to your web, and both are supported by Luigi's Box:


Using an inline markup and adding additional HTML attributes where appropriate.
Embedding a separate JSON object which includes all semantic information in one place.


Both options are equivalent, as they convey the same semantic information. They only differ in the used notation. When you choose inline markup, you have to intersperse the annotations throughout the HTML, but on the other hand, there is no duplicated information. When you use a JSON object, the semantic data is contained in a single place, but duplicates the information that is already present in HTML.

Based on our experience, inline annotations are easier to maintain, but the embedded JSON document is somewhat easier to implement and understand, especially when you are adding schema.org annotations for the first time.
Embedded JSON+LD

This section talks about implementation details, before you dive in make sure to read the concepts part which will help you understand what to track and why.



While you are developing the integration, we recommend that you turn on data linter to see debugging information. See Troubleshooting section for more details.

Search example
Sample JSON+LD document

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
{
  "@context": "http://schema.org",
  "@type": "SearchAction",
  "query": "phone",
  "result": {
    "@type": "ItemList",
    "name": "Search Results",
    "itemListElement": [
      {
        "@type": ["ListItem", "Product"],
        "position": "1",
        "name": "Android Phone PX100",
        "url": "https://myshop.com/products/236",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": "120"
        }
      },
      {
        "@type": ["ListItem", "Product"],
        "position": "2",
        "name": "iPhone X",
        "url": "https://myshop.com/products/293",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": "999"
        }
      },
      {
        "@type": ["ListItem", "CollectionPage"],
        "position": "3",
        "name": "Apple iPhone",
        "url": "https://myshop.com/category/iphone"
      }
    ]
  },
  "instrument": [{
    "@type": "ChooseAction",
    "name": "Sort by",
    "actionOption": "Relevance"
  },
  {
    "@type": "ChooseAction",
    "name": "Color",
    "actionOption": ["Black", "Silver"]
  }]
}


        
      
    
  

The sample document shows all concepts in a JSON+LD format. You should include a document similar to this, wrapped in a script tag somewhere in your page HTML code.
Top-level attributes      
        
Element
Hint


        

The JSON+LD document must be embedded inside a this script tag.


@context
This attribute marks this as schema.org-compatible.


@type
This attribute marks this as search-related information in the schema.org vocabulary. You must use SearchAction here (even for recommendation).


query
The query that the user entered (required only for search results and autocomplete).


result
This element contains the list of search results. The name is a bit confusing, but in the schema.org nomenclature, results of the SearchAction is an ItemList of search results.


result.name
Valid values here are "Search Results" for regular search results, "Autocomplete" for autocomplete results and "Recommendation" for recommendation results.


      
itemListElement
itemListElement represents a single result either in autocomplete widget, or on regular search results page. Below is a list of attributes that we rely on for analytics purposes. While you can add more attributes from the schema.org spec, it will have no effect and they will be ignored by the parser.
      
        
Element
Hint


        
@type
An array of types. One of the elements has to be "ListItem", which will mark the element as a search result in the schema.org vocabulary. You should use additional type which will help us differentiate between results that are products, categories, brands, or articles, or anything else that you might show on the search results page. See below for supported types.


position
Position of the result in the results list.


name
The user-visible title of the result


url
Canonical URL of the result



offersOPTIONAL

An Offer object indicating price


      
Supported itemListElement @types
We currently support these standard schema.org types:



Product for products

CollectionPage for categories

Brand for brands

Article for articles/blogs/pages

SearchAction for queries (e.g., if you are suggesting phrases)

instruments (filters)      
        
Element
Hint


        

instrumentREQUIRED

This field contains an array of filters.



instrument.@typeREQUIRED

Marks this as filter in schema.org vocabulary. Must be ChooseAction.



instrument.nameREQUIRED

The filter name. You can use whatever name fits best.



instrument.actionOptionREQUIRED

When a single filter has multiple values, you can include all values at once in an array.


      

Recommendation example


Sample JSON+LD document for Recommendation


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
{
  "@context": "http://schema.org",
  "@type": "SearchAction",
  "result": {
    "@type": "ItemList",
    "name": "Recommendation",
    "itemListElement": [
      {
        "@type": ["ListItem", "Product"],
        "position": "1",
        "name": "Android Phone PX100",
        "url": "https://myshop.com/products/236",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": "120"
        }
      },
      {
        "@type": ["ListItem", "Product"],
        "position": "2",
        "name": "iPhone X",
        "url": "https://myshop.com/products/293",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": "999"
        }
      }
    ]
  },
  "instrument": [{
    "@type": "ChooseAction",
    "name": "RecommenderClientId",
    "actionOption": "basket"
  },
  {
    "@type": "ChooseAction",
    "name": "ItemIds",
    "actionOption": ["/products/123", "/products/129"]
  }]
}


        
      
    
  

For the recommendation, you can use the following filters (and you must always include at least RecommenderClientId):
      
        
name
actionOption


        

RecommenderClientIdREQUIRED

Unique identifier of the recommender  (recommender_client_identifier from recommendation result). Its value should define type of recommender user along with its position on the site (e.g., product_detail_bottom_alternatives).



ItemIdsoptional

List of input items of a recommendation request (item_ids from recommendation request).



Recommenderoptional

Name of the recommender (recommender from recommendation result).



Typeoptional

Type of the recommender (recommendation_type from recommendation result).



_Variantoptional

Determines variant in A/B testing (e.g., Original, Luigis).


      

Explicit trigger


An example to show you the logical flow of results rendering. In the example
below, the script requests results asynchronously, then renders the results
with annotations and only after the results are rendered, calls Luigis.Scan.
You only need to use the Luigis.Scan call with appropriate arguments, the
rest of the code is just for demonstration.


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
            
  

  
  

  
    $.get('/search/results?q=iphone', function(data) {
      renderResults(data);
      generateJsonLd(data);
      Luigis.Scan('#search-results-annotations', '#search-results');
    });
  

        
      
    
  

After filling in the JSON+LD, you must call a notification function which will
trigger data collection.

The notification function is called Luigis.Scan and accepts 2 arguments:


Selector for annotations which must point to a  element with
JSON+LD annotations
Selector for an element which contains the actual user-visible search
results. We need to find the actual search result elements so we can detect
user interactions (clicks, conversions). This selector is optional, and by
default set to body, meaning we are searching all body for search result
elements, but we strongly suggest that you provide this selector as
narrowly scoped as possible.


Since you are (and should be) loading the analytics script asynchronously, there is a possibility that when you call Luigis.Scan, the analytics script is not yet loaded and the function does not exist.

To prevent this situation, you must add the following code to the  element of your website.

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          
  window._lbcq = [];
  window.Luigis = window.Luigis || {};
  window.Luigis.User = '...'; // Optionally, set your user identifier here; see below
  window.Luigis.Scan = window.Luigis.Scan || function(a, r) {
    window._lbcq.push([a, r]);
  }


        
      
    
  

The code will define a simple implementation of the Luigis.Scan function,
which will just add "scan" commands to a queue. When the integration script is
loaded it redefines the function with real implementation and processes the
queued commands.

Defining the simple implementation early will allow you to load the integration
script asynchronously, without impacting your page load speed.

This is also the place to customize user ID used for search analytics via window.Luigis.User property. Even though it is not necessary in most use cases, see User identifiers section for examples when it might be better for you.
Conversions
Conversion actions cannot be embedded directly in the JSON+LD document, so you'll need to add HTML data-lb-action attributes to conversion elements. Make sure that you are adding the annotation to all places where users can convert. This usually includes:
      
        
Conversion place
 
Example


        
Search results list
Add the data-lb-action attribute to all buttons on the search results page.
Most sites include an "Add to cart" button next to each product directly in the list of search results.


Product detail
Add the data-lb-action annotation to appropriate buttons on the product detail page.
This will usually be an "Add to cart" button.


      

It is acceptable to use several different conversion types. Most common conversion types in e-commerce are:


"buy"
"wishlist"


Choose whatever names are convenient for you, you will be able to filter and segment on conversion type in Luigi's Box Search Analytics.

In some cases, you may want to send a negative conversion (i.e. user
clicks a thumbs-down button). We use negative conversions as additional signal
when learning optimal search ranking. Negative conversions must be annotated
with a data-action-attitude="negative" annotation.




Conversion


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    Add to cart


    Add to wishlist


        
      
    
  
      
        
Element
Hint


        
data-lb-action="buy"
Clicks anywhere within the element will be considered as conversion action with type "buy".


data-lb-action="wishlist"
Clicks anywhere within the element will be considere as conversion action with type "wishlist".


      




Negative Conversion


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    Add to cart


        
      
    
  
      
        
Element
Hint


        
data-action-attitude="negative"
Clicks anywhere within the element will be considere as a negative conversion actions. Note that you must still include data-lb-action attribute for the click to be considered (negative) conversion.


      
Autocomplete

Sample JSON+LD document for Autocomplete


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
{
  "@context": "http://schema.org",
  "@type": "SearchAction",
  "query": "phone",
  "result": {
    "@type": "ItemList",
    "name": "Autocomplete",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "name": "Android Phone PX100",
        "url": "https://myshop.com/products/236",
      },
      {
        "@type": "ListItem",
        "position": "2",
        "name": "iPhone X",
        "url": "https://myshop.com/products/293",
      }
    ]
  }
}


        
      
    
  

You should annotate Autocomplete results in the same way as regular search
results. We recommend that you create a separate  tag where you will describe your autocomplete
results. When you update Autocomplete results, you should also update the
JSON+LD document for the Autocomplete search. A good strategy is to assign the
script tag containing the Autocomplete JSON+LD a special id attribute and then
replace its contents with new JSON+LD when autocomplete results change.


      
        
Element
Hint


        
name
It is important that the name attribute is set to "Autocomplete" to mark this as an autocomplete list.


      
No search results

JSON+LD for no search results


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
{
  "@context": "http://schema.org",
  "@type": "SearchAction",
  "query": "skirt",
  "result": {
    "@type": "ItemList",
    "name": "Search Results",
    "itemListElement": []
  },
  "instrument": [{
    "@type": "ChooseAction",
    "name": "Color",
    "actionOption": "Black"
  }]
}


        
      
    
  

When your search returns no results, you need to add a json+ld markup anyway. You must annotate the query, the used filters and the search name (Search Results/Autocomplete). Since your search returned no results, set itemListElement to empty array.


      
        
Element
Hint


        
itemListElement
Notice that this attribute is present, but set to empty array since there are no results.


      
Infinite scrolling
When your site is using infinite scrolling, you should update the JSON+LD document for regular search results. It is not necessary to build JSON+LD document for all visible search results — only build the JSON+LD for the search results that were freshly loaded.
Using custom identifiers to pair analytics data with catalog

This is an advanced topic that is only relevant if you are using Luigi's Box search and have special requirements. When pairing analytics data (for search relevance models), we are using URLs to pair web data with catalog data. In some cases you may need to use some other pairing identifier, such as product id. For these cases, you must also provide this identifier in the analytics JSON+LD annotations.

Changing the identifiers in analytics must always be coordinated with changing the identifiers in the catalog data. Get in touch with our support (support@luigisbox.com) before attempting this change, to avoid adverse effect on your search ranking quality.


Changing the identifiers requires several changes.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
{
  "@context": "http://schema.org",
  "@type": "SearchAction",
  "query": "phone",
  "result": {
    "@type": "ItemList",
    "name": "Search Results",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "name": "Android Phone PX100",
        "url": "https://myshop.com/products/236",
        "identifier": "SKU_9293"
      },
      {
        "@type": "ListItem",
        "position": "2",
        "name": "iPhone X",
        "url": "https://myshop.com/products/293",
        "identifier": "SKU_1929"
      }
    ]
  }
}


        
      
    
  

 1. Update the JSON+LD annotations to also include the item identifier. Use the identifier key for each item inside itemListElement. The value of the identifier will be used for pairing with catalog data and must be present in the catalog data.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  Android Phone PX100
  
  A nice and reliable phone



        
      
    
  

 2. Mark the HTML for each particular search result with the data-lb-id annotation. Mark the element that is wrapping the item "tile" in search results.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    
    ...


        
      
    
  

 3. On the item detail page (e.g. the product detail page), insert a  tag in the  section to associate the item with the identifier.



All of the above changes are necessary to correctly link conversion attributions to searches using your provided item identifiers instead of URLs.
User identifiers
By default Luigi's Box Search Analytics script assigns each user a unique identifier and saves it in a _lb cookie. We use this cookie to count various usage metrics in Luigi's Box application and it serves also as a basis for personalization of search and recommendation services. However, there are some use cases when it might be better to use your own unique user identifiers:


If you would like to integrate Luigi's Box Search as a Service with personalization enabled or Recommender on backend without using our JavaScript libraries, using you own unique user identifiers enables you to use the services up to their full potential by sending user identifier also for the first visit of a user, when you do not have our _lb cookie identifier available on your backend.
If you know that most or all of your users are logged in while browsing your site, you may leverage your user identifiers to get insight into their behavior cross-device.


If you would like to set your own unique user identifiers add the following code to the  element of your website.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          
  window._lbcq = [];
  window.Luigis = window.Luigis || {};
  window.Luigis.User = '...'; // Your user identifier goes here
  window.Luigis.Scan = window.Luigis.Scan || function(a, r) {
    window._lbcq.push([a, r]);
  }


        
      
    
  

If the window.Luigis.User property is not set or empty the default behavior will be triggered and Luigi's Box Search Analytics script will assign a unique identifier as describe.

The window._lcbq and window.Luigis.Scan are part of asynchronous loading of the script and help to make sure everything works even in case Luigi's Box Search Analytics script is not yet loaded. See more details when implementing via embedded JSON+LD.
Frequent problems
Here's a list of frequent problems that we have noticed with implementation.


Malformed JSON in JSON+LD integration. We've seen many cases of malformed JSON, but the most common error is a trailing comma at the end of the JSON array. If you suspect that your generated JSON+LD is not valid, open the browser developer tools (usually by pressing F12 key) and switch to the Console tab. If we cannot parse the JSON, we will show an error message.
Bad or no results list name. We collect and analyze only searches where the ItemList name is present and set to "Search Results" or "Autocomplete" (mind the capitalization). If you set the list name to something else we will ignore that list altogether.
No annotations for "no search results". When your search returns no results, the backend system very often renders a completely different HTML template which is missing the annotations. Please check the corresponding section for JSON+LD no search results.
Are you setting product positions with respect to pagination? Result position should be relative to full search results list. When you are showing 10 results per page, then on 2nd page in pagition, the products should be numbered 11–20. On 3rd page 21–30. A very frequent problem that we are seeing is that the positions on each page in pagination start from 1 again.
Query string is encoded. Sometimes we see that the query is URL encoded (percent-encoding) and it leads to double encoding since we encode the query again if necessary. It's best to use the query as is and leave encoding to us.
No conversion annotations. Very often, clients implement search results tracking and then forget about conversion tracking. Please check the corresponding section for JSON+LD conversions.
No conversion annotations on product detail. Make sure to implement conversion tracking on both search results page and product detail page. Please check the corresponding section for JSON+LD conversions.
No filter annotations. Very often filter annotations are missing, but they are as important as the query string. Consider that your query "skirt" is returning results and converting very well, but as soon as users check "Color: black" in your facets, your search returns no results. Filter are a natural part of the query and you should track them. Please check the corresponding section for JSON+LD filters.

Troubleshooting
While you are developing the integration, we recommend that you turn on data linter to see debugging information. Make sure that Luigi's Box integration script is included in the page and then, in your web browser, open the developer console (usually by pressing the F12 key), find the "Console" tab and type in the following command: Luigis.lint = true

After that, reload the page, but do not close the developer console. Each time, the integration collects search-related data, you will see what was parsed from your site and you'll get a report about data quality in the console tab of the developer tools.

If you've done everything correctly, you should see a blue Luigi's Box logo. If there were some problems with the data, you will see a red logo and a list of errors.

If you are not seeing the linter messages and logos, the most probable cause is that you are already running an early version of integration that does not support linting. Let us know and we will upgrade your integration.


Support
Troubles? Different nesting? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!]]></content>
      <icon>tornado</icon>
    </page>
    <page>
      <url>/analytics/past_transactions_import.html</url>

      <title>Past, offline and omnichannel transactions import</title>
      <content><![CDATA[Past, offline and omnichannel transactions import
After integrating with Luigi's Box, it takes some time to collect enough behavioral data (products bought together within the same order, by the same user, etc.) to achieve full effectiveness of our services. In order to shorten or completely overcome this ramp-up period, it's possible for clients to provide past user transactions they have collected before the integration. For omnichannel clients, in this way, it is possible to import user transactions outside collected channels (typically from brick&amp;mortar stores).

Individual services can benefit from it in the following way:



Behavioral recommendation - The behavioral algorithms are trained on co-purchases (products bought in the same order) and need a high amount of data to learn good quality recommendations. In basic scenario, anonymous transactions could be used (see mandatory and optional attributes below).

Personalization - Non-anonymous transactions (the attribute auth_user_id is present) help us provide personalized responses. This can be used in search, recommender, autocomplete, product listings etc. It's important to stress that the auth_user_id provided in the uploaded data must have the same value as the auth_user_id provided in a search / recommender / etc. requests. Otherwise, no personalization improvements can be expected.

Popularity of products - We will store the summarized statistics of interactions with the products and calculate popularity of the products based on them. This improves ranking of the products in results.


After successful transactions upload into API, the client will receive response message 200, meaning that the data were successfully uploaded. They will be processed later on background. In case of any error, whole import is canceled. API doesn't allow data removal or update. If needed, contact support@luigisbox.com. Upload of multiple data files (e.g. on weekly basis or one time split of a large file) will cause their cumulative usage. Data uploaded into API are used for up to 52 weeks.
Import file format
User transactions are expected to be organized into orders. A single order groups customer's transactions which happen at the same time and captures the ordering of these transactions in time. Currently, only product purchases may be included in the import. Other interaction types, such as product clicks, must be omitted. If two products were purchased together but do not have a sequential dependency, they can be arranged in any sequence in the order.

Currently, two data formats are supported:



json lines - a file must contain one interaction per line. Expected file extension is .json


csv - a file must not contain csv header. The order of provided attributes is predefined. Expected file extension is .csv.


There are two mandatory attributes order_id and identity, which are used as the basis for global (anonymous) co-purchases learning (used in recommenders). The file can also contain two additional attributes, auth_user_id and created_at, which, if present, allow the transaction metadata to be stored in a user profile and improve personalization (used in all Luigi's Box services).
      
        
Attribute
Description


        

order_id required

Any value that enables identification of products (rows) purchased in the same order.



identityrequired

Resource identifier of the purchased product. (previously url, name still supported).



auth_user_id optional

Id of the user who purchased the product. (previously user_id, name still supported).



created_at optional

Timestamp of a purchase used to sort purchases in time. UTC timezone is expected


      

The following table shows acceptable timestamp formats:
      
        
Format
Example


        
%Y-%m-%d %H:%M:%S.%f
2023-04-22 15:04:30.12312


%Y-%m-%d %H:%M:%S
2023-04-22 15:04:30


ISO 8601 format (Timezone designator must be omitted.)
2023-04-22T15:04:30


      


  
        
      
      !
    

  
  
    Warning
    
         Including a timezone designator (e.g., Z or +02:00) in the timestamp string will result in an error.

    
  


Example of an import file in the json format:

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          {"order_id": "1","identity": "/p/123","auth_user_id": "4", "created_at": "2023-04-22 15:04:30.12312"}
{"order_id": "1","identity": "/p/234","auth_user_id": "4", "created_at": "2023-04-22 15:01:33.12345"}
{"order_id": "2","identity": "/p/123","auth_user_id": "3", "created_at": "2023-04-21 00:04:38.12121"}
{"order_id": "2","identity": "/p/345","auth_user_id": "3"}

        
      
    
  

Example of an import file in the csv format. File should not contain the header, rows contain fields in the following order - order_id, identity (optionally followed by auth_user_id, created_at):

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          1,/p/123,4,"2023-04-22 15:04:30.12312"
1,/p/234,4,"2023-04-22 15:01:33.12345"
2,/p/123,3,"2023-04-21 00:04:38.12121"
2,/p/345,3

        
      
    
  

In case anonymized rows should be provided, the third column should remain empty:

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          1,/p/123,,"2023-04-22 15:04:30.12312"
1,/p/234,,"2023-04-22 15:01:33.12345"
2,/p/123

        
      
    
  
API
POST https://live.luigisbox.com/v1/interactions//files


This endpoint requires HMAC authentication. Refer to the Authentication section for details.

Request Headers      
        
Header
Content


        
Content-Type
multipart/form-data; boundary=sk13jk8sd823j9


      

Keep in mind that when the HMAC token is generated, the provided Content-Type should
be multipart/form-data, without the boundary.
Request Body
The request body is a file containing historical transactions. File format details are described in the section
Import file format.
      
        
Form
Content


        
file
@"/path/to/file.json"


      

For more information see OpenAPI Specification.
Restrictions

The size of any uploaded file cannot be larger than 1 GB. Files exceeding this limit will be rejected. Reach out to support@luigisbox.com if you need to upload larger files.
An uploaded file must fully transmit within 10 minutes. If the upload takes longer than the 10-minute timeout limit, an error will be returned and the upload canceled. If you encounter issues while uploading, reach out to support@luigisbox.com.]]></content>
      <icon>tornado</icon>
    </page>
    <page>
      <url>/identity.html</url>

      <title>Identity</title>
      <content><![CDATA[Identity
The concept of object identity is important for proper functioning of the Luigi's Box feedback loop.

The "object" in "object identity" refers to a particular content type on your web such as products, categories, brands or articles. These are the most frequent types and depending on your specifics and business requirements, you may have fewer or more types.

The "identity" refers to a unique identifier for an object by which that object can be unambiguously identified. The identity must be unique across all types. If you use the same identity for several objects, the later object will overwrite data of the former object sharing the same ID. Note that you can use both numerical or textual identities.

Object identity is important in two processes in Luigi's Box.
Object identification for updates
Object identities serve as IDs in all of the Luigi's Box data stores that we use. When you use the Indexing APIs to send data for the object identified with an identity, we first look up an object using that identity. If such object exists, replace it is replaced. If it does not exist a new object with that identity is created.

Because of this mechanism, it is very important that you are using immutable identities that persist over the full lifetime of the object. Depending on your implementation, choosing a mutable identity may lead to duplicities in the data. For example, if you use the URL as an object identity and that URL changes, you may inadvertently index a duplicate object by leaving the old object version with the original URL in the index without removing it. While dealing with mutable identities is technically challenging, it is best avoided by choosing an immutable object identity, such as your internal product ID or SKU.
Pairing
Object identities are used to match analytics data with the catalog data. All of the user interactions with the objects provide signals to the models, e.g., if an object ends up in a purchase event, that event provides a strong signal for a variety of models. For this feedback loop to work, the object identity in analytics has to match the identity in the catalog.



From the perspective of the feedback loop, it is vital that you identify the products using the same identifier that you use when indexing the data. Object identity is something that you should decide early on, because when you change the identity, the models will forget everything that they learned about that object historically. You can check your pairing in the Luigi's Box application in the Catalog browser > Data quality checks section.

You should aim for having a non-zero pairing stats in application. Having low pairing numbers usually indicates that your analytics and catalog identities are not aligned.
Migrating from URLs to identities
Historically, we've been recommending and using URLs as object identities because they were very easy to collect and understand. Over time, using URLs has caused more hassle than the benefit, since the URLs keep changing. When the URL of the product changes, it will cause the product to unpair from any historically collected data and drop in ranking.

If you are using URLs as object identites and would like to migrate to using immutable identifiers such as product codes, get in touch with our support. The process will involve:

Model migration


If your catalog data contains the attribute which will be promoted to identity, we will rebuild the models using this attribute and not input is necessary on your side.
If the catalog does not contain the attribute which will be promoted to identity yet, we will ask you to provide us with a mapping CSV file with 2 columns - URL and object identity. We will use this file to migrate the models in the background so you do not lose any historical data.


Updating analytics data collection


If you are reporting analytics using the Events API you will need to update the API calls to report based on the identities instead of URLs.
If the analytics is based on the JavaScript collector, you will need to expose the object identities on the frontend. See Product indentification guide for more details.


Reindexing catalog from URLs to identities


If you are indexing data using the Content Updates API you will reindex the data using the identities. We recommend to reindex product by product, first delete the product by its URL and then index it again based on its identity. This way you will avoid having duplicities in your catalog.
If you are indexing data using Feeds, we will manage the reindex for you.

Basic properties of the identity
To sum up, these are the basic properties of the identity:


Unique across all types
Immutable
Numerical or textual
Use consistently in analytics and catalog data]]></content>
      <icon>transparency</icon>
    </page>
    <page>
      <url>/lbx.html</url>

      <title>Integration by the Luigi's Box team</title>
      <content><![CDATA[Integration by the Luigi's Box team
All of the Luigi's Box services can also be integrated by the Luigi's Box team,
via the LBX script. This option is usually suitable for
customers without development teams, or for customers who can benefit from the
expertise of Luigi's Box for faster delivery and go-live.

By offloading the integration to Luigi's Box team, you are effectively
introducing a new development agency into your company. Every change in the
service integration will have to be incorporated by the Luigi's Box support and
integration teams and billed using the contracted hourly rate. In some cases
it's possible that the change will have to be implemented by your development
agency and by Luigi's Box at the same time, increasing your costs.

If you opt in to the integration by Luigi's Box team, expect a slight impact on
your Lighthouse score. All of the integrated services will be packaged into the
LBX script which the browser has to download, parse and
execute. The LBX script will contain the necessary frontend libraries, HTML
templates and CSS styles.


  
    
      
        Take the questionnaire
        Answer a few questions about your specifics and get a personalized todo list.
        Take the questionnaire →]]></content>
      <icon>bandaid</icon>
    </page>
    <page>
      <url>/solutions.html</url>

      <title>Solutions</title>
      <content><![CDATA[Solutions
See the standard solutions to frequent problems.


      
        
          
            Multi-warehouse
            Multi-warehouse search
            Guideline for setting up search in a multi-warehouse scenario
            Read the docs →
          
        
      
      
        
          
            Query-time boosting
            Control boosting via API
            Control which products get boosted at query-time, by providing an API parameter
            Read the docs →
          
        
      
      
        
          
            Colors and color codes
            Show colors based on their codes
            Learn what is available in Luigi's Box when you need to display colors based on their color codes in product tile or within facets
            Read the docs →]]></content>
      <icon>book-fill</icon>
    </page>
    <page>
      <url>/api_principles.html</url>

      <title>API principles</title>
      <content><![CDATA[API principles
Luigi's Box provides several HTTP-based APIs. In general, the APIs that access sensitive data (such as analytics export) or manipulate data in your catalog require HMAC authentication. The APIs that serve the search and recommender data are designed to be called from the browser, provide no sensitive data are callable without authentication.

All APIs are throttled (you cannot call them more often than the throttling limits allow you).
Authentication
Most of the available endpoints use HMAC authentication to restrict access. To
use the API you'll need a



public key — this is a tracker_id assigned to your site in
Luigi's Box search analytics. You can see the tracker_id in every URL in
Luigi's Box application once you are logged in.

private key — you can find your private key in the Integration settings section in Luigi's Box
application.


If you need help contact our support.

Our API expects you to include these HTTP headers:
      
        
HTTP Header
Comment


        
Content-Type
e.g., application/json; charset=utf-8Standard HTTP header. Some endpoints allow you to POST JSON data, while some are purely GET-based


Authorization
e.g., ApiAuth 1292-9381:sd73hdh881gfop228The general format is client tracker_id:digest. The client part is not used, it's best to provide your application name, or a generic name, such as "ApiAuth". You must compute the digest using the method described below.


date
e.g., Thu, 29 Jun 2017 12:11:16 GMT Request date in the HTTP format. Note that this is cross-validated on our servers and if your clock is very inaccurate, your requests will be rejected. We tolerate ±5 second inaccuracies. You will be including this timestamp in the digest computation, so what this means in plain terms is that you cannot cache the digest and must recompute it for each request.



Content-Encodingoptional

e.g., gzipOptional HTTP header. Content updates endpoint allows you to use gzip or deflate request payload compression methods to send large payloads effectively.


      
Digest computation
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
        
          shell
        
      
      
      

      
    
  
  
    
      
        
          require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


date = Time.now.httpdate
digest("secret", "POST", "/v1/content", date)

        
      
        
          <?php

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');
digest("secret", "POST", "/v1/content", $date);

        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";
var contentType = "application/json; charset=utf-8";

var requestUri = request.url.replace(/^.*\/\/[^\/]+/, '').replace(/\?.*$/, '');
var timestamp = new Date().toUTCString();
var signature = [request.method, contentType, timestamp, requestUri].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

pm.request.headers.add({
    key: "Content-Type",
    value: contentType
});
pm.request.headers.add({
    key: "Authorization",
    value: "ApiAuth " + publicKey + ":" + encryptedSignature
});
pm.request.headers.add({
    key: "Date",
    value: timestamp
});


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
echo $(digest "secret", "GET", "/v1/content", $date)

        
      
    
  

You must use HMAC SHA256 to compute the digest and it must be Base64 encoded.

Payload to be signed is computed as a newline-d concatenation of


HTTP request method - e.g., GET

Content-type header - e.g., application/json; charset=utf-8

Date (in HTTP-date format) - the same value you are sending in date header
path (without query string) - e.g. /filters



Make sure that you are using the same values for digest computation as for the
actual request. For example, if you compute digest from Content-Type:
application/json; charset=utf-8, make sure you send the request with the exact same
Content-Type (and not e.g. Content-Type: application/json).

Most programming languages provide crypto libraries which let you compute the
HMAC digest with minimal effort. When the particular endpoint requires HMAC, we
provide examples in several languages in the right column in its documentation.

The pseudocode for HMAC computation is:

signature = [request_method, content_type, timestamp, request_path].join("\n")
digest = base64encode(hmacsha256(signature, your_private_key))

Look for examples in the right column. You can find examples for other
languages online, however, those were not tested by us. See the following
external links for more examples:


Joe Kampschmidt's HMAC SHA256 examples
Dan Harper's HMAC SHA256 examples


Server will return HTTP 401 Not Authorized if your authentication fails. If
this happens, look inside the response body. We include a diagnostics output
which will tell you what was wrong with your request.




If authentication fails and you are sure that your code works as expected, double check value of actually sent Content-type header. Some clients (Chrome browser for example) are manipulating this value even if it was explicitly set (changing letter case from application/json;charset=utf-8 to application/json;charset=UTF-8 for no apparent reason)

Error handling
The API may return errors under specific circumstances. The table below summarizes some of the errors that you may encounter and a recommended way to handle them.
      
        
HTTP Status
Reason
Transient
Recommended handling


        
408 Timeout
The request is taking too long to process. This may mean a temporary overload on our side.
Yes
Since this is a transient error, you may safely retry the request. For autocomplete requests, retrying is not necessary, since the user will keep typing and a new request will be made naturally. For search and recommender, retry the request once. Avoid retrying the request more than once.


429 Too Many Requests
You are breaching one of the throttling limits.
No
The default throttling limits are generous and you should not encounter this error. If you are seeing this error in production, for non-realtime APIs (such as Content Updates), obey the Retry-After header and retry the request. For realtime APIs (autocomplete, search, recommender), fail the request, raise an alarm and get in touch with us to investigate the reason for throttling.


500 Internal Server Error
This is a bug on our side.
No
Fail the request, raise an alarm and get in touch with us to investigate the problem.


502 Bad Gateway
Seeing this error may mean an operational incident on our side.
No
Fail the request, raise an alarm and check luigisboxstatus.com to see if there is an active incident and find out more details.


503 Service Unavailable
Seeing this error may mean an operational incident on our side.
No
Fail the request, raise an alarm and check luigisboxstatus.com to see if there is an active incident and find out more details.


      


Note that we are constantly monitoring all types of errors for all customer and are taking proactive measures to respond to any unusual error activity.

Development mode
While you are developing the integration, your API connection may be put into a development mode, where a small percentage of requests will return deliberate errors. The goal of the development mode is to expose you to errors that you will normally not see and help you write an error handling code.

These errors will be clearly marked as the development mode errors. Note that we will not enable development mode without notifying you, so unless you received an explicit notification, your API connection is not in the development mode.

To disable the development mode, contact support@luigisbox.com to switch your API connection into the production mode.
Throttling
There are different limits for requests per time period in place for endpoints.
Content Updates

limit of 500 request per 1 minute and 5 concurrent requests for tracker_id

see more about Content Updates API


Autocomplete

limit of 800 requests per 1 minute for tracker_id

limit of 30 requests per 5 seconds for same IP address

see more about Autocomplete


Search

limit of 350 requests per 1 minute for same tracker_id

limit of 30 requests per 5 seconds for same IP address

see more about Search


Recommender

limit of 60 requests per 5 seconds for same tracker_id

limit of 30 requests per 5 seconds for same IP address

see more about Recommender



If you exceed any of the limits, you'll get a 429 Too Many Requests response for subsequent requests. Check the Retry-After header if present to see how many seconds to wait before retrying the request.

If you find these limits insufficient for your site, please contact us and we can put exceptions for higher limits in place.]]></content>
      <icon>key</icon>
    </page>
    <page>
      <url>/plp/pairing.html</url>

      <title>Pairing</title>
      <content><![CDATA[Pairing
To use product listing, you need to provide a mapping between categories and products. The default mapping used in our services is id -> category_id. This means that we expect your category object to contain the attribute id, and your product object to contain attribute category_id. The default mapping cannot be changed by you, but if you wish to change it, please contact our support at support@luigisbox.com, we are glad to help!

If you try to integrate a product listing while using invalid mapping, you will see an error message saying Error creating query - invalid category attribute or Could not find attribute  in your category structure.]]></content>
      <icon>boxes</icon>
    </page>
    <page>
      <url>/plp/search_js.html</url>

      <title>Category listing with search.js</title>
      <content><![CDATA[Category listing with search.js
Search.js can be used to render category listings. Category listing is a search, where the search input consists of only filters (to set filter for the category) and no query. If you wanted to list all products belonging to a category via API, you would send a request like /search?f[]=category:T-shirts. This request would return a list of all products for that category, sorted by Luigi's Box AI and respecting all merchandizig rules that you have set up.

There is almost nothing special about category listing from the initialization perspective. Follow the same setup as when initializating search including the loading placeholder for best UX.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          IntentFilters: {
  category: 'T-shirts'
},

        
      
    
  

To set the filter for category, use a special-purpose IntentFilters configuration. Intent filters are designed to only persist for the duration of user's intent. Browsing the category listing is an intent and when the user decides to start searching, the intent changes, and the intent filters void. Note that the intent is an implicit concept inside search.js and there's no way to control it from outside.

If possible, use a more precise filtering by category ID, instead of its name.]]></content>
      <icon>boxes</icon>
    </page>
    <page>
      <url>/plp/api.html</url>

      <title>Product listing API</title>
      <content><![CDATA[Product listing API
Use the Search API to integrate product listing, but avoid
setting the query parameter (q). See the Search API documentation for complete usage details.


  
    
      Product listing API integration tutorial
      
        
 See the full guide to integrating Luigi's Box Product listing using the API
        See the tutorial
      
    
  

Product listing
GET https://live.luigisbox.com/search
Required parameters      
        
 
 


        
f[] or f_must[]
Filters to apply to fetch the listing products. This will typically be the category or, preferably, the special category_path attribute described below.


tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


plp
E.g. plp=category. Name of the filter (from the f[] supplied filters) that serves as the unique identifier of the category. This is used to retrieve and apply any customizations (facets, pins) made for that category.


      

Note: Both plp and f[] (or f_must[]) are required but also must use the same key. See the example below with plp=category&amp;f[]=category:Kalimbas.

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;plp=category&amp;f[]=category:Kalimbas&amp;f[]=type:product&amp;hit_fields=all_categories

Try it live →
Best practicesFiltering within full category hierarchy
When dealing with hierarchical categories, filtering by standalone category names might not be sufficient, and filtering by whole paths in the hierarchy may be necessary.
Special filters
There are two special filters for product listing: category_path and all_categories_path.

You can use the special filter category_path, designed for filtering within a category hierarchy. Individual steps (categories within the hierarchy) should be separated by a double pipe ||, e.g.: f[]=category_path:Women||Footwear||Sandals.
As with other filters, you can use multiple category_path filters together to create OR (by repeating the f[]=...) or AND (using f_must[]) combinations.

Alternatively the all_categories_path filter can be used, e.g.: f[]=all_categories_path:Women||Footwear||Sandals. It allows for filtering within full category hierarchy, while the category_path filter is applied only to primary category.
      
        
Special filter
Usage


        
category_path
filtering products with a matching primary category hierarchy within product's category hierarchies


all_categories_path
filtering products with a matching any category hierarchy within product's category hierarchies


      

To learn more about product category hierarchies visit docs on product feeds.

For special filters to work, Luigi's Box needs to pair one of them.
Matching filter value with product data
Important: As with all other filters, we require the product value to perfectly match the filter value, including letter case.

This example presents a correct plp request, where the category attribute title is mapped to the product attribute category and the title Musicians matches the category name in the product data. 

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;f[]=category:Musicians&amp;plp=category

Try it live →

This example presents an invalid plp request for the same mapping as above because the letter case does not match (musicians instead of Musicians).

GET https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:product&amp;f[]=category:musicians&amp;plp=category

Try it live →]]></content>
      <icon>boxes</icon>
    </page>
    <page>
      <url>/tutorials.html</url>

      <title>Tutorials</title>
      <content><![CDATA[Tutorials
See the tutorials to integrate Luigi's Box services using API.


      
        
          
            Autocomplete
            
            A guide to integrate Luigi's Box Autocomplete using API
            Read the docs →
          
        
      
      
        
          
            Search
            
            A guide to integrate Luigi's Box Search using API
            Read the docs →
          
        
      
      
        
          
            Recommender
            
            A guide to integrate Luigi's Box Recommender using API
            Read the docs →
          
        
      
  
  
      
        
          
            Product listing
            
            A guide to integrate Luigi's Box Product listing using API
            Read the docs →]]></content>
      <icon>rocket-takeoff</icon>
    </page>
    <page>
      <url>/solutions/multi_warehouse.html</url>

      <title>Multi-warehouse search</title>
      <content><![CDATA[Multi-warehouse search
Most ecommerce businesses use several geographically distributed warehouses but the underlying warehousing infrastructure is transparent to the end users. They simply interact with the store, place an order and the order is delivered to them from one of the warehouses.

For some businesses however, the concept of the warehouse is an integral part of their business and the users are aware of the warehouse and frequently, they choose the warehouse that they want to use for their delivery. This will typically be B2B commerces, online groceries, or in general, business, where speed of delivery is of utmost importance.

The requirements for this scenario are usually:


User selects one of the available warehouses in the user interface (or the warehouse is selected automatically by the system)
Several aspects of the products, most notably availability of the products are considered in the context of the selected warehouse


The important aspect of a multi-warehouse solution is that it is not a simple display problem. The underlying models have to obey the warehouse-related product data when applying Ranking rules.

Luigi's Box Autocomplete and Search are designed to let you plug in your own attributes which drive the underlying ranking models and getting a warehouse-scoped ranking.
Availability &amp; availability rank
By plugging in a warehouse-related availability attribute, you can instruct the ranking model to use that attribute for product availability when ranking.

Consider two products with the following data

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // Product #1
{
  "title": "Product #1",
  "availability_warehouse_1": 1,  // available in warehouse 1
  "availability_warehouse_2": 0   // not available in warehouse 2
}

// Product #2
{
  "title": "Product #2",
  "availability_warehouse_1": 0,  // not available in warehouse 1
  "availability_warehouse_2": 1   // available in warehouse 2
}

        
      
    
  

You can then use the availability Context parameter to instruct the ranking model to consider product availability at warehouse 1 by setting context[availability_field]=availability_warehouse_1.

Since the default Ranking prefers available products, if you issue an API request with context[availability_field]=availability_warehouse_1, the API would return products in the order:


Product #1
Product #2


If you switch availability context to warehouse 2 and issue an API request with context[availability_field]=availability_warehouse_2, the API would return products in the order:


Product #2
Product #1


Similarly to context[availability_field], use context[availability_rank_field] to plug in the warehouse-scoped Availability rank attribute to use for ranking.
Boosting
The Boost attribute can be used to specify product boosting when indexing data. You can plug in a warehouse-scoped boost attribute to drive boosting per-warehouse.

Use the boosting context to set up different product promotions across different warehouses.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // Product #1
{
  "title": "Product #1",
  "availability_warehouse_1": 1,
  "availability_warehouse_2": 1,
  "boost_warehouse_1": 1          // Boost this product in warehouse 1
}

// Product #2
{
  "title": "Product #2",
  "availability_warehouse_1": 1,
  "availability_warehouse_2": 1,
  "boost_warehouse_2": 1           // Boost this product in warehouse 2
}

        
      
    
  

You can then use the boost Context parameter to instruct the ranking model to consider product boost at warehouse 1 by setting context[boost_field]=boost_warehouse_1.

If you issue an API request with context[boost_field]=boost_warehouse_1, the API would return products in the order:


Product #1
Product #2


If you switch boost context to warehouse 2 and issue an API request with context[boost_field]=boost_warehouse_2, the API would return products in the order:


Product #2
Product #1

Freshness (Introduced at)
The Introduced at attribute can be used to drive the concept of freshness in the ranking model. If the products are being introduced to different warehouses at different times, you can use the freshness Context parameter to adapt the ranking model to a specific warehouse.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // Product #1
{
  "title": "Product #1",
  "availability_warehouse_1": 1,
  "availability_warehouse_2": 1,
  "introduced_at_warehouse_1": "2023-11-30", // Newer at warehouse 1
  "introduced_at_warehouse_2": "2023-11-23"
}

// Product #2
{
  "title": "Product #2",
  "availability_warehouse_1": 1,
  "availability_warehouse_2": 1,
  "introduced_at_warehouse_1": "2023-11-23",
  "introduced_at_warehouse_2": "2023-11-30" // Newer at warehouse 2
}

        
      
    
  

If you issue an API request with context[freshness_field]=introduced_at_warehouse_1, the API would return products in the order:


Product #1
Product #2


If you switch boost context to warehouse 2 and issue an API request with context[freshness_field]=introduced_at_warehouse_2, the API would return products in the order:


Product #2
Product #1

Putting it all together
In practice, you will only rarely use all of the context fields at once. Start by identifying what are the attributes that should affect the ranking at the warehouse level and make sure that you are indexing these attribute at the product level for each warehouse. The examples here are using names which end with _warehouse_1 and _warehouse_2, but the naming convention is flexible. You can use warehouse names, such as _warehouse_berlin or _warehouse_london, you can use your internal ids, such as _warehouse_28179.

When making requests to Search or Autocomplete API, set the context fields to the warehouse fields storing data for the warehouse the user selected. In terms of code, you will most likely just interpolate the warehouse ID into the request, such as

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          `&amp;context[availability_field]=availability_warehouse_${current_user_warehouse_id}&amp;context[freshness_field]=introduced_at_warehouse_${current_user_warehouse_id}`;

        
      
    
  
Feeds vs. API
This solution and the context fields in general are agnostic of the indexing method. The solution will work the same whether you are using Feeds or API to index the data.
Constraining the feedback loop
If by the nature of your business the users behave very differently across different warehouses, you can force Luigi's Box to create several ranking models for every warehouse. Note that this is a very advanced use case and you should consider the implications before you proceed with the integration. By splitting the model into several smaller models you are making each model slighly less robust, since it will get exposed to less behavioral data. You should be reasonably certain that the user behavior is different across the different warehouses that the split will lead to a benefit.

Creation of the models is driven by the context in the analytics data. Note that since contexts are an advanced feature, the context is currently only supported when pushing analytics events via API.

To create a separate ranking model for each of your warehouses, start by adding a context parameter to the analytics events.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
            "context": {
    "warehouse": "Berlin"
  }

        
      
    
  

This will create a separate model for each warehouse in the background and each events will contribute to the warehouse-specific model.

To use the model in the retrieval APIs, specify the ctx key/value parameter in the API request. The ctx parameter must match one of the key/value context pairs that you use in analytics and which identify the model. In this specific example, you would use

&amp;ctx[]=warehouse:Berlin

The model selection (the ctx parameter) is supported in:


Autocomplete API
Search API
Top items


To effectively scope each of the services to the specific warehouse, use the ctx parameter consistenly when calling the respective retrieval endpoints.]]></content>
      <icon>book-fill</icon>
    </page>
    <page>
      <url>/solutions/query_time_boosting.html</url>

      <title>Query-time boosting</title>
      <content><![CDATA[Query-time boosting
Luigi's Box offers support for query-time boosting, allowing you to define conditions that enhance the ranking of products by assigning them higher scores. In the demo below, entering "fender" into the two searchboxes illustrates this functionality. The left searchbox is configured to prioritize results from the "Music" category, while the right searchbox prefers the "Sailors" category.


  
    
      "Music" boosted
      
    
    
      "Sailing" boosted
      
    
  


Notably, the only distinction between the two searchboxes is in the prefer API parameters they utilize. The left searchbox employs prefer[]=main_category_lvl_1:Music, indicating a preference for products in the "Music" category. On the other hand, the right searchbox utilizes prefer[]=main_category_lvl_1:Sailors, expressing a preference for products within the "Sailors" category.

Query-time boosting via the prefer parameter is supported across all Luigi's Box services to provide a consistent user experience:


Autocomplete API

Autocomplete.js via the Prefer configuration option.
Search API

Search.js via the Prefer configuration option.

Boosting vs. filtering
Boosting (or preference) should not be conflated with filtering. While boosting influences the ranking order of results, it does not impact the presence or absence of a product in the search results. On the contrary, filtering acts as a pruning mechanism for the result set. If a product fails to meet the specified filters, it is designated as "not found."

For instance, consider a search for 'fender guitar.' The left searchbox, which prioritizes "Sailing," will still display results for the guitar, albeit with a different ranking order. In contrast, the right searchbox will yield no results, as it exclusively filters products from the "Sailors" category, effectively excluding any that do not meet this criterion. This illustrates the distinct roles of boosting in reordering results and filtering in determining the presence or absence of items based on specified criteria.


  
    
      "Sailing" preferred
      
    
    
      "Sailing" filtered
      
    
  

Boosting vs. personalisation
Query-time boosting is similar to personalisation in a way that the basic ranking model is being adjusted on-the-fly. The main difference is that personalisation features adjust the ranking dynamically, considering the user's learned preferences and historical interactions. Query-time boosting on the other hand relies on an external instruction where a domain expert has to configure which results should be preferred. In most cases, personalization features effectively cater to user preferences without the need for query-time boosting. Nevertheless, query-time boosting can be valuable, particularly in situations where personalization might face challenges, such as with new users lacking sufficient data or those who reject cookies and thus don't consent to personalization.

Here are some practical examples of when query-time boosting could be beneficial:


Gender-based Boosting in Fashion Domains. 
Scenario: Boosting results based on the user's gender.
Conditions: User is logged in, and their gender information is known.
Example: In a fashion domain, results may be boosted to align with the user's gender, providing a more personalized experience.
Category-specific Boosting.
Scenario: Boosting results based on the currently browsed category.
Example: If a user initiates searches within the "Sailors" category, the system can be configured to explicitly boost results from that category, enhancing relevance for the user.


It's essential to note that using query-time boosting and personalization concurrently is feasible, as they are not mutually exclusive. Even when query-time boosting is applied, personalization continues to operate in the background, ensuring a comprehensive and adaptable user experience.


function LBInitAutocomplete() {
  AutoComplete({
    Layout: 'heromobile',
    TrackerId: '179075-204259',
    Locale: 'en',
    Prefer: ['main_category_lvl_1:Music'],
    Translations: {
      en: {
        types: {
          item: {
            name: "Products",
            heroName: "Top product"
          },
          query: {
            name: "Searches"
          },
          category: {
            name: "Categories"
          }
        }
      }
    },
    Types: [
      {
        type: 'product',
        size: 7
      },
      {
        type: 'query'
      },
      {
        type: 'category'
      }
    ]
  }, '#q-music')

  AutoComplete({
    Layout: 'heromobile',
    TrackerId: '179075-204259',
    Locale: 'en',
    Prefer: ['main_category_lvl_1:Sailors'],
    Translations: {
      en: {
        types: {
          item: {
            name: "Products",
            heroName: "Top product"
          },
          query: {
            name: "Searches"
          },
          category: {
            name: "Categories"
          }
        }
      }
    },
    Types: [
      {
        type: 'product',
        size: 7
      },
      {
        type: 'query'
      },
      {
        type: 'category'
      }
    ]
  }, '#q-sailing')

  AutoComplete({
    Layout: 'heromobile',
    TrackerId: '179075-204259',
    Locale: 'en',
    Prefer: ['main_category_lvl_1:Sailors'],
    Translations: {
      en: {
        types: {
          item: {
            name: "Products",
            heroName: "Top product"
          },
          query: {
            name: "Searches"
          },
          category: {
            name: "Categories"
          }
        }
      }
    },
    Types: [
      {
        type: 'product',
        size: 7
      },
      {
        type: 'query'
      },
      {
        type: 'category'
      }
    ]
  }, '#q-sailing-prefer')


  AutoComplete({
    Layout: 'heromobile',
    TrackerId: '179075-204259',
    Locale: 'en',
    Translations: {
      en: {
        types: {
          item: {
            name: "Products",
            heroName: "Top product"
          },
          query: {
            name: "Searches"
          },
          category: {
            name: "Categories"
          }
        }
      }
    },
    Types: [
      {
        type: 'product',
        defaultFilters: {'main_category_lvl_1': 'Sailors'},
        size: 7
      },
      {
        type: 'query'
      },
      {
        type: 'category'
      }
    ]
  }, '#q-sailing-filter')
}]]></content>
      <icon>book-fill</icon>
    </page>
    <page>
      <url>/solutions/colors_and_hex_codes.html</url>

      <title>Colors and color codes</title>
      <content><![CDATA[Colors and color codes
If you have color attribute in your product data, there is a chance that you want to show this color in some way on the frontend. 
We treat color product attributes a bit extra so that you can easily render interface elements using an appropriate color. 

In general, there are two cases which needs to be covered:


presence of product color code(s) in product fields so that it can be used when rendering product tile
presence of color code information in facet data response so that it can be used when rendering facet values

Color and product tile
If your product attributes contain an attribute, which includes the term color, Luigi's Box will assume that it holds
the color label (its human readable name) and will automatically add color_code attribute to the response with a matching hex code.
It will not overwrite any existing color_code though. So, if you are using custom color codes for your colors, make sure
to include them in the product data.
Color and facets
If you ask for a facet for an attribute, which includes the term color, Luigi's Box will, apart from ordinary value and hits_count, also include color_code for each facet value.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          ...
"hits": [...],
"facets": [
      {
        "name": "color",
        "type": "text",
        "values": [
          {
            "value": "Black",
            "hits_count": 12184,
            "color_code": "#3d2b1f"
          },
          {
            "value": "White",
            "hits_count": 2310,
            "color_code": "#ffffff"
          },
          {
            "value": "Blue",
            "hits_count": 2070,
            "color_code": "#006fdf"
          },
          ...

        
      
    
  

If you are using your custom color codes and would like to have these available in facets, then the approach is bit more complex:


Create a field combining facet label and its code. Make sure that it contains the term color in its name. For instance, color_with_hex is a good name.
Values of this field should be in a form label~code, using ~ as a separator between color label (name) and its code. Take gray~a9aeba as a good example.
Ask for color_with_hex as your color facet in your search request.
The response will contain label in addition to color_code, hits_count and value for each facet value. See an example below.
Make sure to display label and color based on the color_code to your visitors, but filter using value when doing requests to Luigi's Box search backend. If you are using Luigi's Box search.js library, this works out of the box.


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
           "facets": [
      {
        "name": "color_with_hex",
        "type": "text",
        "values": [
          {
            "value": "gray~a9aeba",
            "hits_count": 240,
            "color_code": "#a9aeba",
            "label": "gray"
          },
          {
            "value": "white~ffffff",
            "hits_count": 250,
            "color_code": "#ffffff",
            "label": "white"
          },]]></content>
      <icon>book-fill</icon>
    </page>
    <page>
      <url>/guidelines/mobile_apps.html</url>

      <title>Mobile apps</title>
      <content><![CDATA[Mobile apps
All of the Luigi's Box services can be integrated into mobile apps using APIs. Currently, we do not provide mobile-app libraries that would simplify integrating the API and you have to work with the HTTP APIs.

The guideline below is meant as a best-practice enumeration of the steps that you should take, in the order that you should take them. Variations are possible where applicable, e.g., you may decide to push catalog data using feeds instead of API.


  Feedback loop
  
     Understand analytics and the basic concepts
     Settle on the object identity
     Integrate Analytics API to start feeding the data into Luigi's Box
  



  Index catalog data
  
    Understand the data you will need to push into Luigi's Box
    Understand ranking and the ways to affect it using data
    Understand variants and decide if you want to use them
    Start pushing data via API
  



  Integrate autocomplete
  
    Integrate autocomplete via API
    Integrate recommendations into autocomplete using API
  



  Integrate search
  
    Integrate search using API
  



  Integrate recommender
  
    For best recommendations, provide a past transactions import file for the recommender
    Settle on the models and requirements for recommendations
    Integrate recommendations using API
    Recommend for large amount of users in scheduled time]]></content>
      <icon>compass</icon>
    </page>
    <page>
      <url>/guidelines/b2b.html</url>

      <title>B2B business</title>
      <content><![CDATA[B2B business
In our experience we find that B2B businesses:


value realtime data updates, that's why we recommend using API instead of the feeds
have very dynamic and complex pricing rules where the prices are often impossible to index
prefer a quick, streamlined and robust integration


To accomodate for these needs, this guideline recommends:


Using GA4 to read the ecommerce related events and send them to Luigi's Box feedback loop.
Using API to index the data to maintain realtime updates.
Integrate using Luigi's Box web frontend libraries for easy integration
Using the Pricing API to load per-customer prices in real-time.



  Feedback loop
  
    Include the LBX script, which will read GA4 dataLayer events automatically
    Settle on the object identity
  



  Index catalog data
  
    Understand the data you will need to push into Luigi's Box
    Understand ranking and the ways to affect it using data
    Understand variants and decide if you want to use them
    
Start pushing data via API
    orPrepare data feeds
    
  



  Integrate autocomplete
  
    Integrate autocomplete using Luigi's Box autocomplete.js library
  



  Integrate search
  
    Integrate search using Luigi's Box search.js library
  



  Integrate recommender
  
    For best recommendations, provide a past transactions import file for the recommender
    Settle on the models and requirements for recommendations
    Integrate recommendations using Luigi's Box recco.js library
    Recommend for large amount of users in scheduled time  
  



  Handle dynamic pricing
  
  
Implement and integrate the Pricing API
      orUse pricing levels for less complex scenarios]]></content>
      <icon>compass</icon>
    </page>
    <page>
      <url>/guidelines/lbx-to-be.html</url>

      <title>Migrating to API integration</title>
      <content><![CDATA[Migrating to API integration
Migrating Luigi's Box integrated services (via the LBX script) to the integration over API which you fully control is a risk-free operation in general. Follow these steps to complete the migration:



Request a modified LBX script. Contact Luigi’s Box support to obtain a copy of the LBX script with the services you’re migrating disabled. For example, if you’re migrating recommenders to backend API calls but retaining the search integration, Luigi’s Box will provide an LBX script version with search integration active and recommender integration disabled.

Deploy the modified script in your development and testing environments. Retain the original LBX script in your production environment to prevent any service disruption during development and  testing.

Develop the API integration. Implement and test the API calls. Refer to Search API and Recommender API for guidance.

Release to production. When ready to release the API integration to production, deploy your code and keep the original production LBX script. Use Luigi’s Box’s emergency deactivation feature to disable frontend integration for the services you’ve launched via API, preventing interference between the old and new setups.


Tips &amp; considerations


Use browser developer tools (specifically the Network tab) to monitor the requests currently handled by Luigi’s Box, and replicate these in your API calls.
Ensure consistency in user IDs (for personalization) and object identities when requesting recommendations. Inconsistent object identities are a common cause of unexpected results in backend integrations.



Related

  
    
      
        
 Migrating from feeds to API
        
        Migrating the data imports from feeds to API
        Read the docs →]]></content>
      <icon>compass</icon>
    </page>
    <page>
      <url>/guidelines/large_business.html</url>

      <title>Medium-to-large business</title>
      <content><![CDATA[Medium-to-large business
In our experience we find that medium-to-large businesses:


value realtime data updates, that's why we recommend using API instead of the feeds
have internal development team and sufficient development capacity and prefer to keep the technical integration in-house
value robustness and flexibility of the integration
are very sensitive to any impact of 3rd party scripts on their frontent performance


To accomodate for these needs, this guideline recommends:


Using API to integrate analytics
Using API to index the data to maintain realtime updates
Using API to integrate autocomplete
Using API to integrate search
Using API to integrate recommender



  Feedback loop
  
     Understand analytics and the basic concepts
     Settle on the object identity
     
Integrate Analytics API to start feeding the data into Luigi's Box
     orUtilize your existing Google Analytics enhanced ecommerce events
     
  



  Index catalog data
  
    Understand the data you will need to push into Luigi's Box
    Understand ranking and the ways to affect it using data
    Understand variants and decide if you want to use them
    
Start pushing data via API
    orPrepare data feeds
    
  



  Integrate autocomplete
  
    Integrate autocomplete via API
    Integrate recommendations into autocomplete using API
  



  Integrate search
  
    Integrate search using API
  



  Integrate recommender
  
    For best recommendations, provide a past transactions import file for the recommender
    Settle on the models and requirements for recommendations
    Integrate recommendations using API
    Recommend for large amount of users in scheduled time]]></content>
      <icon>compass</icon>
    </page>
    <page>
      <url>/guidelines/small_business.html</url>

      <title>Small business</title>
      <content><![CDATA[Small business
In our experience we find that small businesses:


do not have internal IT teams and rely on agencies which bill them an hourly rate for development, therefore they try to avoid technical tasks if possible
prefer an integration that can be executed by a 3rd party


To accommodate for these needs, this guideline recommends:


Using GA4 to read the ecommerce related events and send them to Luigi's Box feedback loop.
Using feeds to index the data to minimize development work
Letting Luigi's Box team execute the integration



  Feedback loop
  
    Include the LBX script, which will read GA4 dataLayer events automatically
    Settle on the object identity
  



  Index catalog data
  
    Understand ranking and the ways to affect it using data
    Understand variants and decide if you want to use them
    Create the data feed for every searchable type
  



  Integrate services
  
    Deliver the requirements
    Let Luigi's Box team integrate the service
  


Depending on your business requirements, your business specifics or your technology limitations, you may need to deliver additional deliverables. Take the questionnaire below to get a personalized list of requirements.


  
    
      
        
 Questionnaire
        
        Get personalized list of requirements for your scenario.
        Take the questionnaire →]]></content>
      <icon>compass</icon>
    </page>
    <page>
      <url>/quickstart.html</url>

      <title>Quickstart Guides</title>
      <content><![CDATA[Quickstart Guides
    Get started with Luigi's Box by following our step-by-step guides. These guides walk you through everything from basic setup to advanced integrations—helping you build your skills along the way.
  
  


  
        
      
    

  
  
    Note
    
        How to Use These Guides:
  
    
Start Here: Begin with the "General Guides" to understand foundational concepts and the differences between integration paths.
    
Choose Your Path: The integration methods are independent. You only need to follow the guides for the single path you choose (e.g., either DataLayer or Events API for Analytics ).
  

    
  






    
      
        Analytics
      
      


        
          General Guides
          
              Analytics and Object Identity: The foundation of Luigi's Box effectiveness
              Quickstart: A Guide to debugging your analytics
          
        


          
            Datalayer Collector Integration
            
                Quickstart: Track your first search with datalayer collector
                Quickstart: Tracking purchases and key conversions with datalayer collector
            
          

          
            API Integration
            
                Quickstart: Send your first search events with the Events API
                Quickstart: Tracking purchases and key conversions with the Events API
            
          
    
    
      
        Indexing
      
      


        
          General Guides
          
              Quickstart: Structuring your data for indexing
          
        


          
            API Integration
            
                Quickstart: Indexing with Luigi's Box
            
          
    
    
      
        Autocomplete
      
      


        
          General Guides
          
              Understanding Luigi's Box Autocomplete: Features and integration strategies
          
        


          
            API Integration
            
                Quickstart: Getting query suggestions via the Autocomplete API
                Quickstart: Implementing 'Top Items' suggestions with the API
                Quickstart: Implementing 'Trending Queries' suggestions
            
          

          
            Library Integration
            
                Quickstart: Implementing Autocomplete with Autocomplete.js
                Quickstart: Customizing Autocomplete.js, layouts, actions, and advanced options
            
          
    
    
      
        Search
      
      


        
          General Guides
          
              Understanding Luigi's Box Search: Features and integration paths
              Understanding and influencing result ranking
              Quickstart: Implementing variant search
          
        


          
            API Integration
            
                Quickstart: Building a custom Search UI with the Search API
            
          

          
            Library Integration
            
                Quickstart: Integrating search.js for a full search page
                Quickstart: Customizing the search UI with Search.js
            
          
    
    
      
        Product Listing
      
      


        
          General Guides
          
              Understanding Luigi's Box Product Listing: Features and integration paths
          
        


          
            API Integration
            
                Quickstart: Your first API-powered product listing
                Quickstart: Building a navigable category page with the Product listing API
            
          

          
            Library Integration
            
                Quickstart: Building a product listing page with Search.js
            
          
    
    
      
        Recommendations
      
      


        
          General Guides
          
              Quickstart: Choosing recommendation models
          
        


          
            API Integration
            
                Quickstart: Building custom recommendations with the Recommender API
            
          

          
            Library Integration
            
                Quickstart: Integrating Recco.js for on-site recommendations
                Quickstart: Customizing the Recco.js UI with templates
            
          
    




    Looking for More?
    
      We're actively developing our next set of guides focused on implementing the core Luigi's Box features. More tutorials are coming soon. Check back for more step-by-step guidance!]]></content>
      <icon>lightning-charge</icon>
    </page>
    <page>
      <url>/indexing.html</url>

      <title></title>
      <content><![CDATA[Core concepts
Regardless of the integration path you choose, understanding these core concepts is essential for a successful implementation.



Data Layout: Luigi's Box follows a "convention over configuration" approach. While you have flexibility in naming attributes, several special fields have predefined behaviors that impact search results and ranking. For example, availability is used to sort available products first, price is used for faceting and value extraction, and image_link is used by frontend components to display product images.

Object Identity: Before indexing, it's crucial to establish a stable, unique identity for every object (product, category, etc.). This identity is the key that links the indexed object in your catalog to the behavioral data collected through analytics events, forming the feedback loop that powers our AI-driven ranking.

Content Export: Once your data is indexed, you can retrieve it at any time using the Content Export API. This endpoint allows you to download your entire catalog stored in Luigi's Box for verification, backup, or other purposes. The results are paginated and the API is designed for bulk export, not real-time consumption.]]></content>
      <icon>database-fill-gear</icon>
    </page>
    <page>
      <url>/changelog.html</url>

      <title>Changelog</title>
      <content><![CDATA[Changelog

  
2025-09-09 Published quickstart guides for Product Listing.
  
2025-08-01 Added documentation for Shopping assistant. 
  
2025-07-23 Published quickstart guides for Search.
  
2025-07-01 Added documentation for Facet value search.
  
2025-02-17 Added favorites and recently_ordered models into recommendation models. 
  
2025-01-24 Documentation enhancement and typo fixing in Transactions import API. 
  
2025-01-10 Acceptable timestamp formats are documented in Transactions import API. 
  
2024-12-20 The session_id attribute is renamed to order_id  in Transactions import API. 
  
2024-12-05 Added new hit top level attribute updated_at in  Search API and  Autocomplete API responses.
  
2024-12-03 Added new type specific sort parameter for Search and AC.
  
2024-11-18 Updated Recommendation batch publisher and fixed url for Batching users API.
  
2024-11-04 Documented Klaviyo integration with Luigi's Box.

  
2024-10-29 Documented process for migrating to API indexing and process for migrating from LBX to API integration.
  
2024-10-10 Added Import API for past and omnichannel interactions.
  
2024-10-07 Documented Recommendation batch publisher.

  
2024-10-05 Documented new requested types option for content export endpoint.
  
2024-24-07 Documented a preventing products from being recommended via annotations in recco.js.
  
2024-06-28 Documented a promise-based product tile rendering in search.js.
  
2024-03-16 Documented a complex filter usage scenario in search API.
  
2024-02-25 Published recco.js examples.
  
2023-12-29 Documented a solution for showing colors based on their codes in product tiles and facets.
  
2023-12-29 Updated Event API docs and added a section on debugging.
  

2023-12-15 New solution for query-time boosting in search.
  
2023-12-15 Documented model selection via context.
  
2023-12-15 Generate all live examples from the docs code.
  
2023-12-11 Documented a Multi-warehouse solution.
  
2023-12-11 Note that product feed can be split.
  
2023-12-08 Documented Query rewrite for search and Query rewrite for autocomplete.
  
2023-12-07 Documented Adding to wishlist requirement for integration by the Luigi's Box team
  
2023-12-07 Added definition of Luigi's Box standard design

  
2023-11-04 Deprecated inline schema.org annotations. JSON+LD is now the only supported annotation format.]]></content>
      <icon>journal-code</icon>
    </page>
    <page>
      <url>/identity/map.html</url>

      <title>Identity</title>
      <content><![CDATA[Identity
The following diagram shows a full picture of various identities across subsystems:


highlighted in red is the Object identity
highlighted in green is the Customer identity
highlighted in yellow is the transient user identity]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/explore.html</url>

      <title></title>
      <content><![CDATA[Home
            
            Luigi's Box API documentation.
            Read the docs →
          
        
      
      
        
          
            
 Crossroads
            
            Understand the options and the best way for you to integrate.
            Read the docs →
          
        
      
      
        
          
            
 Quickstart
            
            A set of quick start guides to get you up and running with Luigi's Box.
            Read the docs →
          
        
      
  
  
      
        
          
            
 Getting started
            
            Follow the guidelines for the most frequent integration scenarios
            Read the docs →
          
        
      
      
        
          
            
 Changelog
            
            News and deprecations in the API.
            Read the docs →
          
        
      
      
        
          
            
 API Principles
            
            The basics to start using the API.
            Read the docs →
          
        
      
  
  
      
        
          
            
 LBX script
            
            Understand the Luigi's Box script.
            Read the docs →
          
        
      
      
        
          
            
 Identity
            
            Understand object identities and the role that they play.
            Read the docs →
          
        
      
      
        
          
            
 Analytics
            
            Analytics for the feedback loop that allows Luigi's Box AI to learn.
            Read the docs →
          
        
      
  
  
      
        
          
            
 Indexing data
            
            Get data into Luigi's Box catalog.
            Read the docs →
          
        
      
      
        
          
            
 Autocomplete
            
            Integrate fast search-as-you-type autocomplete widget.
            Read the docs →
          
        
      
      
        
          
            
 Search
            
            Integrate search with pagination and filtering.
            Read the docs →
          
        
      
  
  
      
        
          
            
 Product listing
            
            Integrate smart and personalized category listings.
            Read the docs →
          
        
      
      
        
          
            
 Recommendations
            
            Integrate personalized recommendations.
            Read the docs →
          
        
      
      
        
          
            
 Banner campaigns
            
            Banner campaigns in autocomplete &amp; search.
            Read the docs →
          
        
      
  
  
      
        
          
            
 Analytics &amp; reporting API
            
            Access analytics data via API.
            Read the docs →
          
        
      
      
        
          
            
 Tutorials
            
            Tutorials for API integrations
            Read the docs →
          
        
      
      
        
          
            
 Solutions
            
            Standard solutions to frequent problems and situations
            Read the docs →
          
        
      
  
  
      
        
          
            
 Resiliency
            
            When things go wrong.
            Read the docs →]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/resiliency.html</url>

      <title>Resiliency</title>
      <content><![CDATA[Resiliency
We understand that the services that we provide are at the heart of every ecommerce store and are critical for your business. Every downtime or problem has a direct and tangible impact on your revenue and on your success. We are commited to the highest engineering and operational standards to provide services which power your business without interruptions.

Here are some of the things that we do:


We have an exhausting monitoring infrastructure in place and monitor thousands of different metrics which tell us about health and performance of all of the parts of the system.
We use a proactive alerting system with hundreds of alerting rules. When something goes wrong, we are aware of it and take action.
We have 24/7 engineering on-call rotation where trained engineers are always on duty. When a critical alert fires, the on-call team receives a pager and acts on the problem. Even during the night, weekend or public holidays.
We designed Luigi's Box with resiliency in mind. Luigi's Box runs in several geographically separated datacenters. All of the services and underlying infrastructure are operated with a level of redundancy to account for potential failures.
We actively test for resiliency problems using chaos engineering. The system is designed to gracefully degrade (instead of failing) in case some pieces of infrastructure are not available.



We are transparent about our incidents. You can find the system status at the Luigi's Box status page at https://www.luigisboxstatus.com/

What to do in case of an incident?
To learn about Luigi's Box incidents, we recommend that you subscribe to updates on the Luigi's Box status page. In case we announce an incident, you will receive an email notification.

Depending on the severity of the incident and impact on your business, you may decide that you want to disable Luigi's Box services until the incident is resolved.
Services integrated by Luigi's Box team
In case the services have been integrated by the Luigi's Box team, you can simply head to "General settings" and "Emergency deactivation" in the Luigi's Box application. From this screen you can disable or enable individual services.


Services integrated by you
In case the services are integrated by you, we recommend that you implement the option to disable Luigi's Box services and fall back to your original solution for search or PLP. In a case there should be serious incident it is better to fall back to a temporary solution.]]></content>
      <icon>heart-pulse-fill</icon>
    </page>
    <page>
      <url>/lbx-script.html</url>

      <title>LBX script</title>
      <content><![CDATA[LBX script
When you sign up for Luigi's Box
you will receive a tracking script in the format as shown below.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

        
      
    
  

This is the main Luigi's Box script which allows us to activate Luigi's Box
services. By default it contains code that will start to collect rudimentary
analytics data. Upon your consent we can use this script to start tracking full
analytics events and to integrate autocomplete, search, recommender, product
listing or any other Luigi's Box service.

The tracking script is unique for your domain. You should not use the same
script for different domains; if you do, your data will get mixed into a single
view inside Luigi's Box, making any relevant analysis very difficult. If you
want to track different domains, contact us for separate tracking scripts.

Do you need to include this script? Unless you plan to integrate 100% using API
including the analytics, then the answer is yes.
Inside  element
We recommend that you insert the script tag inside the  element in your
HTML code. Note, that the script is marked as async and thus will not impact
your page load speed.
Google Tag Manager integration
If you are unable to insert the script tag directly into your HTML, you can use
Google Tag Manager. Tracking script you insert into your HTML is the same you
would use with Google Tag Manager, however using Google Tag Manager will impact
the data collection process and some advanced features (e.g., fixit rules) will
appear to be working slowly. We recommend that you always insert the script to
 element for full experience.


Note that adblockers block GTM and in effect block all scripts that are
included via GTM. If you include Luigi's Box master script via GTM, for a
portion of your users the Luigi's Box script will be blocked by adblockers.

Content Security Policy
If your website is using Content Security Policy, you need to add following
rules.
      
        
CSP directive
Value


        
connect-src
https://api.luigisbox.com https://live.luigisbox.com https://app.luigisbox.com


script-src
https://scripts.luigisbox.com https://cdn.luigisbox.com


style-src
https://cdn.luigisbox.com]]></content>
      <icon>code-slash</icon>
    </page>
    <page>
      <url>/search.html</url>

      <title></title>
      <content><![CDATA[Core concepts
Beyond choosing an integration path, it's important to understand the features that make Luigi's Box Search powerful.



Ranking: Results are not just sorted by text match. Luigi's Box models use a multitude of signals to present the most relevant items first, including product availability, sales data from analytics, margin, and product freshness.

Product variants: If products come in different colors or materials, their appearance in search can be configured. It's possible to show each variant as a separate result or have the system intelligently select and display the best-matching variant for a query.

Banner Campaigns: Display custom, clickable promotional banners for specific search queries directly within the search results and autocomplete suggestions. Campaigns are configured in the Luigi's Box application, and banner data is delivered within the standard Search and Autocomplete API responses.]]></content>
      <icon>search</icon>
    </page>
    <page>
      <url>/reporting/api.html</url>

      <title>Reporting APIs</title>
      <content><![CDATA[Reporting APIs
Some of the analytics &amp; reporting APIs support segmentation and date filtering. To apply them, use the following query parameters:



segment_id - visit the Luigis Analytics Dashboard and switch to desired segmentation. Copy segmentation id from the current URL (a value of parameter apply_segment). For example, for this URL https://app.luigisbox.com/sites/XXX-XXX/searches?apply_segment=999, value of segment_id is 999.

from - if given, only sessions starting after midnight of date from will be taken into account. Required format: YYYY-MM-DD (e.g., 2021-12-21)

to - if given, only sessions starting before the end of date to will be taken into account. Required format: YYYY-MM-DD (e.g., 2021-12-30)



  If you want to filter by date, both from and to must be provided. E.g., if you want data for 30th December 2021, from should be set to 2021-12-30 and to should be set to 2021-12-30, as well.



  Please note that a maximum window size given by from/to parameters is capped to the last 90 days.

Breakdown
GET https://analytics.luigisbox.com/breakdown

The breakdown endpoint returns the high-level search KPIs, the same KPIs that you can see in the Luigi's Box dashboard funnel. All of the attributes in the response should be interpreted as percentages in the interval , e.g. 0.23 means 23%. In attributes sessions and searches you can find absolute numbers that are used to calculate these percentages.


This endpoint requires HMAC authentication. Refer to the Authentication section for details.

Query Parameters      
        
Parameter
Description


        
from
ISO 8601 formatted start date of the interval in which the KPIs will be computed.


to
ISO 8601 formatted end date of the interval in which the KPIs will be computed.


days
Number of past days relative to the beginning of the current day to compute the KPIs from. E.g., setting days=0 will set from to the beginning of the current day and to to the end of the current day. Setting days=1 will set from to the beginning of yesterday and to to the end of the current day. Note that days parameter is mutually exclusive with the from and to parameter.


      
Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/breakdown") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/breakdown", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/breakdown" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/breakdown"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/breakdown', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/breakdown", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/breakdown'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "not_used_search_percent": 0.23,
  "not_used_search_converted_percent": 0.20,
  "not_used_search_not_converted_percent": 0.80,
  "used_search_percent": 0.77,
  "search_converted_percent": 0.21,
  "search_not_converted_percent": 0.79,
  "no_results_searches_percent": 0.05,
  "no_click_searches_percent": 0.3,
  "clicked_searches_percent": 0.65,
  "sessions": {
    "total_sessions": 1568,
    "not_used_search_sessions": 360,
    "not_used_search_converted_sessions": 72,
    "not_used_search_not_converted_sessions": 288,
    "used_search_sessions": 1207,
    "search_converted_sessions": 253,
    "search_not_converted_sessions": 953
  },
  "searches": {
    "total_searches": 1500,
    "no_results_searches": 75,
    "no_click_searches": 450,
    "clicked_searches": 975
  }
}

        
      
    
  
Filters
GET https://analytics.luigisbox.com/filters?pair[]=categories:Laptops

Filters endpoint gives you information about filters used for searching. See the analytics documentation section on Filters for more information.

Filter is a pair of a name and a value. Both the name and value are taken from search analytics data.

When you invoke the endpoint without any parameters you will get an overview of all filters used, with basic statistical information - how many users used the filter and what was its conversion rate. The API returns the filter information in a hierarchy - filter name first, and then its values nested underneath. See the example on the right.

Filters are ordered by users_count attribute on the first level, and then by the filter conversion rate on the values level.

You can also pass an optional pair[] parameter to get information about filters used in conjunction with the filter sent in pair[] parameter. This can be understood as: "What other filters were used together with this filter?". For example, to answer the question: "What were the most used filters in "Laptops" category?", you can make a following request

The recommended way to use this API is to first invoke the endpoint without any parameters to get a list of all filter pairs. Each pair also contains a HATEOAS self link with prepopulated pair[] parameter. We recommend that you use this link, instead of trying to build it yourself.


This endpoint requires HMAC authentication. Refer to the Authentication section for details.



This endpoint supports segmentation and date filtering. Refer to the Analytics APIs section for details.

Query Parameters      
        
Parameter
Description


        
pair[]
Filter pair in the name:value format to limit filter usage data to. Repeat this parameter multiple times to limit data to several filters at once.


      
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/filters") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/filters", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/filters" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/filters"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/filters', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/filters", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/filters'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  


The above command returns JSON structured like this.


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "name": "Categories",
    "users_count": 11793,
    "conversion_rate": 2.74,
    "values": [
      {
        "name": "Laptop",
        "users_count": 644,
        "conversion_rate": 8.58,
        "links": [
          {
            "rel": "self",
            "href": "https://analytics.luigisbox.com/filters?pair[]=Categories:Laptop"
          }
        ]
      },
      {
        "name": "Desktop",
        "users_count": 1595,
        "conversion_rate": 5.45,
        "links": [
          {
            "rel": "self",
            "href": "https://analytics.luigisbox.com/filters?pair[]=Categories:Desktop"
          }
        ]
      }
    ]
  },
  {
    "name": "In Stock",
    "users_count": 11793,
    "conversion_rate": 2.74,
    "values": [
      {
        "name": "Yes",
        "users_count": 1192,
        "conversion_rate": 4.41,
        "links": [
          {
            "rel": "self",
            "href": "https://analytics.luigisbox.com/filters?pair[]=In+Stock:Yes"
          }
        ]
      }
    ]
  }
]

        
      
    
  

You can simply follow the self href to get details on a specific filter pair.
Frequent queries
GET https://analytics.luigisbox.com/frequent_queries

The frequent queries endpoint gives you a list of your top queries, as we tracked them in Luigi's Box. All queries are lowercased and any non-ASCII characters are converted their ASCII approximation.


This endpoint requires HMAC authentication. Refer to the Authentication section for details.



This endpoint supports segmentation and date filtering. Refer to the Analytics APIs section for details.

Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/frequent_queries") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/frequent_queries", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/frequent_queries" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/frequent_queries"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/frequent_queries', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/frequent_queries", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/frequent_queries'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "query": "query x",
    "searches_count": 5917,
    "links": [
      {
        "rel": "self",
        "href": "https://analytics.luigisbox.com/query_detail?q=x"
      }
    ]
  },
  {
    "query": "query y",
    "searches_count": 1475,
    "links": [
      {
        "rel": "self",
        "href": "https://analytics.luigisbox.com/query_detail?q=y"
      }
    ]
  },
  {
    "query": "query z",
    "searches_count": 1127,
    "links": [
      {
        "rel": "self",
        "href": "https://analytics.luigisbox.com/query_detail?q=z"
      }
    ]
  }
]

        
      
    
  

You can simply follow the self href to get details on a specific query.
No results queries
GET https://analytics.luigisbox.com/no_results_queries

The no results queries endpoint gives you a list of queries for which we tracked a "no-results" response in last 30 days. All queries are lowercased
and any non-ASCII characters are converted their ASCII approximation.


This endpoint requires HMAC authentication. Refer to the Authentication section for details.



This endpoint supports segmentation and date filtering. Refer to the Analytics APIs section for details.

Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/no_results_queries") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/no_results_queries", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/no_results_queries" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/no_results_queries"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/no_results_queries', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/no_results_queries", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/no_results_queries'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "query": "query x",
    "searches_count": 5917,
    "links": [
      {
       "rel": "self",
       "href": "https://app.luigisbox.com/sites/23-7723/queries?in=Search+Results&amp;q=query+x&amp;show=noresults"
      }
    ]
  },
  {
    "query": "query y",
    "searches_count": 1475,
    "links": [
      {
        "rel": "self",
        "href": "https://app.luigisbox.com/sites/23-7723/queries?in=Search+Results&amp;q=query+y&amp;show=noresults"
      }
    ]
  },
  {
    "query": "query z",
    "searches_count": 1127,
    "links": [
      {
        "rel": "self",
        "href": "https://app.luigisbox.com/sites/23-7723/queries?in=Search+Results&amp;q=query+z&amp;show=noresults"
      }
    ]
  }
]

        
      
    
  


The self href leads to query detail page in Luigi's Box app.

Query Detail
GET https://analytics.luigisbox.com/query_detail?q=term

The query detail endpoint gives you top hits (in terms of CTR and conversions) of the chosen query.


This endpoint requires HMAC authentication. Refer to the Authentication section for details.



This endpoint supports segmentation and date filtering. Refer to the Analytics APIs section for details.

Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/query_detail?q=term") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/query_detail", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/query_detail" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/query_detail?q=term"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/query_detail', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/query_detail?q=term", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/query_detail'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "with_clicks": [
    {
      "title": "Product X",
      "url": "www.e-shop.com/products/123",
      "clicks": 465
    },
    {
      "title": "Product Y",
      "url": "www.e-shop.com/products/456",
      "clicks": 324
    }
  ],
  "with_conversions": [
    {
      "title": "Product X",
      "url": "www.e-shop.com/products/123",
      "conversions": 29
    },
    {
      "title": "Product Z",
      "url": "www.e-shop.com/products/789",
      "conversions": 16
    }
  ]
}

        
      
    
  
Query Enhancement
GET https://live.luigisbox.com/rephrase?q=term

The query enhancement endpoint gives you a rephrased query for any given input query in order to avoid no or low converting search results.


This endpoint requires HMAC authentication. Refer to the Authentication section for details.

Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/rephrase") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/rephrase", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/rephrase" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/rephrase"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/rephrase', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/rephrase", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/rephrase'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "original_query": "term",
  "rephrase_query": "other term"
}

        
      
    
  
Global ranking
GET https://analytics.luigisbox.com/ranking_global

The global ranking endpoint returns information about the optimal global ranking (ordering) of products. It returns a list of products identified by their canonical URLs and a numeric rank for each of the listed products. The rank is computed using Luigi's Box proprietary algorithms and considers many signals collected via search analytics. We recommend that you treat the rank as an opaque number on a strictly "lower is better" basis (as it is sorted). We also include "rev_rank" with reversed rank ("higher is better") for convenience.

The results returned by this API endpoint are paginated. To get to the next page, use the href attribute in the links section, where "rel": "next".
When you receive a response which contains no link with "rel": "next", it means that there are no more pages to scroll and you have downloaded the full ranking list.


Output of the API is not sorted.
The list of returned products is not exhaustive. We are explicitely ommiting products, for which no ranking information was collected.
This API is not designed for real-time consumption. You should obtain the ranking data and cache it locally for fast access.



This endpoint requires HMAC authentication. Refer to the Authentication section for details.

Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://analytics.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/ranking_global") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/ranking_global", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/ranking_global" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/ranking_global"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/ranking_global', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/ranking_global", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/ranking_global'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "total": 14256,
  "ranks": [
    {
      "url": "https://eshop.com/products/123",
      "rank": 1,
      "rev_rank": 14257
    },
    {
      "url": "https://eshop.com/products/456",
      "rank": 2,
      "rev_rank": 14256
    },
    {
      "url": "https://eshop.com/products/918",
      "rank": 3,
      "rev_rank": 14255
    }
  ],
  "links": [
    {
      "rel": "next",
      "href": "https://analytics.luigisbox.com/ranking_global?s=23937182663"
    }
  ]
}]]></content>
      <icon>radar</icon>
    </page>
    <page>
      <url>/banner_campaigns.html</url>

      <title>Banner Campaigns</title>
      <content><![CDATA[Banner Campaigns
Banner campaigns are a way to customize your search and autocomplete results
with banners. You can set up the campaigns in Luigi's Box application and they
will have an effect on autocomplete and search results.

If you are using autocomplete.js and
search.js then banner campaigns will work out of the
box and no integration is necessary on your side.

If you are using API to build autocomplete and search, then you must adapt your
rendering code to incorporate banners. There is no dedicated API for banners,
instead the banners data is returned in the API response for Search and
Autocomplete. You don't have to modify the requests you are making, but you
have to adjust the rendering code to render the banners as indicated by the API
responses. The sections and examples below show the relevant parts of the API
response.
Autocomplete
If you define banners for positions within Autocomplete in the Luigi's Box application, "campaigns" key will appear in Autocomplete response as in the following example.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  ...
  "campaigns": [
        {
            "id": 9,
            "target_url": "https://www.e-shop.com/harry-potter",
            "banners": {
                "autocomplete_list": {
                    "desktop_url": "https://www.e-shop.com/harry-potter-1.jpg",
                    "mobile_url": "https://www.e-shop.com/harry-potter-2.jpg"
                }
            }
        },
        {
            "id": 12,
            "target_url": "https://www.e-shop.com/rowling",
            "banners": {
                "autocomplete_top": {
                    "desktop_url": "https://www.e-shop.com/rowling-1.jpg",
                    "mobile_url": "https://www.e-shop.com/rowling-2.jpg"
                }
            }
        }
    ]
  ...
}

        
      
    
  

Every campaign has at least one search query assigned, for which its banners are displayed within or along the results.

Banners are images, which take the customer to the specified URL when clicked upon.

Banners are referenced by their URL and as of now, they are not hosted by Luigi's Box.
Search
If you defined banners for positions within Search Results in the Luigi's Box application, "campaigns" key will appear in Search Results response as in the following example.

It shows the same banner being displayed on two different positions.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  ...
  "campaigns": [
      {
        "id": 13,
        "target_url": "https://www.e-shop.com/harry-potter",
        "banners": {
          "search_header": {
            "desktop_url": "https://www.e-shop.com/harry-potter-1.jpg",
            "mobile_url": "https://www.e-shop.com/harry-potter-2.jpg"
          },
          "search_footer": {
            "desktop_url": "https://www.e-shop.com/harry-potter-3.jpg",
            "mobile_url": "https://www.e-shop.com/harry-potter-4.jpg"
          }
        }
      }
    ]
  ...
}

        
      
    
  
Banner Positions
We support (and advertise in autocomplete/search responses) following names of banner positions:


Autocomplete


autocomplete_list
autocomplete_top


Search


search_header
search_panel
search_list
search_footer




If you are using Luigi's Box frontend libraries for autocomplete &amp; search results rendering,
we assume that those positions are displayed as follows, with the stated dimensions of banners.

If you are using backend integration, you do not need to abide to these dimensions &amp; positions at all and you can customize display of banners to your need.
The names of positions are fixed in Luigi's Box application and in endpoint response though.
autocomplete_list

  
    Banner within List of brands in autocomplete
  

  
     Computer devices
    310x240px (JPG, 620x480, max 600kb)
    
  

  
     Mobile devices
    420x240px (JPG, 840x480, max 600kb)
    
  

autocomplete_top

  
    Banner within TOP product in autocomplete
  

  
     Computer devices
    240x450px (JPG, 480x900, max 600kb)
    
  

  
     Mobile devices
    420x240px (JPG, 840x480, max 600kb)
    
  

search_header

  
    Banner within Header in search results
  

  
     Computer devices
    1024x160px (JPG, 2048x320, max 600kb)
    
  

  
     Mobile devices
    420x240px (JPG, 840x480, max 600kb)
    
  

search_panel

  
    Banner within Side panel in search results
  

  
     Computer devices
    240x280px (JPG, 480x460, max 600kb)
    
  

  
     Mobile devices
    420x240px (JPG, 840x480, max 600kb)
    
  

search_list

  
    Banner within Product in the list in search results
  

  
     Computer devices
    340x490px (JPG, 680x980, max 600kb)
    
  

  
     Mobile devices
    340x490px (JPG, 680x980, max 600kb)
    
  

search_footer

  
    Banner within Footer in search results
  

  
     Computer devices
    1024x160px (JPG, 2048x320, max 600kb)
    
  

  
     Mobile devices
    420x240px (JPG, 840x480, max 600kb)]]></content>
      <icon>card-image</icon>
    </page>
    <page>
      <url>/recommendations.html</url>

      <title></title>
      <content><![CDATA[Core Concepts
Understanding these core concepts will help you get the most out of Luigi's Box Recommendations.



Recommendation models: Models are the AI component that drives the recommendations. They can be content-based, using product data to find similar items, or behavioral, which observe how users interact with products (e.g., what's frequently bought together). Luigi's Box offers a wide range of standard models that are trained and customized for each client's specific business case.

Personalization: The recommender models are designed to consider user preferences to deliver personalized suggestions. By providing a user_id in the request, the model uses the corresponding user profile, built from analytics data, as an additional input to tailor the results.

Batching: When displaying several recommenders on a single page, it is highly recommended to batch all requests into a single API call. This improves performance and latency, as the user's profile is only loaded once. It also ensures that the same product is not recommended by different models on the same page through automatic deduplication.

Batch Publishing: In contrast to real-time recommendations, the Batch Publisher service is designed for offline scenarios that require recommendations for a large group of users at a scheduled time, such as for email newsletters. The service automatically generates personalized recommendation batches based on a schedule. A key prerequisite is tracking Customer IDs in the analytics collection process, which allows the service to generate personalized content for each user.]]></content>
      <icon>circle-square</icon>
    </page>
    <page>
      <url>/recommendations/recommendation_batch_publisher.html</url>

      <title>Recommendation batch publisher</title>
      <content><![CDATA[Recommendation batch publisher
Luigi's Box typically provides real-time recommendations through the Recommender API. However, for situations requiring
recommendations to be generated for a large, defined user set at a scheduled time – for example, sending personalized
recommendations via newsletter – Luigi's Box offers a Recommendation batch publisher service. This service can automatically
create personalized recommendations in batches per the configured schedule.

An important feature prerequisite is the usage of Customer IDs in the analytics collection process. Customer IDs are identifiers of logged-in users. Please check our Events API documentation to learn more about how to track Customer IDs.
Based on collected user data, batch publisher is later able to recommend personalized content for requested users.

The process for defining, generating and retrieving a batch of published recommendations consists of the following steps:


Step 1 - The client defines set of users to be recommended for
Step 2 - Luigi's Box sets up recommendation logics based on the client's preferences
Step 3 - Luigi's Box sets up a recommendation batch publisher schedule based on the client's preferences
Step 4 - Luigi's Box prepares and publishes recommendations at the scheduled time
Step 5 - The integrated platform retrieves the generated recommendations
Step 6 - The integrated platform distributes recommendations to customers
Step 7 - Luigi's Box / client collects analytics data

Step 1 - The client defines set of users to be recommended for
Before a batch of recommendations can be prepared, the client needs to define the set of users to be recommended for. Typically the client defines a set of customer_ids depending on the used integration.
Another option is that Luigi's Box will recommend for all known users with customer_id active in the past 6 months.
SmartEmailing integration
For SmartEmailing integration, Luigi's Box retrieves the user list from
SmartEmailing API automatically.
A client needs to specify to Luigi's Box the field in which the user identifier is stored.
Klaviyo Integration
Klaviyo has defined a profiles API that allows retrieving
user data stored in the Klaviyo database. In order to match Klaviyo's users with user profiles saved in
the Luigi's Box database, the Luigi's Box customer_id needs to be saved in the Klaviyo user profile. The customer_id
can be saved in any attribute under the attributes.properties structure. For more information about customer_id, see the documentation here
Other integrations
For integrating with other platforms, use
Batching users API
to upload the set of users.
Batching users API
POST https://live.luigisbox.com/v1/recommender/batching//users


This endpoint requires HMAC authentication. Refer to the Authentication section for details.

Request Headers      
        
Header
Content


        
Content-Type
multipart/form-data; boundary=sk13jk8sd823j9


      

Keep in mind that when the HMAC token is generated, the provided Content-Type should
be multipart/form-data, without the boundary.
Request body
The request body is a file containing user ids. File format details are described in the section
Import file format.
      
        
Form
Content


        
file
@"/path/to/file.json"


      

For more information see openapi.yaml.
Restrictions

Uploading a new file will remove existing users for the specified tracker id.
The size of any uploaded file cannot be larger than 300 MB. Files exceeding this limit will be rejected. Reach out to
support@luigisbox.com if you need to upload larger files.
An uploaded file must fully transmit within 10 minutes. If the upload takes longer than the 10-minute timeout limit,
an error will be returned and the upload canceled. If you encounter issues while uploading, reach out to
support@luigisbox.com.

Import file format
The import file must be in the JSON Lines or CSV format. It has one mandatory attribute auth_user_id.
      
        
Attribute
Description


        

auth_user_id required

Id of the user (previously user_id, name still supported).


      

Example of an import file in the JSON Lines format:

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          {"auth_user_id": "u123"}
{"auth_user_id": "u234"}
{"auth_user_id": "u345"}

        
      
    
  

Example of an import file in the CSV format. File should not contain the header, rows contain field auth_user_id:

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          "u123"
"u234"
"u345"

        
      
    
  
Step 2 - Luigi's Box sets up recommendation logics based on the client's preferences
Client defines business requirements, based on which Luigi's Box prepares recommendation logics.
Step 3 - Luigi's Box sets up a recommendation batch publisher schedule based on the client's preferences
Client defines how often recommendations for each logic should be generated.
Step 4 - Luigi's Box prepares and publishes recommendations at the scheduled time
Using the recommendation batch publisher service, Luigi's Box prepares and publishes the recommendations according
to the configured recommendation logics and schedule. However, certain integrations may require providing additional data
for the batch generation process.
SmartEmailing integration
Client provides Luigi's Box username and API key for access to SmartEmailing API.
Klaviyo integration
To access and modify user profiles via the Klaviyo API, we require a private key with the following permissions:


lists:read
lists:write
profiles:read
profiles:write


For more information about private keys, see the documentation here
Step 5 - The integrated platform retrieves the generated recommendations
For each user, recommendations contain a personalized list of results (typically products) for each recommender logic.
Recommendations are generated for users with interaction data from the past 6 months. In addition to batch of
personalized recommendation sets for defined users, Luigi's Box generates also 1 generic set of non-personalized
recommendations. It can be found under the key default. It can be used for recommendation to new users without browsing
history, users without cookie consent granted, etc.

Batches of recommendations are generated at the highest set frequency. For example, if recommender_logic_1 is set
to be generated biweekly and recommender_logic_2 is set for weekly generation, Luigi's Box will generate
recommendations for both logics on a weekly basis.

Format of recommendations and way of retrieving data differs depending on the integration. Please note that the url attribute tracking part contains recommendation_id generated by the recommender. This identifier is utilized by the analytics collector (refer to Step 7).
SmartEmailing integration
For SmartEmailing integration, the batch recommendation results in JSON format are uploaded directly to
SmartEmailing API.
Luigi's Box creates a collection to which recommendations are uploaded.
Published recommendations JSON format
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "u123",
  "data": {
    "mail-recommender-1": [
      {
        "id": "product1-id",
        "url": "https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890",
        "title": "Product 1",
        "image_link": "https://www.client-xyz.com/product1-img.jpg/"
      },
      ...
    ]
  },
  ...
}

        
      
    
  
Klaviyo integration
Generated recommendations are uploaded directly to user profiles via the Klaviyo API.
They are stored in a JSON format under the attributes.properties structure of individual profiles.

As said before, Luigi's Box generates one set of non-personalized recommendations and saves it under
the default profile. A Klaviyo profile is considered to be a default one if its attributes.external_id attribute
is equal to default. If there is no such profile present, Luigi's Box automatically creates one.
Published recommendations JSON format
The following snippet specifies a user profile with generated recommendations under the key mail-recommender-1.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
    "data": {
        "type": "profile",
        "id": "01GDDKASAP8TKDDA2GRZDSVP4H",
        "attributes": {
        "email": "sarah.mason@klaviyo-demo.com",
        ...
        "properties": {
            "mail-recommender-1": [
                {
                "id": "product1-id",
                "url": "https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890",
                "title": "Product 1",
                "image_link": "https://www.client-xyz.com/product1-img.jpg/"
                },
                ...
            ]
        }
        },
        ...
    }
}

        
      
    
  
Other integrations
For integrating with a platform other than SmartEmailing, contact Luigi's Box to obtain a link for accessing
the generated recommendations in an XML format.
Published recommendations XML format
Published recommendations have the following structure where one line contains recommendations for one user:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

     ... 
     ... 
     ... 


        
      
    
  

Detailed structure of recommendations for one user:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

    
       u123
       
           
               2024-08-28T10:00:00
           
           
               
                   mail-recommender-1
                   
                       
                           product1-id
                           https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890
                           Product 1
                           https://www.client-xyz.com/product1-img.jpg/
                       
                       
                           product2-id
                           https://www.client-xyz.com/product2-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890
                           Product 2
                           https://www.client-xyz.com/product2-img.jpg/
                       
                   
               
               
                   mail-recommender-2
                   
                       
                           product3-id
                           https://www.client-xyz.com/product3-url/?recommendation_id=wxyz7890-7425-4fee-bed2-214d1234abcd
                           Product 3
                           https://www.client-xyz.com/product3-img.jpg/
                       
                       
                           product4-id
                           https://www.client-xyz.com/product4-url/?recommendation_id=wxyz7890-7425-4fee-bed2-214d1234abcd
                           Product 4
                           https://www.client-xyz.com/product4-img.jpg/
                       
                   
               
           
       
    


        
      
    
  
Step 6 - The integrated platform distributes recommendations to customers
It is important to stress that Luigi's Box only generates batch recommendations and does not handle actual delivery of
the recommendations to end customers. In fact, email addresses or any other contact data are not even collected in
the Luigi's Box database. This responsibility is delegated to the integrated platform.
Step 7 - Luigi's Box / client collects analytics data
By default, Luigi’s Box analytics collector supports tracking of recommendations from batch publishers. This is possible because the URLs of generated recommendations contain the recommendation_id parameter (e.g., https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890). Based on these URLs, Luigi’s Box analytics collector on the client’s web is able to collect user interactions with recommendations. The analytics dashboard (https://app.luigisbox.com/sites//recommenders/analytics) then shows statistics of particular newsletter recommendations in the same manner as for other models.

In case of a custom analytics integration, please follow Events API documentation to pass the value of recommendation_id into the Impression analytics event.]]></content>
      <icon>circle-square</icon>
    </page>
    <page>
      <url>/recommendations/recco_js.html</url>

      <title>Recco.js</title>
      <content><![CDATA[Recco.js
Recco.js is a self-hosted JavaScript library which can be used to rapidly build an interactive, single-page-application user interface around the Luigi’s Box Recommender API.

You can integrate Luigi's Box Recommender by including the Recco.js script, setting configuration parameters and providing custom templates to customize the visual appearance.


  
    
      Live demo
      
        
 Basic example
        Try the live example
      
    
  

Integration
By following this guide you will configure your site to use Recco.js to make request on your behalf to Luigi's Box Recommender API and display these recommendations back to your users. Since recommender is independent of what site is it included on you might use any site you have control over.


Example layout for the page


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    
    
    
      
    
    
  


        
      
    
  
Prepare page for recommendations
Pick a page from your site that you would like to enrich with Luigi's Box Recommender – product pages, shopping carts or even home pages work best. Create an empty placeholder element where Recco.js will render recommender UI into. Note that if you pick an element that is not empty, its contents will be replaced by the recommender UI.

For now we will use , however you can use any element or selector that fits you and your website.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          







  Luigis.Recommend({
    TrackerId: '2291-22343',
    Theme: 'luigis',
    Size: 5,
    Name: 'basket_detail',
    Type: 'basket_recommender'
  }, '#recommender-ui')


        
      
    
  
Setup Recco.js
Include the script and set configuration parameters. See the right column for an example.

Please note that:


You must define your templates before you initialize Recco.js script. Templates are looked up when Recco.js first initializes and when they are not present in the page at that time, Recco.js will fall back to the default built-in templates.
You must initialize the recommender by calling Luigis.Recommend. The initialization function takes 2 arguments: configuration object and CSS selector for the placeholder element where it will render the UI.
You must define the initialization script (call to Luigis.Recommend) in the HTML after the placeholder element. The script expects to find the placeholder on initialization.




Without defining custom templates, you will get a very basic and unstyled recommender UI. You will most likely want to define custom templates where you can reuse your existing styles.

If you define the templates to match the HTML you are using today, there should be no extensive styling necessary.
Content Security Policy
If your website is using Content Security Policy, you need to add following
rules to allow Luigi's Box Recco.js to work.
      
        
CSP directive
Value


        
connect-src
https://live.luigisbox.com


script-src
https://cdn.luigisbox.com


      
Options reference
Luigis.Recommend accepts these arguments:
      
        
Option
Comment
 


        

TrackerIdREQUIRED

Identifier of your site within Luigi's Box




Themeoptional

Theme controls the visual style of the recommender UI. Recco.js currently supports 2 themes: 'default' and 'luigis'. We recommend that you start your integration with 'luigis' theme, and override template / style with CSS only what is necessary. See Theming for more details.




Sizeoptional

Specifies how many results should the API return in each request (default: 10)




Type optional

Unique identifier of a requested recommendation model. See Recommendation types for more details.




Name optional

Name of the recommendations component. If you use multiple recommendation components on a single page they should be unique. Other values than "default" get appended to the template identifier, e.g. Name: "basket",... will make Recco.js look for template with selector #template-recommend-basket and #template-recommend-item-basket. (default: "default")




RecommenderClientId optional

Arbitrary identifier by which you distinguish between different recommender placements. E.g., usage of last_seen recommender in homepage vs product detail page. (default: same value as Name)




GetItemIds optional

Function which returns a list of items to base the recommendation on. Depending on the type of recommendation and placement it might be a list of resource identifiers of products in a shopping cart or category, list of resource identifiers of products from previous purchases, current resource identifier of a product user is exploring, etc. (defaults to empty list)




GetBlacklistedItemIds optional

Function which returns a list of item resource identifiers that must not be recommended, e.g. different product variants that are very similar to ones returned by GetItemids or items which cannot be bought at the moment. (defaults to empty list)




Locale optional

String, indicating a locale identifier which will set up the default translations and price format. See Localisation for more information.




Translations optional

Object, including translation keys and translation themselves. See Localisation for more information.




PriceFilter optional

Object, including configuration for price formatting. See Price format for more information.




OnDone optional

Function called after results are rendered, with an array of items as its first parameter. For example, you can use this callback to initialize some kind of carousel.




OnItemsReady optional

Function called after results are rendered, with context object as its first parameter. This context is basically this in Vue.js. For example, you can access array of results with context.items, or DOM element of recommender with context.$el.




RecommendationContext optional

Function which returns a dict of restrictions for recommender identified in request time (e.g., filters used by user). See recommendation_context for more details.




SettingsOverride optional

Function which returns a dict of selected settings in request time. See settings_override for more details.




HitFields optional

Function which returns a list of fields. Only these fields (in addition to record identifier and type) will be retrieved and present in results. If not provided, all fields will be present in results. See hit_fields for more details.




CarouselOptions optional

Object with settings for built-in carousel mode. See Carousel mode for more details.




Selector optional

String containing CSS selector. If this option is specified, the second argument of Luigis.Recommend can be omitted. See Batch mode for more details.




ModifyRequestParams optional

Function to modify params of API call which receives (params, state, getters) parameters, must return modified params object (default: undefined)




ModifyRequestData optional

Function to modify data of API call which receives (data, state, getters) parameters, must return modified data object (default: undefined)




PostponeDataCollection optional

Boolean indicating whether data collection should be postponed after the OnDone function is called.  See Postponing data collection for more information.



      

Luigis.Recommend also accepts a mandatory CSS selector for element where Luigi's Box recommender component should be rendered, e.g. #recommender-ui.

Templates

Luigi's Box Recco.js is using templates to render a list of recommendations. While we
include all templates in the default Recco.js distribution, they are not
styled. Usually, you will want to define your custom template which matches the
styling of your site. Templates are using Vue.js template
syntax under the hood.

You should define these templates directly in your HTML code. Each template
must be defined in its own  tag. Templates are
looked up by their id attribute — make sure to not change it. You don't
have to redefine every template, only those that you will actually use.
Main template

Example of main recommendations template


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        {{ $t('recommend.title', { name: name }) }}
        
    


        
      
    
  

This is the root template used for rendering recommendations layout. Use this template
to define how your recommendation UI should look. You can reference a  component which renders individual recommended items.


If you set the `Name` attribute when initializing a recommender, don't forget to use it as a suffix when defining a template. For example, Name: 'home-popular' and ...

Recommended item component

Default recommend-item component definition


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        Default Recommend Item
        {{ item.url }}
    


        
      
    
  

Referenced as .

Used for generating a single recommended item. The default definition will render URL of each
recommended item in a separate div with just the product URL. Override this template
to render items in a custom structure, such as  list or if you would like to
display more details.


If you set `Name` attribute when initializing reccomender, don't forget to use it as a suffix when defining template. For example, Name: 'home-popular' and ...


Recipes
Theming
Recco.js comes with 2 themes which control the visual style of the recommender UI.



luigis - which will give you a nicely styled list of recommendations. Use this theme, unless you have special requirements and plan to implement the recommender UI yourself from scratch.

default - which is a barebone visual style, which only provides a very basic and unstyled UI. If you plan on implementing all templates by yourself, use this template.

Localisation
Localisation is controlled by 2 parameters: Translations which contains the
translation keys and translated strings and PriceFilter, which controls the
price format. There is also a 3rd parameter — Locale which just sets up
built-in translations and price formats.

When localising the Recommender UI, we recommend that you configure Locale to load
the defaults and then adjust translations or price format as necessary.

The locales supported out of the box are:


English (en)
Slovak (sk)


To load the default locale settings, use the country code, e.g. Locale: 'sk'.
Translations

Default English translations


  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
    "recommend": {
        "title": "Recommended by Luigisbox - {name}"
    },
    "recommendItem": {
        "actionButton": "Detail",
        "availability": {
            "0": "Unavailable"
        }
    }
}

        
      
    
  

Translations are configured as a JavaScript object (JSON). See the defaults for
English in the column with code examples. Note that the object that you pass to
Translations is merged with the built-in translations. You can add new
translations, you can override built-in translations, but you cannot delete a
translation.

The Translations object must include the locales as the top-level keys. Note
that you don't have to define the translation for all supported locales, but
only for those that you care about.

For example, to override translation for action button in a product tile, set Translations:
{"en": {"recommendItem": {"actionButton": "See product details"}}}.

If necessary, you can access the translation mechanism by calling a $t
function from within the Recco.js templates. Pass it the translation key as an
argument and additional parameters, e.g. {{ $t('recommend.title', {name: 'Example'}) }}.

You can also use the $tc function which provides pluralization support. If you define translations like Translations: {"en": {"recommend": {"title": "0 recommendations | 1 recommendation | {hitsCount} recommendations"}}} you can use the pluralization function {{ $tc('recommend.title', hitsCount, {hitsCount}) }} which would output the translation based on hitsCount variable.

For more details see Vue I18n documentation.
Price format
Price format is controlled by a price filter, which is automatically called
from within the default templates, such as {{ item.attributes.price_amount | price }}.

You can control the price filter options by setting PriceFilter parameter
in the configuration options.


PriceFilter: {"decimals": 0, "prefixed": false, "symbol": "CZK"}

      
        
option
description


        
decimals
Specifies rounding precision


prefixed
Boolean, specifies if the price symbol should be displayed before or after the price ($42 or 42$)


symbol
The currency symbol


      
Batch mode

  
    
      Live demo
      
        
 Batch mode
        Try the live example
      
    
  


Create Luigis.BatchRecommenders object

  
    
      
        
          unknown
        
      
      
      

      
    
  
  
    
      
        
          // populate settings
window.Luigis = window.Luigis || {};
window.Luigis.BatchRecommenders = {
  // settings is array of config objects
  settings: [
    {
      Selector: '#recommender-basket', // CSS selector for render element
      TrackerId: '2291-22343',
      Theme: 'luigis',
      Size: 5,
      Name: 'basket-similar', // name must be unique
      Type: 'basket_recommender'
    },
    {
      Selector: '#recommender-basket2', // CSS selector for render element
      TrackerId: '2291-22343',
      Theme: 'luigis',
      Size: 5,
      Name: 'basket-people-also-buy', // name must be unique
      Type: 'basket_recommender'
    }
  ]  
};

        
      
    
  

Instead of initializing each recommender one by one, you can use "batch mode". In this mode, only one API call is made for all recommenders and automatic deduplication is provided by the backend. This means that if there are multiple recommenders on one page, recommended items in one recommender will not repeat in another recommender.

Settings for all recommender instances are stored in the global Luigis.BatchRecommenders object, under settings key. It should be array of configuration objects. Name option must be present and unique for each recommender. For keeping all configuration in one place, you can use the Selector option here instead of the second argument (CSS selector for the placeholder element where it will render the UI) of Luigis.Recommend .

After setting  Luigis.BatchRecommenders object you still need to initialize recommenders by calling Luigis.Recommend. You can do this by passing config object or string containing Name of recommender. the Selectoroption was set, the second argument ofLuigis.Recommend` can be omitted.

Initialize recommenders

  
    
      
        
          unknown
        
      
      
      

      
    
  
  
    
      
        
          // init all recommenders
Luigis.BatchRecommenders.settings.forEach(function (settings){
  Luigis.Recommend(settings);
});

// or init single recommender
Luigis.Recommend('basket-similar'); // call with Name option

        
      
    
  
Carousel mode

  
    
      Live demo
      
        
 Carousel
        Try the live example
      
    
  


Use lbx-carousel in template

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
        {{ $t('recommend.title', { name: name }) }}
        
        -->
        
    


        
      
    
  

Recco.js has a built-in carousel. If you want to use it, replace  with  component in your recommender template. Further customisation is possible by settings in CarouselOptions object. In this code example you can see possible options with their default values.


Set options for carousel


  
    
      
        
          unknown
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Recommend({
    TrackerId: '2291-22343',
    Theme: 'luigis',
    Size: 5,
    Name: 'default',
    Type: 'basket_recommender',
    CarouselOptions: {
        // when true, styles will not be injected
        disableStyles: false,

        // sets var(--carousel-color) used in CSS
        color: '#000',

        // default class for carousel item
        itemClass: 'lb-recommend',

        // time in ms to auto move carousel
        // 0 means autoPlay is disabled
        autoPlay: 0,

        // when set to number, pagination will not work "per page" but "per slide" instead
        // for example, value 0 means that left (first) slide is active by default
        // see https://splidejs.com/guides/options/#focus
        focus: undefined,

        // display navigation arrows
        arrows: true,

        // display pagination
        pager: true,

        // number of items visible
        items: 3,

        // move by x items, ideally use the size equal the number of visible items
        moveBy: 3,

        // if there are less recommender items than number of items visible, some items will be cloned to fill empty slots
        // when set to true, this behaviour is disabled
        limitItems: false,

        // loop items
        infinite: true,

        // always move by value set in moveBy option
        // if disabled, pagination works little differently
        forcePerMove: true,

        // pause autoPlay on focus
        pauseOnFocus: true,

        // pause autoPlay on hover
        pauseOnHover: true,

        // object with min-width values as keys
        // you can override options for breakpoints
        responsive: {
            480: {
                items: 1,
            },
        },
    },
  }, '#recommender-ui')

        
      
    
  
Prevent products from being recommended via annotations
If you do not want to recommend some items and need a simple and quick solution for this, here are blocked items annotations.

Simply add this script tag anywhere to your site (recommended to ), where you put all item IDs separated by comma for blocklist ({recommenderName} refers to Name of the recommendations component, see Name):

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          item-1-not-to-recommend, item-2-not-to-recommend

        
      
    
  
Pricing API integration
If you are using different pricing levels depending on the signed-in user, one
of the strategies that you can use to render correct user prices in
search is using your pricing API.

Search.js is written in Vue.js and that means that you can use the concept of reactivity to re-render prices after you load them from your API.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          OnItemsReady: function(context) { var results = context.items;
  context.$store.commit('setItgState', {key: 'prices', data: null});

  if (results &amp;&amp; results.length > 0) {
      // generate ids for API call
      var ids = [];
      if (results) {
          results.forEach(function(result) {
              if (result.attributes.item_id) {
                  ids.push(result.attributes.item_id);
              }
          });
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
          // when we get API response
          // set itgState.prices to new prices from API
          // response is in format {id1: 9.99, id2: 19.99}
          var jsonParsed = JSON.parse(this.responseText);
          context.$store.commit('setItgState', {key: 'prices', data: jsonParsed});
      };

      // call API
      var apiUrl = 'https://www.example.com/pricing-api?ids='+ids.join(',');
      xhttp.open("GET", apiUrl);
      xhttp.send();
  }
}

        
      
    
  

The bulk of the code lives in the OnDone callback where you collect the identifiers of the results (in this example, item_id is used) and make an API request to your pricing API. When the XHR request completes, you set a special itgState reactive property and Vue.js will re-render the product tiles.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
     {{ itgState.prices[attributes.id] | price }}
     {{ attributes.price_amount | price }}


        
      
    
  

Template uses attributes.price_amount by default (feel free to use a loader element) and when the API call succeeds, Vue.js will automatically re-render a component and use itgState.prices instead. You can use the xxx | price filter just like with price_amount.
Postponing Data Collection
To ensure accurate price collection in situations where the standard price_amount attribute is not available, utilize the PostponeDataCollection method. This may occur when interacting with the pricing API, leading to the complete absence of the price_amount attribute or when a different attribute, such as price_en_amount, is used.

Without access to the price_amount attribute, collecting prices for results accurately becomes impossible. This, in turn, results in the inability to measure cart value at all.

Upon activation, it employs an emitAnalyticsEventFn callback function passed to the onDone function. This enables you to provide the missing price_amount attribute in the OnDone function by assigning a price from the pricing API response or utilizing a different attribute that contains information about the resulting price.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          OnDone: function(items, emitAnalyticsEventFn) {
  items.map(item => {
      // Add custom logic to retrieve the correct price
      item.attributes.price_amount = item.price_en_amount;
  })
  emitAnalyticsEventFn();
}]]></content>
      <icon>circle-square</icon>
    </page>
    <page>
      <url>/recommendations/models.html</url>

      <title>Reference models</title>
      <content><![CDATA[Reference models
Luigi's Box offers a wide scale of standard recommender models. Each model needs to be trained first. Once everything is set up, you will be given the recommender_type to use in recommendation requests described in API section. Please contact our support to discuss the options in detail. If needed, these models can be customized to your specific use case, or, we can prepare fully customized models. The table below lists the standard models.

Each recommender is personalized for users who granted cookie consent. The models consider user preferences based on sent user identifier (user id) and boost products with characteristics similar to user's past interactions. The most of the models accept also product / category / brand resource identifier (product / category / brand id - typically url or id).
      
        
Recommender type
Short description
Location
Input


        
test_reco
Simple, most popular recommender to test client requests.
Arbitrary
None


item_detail_alternatives
Similar products / alternatives recommender preferring slightly more expensive products compared to input product (upsell). Product similarity is determined based on selected metadata.
Product detail page (PDP)
product id, user id (optional)


item_detail_visual_alternatives
Visually similar products / alternatives recommender preferring slightly more expensive products compared to input product (upsell). Similarity is determined based on product images, whose characteristics are crucial.
Product detail page (PDP)
product id, user id (optional)


item_detail_complements
Related products usually bought together (cross-sell) with an input product. By default, recommender prefers cheaper products (complements). Products are diversified by category to offer a variety of different products if possible. The general product detail complements model fits the most industry segments. Some specific segments have their own model (described below).
Product detail page (PDP)
product id, user id (optional)


basket_popup
Related products usually bought together (cross-sell) with a product most recently added into the basket. By default, recommender prefers cheaper products (complements). Products are diversified by category to offer a variety of different products if possible. The general basket popup model fits the most industry segments. Some specific segments have their own model (described below).
Basket pop up window
product id, user id (optional)


basket
Related products usually bought together (cross-sell) with all products already in the basket. By default, recommender prefers cheaper products (complements). Products are diversified by category to offer a variety of different products if possible. The general basket detail model fits the most industry segments. Some specific segments have their own model (described below).
Basket detail
product ids, user id (optional)


favorites
Favorite products most likely to be repeatedly bought by a user. This model is suitable for segments with consumable products, where users are likely to repeat purchases (e.g. groceries, pharmacies, b2b supplies).
Arbitrary, usually basket, homepage
user id


user_conversion_based
Recommender offers products related (cross-sell) to previously purchased or trends (if user has no past interactions). The idea is to help a user find more interesting products to buy.
Arbitrary, usually homepage, 404
user id


user_click_based
Recommender offers products similar to those clicked but not bought recently by the user / or trends (if user has no past interactions). The idea is to help a user finish the purchase.
Arbitrary, usually homepage, 404
user id


category
Most relevant trending products, from the input category for the user. Results are diversified to as many next level subcategories as possible.
Product listing page (PLP)
category id, user id (optional)


brand
Most relevant trendy products from input brand for the user. Results are diversified to as many categories as possible.
Product listing page (PLP)
brand id, user id (optional)


top_categories
Most relevant categories for the user. Used as a shortcut to user's preferred PLPs.
Arbitrary, usually homepage, 404
user id


trends
Most popular products. Could be used on homepage, in PLP to offer products from this category/brand only, in PDP (in combination with some filter) to offer e.g. popular products from the same collection. Could be ordered by a different attribute than popularity (e.g., price_amount).
Arbitrary, usually homepage, 404
user id (optional), category / brand / product id (optional)


news
Novel products based on date of introduction (date attribute _introduced_at). Could be used on homepage, in PLP to offer products from this category/brand only, in PDP (in combination with some filter) to offer e.g. novel products from the same collection.
Arbitrary, usually homepage, PLP
user id (optional), category / brand / product id (optional)


news_by_label
Popular products with a defined label indicating novel products. By default it expects allowed products to contain "label": "is_new" in attributes. Could be used on homepage, in PLP to offer products from this category/brand only, in PDP (in combination with some filter) to offer e.g. novel products from the same collection.
Arbitrary, usually homepage, PLP
user id (optional), category / brand / product id (optional)


discount
Discounted products based on discount amount (numeric attributes price_amount and price_old_amount). Could be used on homepage, in PLP to offer products from this category/brand only, in PDP (in combination with some filter) to offer e.g. discounted products from the same collection.
Arbitrary, usually homepage, PLP
user id (optional), category / brand / product id (optional)


discount_by_label
Popular products with a defined label indicating discounted products. By default it expects allowed products to contain "label": "is_sale" in attributes. Could be used on homepage, in PLP to offer products from this category/brand only, in PDP (in combination with some filter) to offer e.g. discounted products from the same collection.
Arbitrary, usually homepage, PLP
user id (optional), category / brand / product id (optional)


last_seen
Products most recently visited by a user, excluding already bought ones.
Arbitrary
user id


recently_ordered
Products most recently ordered by a user.
Arbitrary
user id


article_items
Most relevant products based on the input article (blog post).
Article detail page
article id, user id (optional)


article_articles
Most relevant articles based on the input article (blog post).
Article detail page
article id, user id (optional)


random
Random products. It gets more useful when combined with some filters, e.g., new products added within the last month, discounted products, products from same the brand as an input product.
Arbitrary
user id (optional), category / brand / product id (optional)


random_news
Random novel products based on date of introduction (date attribute _introduced_at). An example of random recommender usage. It recommends primarily random products up to 30 days old, then 60, 90. could be combined with more filters, e.g. from a certain category.
Arbitrary
user id (optional), category / brand / product id (optional)


      

As some industry segments have their specifics, we identified several segment specific models adjusting abovementioned models.
      
        
Industry segment
Recommender type
Short description
Location
Input


        
Books &amp; Games
item_detail_complements
Related products usually bought together (cross-sell) with an input product. Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it doesn't prefer cheaper products, also it allows recommendations from exactly the same category.
Product detail page (PDP)
product id, user id (optional)


Books &amp; Games
basket
Basket detail recommender modified for books &amp; games industry segment. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it doesn't prefer cheaper products, also it allows recommendations from exactly the same category.
Basket detail
product ids, user id (optional)


Books &amp; Games
basket_popup
Basket popup recommender modified for books &amp; games industry segment. Related products usually bought together (cross-sell) with a product most recently added into the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it doesn't prefer cheaper products, also it allows recommendations from exactly the same category.
Basket pop up window
product id, user id (optional)


Food &amp; Beverages
item_detail_complements
Related products usually bought together (cross-sell) with an input product. Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it prefers previously bought products and doesn't filter out expensive products.
Product detail page (PDP)
product id, user id (optional)


Food &amp; Beverages
basket
Basket detail recommender modified for fast-moving consumer goods, typically from food the and beverages industry segment. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it prefers previously bought products and doesn't filter out expensive products.
Basket detail
product ids, user id (optional)


Food &amp; Beverages
basket_popup
Basket popup recommender modified for fast-moving consumer goods, typically the food and beverages industry segment. Related products usually bought together (cross-sell) with a product most recently added into the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it prefers previously bought products and doesn't filter out expensive products.
Basket pop up window
product id, user id (optional)


Food &amp; Beverages
last_seen
Products most recently visited by a user, including already bought ones.
Arbitrary
user id


Luxury goods &amp; Jewelry
item_detail_complements
Related products usually bought together (cross-sell) with an input product. Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it prefers products of similar price.
Product detail page (PDP)
product id, user id (optional)


Luxury goods &amp; Jewelry
basket
Basket detail recommender modified for luxury goods &amp; jewelry industry segment. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it prefers products of similar price.
Basket detail
product ids, user id (optional)


Luxury goods &amp; Jewelry
basket_popup
Basket popup recommender modified for luxury goods &amp; jewelry industry segment. Related products usually bought together (cross-sell) with a product most recently added into the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it prefers products of similar price.
Basket pop up window
product id, user id (optional)


Pharma / Medical, Cosmetics &amp; Body care
item_detail_complements
Related products usually bought together (cross-sell) with an input product. By default, recommender prefers cheaper products (complements). Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it prefers products from more different categories.
Product detail page (PDP)
product id, user id (optional)


Pharma / Medical, Cosmetics &amp; Body care
basket
Basket detail recommender modified for medical, cosmetics &amp; body care industry segments. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it prefers products from more different categories.
Basket detail
product ids, user id (optional)


Pharma / Medical, Cosmetics &amp; Body care
basket_popup
Basket popup recommender modified for medical, cosmetics &amp; body care industry segments. Related products usually bought together (cross-sell) with a product most recently added into the basket. Recommender prefers cheaper products (complements). Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it prefers products from more different categories.
Basket pop up window
product id, user id (optional)


Pharma / Medical, Cosmetics &amp; Body care
last_seen
Products most recently visited by a user, including already bought ones.
Arbitrary
user id]]></content>
      <icon>circle-square</icon>
    </page>
    <page>
      <url>/recommendations/api.html</url>

      <title>Recommender API</title>
      <content><![CDATA[Recommender API
You can use Luigi's Box recommendation endpoint to get recommendations from
your catalog based on popularity, similarity, users' interaction history and
much more.


  
    
      Recommender API integration tutorial
      
        
 See the full guide to integrating Luigi's Box Recommender using API
        See the tutorial
      
    
  


To use this feature, you need to synchronize your product database with Luigi's Box
index. See Importing your data for more details.

To take advantage of personalized and other advanced recommendations, you need to integrate
Luigi's Box Analytics service with your website by following the
instructions.

We strongly recommend that you do not implement the JSON API directly, but
instead use our integrated Recco.js library which allows you
to build a recommendation interface with minimum programming effort.
Get recommendations
POST https://live.luigisbox.com/v1/recommend


The recommendation endpoint is publicly available and requires no authentication.

Required parameters      
        
Parameter
Description


        
tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


      
Request headers      
        
Header
Content


        
Content-Type
application/json; charset=utf-8


      

Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Request body
Request body is a JSON array of recommendation request objects. Each recommendation request object contains the following attributes:
      
        
Attribute
Description


        

recommendation_typerequired

Identifier of the recommender model. See Recommender models for more details.



recommender_client_identifieroptional

Arbitrary identifier for analytics purposes. You may use the same models in different places and the recommender_client_identifier helps to identify the concrete instance of the recommender. See Placement and model reuse for more details.



user_idoptional

Unique user identifier. Send the value of _lb cookie from your site or supply your own value. See User identifiers for more details.


item_ids
A list of items to base the recommendation on. Depending on the type of recommendation and placement it might be a list of resource identifiers of products in a shopping cart, or a single resource identifier of a product the user is viewing. The recommender only uses first 10 entries, you can send more, but the rest of the list will be ignored.



blacklisted_item_idsoptional

List of product resource identifiers that must not be recommended, e.g., different product variants that are very similar to the products in item_ids.



sizeoptional

How many recommended items you want to return. Defaults to 10, maximum is capped to 50.



recommendation_contextoptional

Object defining request-time restrictions on results being recommended (e.g., filters used by the user). It allows you to define restrictions using OR operator {"gender": {"values": ["woman", "unisex"], "operator": "or"}}, AND operator {"color": {"values": ["black", "blue"], "operator": "and"}}, NOT operator {"allergens": {"values": ["gluten", "soya"], "operator": "not"}}. Use the syntax known from search, using a pipe |, to define range criteria for numerical or date attributes, e.g., {"price_amount": {"values": ["4.2|"]}}. Multiple restrictions can be used within a recommendation_context {"gender": {"values": ["woman", "unisex"], "operator": "or"}, "price_amount": {"values": ["|150"]}, "_category": {"values": ["Apparel", "Shirts", "Long sleeve"], "operator": "and"}}. Single value restrictions can be submitted also in a simplified format {"size": "M", "color": "red"}.



settings_overrideoptional

Object defining request-time overrides of the recommender settings. The most common use case is to define custom availability field for a multi-warehouse catalog, e.g., when a user selects his location, then a particular warehouse is selected and thus an appropriate availability field should be used: {"availability_field": "warehouse_2_availability"}.



hit_fieldsoptional

Comma separated list of fields. Only these fields (in addition to record identifier and type) will be retrieved and present in results. If not provided, all fields will be present in results.



mark_fallback_resultsoptional

Boolean allowing to mark whether the response hits were recommended by a primary strategy or by a fallback. By default disabled.


      

In case of multiple recommenders used on the same page, we suggest to use Batching and join all request objects into one request body for better latency and deduplication.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'

connection = Faraday.new(url: 'https://live.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.post("/v1/recommend?tracker_id=1234-5678") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.body = '[
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "item_detail_alternatives",
    "recommender_client_identifier": "item_detail_alternatives",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  },
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "bestsellers",
    "recommender_client_identifier": "item_detail_bestsellers",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  }
]'
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XPOST --compressed\
  "https://live.luigisbox.com/v1/recommend?tracker_id=1234-5678"\
   -H "Content-Type: application/json; charset=utf-8"\
   -d '[
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "item_detail_alternatives",
    "recommender_client_identifier": "item_detail_alternatives",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  },
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "bestsellers",
    "recommender_client_identifier": "item_detail_bestsellers",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  }
]'


        
      
        
          request('POST', "https://live.luigisbox.com/v1/recommend?tracker_id=1234-5678", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
  ],
  'body' => '[
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "item_detail_alternatives",
    "recommender_client_identifier": "item_detail_alternatives",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  },
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "bestsellers",
    "recommender_client_identifier": "item_detail_bestsellers",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  }
]'
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This endpoint requires no authentication

// Example request body

[
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "item_detail_alternatives",
    "recommender_client_identifier": "item_detail_alternatives",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  },
  {
    "blacklisted_item_ids": [

    ],
    "item_ids": [
      "/products/012345"
    ],
    "recommendation_type": "bestsellers",
    "recommender_client_identifier": "item_detail_bestsellers",
    "size": 4,
    "user_id": "6822981852855588000",
    "hit_fields": [
      "url",
      "title"
    ]
  }
]


        
      
    
  
Sample response
The API returns a JSON structured like this. The exact content of the attributes field depends on the time of the request and content of your product catalog.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "generated_at": "2020-05-05T12:44:22+00:00",
    "model_version": 1588682662,
    "recommendation_id": "a24588e9-0664-4637-91d5-165313a6eac8",
    "recommendation_type": "basket",
    "recommender_client_identifier": "basket-sidebar",
    "recommender": "c01",
    "recommender_version": "b36705710",
    "user_id": "6822981852855588000",
    "hits": [
      {
        "url": "/products/123456",
        "attributes": {
          "image_link": "http://www.e-shop.com/assets/imgs/products/123456.jpg",
          "description": "Description field from your product catalog",
          "categories": [
            "Gadgets",
            "Kids"
          ],
          "title": "Product X",
          "availability_rank_text": "true",
          "price": "5.52 EUR",
          "condition": "new"
        },
        "type": "item"
      },
      {
        "url": "/products/456789",
        "attributes": {
            "image_link": "http://www.e-shop.com/assets/imgs/products/456789.jpg",
            "description": "Description field from your product catalog",
            "categories": [
                "Gadgets",
                "Kids"
            ],
            "title": "Product Y",
            "availability_rank_text": "preorder",
            "price": "12.14 EUR",
            "condition": "new"
        },
        "type": "item",
        "exact": true
      }
    ]
  }
]]]></content>
      <icon>circle-square</icon>
    </page>
    <page>
      <url>/recommendations/train_data.html</url>

      <title>Train data import</title>
      <content><![CDATA[Train data import
The behavioral recommenders are trained on user behavior. Luigi's Box analytics collects co-purchases (items bought together within the same session, by the same user, etc.). It however takes some time from the beginning of data collection until we have enough knowledge to learn good quality recommendations. To speed the learning period, we can import a log of historical transactions from a file.

The data can be imported via Transactions API.]]></content>
      <icon>circle-square</icon>
    </page>
    <page>
      <url>/recommendations/concepts.html</url>

      <title>Basic concepts</title>
      <content><![CDATA[Basic conceptsRecommendation models
The model is what drives the recommendation of objects. It is the AI component of the recommender system which takes the inputs:


User profile
Input "items" - most frequently the product to recommend for


The model provides output:


List of recommendations (most frequently list of products)


All of the models are trained by our data scientists on a per-customer basis
based on the requirements and business objectives. The models are trained
towards a specific strategy, e.g. to recommend complementary products (such as
accessories) or alternative products.

Our consultants and data scientists will design the model to cover your
specific scenarios and requirements. Please contact our support to discuss the options in detail. See the
reference models for overview of the most
frequently used models.
Content-based vs behavioral recommendations
The recommender models can be based on the product data, on the behavior of the
users, or their combination. The content-based models (based on product data)
are based on machine understanding of the products and your domain to drive
recommendations. The more structured data you provide, the better will the
recommenders perform. Behavioral models (based on user behavior) do not care
about product data, but observe how your users interact with the products in
the store. One of the best-known strategies is the idea of recommending
products, which are frequently bought together. Luigi's Box relies on the
analytics events to learn about the user interactions.
Privacy
All of the models are trained solely on your data. We do not use data of other
customers to improve the models.

In case that you are sharing the same product identities across your domains,
your models can however benefit from larger user data from all the domains
together. This feature is on demand.

In practice: the models can be trained across all sites under a single project
in the Luigi's Box application.
Personalization
Recommender models are designed to consider user preferences (both short-term
and long-term) to personalize the recommendations. Luigi's Box analytics will
build profiles for your users and when you request personalization by providing
a user_id request parameter, the user profile is provided as an additional
input for the recommender model.
Placement and model reuse
Recommender models may be reused in several locations. To effectively
distinguish different placements of the same model, we use the concept of
recommender_client_identifier. It's an arbitrary name for the specific
recommender instance which is only used in Luigi's Box analytics to help you
see recommender performance.

Think about a model identified as product_complements. You may place this
model on a product detail page to provide recommendations and identify it as
product_complements_product_detail. You may also use the same model in the
basket during the checkout process and identify it as
product_complements_basket to help you distinguish the data in analytics and
see the recommender performance by the location.
Batching
The recommender is designed for request batching. If you want to show several
recommenders in a single page, we recommend that you batch all of the requests
in a single API call. Batching leads to:


Better latency, since we can reuse some parts of the processing pipeline for
several recommender models. For example, we will only load the user profile
once and use it for all models.
Deduplicated recommendations, i.e., you will not see the same product being
recommended by different recommender models]]></content>
      <icon>circle-square</icon>
    </page>
    <page>
      <url>/crossroads.html</url>

      <title>What is Luigi's Box?</title>
      <content><![CDATA[What is Luigi's Box?
Luigi's Box is a product discovery suite for e-commerce. It provides tools, code and management
utilities which let you build fast and relevant search, recommenders and product listings (think
about category or brand listings). Luigi's Box relies on AI and most importantly on the feedback
loops that the users create. A fundamental foundation of Luigi's Box is the analytics service which
feeds the behavior of your users into the AI models which learn and self-tune themselves to how your
users behave, search and navigate the products.

This documentation will help you understand the full scope of the integration and help you choose
the best way to integrate for your use case.

For successful integration, you need to integrate several different processes. We list the most used
options for each process here and discuss its pros and cons. We are available at support@luigisbox.com if you need a consultation or feel
that you have a special use case that is not covered here.

To complete the integration you have to integrate 3 different aspects of the service, preferably in
the order that they are outlined here.


Send analytics events for the feedback loop
Deliver product data to Luigi's Box
Deliver search, listings and recommendations to the end users



Analytics
Search analytics is the foundation of a successful integration. It provides data for the AI for all
services (autocomplete, search, recommender, product listings) and on the other hand lets you see
the impact that Luigi's Box has on your e-commerce store monetary performance. Analytics should be
the first thing you integrate even before you start to integrate the actual product discovery
services.
DataLayer-based analytics

  
    The DataLayer-based collection method offers efficient tracking through integration with
      Google Analytics' ecommerce events, allowing Luigi’s Box to capture relevant data pushed to
      the dataLayer.
    This approach is ideal for users already pushing ecommerce events to the dataLayer. For more
      details see DataLayer-based collector.
    
      Seamless integration with Google Analytics for enhanced ecommerce tracking.
      
      Flexibility in how events are pushed, with options for both gtag manager and
        native dataLayer.push.
      Reliable tracking of ecommerce interactions across multiple event types (e.g.,
        search, recommendations, add to cart).
      Still in beta; requires initial support for setup and configuration.
    
  

Events API

  
    The Events API is designed for more advanced use-cases such as mobile apps or for demanding
      websites which do not want to pull 3rd party script dependencies.
    You can find more details in its separate documentation here: Events API
    
      Absolute control and customization over what is being tracked.
      You depend on no 3rd party script, there's no extra weight added to your
        website or mobile app.
      Works for websites and mobile apps.
      Works reliably even after major redesigns and web/app changes.
      Usually requires more development than using the other options.
    
  
  
    
  

Analytics implemented by Luigi's Box team

  
    For less demanding customers, or for customers without a dedicated development team, Luigi's
      Box team can implement the analytics tracking completely on our side, without any development
      effort on your side. The integration will depend on the specific HTML and CSS structure.
    If you are interested in this option, contact us on support@luigisbox.com. The integration is
      usually done for free.
    
      Absolutely no development required on your side.
      Fast, you can start seeing results in analytics after 2 business days.
      Depends on the specific HTML structure, it can and will
        break after redesigns.
      You have to include a tracking script weighting around 30kB.
    
  
  
    
  



Data synchronization
Luigi’s Box needs to have up-to-date data about products, categories, brands and (optionally)
articles. You can use our platform connectors on supported ecommerce platforms, feeds or API to
synchronize the data. To help you decide, here are the main differences.


Content Updates API
You will be pushing data to our servers. There is practically no delay in data synchronization. The
communication is efficient, you are only sending updates to products when they change, there is a
lot less data transfer between our systems.

Integrating via the API will probably take much more time on your side than generating the feeds.
You’ll have to identify all the code paths that trigger product change and react to them by updating
the product in Luigi’s Box via API.

You can find more details in its separate documentation here: Content Updates
API


  Real-time synchronization.
  Requires non-trivial development on your side.

Feeds
We will periodically pull data from your servers: we will download a file (XML or JSON) and make its
contents searchable. If there is a change to the product, we will not know about it until the feed
is processed next time.

We can schedule feed processing at arbitrary intervals: most of our clients use 3 hours intervals,
we have some clients where we process the feeds every 30 minutes. More frequent processing = higher
costs on our side = higher price for the client. Exact pricing depends on the volume of the data.

Keep in mind that it’s you who have to generate the feeds. If you ask for 30m processing, you will
have to regenerate the feeds every 30 minutes and probably incur a higher cost on your side.

You can find more details in its separate documentation here: Feeds


  Relatively easy and fast to implement.
  Slow data synchronization, can lead to incorrect product data displayed in
    search.

Platform connectors
You can use a plugin developed for the platform which takes care of synchronizing the data with
Luigi’s Box services. If your store is running on a supported platform, this is the best and
recommended solution.

Supported platforms:


  Shopify
  Shoptet
  Shopware
  Commercetools
  WordPress/WooCommerce
  Prestashop
  Contentspeed
  BSShop
  Creativesites
  WPJ



Service integrationBackend integration

  
    This option is usually very easy to implement, you only need to change the API call to
      Luigi’s Box API and update the filter rendering code.
    
      This method is relatively easy to implement. Nothing major in your rendering
        has to change, you are still working with the data structure as you have it stored in your
        database. You only change the API call to Luigi’s Box API and update the filters rendering.
      
      This integration allows you to handle different product pricing levels. Since
        you are loading the data from your database and you know which user is signed in, you can
        render the correct product pricing. You don’t have to send different product prices via
        feeds or API to Luigi’s Box. Luigi’s Box doesn’t even have to know about different prices.
      
      You have full control over all aspects of rendering
      Once you integrate the search results page rendering, you can use the same
        code to render category listings and get additional source of revenue.
      If we release a new feature that requires updates to the API calls, you have
        to take care of the implementation
    
  
  
    
  

Frontend integration

  
    Integrated by yourself using Luigi’s Box frontend libraries:
    
      Autocomplete.js
      Search.js
      Recco.js
    

    The libraries are:
    
      Designed for rapid development
      Integrate directly with Luigi’s Box APIs
      Support the latest API features
    

    
      Most of the advanced features that would have required development time are
        simply configurable.
      We provide upgrades of the service. If there’s a new feature released which
        requires updates to the integration, we can just turn this feature on.
      Libraries are written in vue.js and may not play nicely with web apps written
        in React
    

  
  
    
  

Hybrid integration

  
    You can integrate on the frontend using Luigi's Box libraries and provide some parts of the
      data dynamically by calling your APIs which provide pricing or availability data.
  
  
    
  

Mixed integration

  
    You can mix different integration types and integrate some services on your backend, and some
      on the frontend. The services integrated on the frontend can be managed by Luigi's Box team to
      save you development effort.
    For example, you can integrate search and product listing on your backend because that is the
      fastest option for you to develop and you can integrate autocomplete on the frontend to get a
      performance boost and avoid proxying requests via your server.
  
  
    
  



Summary &amp; recommendations

  
    
      Service
      Recommended integration type
      Summary
    
  
  
    
      Analytics
      Frontend
      Luigi's Box recommends integrating analytics on the frontend of your site using the DataLayer collector which leverages Google Analytics'
        ecommerce events. This method works by monitoring a dataLayer object on your
        site to seamlessly collect user interactions like product views, clicks, and purchases.
      
    
    
      Autocomplete
      Frontend
      Luigi's Box recommends integrating autocomplete on the frontend using the autocomplete.js library. It provides
        beautiful visual appearance out of the box and seamlessly integrates with all Luigi's Box
        features.
    
    
      Search
      Backend
      Luigi's Box recommends integrating search on your backend because that is usually the
        fastest way from the development perspective. You will get full control over the visual and
        features and most importantly, you will keep your search UI consistent with the rest of your
        ecommerce site.
    
    
      Product listing
      Backend
      Luigi's Box recommends integrating listings on your backend because that is usually the
        fastest way from the development perspective. You will get full control over the visual and
        features and most importantly, you will keep your listings UI consistent with the rest of
        your ecommerce site.
    
    
      Recommendations
      Frontend
      Luigi's Box recommends integrating recommenders on the frontend since that gives you most
        flexibility and has no impact on your performance and resilience. Recommenders are not
        critical for rendering and by offloading the rendering to frontend, you can allocate your
        server performance to other tasks.]]></content>
      <icon>signpost-split</icon>
    </page>
    <page>
      <url>/indexing/feeds-to-api.html</url>

      <title>Migrating from feeds to API</title>
      <content><![CDATA[Migrating from feeds to API
If your current setup involves processing data from feeds and you wish to migrate to pushing data via API, there are several considerations to ensure a smooth and safe migration.

The main risk in migrating from feeds to API is potential changes to the data structure, which could disrupt your frontend or backend code if it relies on attributes that may no longer be present. To ensure a secure migration, follow these steps:


 Work in a separate environment. Avoid using your production site for testing. Instead, create a new site within the application and generate API keys. If you need assistance with this, contact Luigi’s Box support.
 Analyze the existing data structure. You can either review the data in the Catalog Browser section of the Luigi’s Box app or make a search request to view the API output.
When extracting data from feeds, we manage how and if we transform it. For XML feeds, the XML element names are downcased and used as attribute names. Occasionally, element names may be renamed to align with Luigi’s Box best practices.
 Ignore automatically derived attributes. There is no need to explicitly index these attributes, as they will be derived from the raw data you are indexing. For more details, refer to the Derived Attributes documentation.
 Index data to the new index. Use the tracker_id of the site created in step 1, and update your frontend or backend code to request data from this new index by changing the tracker_id.
Test thoroughly to confirm that the frontend functions as expected. If data structures do not align with your code’s expectations, adjust the data structures, reindex the data, and retest.
Note: If your integration was provided by Luigi’s Box, reach out to support to obtain a “preview link” set to request data from the new index, enabling you to test.
 Switch to API indexing. Once you’ve verified the new indexing setup and are confident that your integration will function as intended after the switch, disable data processing via feeds and start indexing through the API.



Related

  
    
      
        
 Migrating LBX to API
        
        Migrating the service integration to API
        Read the docs →]]></content>
      <icon>database-fill-gear</icon>
    </page>
    <page>
      <url>/indexing/data_layout.html</url>

      <title>Data Layout and Modeling Guide</title>
      <content><![CDATA[Data Layout and Modeling GuideIntroduction
This guide is the central source of truth for structuring your data before sending it to Luigi's Box.
Proper data modeling is the single most important factor for achieving high-quality search results and
recommendations.

The concepts and conventions described here apply to all indexing methods, whether you are using
the real-time Content Update API or providing periodic Feeds.
The index-object: The core data structure
The fundamental unit of information in Luigi's Box is the index-object. Think of it as a container
for a single, searchable item, such as a product, category, brand, or article.

While the concept is the same for both the API and Feeds, the way you structure the data is different.
The API utilizes a nested JSON object, whereas Feeds typically employ a flatter XML or JSON structure.

Every index-object follows this basic structure:

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "identity": "",
  "type": "",
  "active_from": "",
  "active_to": "",
  "fields": {
    "title": "",
    "web_url": "",
    "...": "..."
  },
  "nested": [
    { "...": "..." }
  ]
}

        
      
    
  
Top-level parameters      
        
Parameter
Type
Required
Description


        
identity
String
✓
Unique identifier for the object at the index level. Must match the identity reported by analytics events. See Identity guide.


type
String
✓
Object type (e.g., item, category, article). Different types can be searched separately.


generation
String

Object generation marker for bulk data synchronization.


active_from
String

ISO 8601 date/time when the object becomes searchable (e.g., 2019-05-17T21:12:35+00:00).


active_to
String

ISO 8601 date/time when the object stops being searchable (e.g., 2019-05-17T21:12:35+00:00).


fields
Object
✓
Object attributes. Every field is searchable and can be used for filtering. Must include a title field.


nested
Array

Array of nested objects (categories, variants, etc.) linked to the current object.


      
Indexing types
For a typical ecommerce store, you will want to index several types of content. The type parameter
determines how the content is categorized and searched.
      
        
Logical Type
Recommended type Name
How to Index


        
Products

item or product

Index as a standalone object. This is your primary content.


Categories
category
Index as a nested object along with the product it belongs to. See Nested categories.


Brands
brand
Index as a nested object along with the product it belongs to.


Articles / Blog posts
article
Index as a standalone object.


      
Structuring the fields object: Core principles
The fields object is hwere you will define most of your searchable data.

Field naming conventions


Use descriptive, human-readable names (e.g, "Screen Size", "color").
Avoid using dots (.) or brackets ([]) in your field names.
These characters can interfere with data access.


Data types

Luigi's Box automatically infers the data type (text, numeric, boolean, date) from the first
value it sees for an attribute. Once set, the type for a given field cannot be changed via the API.
For dates, always use the ISO 8601 format (e.g., 2025-10-14T10:00:00Z).

Using arrays

You can provide multiple values for any attribute by using an array.
This is useful for things like tags, available colors, available sizes and so on.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          "fields": {
  "color": ["Red", "Black", "Blue"],
  "tags": ["New Arrival", "Eco-Friendly"],
  "size": ["S", "M", "L", "XL"]
}

        
      
    
  
Special fields
Certain field names have special, built-in behaviors that power ranking, filtering, and display logic.
Using them is key to unlocking the full potential of the platform.

Core display fields
      
        
Field Name
Type
Required
Description


        
title
String
✓
The primary display name of the object. Used as the title in autocomplete and search widgets. This field is essential for search relevance and should contain the most important identifying information.


web_url
String
✓
The canonical URL of the object on the web. Used to generate clickable links in search results and autocomplete. Must be a valid, absolute URL (e.g., https://example.com/products/item-123).


image_link
String

A URL to the primary image for the object. Used by autocomplete.js, search.js, and recco.js libraries to display product images in search results and recommendations. Should be an absolute URL to a web-accessible image.


      

Pricing fields
      
        
Field Name
Type
Required
Description


        
price
String

A fully formatted price string including currency symbols and locale-appropriate formatting (e.g., "€19.99", "1,232.60 €", "kr12,341", "8 129 zł"). The system automatically extracts a numeric value into price_amount for sorting and filtering. If you use an unusual format or need precise control, explicitly send price_amount.


price_amount
Number

The numeric value of the price, auto-extracted from price if not provided. Used for sorting, filtering, and range queries. Send this explicitly if your price format is non-standard or if you want to ensure accuracy.


price_old
String

The original price before discount, formatted like price. Used to calculate and display discount percentages or savings in the UI. Useful for showing "was/now" pricing.


price_old_amount
Number

The numeric value of the old price, auto-extracted from price_old if not provided.


price_*
String

Any field starting with price_ (e.g., price_eur, price_usd, price_czk) is treated as a price field. A corresponding _amount field (e.g., price_eur_amount) is automatically extracted unless explicitly provided. Useful for multi-currency stores where you need to support multiple price points.


      

Availability fields
      
        
Field Name
Type
Required
Description


        
availability
Number

A binary availability indicator. Must be 1 (available) or 0 (unavailable). Available results are automatically prioritized in ranking. If omitted, the object is treated as available.


availability_rank
Number

A more advanced and granular version of availability. Accepts values from 1 (most available) to 15 (unavailable). Use this for nuanced availability states like "low stock" (e.g., 3), "backorder" (e.g., 8), or "out of stock" (e.g., 15). Takes precedence over availability if both are provided. Lower numbers rank higher.


availability_rank_text
String

The exact availability message to display to users (e.g., "Ships within 14 days", "Only 2 left in stock", "Pre-order", "Usually ships in 24 hours"). This field does not affect ranking but is used for frontend display.


      

Ranking signal fields
      
        
Field Name
Type
Required
Description


        
boost
Number

A manual ranking boost for the object. Accepts values 1, 2, or 3, where higher values increase the item's position in search results. Use sparingly for promotional items, featured products, or seasonal highlights. Overuse can diminish search relevance.


introduced_at
Date

The date when the product was added to your catalog (ISO 8601 format, e.g., 2025-10-14T10:00:00Z). Used as a ranking signal to prioritize newer items. Particularly useful for fashion, electronics, or time-sensitive content where recency matters.


_margin
Number

A hidden field representing the item's relative profit margin. Must be a float between 0.0 and 1.0 (e.g., 0.42 = 42% margin). Used internally as a ranking signal to prioritize higher-margin products in search results. Not exposed in API responses. Prefix with underscore to keep it hidden.


      

Pattern-based special fields
      
        
Field Name
Type
Required
Description


        
_*
Any

Any field starting with an underscore (e.g., _internal_note, _supplier_id, _cost) is treated as hidden. These fields are fully searchable and can be used for filtering, but are never exposed in public API responses. Useful for internal metadata, ranking signals, sensitive information, or business logic that shouldn't be visible to end users.


geo_*
Object

Any field starting with geo_ (e.g., geo_location, geo_store, geo_warehouse) is treated as a geographical location point. Value must be an object with lat and lon properties: {"lat": 49.0448, "lon": 18.5530}. Use geo_location as the standard field name for the primary location. Enables location-based search, filtering, and distance calculations.


      

Reserved Fields
      
        
Field Name
Description


        
_category

Reserved for internal use. Do not use this field name in your data. The system uses it for internal category processing and hierarchy management. Using this field may cause unexpected behavior.


      
Special fields: Complete example
Here's a comprehensive example showing how to use multiple special fields together:

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "identity": "premium-headphones-2024",
  "type": "item",
  "fields": {
    "title": "Premium Wireless Headphones",
    "web_url": "https://example.com/products/premium-headphones",
    "image_link": "https://cdn.example.com/images/headphones.jpg",

    "price": "€249.99",
    "price_old": "€299.99",
    "price_usd": "$279.99",

    "availability": 1,
    "availability_rank": 2,
    "availability_rank_text": "Only 3 left in stock",

    "boost": 2,
    "introduced_at": "2024-09-15T08:00:00Z",
    "_margin": 0.35,

    "color": ["Black", "Silver"],
    "brand": "AudioTech",
    "_supplier_id": "SUPP-8842",
    "_cost": 150.00,

    "geo_location": {
      "lat": 40.7128,
      "lon": -74.0060
    }
  }
}

        
      
    
  
Advanced data modeling: Using the nested array
The nested array allows you to model complex relationships between your objects, such as categories,
brands, and product variants.
Nested categories / ancestors
Most often, products belong to a category which is part of a hierarchy
(e.g., a "White T-Shirt" product belongs to the "T-Shirts" category,
which is under "Men", which is under "Apparel").

To correctly represent a product's full category path (e.g., "Apparel > Men > T-shirts"), you must
provide the complete hierarchy. This is essential for powering user-facing features like breadcrumb
navigation and hierarchical faceting.
This is achieved by sending the most specific category that a product belongs to (the "leaf" category)
as a nested object, and then listing all of its parent categories in a special ancestors array.
Conceptual model
Imagine a product, a "White T-shirt", has a category path of "Apparel > Men > T-shirts".



The leaf category: The most specific category the product belongs to is "T-shirts".
This will be your primary nested object.

The ancestors: The parent categories that form the path to this leaf are "Apparel" and "Men".
These will go into the ancestors array.

The order: The order is crucial.
The ancestors array must be ordered from top-level down to immediate parent:



First ancestor: "Apparel"
Second ancestor: "Men"

Implementation
Based on the model above, here is how you would structure the JSON payload.

Rule 1: The nested object is the leaf category

The nested array should contain an object for the most specific category, in this case, "T-shirts".

Rule 2: The ancestors array defines the path

Inside the fields of the "T-shirts" category, you add the ancestors array.

Rule 3: The ancestors array must be in order

The array must list "Apparel" first, followed by "Men".

Example: Product in a single hierarchy

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "objects": [
    {
      "identity": "74f5cdd860b5d9585b18edfab7c21670",
      "type": "item",
      "fields": {
        "title": "White T-shirt",
        "web_url": "/products/1"
      },
      "nested": [
        {
          "type": "category", // This is the LEAF category (most specific)
          "identity": "category-t-shirts",
          "fields": {
            "title": "T-shirts",
            "web_url": "/categories/apparel/men/t-shirts",
            "ancestors": [
              {
                "type": "category", // FIRST ancestor (top-level parent)
                "identity": "category-apparel",
                "fields": {
                  "title": "Apparel",
                  "web_url": "/categories/apparel"
                }
              },
              {
                "type": "category", // SECOND ancestor (immediate parent of T-shirts)
                "identity": "category-men",
                "fields": {
                  "title": "Men",
                  "web_url": "/categories/apparel/men"
                }
              }
            ]
          }
        }
      ]
    }
  ]
}

        
      
    
  
Multiple category hierarchies
If a product belongs to more than one category path (e.g., "Cheddar cheese" is in both
"Dairy > Cow milk" and "Wine > Snacks"), provide a nested object for each leaf category,
with each one containing its own respective ancestors path.

Example: Product in multiple hierarchies

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "objects": [
    {
      "identity": "5e119a13ec6511e323bfdc41cd181fdb",
      "type": "item",
      "fields": {
        "title": "Cheddar cheese",
        "web_url": "/products/1"
      },
      "nested": [
        {
          // FIRST CATEGORY PATH: Dairy > Cow milk
          "type": "category", // LEAF category for first path (Cow Milk)
          "identity": "1692378648",
          "fields": {
            "title": "Cow milk",
            "image_link": "/images/cow-milk.png",
            "ancestors": [{ // Path: Dairy → Cow milk
              "type": "category", // Top-level parent for first path (Dairy)
              "identity": "category-dairy",
              "fields": {
                 "title": "Dairy", 
                 "web_url": "/categories/dairy",
                 "image_link": "/images/dairy.png"
              }
            }]
          }
        },
        {
          // SECOND CATEGORY PATH: Wine > Snacks 
          "type": "category", // LEAF category for second path (Snacks)
          "identity": "category-snacks",
          "fields": {
            "title": "Snacks",
            "web_url": "/categories/wine/snacks",
            "image_link": "/images/snacks.png",
            "ancestors": [{
              "type": "category",  // Top-level parent for second path (Wine)
              "identity": "category-wine",
              "fields": {
                "title": "Wine",
                "web_url": "/categories/wine",
                "image_link": "/images/wine.png"
              }
            }]
          }
        }
      ]
    }
  ]
}

        
      
    
  

If you are integrating Product listing, see
searching within full category hierarchy
to make sure you get the best results.
Nested Variants
For products that come in different variations (e.g., by size or color), you can index them as nested
objects with the type set to "variant". Each variant must have its own unique identity. This allows
the search to group variants and display the most relevant one.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "identity": "tshirt-main-product",
  "type": "item",
  "fields": { "title": "Premium T-shirt" },
  "nested": [
    {
      "type": "variant",
      "identity": "tshirt-main-product-red-m",
      "fields": {
        "title": "Red T-shirt - M",
        "color": "Red",
        "size": "M",
        "web_url": "/products/tshirt?variant=red-m"
      }
    },
    {
      "type": "variant",
      "identity": "tshirt-main-product-blue-l",
      "fields": {
        "title": "Blue T-shirt - L",
        "color": "Blue",
        "size": "L",
        "web_url": "/products/tshirt?variant=blue-l"
      }
    }
  ]
}

        
      
    
  
Post-indexing informationSearchability and visibility


Searchable by default: Every field you send is automatically searchable.

Hidden fields: To index an attribute for internal use (like for ranking) but prevent it from appearing
in public API responses, prefix its name with an underscore (e.g., _margin).

Output data structure


Arrays by default: In API responses, all field values are returned as arrays, even if you
indexed a single scalar value. This simplifies frontend development by eliminating the need to check
the data type.

Derived fields
The system automatically creates some fields for you during processing (e.g., category_lvl_1,
category_lvl_2,..., category_lvl_5). You do not need to send these in your indexing requests.
Additional Resources

Content update API documentation
Feeds documentation
Identity
Product listing pages
Category hierarchy best practices]]></content>
      <icon>database-fill-gear</icon>
    </page>
    <page>
      <url>/indexing/api/v1/export.html</url>

      <title>Content export</title>
      <content><![CDATA[Content export
GET https://live.luigisbox.com/v1/content_export

The content export endpoint returns all objects (except of type query) stored in our catalog in no particular order. It returns a list of records identified by their canonical URLs (relative ones) along with their attributes and nested fields.

If you are only interested in certain types of records, you can use requested_types parameter to control what types are present in the output.

The results returned by this API endpoint are paginated. To get to the next page, use the href attribute in the links section, where "rel": "next".
When you receive a response which contains no link with "rel": "next", it means that there are no more pages to scroll and you have downloaded the full export.


Output of the API is not sorted.
This API is not designed for real-time consumption. If you wish to search within the catalog, use our autocomplete and search endpoints.
You have 10 minutes to use the next page's link before it expires.



This endpoint requires HMAC authentication. Refer to the Authentication section for details.

Query Parameters      
        
Parameter
Description


        
size
Number of results in one response / page. Optional, with a default value of 300. Is limited to 500 if a greater value is requested.


hit_fields
Optional. A comma separated list of fields. Only these fields (in addition to record identifier) will be retrieved and present in results. If not provided, all fields will be present in results.


requested_types
Optional. A comma separated list of types. Only records of these types will be retrieved and present in results. If not provided, all types except query type will be present in results.


      
Request Headers
Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.
Sample request
  
    
      
        
          ruby
        
      
        
          shell
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'faraday_middleware'
require 'json'
require 'time'
require 'openssl'
require 'base64'

def digest(key, method, endpoint, date)
  content_type = 'application/json; charset=utf-8'

  data = "#{method}\n#{content_type}\n#{date}\n#{endpoint}"

  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, key, data)).strip
end


public_key = ""
private_key = ""

date = Time.now.httpdate

connection = Faraday.new(url: 'https://live.luigisbox.com') do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.get("/v1/content_export") do |req|
  req.headers['Content-Type'] = "application/json; charset=utf-8"
  req.headers['Date'] = date
  req.headers['Authorization'] = "faraday #{public_key}:#{digest(private_key, "GET", "/v1/content_export", date)}"
end

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

digest() {
  KEY=$1
  METHOD=$2
  CONTENT_TYPE="application/json; charset=utf-8"
  ENDPOINT=$3
  DATE=$4

  DATA="$METHOD\n$CONTENT_TYPE\n$DATE\n$ENDPOINT"

  printf "$DATA" | openssl dgst -sha256 -hmac "$KEY" -binary | base64
}


public_key=""
private_key=""

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/v1/content_export" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://live.luigisbox.com/v1/content_export"


        
      
        
          ";
$private_key = "";

$signature = digest($private_key, 'GET', '/v1/content_export', $date);

$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://live.luigisbox.com/v1/content_export", [
  'headers' => [
    'Accept-Encoding' => 'gzip, deflate',
    'Content-Type' => 'application/json; charset=utf-8',
    'Date' => $date,
    'Authorization' => "guzzle {$public_key}:{$signature}",
  ],
]);

echo $res->getStatusCode();
echo $res->getBody();


        
      
        
          // This configuration and code work with the Postman tool
// https://www.getpostman.com/
//
// Start by creating the required HTTP headers in the "Headers" tab
//  - Accept-Encoding: gzip, deflate
//  - Content-Type: application/json; charset=utf-8
//  - Authorization: {{authorization}}
//  - Date: {{date}}
//
// The {{variable}} is a postman variable syntax. It will be replaced
// by values precomputed by the following pre-request script.

var privateKey = "your-secret";
var publicKey = "your-tracker-id";

var requestPath = '/v1/content_export'
var timestamp = new Date().toUTCString();
var signature = ['GET', "application/json; charset=utf-8", timestamp, requestPath].join("\n");

var encryptedSignature = CryptoJS.HmacSHA256(signature, privateKey).toString(CryptoJS.enc.Base64);

postman.setGlobalVariable("authorization", "ApiAuth " + publicKey + ":" + encryptedSignature);
postman.setGlobalVariable("date", timestamp);

// This endpoint requires no body


        
      
    
  

The above command returns JSON structured like this.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "total": 14256,
  "objects": [
    {
      "url": "/item/1",
      "attributes":{
        "title": "Super product 1",
        ...
      },
      "nested": [],
      "type": "item",
      "exact": true
    },
    ...
  ],
  "links": [
    {
      "rel": "next",
      "href": "https://live.luigisbox.com/v1/content_export?cursor=23937182663"
    }
  ]
}

        
      
    
  
Tips

Make sure that you are requesting only the fields that you want to export using hit_fields parameter. It is a much simpler and more efficient way than requesting all the fields and filtering only the relevant fields afterwards.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/indexing/api/v1/content_removal.html</url>

      <title></title>
      <content><![CDATA[Note
    
      This endpoint requires HMAC authentication. Refer to the Authentication documentation for details.

    
  



        
          Overview
This endpoint allows you to permanently delete one or more objects from your Luigi's Box search index. You specify which items to remove by providing their type and identity in the request body.


  
        
      
      !
    

  
  
    Warning
    
      
This is a permanent operation. Once an object is deleted, it will no longer appear in search results or autocomplete suggestions. This is the correct method for handling products that are sold out and will not be restocked.

    
  




        



        
          
            
              Endpoint
            
          
        
        
          
            
              
                
                  DELETE
                  https://live.luigisbox.com/v1/content
                
              
            
          
        
      



      


        
          Request Parameters
The request body must be a JSON object containing a single root key, objects, which holds an array of simple objects identifying what to delete.
Top-level Request Structure      
        
Parameter
Type
Required
Description




objects
Array
✓
An array of objects to be deleted from the index.




Object structure
Each object in the objects array requires only two keys to identify the content for removal.
      
        
Parameter
Type
Required
Description




identity
String
✓
The unique identifier of the object you want to delete.


type
String
✓
The type of the object you want to delete (e.g., item, category, brand).







        



          Example: Request Body (JSON)
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "objects": [
    {
      "type": "item",
      "identity": "B6B7CD9466295DCFDB62676CAE374289"
    },
    {
      "type": "item",
      "identity": "611526210E4585C7C8D5367F2CC42A57"
    }
  ]
}

        
      
    
  

        



      


        
          How to Send a Deletion Request
The examples show how to prepare and send a request to the API to delete content.

Authentication is required for all requests. The code demonstrates how to construct 
the necessary headers, including Date and Authorization. The Authorization header requires a 
dynamically generated HMAC signature. For a detailed explanation of how to create this signature,
please refer to our main API Authentication guide.


  
        
      
      !
    

  
  
    Warning
    
      
Your Private Key is a secret and should never be exposed in client-side code (like frontend JavaScript). It should only be used on a secure server.

    
  



  
        
      
    

  
  
    Info
    
      
Your API Keys can be found in the Luigi's Box application under "General settings" > "Integration settings".

    
  




        



          Code Examples
          
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # --- Ruby Example for DELETE /v1/content ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, 
                              endpoint_path, date_header, 
                              content_type_header)
  data = "#{http_method}\n#{content_type_header}\n" +
         "#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(
    OpenSSL::HMAC.digest(dg, private_key, data)
  ).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/content'

product_data = [
  {
    "type": "item",
    "identity": "B6B7CD9466295DCFDB62676CAE374289"
  },
  {
    "type": "item",
    "identity": "611526210E4585C7C8D5367F2CC42A57"
  }
]
request_body_json = { objects: product_data }.to_json

http_method = 'DELETE'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(
  YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, 
  current_date, content_type
)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.delete(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? &amp;&amp; response_body['ok_count'] &amp;&amp; 
   response_body['ok_count'] > 0
  puts "Product successfully deleted: " +
       "#{JSON.pretty_generate(response_body)}"
else
  puts "Error deleting product: HTTP Status " +
       "#{response.status}, Response: #{response.body}"
end


        
      
        
           'B6B7CD9466295DCFDB62676CAE374289',
        'type'     => 'item',
    ],
    [
        'identity' => '611526210E4585C7C8D5367F2CC42A57',
        'type'     => 'item',
    ]
];

$request_body = ['objects' => $product_data];

$http_method  = 'DELETE';
$content_type = 'application/json; charset=utf-8';

// Create HTTP-date string 
// (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest(
    $YOUR_PRIVATE_KEY, $http_method, 
    $ENDPOINT_PATH, $current_date, $content_type
);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request(
    $http_method, 
    "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", 
    [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]
);

$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 &amp;&amp; 
   isset($response_body['ok_count']) &amp;&amp; 
   $response_body['ok_count'] > 0) {
    echo "Product successfully deleted:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error deleting product: HTTP Status " . 
         $response->getStatusCode() . 
         "\nResponse: " . $response->getBody();
}


        
      
        
          const axios = require('axios');
const crypto = require('crypto');

function generateLuigisBoxDigest(privateKey, httpMethod, 
                                endpointPath, dateHeader, 
                                contentTypeHeader) {
  const data = httpMethod + "\n" + contentTypeHeader + "\n" +
               dateHeader + "\n" + endpointPath;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64').trim();
}

// Configuration
const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/content';

// Product data
const productData = [
    {
      "type": "item",
      "identity": "B6B7CD9466295DCFDB62676CAE374289"
    },
    {
      "type": "item",
      "identity": "611526210E4585C7C8D5367F2CC42A57"
    }
];

const requestBody = { objects: productData }

const httpMethod = 'DELETE';
const contentType = 'application/json; charset=utf-8';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(
  YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, 
  currentDate, contentType
);
const authorizationHeader = 
  "ApiAuth " + YOUR_PUBLIC_KEY + ":" + signature;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: LUIGISBOX_HOST + ENDPOINT_PATH,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 &amp;&amp; 
      responseBody.ok_count &amp;&amp; 
      responseBody.ok_count > 0) {
    console.log("Product successfully deleted:", 
                JSON.stringify(responseBody, null, 2));
  } else {
    console.error("Error deleting product: " +
                  "HTTP Status " + response.status + ", " +
                  "Response: " + JSON.stringify(responseBody));
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});

        
      
    
  

        



      


        
          Error Handling      
        
HTTP Status
Description




400 Bad Request
The request structure is invalid or the JSON is malformed. For example, an object in the array is missing the identity or type key.


429 Too Many Requests
The API rate limit has been exceeded. Check the Retry-After header and see Throttling docs.







        



          Example: Error Response
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "ok_count": 1,
  "errors_count": 1,
  "errors": {
    "B6B7CD9466295DCFDB62676CAE374289": {
      "type": "not_found",
      "reason": "Identity not in catalog"
    }
  }
}

        
      
    
  

        



      
Related Endpoints


Content Update - Create or replace objects

Partial Content Update - Update specific fields only

Update by Query - Bulk updates based on search criteria]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/indexing/api/v1/partial_update.html</url>

      <title></title>
      <content><![CDATA[Note
    
      This endpoint requires HMAC authentication. Refer to the Authentication documentation for details.

    
  



        
          Overview
This endpoint is ideal for making small, frequent updates to existing objects, such as changing a product's price, description, or availability. You only need to send the identity of the object and the specific fields you wish to add or modify.
Key Behaviour:

This operation is incremental; it does not affect fields you omit from the request.
It cannot be used to create new objects. If an identity is not found, it will result in an error.
You cannot change an object's type.

Common Use Cases:

Updating prices or stock levels
Adding a new promotional label or updating a product description.
Changing availability status
Synchronizing real-time data from your database to the search index without a full re-index.


The batch limit for this endpoint is 300 objects per request.


  
        
      
      !
    

  
  
    Warning
    
      
For adding new products or completely overwriting existing ones, use the Content Update (POST) endpoint instead. This endpoint is only for modifying existing objects.

    
  




        



        
          
            
              Endpoint
            
          
        
        
          
            
              
                
                  PATCH
                  https://live.luigisbox.com/v1/content
                
              
            
          
        
      



      


        
          Request Parameters
The root of your request body must be a JSON object containing a single key, objects.
Top-level Request Structure      
        
Parameter
Type
Required
Description




objects
Array
✓
An array of one or more objects to be partially updated.




Object Structure
Each object in the objects array must contain an identity and the fields you wish to change.
      
        
Parameter
Type
Required
Description




identity
String
✓
The unique identifier of the object you want to update.


fields
Object

A key-value map of the attributes to add or modify.


nested
Array

An array of nested objects. Warning: Sending this key will replace the entire existing nested array for the object.







        



          Example: Request Body (JSON)
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "objects": [
    {
      "identity": "product-001",
      "fields": {
        "price": "€44.99"
      }
    },
    {
      "identity": "product-002",
      "fields": {
        "description": "Now with an updated, more detailed description!"
      }
    }
  ]
}

        
      
    
  

        



      


        
          How to Send a Partial Update Request
The examples show how to prepare and send a request to the API endpoint.

Authentication is required for all requests. The code demonstrates how to construct 
the necessary headers, including Date and Authorization. The Authorization header requires a 
dynamically generated HMAC signature. For a detailed explanation of how to create this signature,
please refer to our main API Authentication guide.


  
        
      
      !
    

  
  
    Warning
    
      
Your Private Key is a secret and should never be exposed in client-side code (like frontend JavaScript). It should only be used on a secure server.

    
  



  
        
      
    

  
  
    Info
    
      
Your API Keys can be found in the Luigi's Box application under "General settings" > "Integration settings".

    
  




        



          Code Examples
          
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # --- Ruby Example for PATCH /v1/content ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, 
                              endpoint_path, date_header, 
                              content_type_header)
  data = "#{http_method}\n#{content_type_header}\n" +
         "#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(
    OpenSSL::HMAC.digest(dg, private_key, data)
  ).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/content'

product_data = [
  {
      "identity": "product-001",
      "fields": {
        "price": "€44.99"
      }
    },
    {
      "identity": "product-002",
      "fields": {
        "description": "Now with an updated, more detailed description!"
      }
    }
]
request_body_json = { objects: product_data }.to_json

http_method = 'PATCH'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(
  YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, 
  current_date, content_type
)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.patch(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? &amp;&amp; response_body['ok_count'] &amp;&amp; 
   response_body['ok_count'] > 0
  puts "Product successfully updated: " +
       "#{JSON.pretty_generate(response_body)}"
else
  puts "Error updating product: HTTP Status " +
       "#{response.status}, Response: #{response.body}"
end


        
      
        
           'product-001',
        'fields'   => [
            'price'        => '€49.99',
        ]
    ],
    [
        'identity' => 'product-002',
        'fields'   => [
            'description' => 'Now with an updated, more detailed description!',
        ]
    ]
];

$request_body = ['objects' => $product_data];

$http_method  = 'PATCH';
$content_type = 'application/json; charset=utf-8';

// Create HTTP-date string 
// (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest(
    $YOUR_PRIVATE_KEY, $http_method, 
    $ENDPOINT_PATH, $current_date, $content_type
);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request(
    $http_method, 
    "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", 
    [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]
);

$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 &amp;&amp; 
   isset($response_body['ok_count']) &amp;&amp; 
   $response_body['ok_count'] > 0) {
    echo "Product successfully updated:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error updating product: HTTP Status " . 
         $response->getStatusCode() . 
         "\nResponse: " . $response->getBody();
}

?>


        
      
        
          const axios = require('axios');
const crypto = require('crypto');

function generateLuigisBoxDigest(privateKey, httpMethod, 
                                endpointPath, dateHeader, 
                                contentTypeHeader) {
  const data = httpMethod + "\n" + contentTypeHeader + "\n" +
               dateHeader + "\n" + endpointPath;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64').trim();
}

// Configuration
const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/content';

// Product data
const productData = [
 {
    "identity": "product-001",
    "fields": {
      "price": "€44.99"
    }
  },
  {
    "identity": "product-002",
    "fields": {
      "description": "Now with an updated, more detailed description!"
    }
  }
];

const requestBody = { objects: productData }

const httpMethod = 'PATCH';
const contentType = 'application/json; charset=utf-8';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(
  YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, 
  currentDate, contentType
);
const authorizationHeader = 
  "ApiAuth " + YOUR_PUBLIC_KEY + ":" + signature;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: LUIGISBOX_HOST + ENDPOINT_PATH,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 &amp;&amp; 
      responseBody.ok_count &amp;&amp; 
      responseBody.ok_count > 0) {
    console.log("Product successfully updated:", 
                JSON.stringify(responseBody, null, 2));
  } else {
    console.error("Error updating product: " +
                  "HTTP Status " + response.status + ", " +
                  "Response: " + JSON.stringify(responseBody));
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});

        
      
    
  

        



      


        
          Error Handling      
        
HTTP Status
Description




400 Bad Request
The request structure is invalid, the JSON is malformed, or an object was not found.


413 Payload Too Large
The request exceeds 5 MB (10 MB if compressed). Reduce batch size or enable compression.


429 Too Many Requests
The rate limit has been exceeded. Check Retry-After header and see Throttling docs.







        



          Example: Error Response
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "ok_count": 0,
  "errors_count": 1,
  "errors": {
    "product-001": {
      "type": "not_found",
      "reason": "Identity not in catalog"
    }
  }
}

        
      
    
  

        



      
Related Endpoints


Content Update - Create or replace objects

Content Removal - Delete objects from index

Update by Query - Bulk updates based on search criteria]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/indexing/api/v1/query_update.html</url>

      <title></title>
      <content><![CDATA[Note
    
      This endpoint requires HMAC authentication. Refer to the Authentication documentation for details.

    
  



        
          Overview
This endpoint allows you to perform bulk updates on objects that match a specific set of criteria. It is an asynchronous operation: the API call initiates a background job, and you must poll a status URL to check its progress. This is ideal for large-scale changes, such as applying a sale to an entire brand, without requiring a list of individual identities.



        



        
          
            
              Endpoint
            
          
        
        
          
            
              
                
                  PATCH
                  https://live.luigisbox.com/v1/update_by_query
                
              
            
          
        
      



      


        
          Request Structure
The request body consists of two main parts: a search object to define the update criteria and an update object to specify the changes.
Request Body Structure      
        
Parameter
Type
Required
Description




search
Object
✓
An object containing rules to select which items will be updated.


update
Object
✓
An object specifying the field changes to apply to all matching items.





search Object Parameters      
        
Parameter
Type
Required
Description




types
Array
✓
An array of strings specifying the object types to include in the search (e.g., ["item"]).


partial
Object
✓
An object containing the fields to match. Currently, only fields is supported within partial.





update Object Parameters      
        
Parameter
Type
Required
Description




fields
Object
✓
An object specifying the fields to update and their new values.







        



          Example: request body (JSON)
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "search": {
    "types": [
      "product"
    ],
    "partial": {
      "fields": {
        "color": "olive"
      }
    }
  },
  "update": {
    "fields": {
      "color": "green"
    }
  }
}

        
      
    
  

        



      


        
          How to Initiate an Update Job
The process involves two steps. First, you send a PATCH request with your search and update rules to start the background job.

Authentication is required for all requests. The code demonstrates how to construct 
the necessary headers, including Date and Authorization. The Authorization header requires a 
dynamically generated HMAC signature. For a detailed explanation of how to create this signature,
please refer to our main API Authentication guide.


  
        
      
      !
    

  
  
    Warning
    
      
Your Private Key is a secret and should never be exposed in client-side code (like frontend JavaScript). It should only be used on a secure server.

    
  



  
        
      
    

  
  
    Info
    
      
Your API Keys can be found in the Luigi's Box application under "General settings" > "Integration settings".

    
  


The search criteria work on a partial match principle for array values and are case-sensitive. For example, a search for color: 'olive' will match a product with color: ['olive', 'red']. However, a search for category: 'jeans' will not match a product with category: 'Jeans'.

Important: The update operation is a replacement for the specified fields, not an incremental change.



        



          Example: Initiate Job
          
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # --- Ruby Example for PATCH /v1/update_by_query ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, 
                              endpoint_path, date_header, 
                              content_type_header)
  data = "#{http_method}\n#{content_type_header}\n" +
         "#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(
    OpenSSL::HMAC.digest(dg, private_key, data)
  ).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/update_by_query'

update_request = {
  search: {
    types: ["product"],
    partial: { fields: { color: "olive" } }
  },
  update: { fields: { color: "green" } }
}
request_body_json = update_request.to_json

http_method = 'PATCH'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(
  YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, 
  current_date, content_type
)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.patch(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

puts response.body


        
      
        
           [
        'types' => ['product'],
        'partial' => ['fields' => ['color' => 'olive']]
    ],
    'update' => [
        'fields' => ['color' => 'green']
    ]
];

$request_body = $update_request;

$http_method  = 'PATCH';
$content_type = 'application/json; charset=utf-8';

// Create HTTP-date string 
// (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest(
    $YOUR_PRIVATE_KEY, $http_method, 
    $ENDPOINT_PATH, $current_date, $content_type
);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request(
    $http_method, 
    "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", 
    [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]
);

echo $response->getBody();


        
      
        
          const axios = require('axios');
const crypto = require('crypto');

function generateLuigisBoxDigest(privateKey, httpMethod, 
                                endpointPath, dateHeader, 
                                contentTypeHeader) {
  const data = httpMethod + "\n" + contentTypeHeader + "\n" +
               dateHeader + "\n" + endpointPath;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64').trim();
}

// Configuration
const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/update_by_query';

// Product data
const updateRequest = {
  search: {
    types: ["product"],
    partial: { fields: { color: "olive" } }
  },
  update: { fields: { color: "green" } }
};

const requestBody = updateRequest;

const httpMethod = 'PATCH';
const contentType = 'application/json; charset=utf-8';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(
  YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, 
  currentDate, contentType
);
const authorizationHeader = 
  "ApiAuth " + YOUR_PUBLIC_KEY + ":" + signature;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: LUIGISBOX_HOST + ENDPOINT_PATH,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => console.log(response.data))
.catch(error => console.error(error.response.data));

        
      
    
  

        



      


        
          Check Job Status
After a successful PATCH request, the API will respond with a status_url. You must then make a GET request to this URL to check the status of the background job. You may need to poll this endpoint until the status field changes from "in_progress" to "complete".

Status Check Request:

GET https://live.luigisbox.com/v1/update_by_query?job_id=12345


The response will show the current status of your bulk update operation.



        



          Initial PATCH Response
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "status_url": "/v1/update_by_query?job_id=12345"
}

        
      
    
  

        



      


        
          Job Completion Response
Once the job is finished, the GET request to the status URL will return a summary of the results, including the number of successful updates and any failures.
Response Fields      
        
Field
Type
Description




tracker_id
String
Your tracker identifier


status
String
Job status: "in_progress", "complete", or "failed"


updates_count
Integer
Number of objects successfully updated


failures_count
Integer
Number of objects that failed to update


failures
Object
Details about any failures (empty if none)







        



          Complete Job Response
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "tracker_id": "YOUR-TRACKER-ID",
  "status": "complete",
  "updates_count": 5,
  "failures_count": 0,
  "failures": {}
}

        
      
    
  

        



      


        
          Error Handling      
        
HTTP Status
Description




400 Bad Request
The request structure is invalid, JSON is malformed, or some objects failed validation. Check response body for details.


403 Forbidden
The request is not allowed for your site in Luigi's Box.


405 Method Not Allowed
The request method is not supported for the specified resource.


413 Payload Too Large
The request exceeds 5 MB (10 MB if compressed). Reduce batch size or enable compression.







        



          Example: Job Failure Response
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "tracker_id": "YOUR-TRACKER-ID",
  "status": "complete",
  "updates_count": 4,
  "failures_count": 1,
  "failures": {
    "/products/1": {
      "type": "data_schema_mismatch",
      "reason": "failed to parse [attributes.price]",
      "caused_by": {
        "type": "number_format_exception",
        "reason": "For input string: \"wrong sale price\""
      }
    }
  }
}

        
      
    
  

        



      
Related Endpoints


Content Update - Create or replace objects

Partial Content Update - Update specific fields only

Content Removal - Delete objects from index]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/indexing/api/v1/content_update.html</url>

      <title></title>
      <content><![CDATA[Note
    
      This endpoint requires HMAC authentication. Refer to the Authentication documentation for details.

    
  



        
          Overview
This endpoint is the primary method for adding new objects or completely replacing existing ones in your search index. You send an array of objects in a JSON payload, and Luigi's Box processes them in a batch.


  
        
      
      !
    

  
  
    Warning
    
        This is a full replacement operation. When you update an existing object, any fields you omit from the request will be removed from the index. If you only need to update specific fields, it is more efficient to use the Partial Content Update API.

    
  




        



        
          
            
              Endpoint
            
          
        
        
          
            
              
                
                  POST
                  https://live.luigisbox.com/v1/content
                
              
            
          
        
      



      


        
          The Index-Object
The fundamental unit of data you send is the index-object. Your request body must be a JSON object containing a single root key, objects, which holds an array of these index-objects.
Top-level Request Structure      
        
Parameter
Type
Required
Description




objects
Array
✓
An array of one or more objects to be indexed. Recommended batch size: ~100 objects.




Index-Object Parameters
Each object in the objects array must follow this structure:
      
        
Parameter
Type
Required
Description




identity
String
✓
A unique identity for the object at the index level. Must match the identity reported by analytics events. See Identity guide.


type
String
✓
Object type (e.g., "item", "category", "article"). Different types can be searched separately.


generation
String

Object generation marker for bulk data synchronization.


active_from
String

ISO 8601 date/time when object should become searchable (e.g., 2019-05-17T21:12:35+00:00).


active_to
String

ISO 8601 date/time when object should stop being searchable (e.g., 2019-05-17T21:12:35+00:00).


fields
Object
✓
Object attributes. Every field is searchable and can be used for filtering. Must include a title field.


nested
Array

Array of nested objects (categories, variants, etc.) linked to the current object.




Fields Guidelines
When structuring the fields object:



Required: Include a title field - this serves as the object's display name

Numeric fields: Format as numbers, not strings ("height": 70.5 not "height": "70.5")


Date fields: Use ISO 8601 format with T delimiter ("active_from": "2018-07-15T13:23:50+00:00")

Array values: Supported for any field ("color": ["red", "black", "blue"])

Nesting: Use only one level of nesting (avoid deeply nested objects)

Facets: Any field you send can become a facet for filtering search results


Read more about structuring your data.



        



          Example: Index-Object
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "identity": "SKU-XYZ-123",
  "type": "item",
  "generation": "daily-sync-20241014",
  "active_from": "2024-01-01T00:00:00Z",
  "fields": {
    "title": "Premium Quality T-Shirt",
    "web_url": "/products/premium-t-shirt",
    "price": 25.50,
    "color": ["Red", "Black", "Blue"],
    "availability": 1
  },
  "nested": [
    {
      "type": "category",
      "identity": "cat-apparel",
      "fields": { "title": "Apparel" }
    }
  ]
}

        
      
    
  

        



      


        
          How to Send an Indexing Request
The examples show how to prepare and send your objects array to the API endpoint.

Authentication is required for all requests. The code demonstrates how to construct 
the necessary headers, including Date and Authorization. The Authorization header requires a 
dynamically generated HMAC signature. For a detailed explanation of how to create this signature,
please refer to our main API Authentication guide.


  
        
      
      !
    

  
  
    Warning
    
      
Your Private Key is a secret and should never be exposed in client-side code (like frontend JavaScript). It should only be used on a secure server.

    
  



  
        
      
    

  
  
    Info
    
      
Your API Keys can be found in the Luigi's Box application under "General settings" > "Integration settings".

    
  




        



          Code Examples
          
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # --- Ruby Example for POST /v1/content ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, 
                              endpoint_path, date_header, 
                              content_type_header)
  data = "#{http_method}\n#{content_type_header}\n" +
         "#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(
    OpenSSL::HMAC.digest(dg, private_key, data)
  ).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/content'

product_data = [
  {
    identity: "product-001",
    type: "item",
    fields: {
      title: "My Very First Item",
      web_url: "https://www.example.com/products/product-001",
      price: "€49.99",
      brand: "CoolBrand",
      availability: 1
    }
  }
]
request_body_json = { objects: product_data }.to_json

http_method = 'POST'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(
  YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, 
  current_date, content_type
)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.post(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? &amp;&amp; response_body['ok_count'] &amp;&amp; 
   response_body['ok_count'] > 0
  puts "Product successfully indexed: " +
       "#{JSON.pretty_generate(response_body)}"
else
  puts "Error indexing product: HTTP Status " +
       "#{response.status}, Response: #{response.body}"
end


        
      
        
           'product-001',
        'type'     => 'item',
        'fields'   => [
            'title'        => 'My Very First Item',
            'web_url'      => 'https://www.example.com/' . 
                              'products/product-001',
            'price'        => '€49.99',
            'brand'        => 'CoolBrand',
            'availability' => 1
        ]
    ]
];

$request_body = ['objects' => $product_data];

$http_method  = 'POST';
$content_type = 'application/json; charset=utf-8';

// Create HTTP-date string 
// (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest(
    $YOUR_PRIVATE_KEY, $http_method, 
    $ENDPOINT_PATH, $current_date, $content_type
);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request(
    $http_method, 
    "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", 
    [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]
);

$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 &amp;&amp; 
   isset($response_body['ok_count']) &amp;&amp; 
   $response_body['ok_count'] > 0) {
    echo "Product successfully indexed:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error indexing product: HTTP Status " . 
         $response->getStatusCode() . 
         "\nResponse: " . $response->getBody();
}


        
      
        
          const axios = require('axios');
const crypto = require('crypto');

function generateLuigisBoxDigest(privateKey, httpMethod, 
                                endpointPath, dateHeader, 
                                contentTypeHeader) {
  const data = httpMethod + "\n" + contentTypeHeader + "\n" +
               dateHeader + "\n" + endpointPath;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64').trim();
}

// Configuration
const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/content';

// Product data
const productData = [
  {
    identity: "product-001",
    type: "item",
    fields: {
      title: "My Very First Item",
      web_url: "https://www.example.com/products/product-001",
      price: "€49.99",
      brand: "CoolBrand",
      availability: 1
    }
  }
];

const requestBody = { objects: productData }

const httpMethod = 'POST';
const contentType = 'application/json; charset=utf-8';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(
  YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, 
  currentDate, contentType
);
const authorizationHeader = 
  "ApiAuth " + YOUR_PUBLIC_KEY + ":" + signature;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: LUIGISBOX_HOST + ENDPOINT_PATH,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 &amp;&amp; 
      responseBody.ok_count &amp;&amp; 
      responseBody.ok_count > 0) {
    console.log("Product successfully indexed:", 
                JSON.stringify(responseBody, null, 2));
  } else {
    console.error("Error indexing product: " +
                  "HTTP Status " + response.status + ", " +
                  "Response: " + JSON.stringify(responseBody));
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});

        
      
    
  

        



      


        
          Error Handling      
        
HTTP Status
Description




400 Bad Request
The request structure is invalid, JSON is malformed, or some objects failed validation. Check response body for details.


413 Payload Too Large
The request exceeds 5 MB (10 MB if compressed). Reduce batch size or enable compression.


429 Too Many Requests
The rate limit has been exceeded. Check Retry-After header and see Throttling docs.







        



          Example: Error Response
          
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "ok_count": 99,
  "errors_count": 1,
  "errors": {
    "http://example.org/products/1": {
      "type": "malformed_input",
      "reason": "incorrect object format",
      "caused_by": {
        "title": ["must be filled"]
      }
    }
  }
}

        
      
    
  

        



      
Performance Guidelines
For optimal indexing performance, avoid:



High nested count: >10 nested records per object

High field count: >10 fields per object


Large objects: >30KB per object

Large batches: >100 objects per request

Related Endpoints


Partial Content Update - Update specific fields only

Content Removal - Delete objects from index

Update by Query - Bulk updates based on search criteria]]></content>
      <icon>database-fill-gear</icon>
    </page>
    <page>
      <url>/indexing/feeds.html</url>

      <title>Data Layout and Modeling Guide - Feeds</title>
      <content><![CDATA[Data Layout and Modeling Guide - FeedsIntroduction
This guide is the central source of truth for structuring your feed data before sending it to
Luigi's Box.
Proper data modeling is the single most important factor for achieving high-quality search results and
recommendations.

The concepts and conventions described here apply specifically to Feeds in XML,
JSON, or CSV format. If you're using the Content Update API, please refer to the
separate API data modeling guide.
Quickstart: Minimal example
Here's the simplest possible product you can index with just the required fields:

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          

  
    product-123
    
    https://example.com/products/blue-tshirt
  
  


        
      
        
          {
  "items": [
    {
      "identity": "product-123",
      "title": "Blue Cotton T-Shirt",
      "web_url": "https://example.com/products/blue-tshirt"
    }
  ]
}

        
      
    
  

This is enough to make your product searchable. However, to unlock the full power of Luigi's Box,
you'll want to add more fields as described below.
Feed structure guidelines
Luigi's Box is very flexible regarding feed structure and support any valid XML, JSON or CSV file.
However, to make the processing easier (and reduce the time to integration), please follow these guidelines:
Format preferences


Preferred formats: XML and JSON over CSV

XML specifics:


Avoid using tag attributes. Instead of ... use 123

Keep the structure as flat as possible. Nesting tags is ok, but don't use complex nesting if possible
In many cases, nesting is unavoidable and it's acceptable



Field naming: Name the attributes in a way that makes sense to you, there's no prescribed naming
convention

Common XML issues to avoid
Luigi's Box frequently encounters these problems when dealing with XML files. Avoiding them will make
the process much faster:

1. No encoding of special characters (e.g., &amp;)

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          
Black &amp; White


Black &amp;amp; White




        
      
    
  

2. Double encoding using both CDATA and entities

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          





Black &amp;amp; White

        
      
    
  

3. HTML in descriptions

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          
html tags in description.

        
      
    
  
Feed types and structure
Each of your searchable types must have a separate feed. Here's how to structure each type:
Product feeds
Product feeds use  or  as the root element:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

  
    
  
  
    
  


        
      
    
  
Category feeds
Category feeds use  as the root element:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

  
    
  


        
      
    
  
Brand feeds
Brand feeds use  as the root element:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

  
    
  


        
      
    
  
Article feeds
Article feeds use  as the root element:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

  
    
  


        
      
    
  
Feed contents: What to include
Make sure that the feed contains all products that you have, even those that are not in stock.
For product attributes, it's useful to think about four aspects of the data in the feed:
1. Required attributes
Luigi's Box only requires two attributes for each product: title and web_url.
They must be present in the feed for each product (the tag names do not matter) as the bare minimum.
2. Visual attributes
Look at the product tile in the category listing and all the information that it shows.
If you want the product tile in search results to show the same information, it must be present in
the feed.
This usually includes:


Product image
Product price
Discounts
Various labels


Keep in mind that some information is only visible under certain circumstances, so it's best to check
the code that renders the product tile and make sure that all information is included in the feed.
3. Behavioral attributes
These attributes are not required to render the product tile, but they are essential for some features
related to the product tile. For example, if your product tile shows an "Add to cart" button, and this
button will trigger an XHR request which sends the internal product ID, make sure that this internal
ID is present in the feed.
4. Searchable attributes
All attributes that your product should be findable by.
For example, if you want your products to be searchable by EAN, you must include product EAN code in the feed.
In this regard: more is more, and the more data you provide in the feed, the better the search
will be.
Field naming best practices
Following consistent naming conventions makes your data easier to maintain and debug:
Do's

✓ Use descriptive, human-readable names: screen_size, color, brand

✓ Be concise but clear: color instead of c, brand instead of brand_name_of_manufacturer

✓ Use consistent naming across all feeds: if you use color for one product, use color for all products
✓ Use lowercase with underscores (snake_case) for consistency
✓ Use plural for comma-separated values: labels, tags, sizes


Don'ts

✗ Avoid dots in parameter names: product.color (use product_color instead)
✗ Especially in  tags: "N. Size" is not valid (use "Size" instead)
✗ Avoid brackets: price[eur] (use price_eur instead)
✗ Avoid spaces: screen size (use screen_size instead)
✗ Avoid mixed case: ScreenSize or screenSize (use screen_size instead)

Special fields reference
Certain field names have special, built-in behaviors that power ranking, filtering, and display logic.
Core required fields      
        
Field Name
Type
Required
Description
Example


        
identity
String
✓
Unique identifier for the object. Must match the identity reported by analytics events. See Identity guide.
NH757A


title
String
✓
The primary display name of the object. Used as the title in autocomplete and search widgets. Must be properly encoded or wrapped in CDATA.



web_url
String
✓
Canonical URL of the object. Often a single product can have several URLs, use the canonical URL for the feed.
https://example.org/products/drill-123


      
Display fields      
        
Field Name
Type
Required
Description
Example


        
image_link_s
String

Tiny image for variant previews. Best size is around 100x100px.
https://example.org/images/thumbs/100x100/2172.png


image_link_m
String

Medium image suitable for autocomplete, around 200x200px.
https://example.org/images/thumbs/200x200/2172.png


image_link_l
String

Large image suitable for product tile in search results. Best size is 600x600px. Use the same image that you use for rendering your current search result tile if possible.
https://example.org/images/thumbs/600x600/2172.png


description
String

Long-form description of the product. Feel free to use formatted HTML, but make sure it is correctly encoded or enclosed in CDATA section.
cotton shirt.


labels
String

Comma-separated list of labels, such as "Free shipping" or "Sale".
Summer sale, Free shipping


      
Pricing fields      
        
Field Name
Type
Required
Description
Example


        
price
String

The fully formatted price as you want it to appear in the product tile, including currency. This is the price for which the product is available for purchase. A numeric price_amount is automatically extracted for sorting.

$78.9 or 65 EUR



price_old
String

If the product is on sale, this is the original price. Formatted the same as price.

$81.9 or 67.50 EUR



price_*
String

Per-currency price fields. The fully formatted price in a specific currency (e.g., price_eur, price_usd, price_czk). Add as many per-currency prices as you need. A corresponding _amount field is automatically extracted.
65 EUR


price_*_old
String

Original price in a specific currency before discount (e.g., price_eur_old, price_usd_old).
67.50 EUR


      

Multi-currency example:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          $78.9
$81.9
65 EUR
67.50 EUR
1,850 Kč

        
      
    
  
Availability fields      
        
Field Name
Type
Required
Description
Example


        
availability
Number

Binary attribute. 1 = Product is orderable, 0 = Product is not orderable. Available results are automatically prioritized in ranking. If omitted, the product is treated as available.

1 or 0



availability_rank
Number

Numeric value strictly within , which encodes the availability of the product. The higher the number, the less available the product is. Takes precedence over availability if both are provided. For unavailable products, must be 15 with availability: 0.

1, 3, 7, 15



availability_rank_text
String

The exact availability text as it should appear in the product tile. This field does not affect ranking but is used for frontend display.

Ships within 14 days or In external warehouse / Ships within 5 days



      

Recommended availability_rank encoding scheme:

If your store uses 4 availability states: "In stock", "Ships within 7 days", "Ships within 14 days",
"Out of stock", then a good encoding would be:



1: In stock (immediately available)

3: Ships within 7 days

7: Ships within 14 days

15: Out of stock (unavailable)


Example:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          1
3


        
      
    
  
Ranking signal fields      
        
Field Name
Type
Required
Description
Example


        
boost
Number

Manual ranking boost for the product. Luigi's Box supports 3 boosting levels: 1, 2, and 3. The higher the number, the stronger the boosting effect. Use judiciously to avoid interfering with the core ranking algorithm too much. You can also set up boosting in the Luigi's Box application.

1, 2, or 3



introduced_at
Date

Date/timestamp value in ISO 8601 format indicating the novelty of a product or when it started/will start to sell. Used to prefer newer items when sorting search results. If omitted, novelty is ignored.
2021-07-15T08:00:00Z


margin
Number

Relative profit margin of the product. Must be a float value between  (e.g., 0.42 means 42% margin of product price). Used to prefer items with higher margin when sorting search results. If omitted, treated as if there is no margin.
0.42


      

Example:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          2
2021-07-15
0.42

        
      
    
  
Category and brand fields      
        
Field Name
Type
Required
Description
Example


        
category
String

Product category with full hierarchy using pipe ( | ) delimiter. This exact category with hierarchy must appear in the category feed. If the product is in multiple categories, use the  tag multiple times. For XML, mark the primary category with primary="true" attribute. For JSON, the first element in the array is treated as primary.



brand
String

Product brand. This exact brand must appear in the brand feed.

Nike


      

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          


        
      
        
          {
  "category": [
    ["Apparel", "Men", "Shirts"],
    ["Seasons", "Summer", "Shirts"]
  ]
}

        
      
    
  
Product identification fields      
        
Field Name
Type
Required
Description
Example


        
product_code
String

SKU code. Based on our experience, people often search for products using their codes, especially in B2B segments.
NK8277S


ean
String

EAN barcode of the product, if available.
8288881881818


to_cart_id
String

Internal ID of the product necessary for add-to-cart functionality. Include all attributes necessary to add product to cart. May not be applicable in all cases. See Add to cart for more details.
2172


      
Variant fields      
        
Field Name
Type
Required
Description
Example


        
item_group_id
String

Links individual product variants together for variants search mode. All variants of the same product must share the same item_group_id and must be listed consecutively in the feed (no other products between them). See Variants in the feed.
8272


      

Example:

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          
  NH7636A
  Black Nike Shirt
  8272
  


  NH7636B
  White Nike Shirt
  8272
  


        
      
    
  
Geographic location fields      
        
Field Name
Type
Required
Description
Example


        
geo_location
Object

Geographic location point in geo_point format with lat and lon properties. Used to prefer items within certain distance from user when sorting search results. If omitted, treated as if there is no location.
{"lat": 49.0448, "lon": 18.553}


      

Example:

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {"lat": 49.0448, "lon": 18.553}

        
      
        
          {
  "geo_location": {"lat": 49.0448, "lon": 18.553}
}

        
      
    
  
Product parameters      
        
Field Name
Type
Required
Description
Example


        
parameters
Array/Object

Arbitrary product parameters in name/value format. You can use any names with one rule: avoid dots in the parameter name (e.g., "N. Size" is not valid).
See below


      

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          
  
    
    
  
  
    
    
  


        
      
        
          {
  "parameters": [
    {
      "name": "Size",
      "value": "XS, M, L, XL"
    },
    {
      "name": "Material",
      "value": "Cotton (80%), Polyester (20%)"
    }
  ]
}

        
      
    
  
Complete feed examplesProduct feed example
  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          

  
    NH757A
    
    https://example.org/2172-black-nike-shirt

    1
    3
    

    
    
    

    $78.9
    $81.9
    65 EUR
    67.50 EUR

    https://example.org/images/thumbs/100x100/2172.png
    https://example.org/images/thumbs/200x200/2172.png
    https://example.org/images/thumbs/600x600/2172.png

    html tags in description.
    

    NK8277S
    8288881881818
    2172

    0.42
    1
    2021-07-15

    
      
        
        
      
      
        
        
      
    
  
  


        
      
        
          {
  "items": [
    {
      "identity": "NH757A",
      "title": "Black Nike Shirt",
      "web_url": "https://example.org/2172-black-nike-shirt",

      "availability": 1,
      "availability_rank": 3,
      "availability_rank_text": "In external warehouse / Ships within 5 days",

      "category": [
        ["Apparel", "Men", "Shirts"],
        ["Seasons", "Summer", "Shirts"]
      ],
      "brand": "Nike",

      "price": "$78.9",
      "price_old": "$81.9",
      "price_eur": "65 EUR",
      "price_eur_old": "67.50 EUR",

      "image_link_s": "https://example.org/images/thumbs/100x100/2172.png",
      "image_link_m": "https://example.org/images/thumbs/200x200/2172.png",
      "image_link_l": "https://example.org/images/thumbs/600x600/2172.png",

      "description": "A nice &amp; comfortable shirt. It's ok to use html tags in description.",
      "labels": "Summer sale, Free shipping",

      "product_code": "NK8277S",
      "ean": "8288881881818",
      "to_cart_id": "2172",

      "margin": 0.42,
      "boost": 1,
      "introduced_at": "2021-07-15",

      "parameters": [
        {
          "name": "Size",
          "value": "XS, M, L, XL"
        },
        {
          "name": "Material",
          "value": "Cotton (80%), Polyester (20%)"
        }
      ]
    }
  ]
}

        
      
    
  
Category feed example
  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          

  
    1
    Shirts
    https://example.org/categories/shirts
  
  
    2
    Blazers
    https://example.org/categories/blazers-men
    Apparel | Men
    https://example.org/images/categories/blazers.png
  
  
    3
    Blazers
    https://example.org/categories/blazers-women
    Apparel | Women
    https://example.org/images/categories/blazers-women.png
  


        
      
        
          {
  "categories": [
    {
      "identity": "1",
      "name": "Shirts",
      "web_url": "https://example.org/categories/shirts"
    },
    {
      "identity": "2",
      "name": "Blazers",
      "web_url": "https://example.org/categories/blazers-men",
      "hierarchy": "Apparel | Men",
      "image_url": "https://example.org/images/categories/blazers.png"
    },
    {
      "identity": "3",
      "name": "Blazers",
      "web_url": "https://example.org/categories/blazers-women",
      "hierarchy": "Apparel | Women",
      "image_url": "https://example.org/images/categories/blazers-women.png"
    }
  ]
}

        
      
    
  

Category feed fields:
      
        
Field Name
Type
Required
Description


        
identity
String
✓
Category Identity.


name
String
✓
Category name.


web_url
String
✓
Canonical URL pointing to category listing. This is where users go when they click on category suggestion in autocomplete.


hierarchy
String

Category hierarchy where the | character serves as a delimiter and does not include the category itself (only the path to it). Luigi's Box will automatically convert the hierarchy into an array for displaying in the autocomplete UI. Make sure the name + hierarchy matches the categories in the product feed.



image_url
String

URL pointing to an image to show in the autocomplete UI. Images should not be larger than 100x100 pixels.


      


  
        
      
    

  
  
    Note
    
        Important notes about categories:
  
    The feed must be flat, no nesting is allowed (no  nested in another  tag).
    If your categories are nested in a category tree, use the hierarchy tag to denote parent categories.
    
The name + hierarchy must match exactly with what you use in the product feed to ensure correct pairing.
  

    
  

Brand feed example
  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          

  
    7
    NiceShirts
    https://example.org/brands/nice-shirts
    https://example.org/images/brands/niceshirts-logo.png
  
  
    8
    Blue
    https://example.org/brands/blue
  


        
      
        
          {
  "brands": [
    {
      "identity": "7",
      "name": "NiceShirts",
      "web_url": "https://example.org/brands/nice-shirts",
      "image_url": "https://example.org/images/brands/niceshirts-logo.png"
    },
    {
      "identity": "8",
      "name": "Blue",
      "web_url": "https://example.org/brands/blue"
    }
  ]
}

        
      
    
  

Brand feed fields:
      
        
Field Name
Type
Required
Description


        
identity
String
✓
Brand Identity.


name
String
✓
Brand name. Must match the brand name used in the product feed.



web_url
String
✓
Canonical URL pointing to brand listing. This is where users go when they click on brand suggestion in autocomplete.


image_url
String

URL pointing to an image to show in the autocomplete UI. Images should not be larger than 100x100 pixels.


      
Article feed example
  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          

  
    37271
    Lorem ipsum title of the blog post
    Short description, perex
    Full text of the article goes here...
    https://example.org/article/blog-post-lorem
  
  
    37272
    Another blog post title
    Another short description
    Full text of this article...
    https://example.org/article/blog-post-ipsum
  


        
      
        
          {
  "articles": [
    {
      "identity": "37271",
      "name": "Lorem ipsum title of the blog post",
      "annotation": "Short description, perex",
      "text": "Full text of the article goes here...",
      "web_url": "https://example.org/article/blog-post-lorem"
    },
    {
      "identity": "37272",
      "name": "Another blog post title",
      "annotation": "Another short description",
      "text": "Full text of this article...",
      "web_url": "https://example.org/article/blog-post-ipsum"
    }
  ]
}

        
      
    
  

Article feed fields:
      
        
Field Name
Type
Required
Description


        
identity
String
✓
Article Identity.


name
String
✓
Article name/title.


web_url
String
✓
Canonical URL pointing to the article. This is where users go when they click on article suggestion in autocomplete.


annotation
String

Short annotation or perex of the article.


text
String

Complete text of the article.


      
Category hierarchy in feeds
Understanding how to properly structure category hierarchies is crucial for accurate search results
and navigation.
How categories work in feeds
Categories are handled using two separate feeds that work together:



Product feed: Contains products with their full category paths using pipe (|) delimiter

Category feed: Contains all categories with their hierarchical relationships

Product feed category structure
In your product feed, include the full category path from top-level to the most specific category:

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          
  white-tshirt-123
  
  /products/white-tshirt
  
  


        
      
        
          {
  "identity": "white-tshirt-123",
  "title": "White T-shirt",
  "web_url": "/products/white-tshirt",
  "category": [
    ["Apparel", "Men", "T-shirts"]
  ]
}

        
      
    
  
Category feed structure
In your category feed, define each category with its hierarchy showing the path to it (not
including itself):

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          
  
  
    category-apparel
    Apparel
    /categories/apparel
  

  
  
    category-men
    Men
    /categories/apparel/men
    Apparel
  

  
  
    category-t-shirts
    T-shirts
    /categories/apparel/men/t-shirts
    Apparel | Men
  


        
      
        
          {
  "categories": [
    {
      "identity": "category-apparel",
      "name": "Apparel",
      "web_url": "/categories/apparel"
    },
    {
      "identity": "category-men",
      "name": "Men",
      "web_url": "/categories/apparel/men",
      "hierarchy": "Apparel"
    },
    {
      "identity": "category-t-shirts",
      "name": "T-shirts",
      "web_url": "/categories/apparel/men/t-shirts",
      "hierarchy": "Apparel | Men"
    }
  ]
}

        
      
    
  
Key principles for category hierarchies


Product feed contains full paths: Apparel | Men | T-shirts


Category feed contains path TO each category:


"Apparel" has no hierarchy (it's top-level)
"Men" has hierarchy Apparel

"T-shirts" has hierarchy Apparel | Men




Exact matching is required: The category name and hierarchy in the product feed must match
exactly with the category feed

Multiple category hierarchies
If a product belongs to multiple category paths, include all paths in the product feed:

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          
  cheddar-cheese-456
  
  /products/cheddar-cheese
  
  


        
      
        
          {
  "identity": "cheddar-cheese-456",
  "title": "Cheddar Cheese",
  "web_url": "/products/cheddar-cheese",
  "category": [
    ["Dairy", "Cow milk"],
    ["Wine", "Snacks"]
  ]
}

        
      
    
  

The corresponding category feed would include all categories from both hierarchies:

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          
  
    category-dairy
    Dairy
    /categories/dairy
  
  
    category-cow-milk
    Cow milk
    /categories/dairy/cow-milk
    Dairy
  
  
    category-wine
    Wine
    /categories/wine
  
  
    category-snacks
    Snacks
    /categories/wine/snacks
    Wine
  


        
      
        
          {
  "categories": [
    {
      "identity": "category-dairy",
      "name": "Dairy",
      "web_url": "/categories/dairy"
    },
    {
      "identity": "category-cow-milk",
      "name": "Cow milk",
      "web_url": "/categories/dairy/cow-milk",
      "hierarchy": "Dairy"
    },
    {
      "identity": "category-wine",
      "name": "Wine",
      "web_url": "/categories/wine"
    },
    {
      "identity": "category-snacks",
      "name": "Snacks",
      "web_url": "/categories/wine/snacks",
      "hierarchy": "Wine"
    }
  ]
}

        
      
    
  
Product variants in feeds
For products that come in different variations (e.g., by size or color), Luigi's Box offers a
"variants search" mode where individual variants are aggregated and only the best match for each
variant group is shown.
Requirements for variant search
To activate this feature:


Link individual variants using the item_group_id attribute
List all variants of the same product consecutively in the feed (no other products between them)

Variant feed structure
  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          

  
  
    NH7636A
    Black Nike Shirt
    https://example.org/2172-black-nike-shirt
    8272
    Black
    M
    1
    $45.00
    
  
  
    NH7636B
    White Nike Shirt
    https://example.org/2173-white-nike-shirt
    8272
    White
    M
    1
    $45.00
  
  
    NH7636C
    Red Nike Shirt
    https://example.org/2174-red-nike-shirt
    8272
    Red
    L
    0
    $45.00
  

  
  

  
    NM2887A
    Black Hoodie - Small
    https://example.org/2175-black-hoodie
    8273
    Black
    S
    1
    $65.00
  
  
    NM2887B
    Black Hoodie - Medium
    https://example.org/2176-black-hoodie-m
    8273
    Black
    M
    1
    $65.00
  
  


        
      
        
          {
  "items": [
    {
      "identity": "NH7636A",
      "title": "Black Nike Shirt",
      "web_url": "https://example.org/2172-black-nike-shirt",
      "item_group_id": "8272",
      "color": "Black",
      "size": "M",
      "availability": 1,
      "price": "$45.00"
    },
    {
      "identity": "NH7636B",
      "title": "White Nike Shirt",
      "web_url": "https://example.org/2173-white-nike-shirt",
      "item_group_id": "8272",
      "color": "White",
      "size": "M",
      "availability": 1,
      "price": "$45.00"
    },
    {
      "identity": "NH7636C",
      "title": "Red Nike Shirt",
      "web_url": "https://example.org/2174-red-nike-shirt",
      "item_group_id": "8272",
      "color": "Red",
      "size": "L",
      "availability": 0,
      "price": "$45.00"
    },
    {
      "identity": "NM2887A",
      "title": "Black Hoodie - Small",
      "web_url": "https://example.org/2175-black-hoodie",
      "item_group_id": "8273",
      "color": "Black",
      "size": "S",
      "availability": 1,
      "price": "$65.00"
    },
    {
      "identity": "NM2887B",
      "title": "Black Hoodie - Medium",
      "web_url": "https://example.org/2176-black-hoodie-m",
      "item_group_id": "8273",
      "color": "Black",
      "size": "M",
      "availability": 1,
      "price": "$65.00"
    }
  ]
}

        
      
    
  
Variant best practices


Each variant needs a unique identity: Even though they belong to the same product group, each
variant must have its own unique identity


Keep variants together: All variants with the same item_group_id must appear consecutively
in the feed

Include distinguishing attributes: Add fields like color, size, or other variant-specific
attributes so users can distinguish between variants

Maintain consistent data: All variants in a group should have similar base information (brand,
category, description) but can differ in variant-specific attributes (color, size, availability, price)

Common mistakes and how to avoid them1. Category mismatch between feeds
Problem: Category in product feed doesn't match category feed exactly.

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          
Apparel | Men's | T-shirts



  T-shirts
  Apparel | Men




Apparel | Men | T-shirts



  T-shirts
  Apparel | Men


        
      
    
  
2. Variants not listed consecutively
  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

  shirt-red-m
  shirt-123


  different-product
  other-456


  shirt-blue-m
  shirt-123




  shirt-red-m
  shirt-123


  shirt-blue-m
  shirt-123


  different-product
  other-456


        
      
    
  
3. Inconsistent data types
Problem: Sending different data types for the same field across products.

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

  prod-1
  1
  0.42


  prod-2
  yes  
  42%  




  prod-1
  1
  0.42


  prod-2
  1
  0.42


        
      
    
  
4. Using dots in parameter names
  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          

  
    N. Size  
    M
  




  
    Size
    M
  


        
      
    
  
5. Incorrect availability_rank values
  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          
20  
0   


1   
7   
15  

        
      
    
  
6. Missing primary category marker
  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          
Apparel | Men | Shirts
Seasons | Summer | Shirts


Apparel | Men | Shirts
Seasons | Summer | Shirts

        
      
    
  
Troubleshooting"My categories aren't showing up in search"
Solution: Verify that:


The category name + hierarchy in the product feed exactly matches the category feed
There are no extra spaces or different delimiters
The pipe character (|) is used consistently with spaces around it

"Prices aren't sorting correctly"
Solution: Ensure your price format is consistent and recognizable. Luigi's Box automatically
extracts numeric values, but unusual formats may cause issues. Use standard formats like:


$45.00
45.00 USD
€45,00
1 234,56 Kč

"Variants aren't grouping together"
Solution: Check that:


All variants share the same item_group_id

All variants with the same item_group_id appear consecutively in the feed
There are no other products between variants of the same group

"Special characters appearing incorrectly"
Solution: Use proper XML encoding:


Wrap text in CDATA: 

Or use entities: Black &amp;amp; White

Never use both CDATA and entities together

"Search results not updating"
Solution: Verify that:


Your feed is accessible from the Luigi's Box servers
The XML/JSON is valid (use an online validator)
The identity values are unique and consistent with analytics events

Using existing feeds
Luigi's Box can work with feeds you may already have for other services:
      
        
Feed Type
Usability
Comments


        
Heureka
No
Uses Heureka-specific categories and usually contains only a subset of products


Google Merchant
Yes
Usually usable, or requires slight modifications


Custom feeds
Contact us
Luigi's Box can process feeds in custom formats - contact support to discuss


      
Multiple product feeds
Luigi's Box can join and merge product data from several feeds to build full product data. This is
useful when:


Performance problems exist with taking a full data snapshot
Multiple data stores need to be accessed
Different data changes at different rates (e.g., static data vs. pricing)

How it works
Luigi's Box can combine up to 5 different feeds:



One driving feed: Contains the primary product data

Up to 4 additional feeds: Contains supplementary data that gets merged

Requirements

A single "join attribute" must be present in all feeds (typically product ID)
The driving feed is processed first
For each product, data from additional feeds is looked up and merged

Example use case
Driving feed (regenerated daily):


Product descriptions
Images
Product parameters
Categories


Additional feed (regenerated hourly):


Pricing
Availability
Stock levels



  
        
      
    

  
  
    Note
    
      Luigi's Box currently does not support multiple driving feeds. The product database cannot be
split into several driving feeds where each contains different products (e.g., 50% in one feed, 50%
in another).

    
  

Updating data: Feeds vs API
While it is technically possible to provide product updates using both feeds and API simultaneously,
this approach is not recommended as it will lead to subtle and hard-to-debug data discrepancies.
Why this causes issues
The intuitive expectation might be to:


Provide Luigi's Box a feed with product data that processes periodically
Use the Partial Update API to update frequently changing attributes (pricing, availability) in
real time


However, this leads to unexpected inconsistencies because:


Feed processing is not instant, it takes time depending on the number of products
The feed is a snapshot of data at download time
While processing is in progress, API updates may occur
The feed processing will then overwrite those API updates back to the old snapshot state
Luigi's Box currently doesn't provide protection against this data inconsistency

Recommended alternatives
Instead of combining feeds and API:



Increase feed processing frequency: Process feeds more often (e.g., every 15 minutes instead
of hourly)

Split product data into multiple feeds: Use the multiple feeds feature
to separate static data (updated daily) from dynamic data (updated hourly)

Use API exclusively: If real-time updates are critical, use the API for all data updates

Additional resources


Content Update API - API-based indexing alternative

Identity Guide - Understanding product identities

Add to Cart - Implementing cart functionality

Dynamic Pricing Solutions - Handling complex pricing scenarios

Product Listing Pages (PLP) - Category page search integration]]></content>
      <icon>database-fill-gear</icon>
    </page>
    <page>
      <url>/analytics.html</url>

      <title></title>
      <content><![CDATA[Core Concepts
Beyond choosing an integration path, it's important to understand the concepts that make Luigi's Box Analytics powerful.



The Feedback Loop: One of the primary goals of analytics is to provide feedback to the various AI models inside Luigi's Box. For this to work effectively, it is vital that products are identified using the same identifier in analytics events as used when indexing the data. Changing the identity of an object will cause the models to forget everything they have learned about it historically.

Interaction Data: A complete picture of user interaction is formed by several key pieces of information. This includes the List of products a user saw, the Query they typed, any Filters they applied to narrow the results, and any Conversions (like adding an item to the cart).

Bootstrapping with Historical Data: To shorten the initial ramp-up period, Luigi's Box allows for the import of past or offline transactions. By uploading historical purchase data, services like Behavioral Recommendations and Personalization can achieve full effectiveness much faster, as the AI models are trained on this data.]]></content>
      <icon>tornado</icon>
    </page>
    <page>
      <url>/quickstartguides/product listing.html</url>

      <title></title>
      <content><![CDATA[]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/autocomplete/autocomplete_query_suggestions.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide is for developers who need full control over the look and feel of their autocomplete suggestions or are integrating in a non-web environment, such as a mobile application. By calling the Autocomplete API directly, you can fetch suggestion data and render it in any custom UI you design.

Unlike the Autocomplete.js library, this method requires you to handle the API requests manually, render the results, and, most importantly, implement the analytics tracking for user interactions.
What you'll learn

How to make a GET request to the Autocomplete API endpoint.
The required parameters to send with your request to get relevant suggestions.
How to understand the basic structure of the JSON response
The critical importance of sending manual analytics events when using the API directly.

Who is this guide for

Developers who are building a custom autocomplete UI on their website.
Mobile developers (iOS, Android) who are integrating search suggestions.
Developers who are sending requests from a backend server.

Prerequisites
Before you start, please ensure you have the following in place:


The ability to make HTTP GET requests from your application or server.
Your Luigi's Box trackerId.

Step-by-step
The process involves three conceptual steps: making a request to the API with the user's query, understanding the response, and then manually sending analytics events to ensure the system can learn from user behavior.
Step 1: Set up the HTML structure
First, you need the basic HTML elements: an input field for the user to type in and a container where the results will be displayed.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
    
    


        
      
    
  

This snippet provides a search input with the ID search-input and an empty div with the ID autocomplete-results where we will dynamically render the suggestions.
Step 2: Make the API request
As a user types into your search box, you will make a GET request to the following endpoint. It is recommended to debounce this request (e.g., wait 200-300ms after the user stops typing) to avoid sending excessive requests.
Endpoint
GET https://live.luigisbox.com/autocomplete/v2
Required parameters


tracker_id: Your unique site identifier.

q: The user's current input from the search box.

type: A comma-separated list of the content type you want suggestions for, along with the quantity for each (e.g, product:6,category:3,query:5).

Optional parameters (recommended)


hit_fields: A comma-separated list of attributes you need (e.g., title,url,price,image_link). Using this parameter is highly recommended to keep the API response fast and small by only fetching the data you will display.

Example
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // CONFIGURATION
const TRACKER_ID = "YOUR_TRACKER_ID"; // Replace with your actual Tracker ID
const AUTOCOMPLETE_API_URL = "https://live.luigisbox.com/autocomplete/v2";
const searchInput = document.getElementById('search-input');

const debounce = (func, delay) => {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  }
}

const getSuggestions = async (query) => {
  if (!query) {
    // Clear results if input is empty
    document.getElementById('autocomplete-results').innerHTML = '';
    return:
  }

  try {
    const response = await axios.get(AUTOCOMPLETE_API_URL, {
        params: {
            tracker_id: TRACKER_ID,
            q: query,
            type: 'product:5,category:3,query:5', 
            hit_fields: 'title,url,price,image_link' 
        }
    });

    const hits = response.data.hits; // We will render these hits in the next step
  } catch (error) {
    console.error("Failed to fetch autocomplete suggestions:", error);
  }
};

searchInput.addEventListener('input', debounce(e => {
    getSuggestions(e.target.value);
}, 300));


        
      
    
  

This code sets up the necessary configuration and an event listener on our search input. When the user types, it calls the getSuggestions function, which makes a GET request to the Autocomplete API with the required parameters (tracker_id, q, type) and the recommended hit_fields parameter.
Step 3: Understand the JSON response and render it
The API will return a JSON object where the most important part is the hits array. Each object in this array is a suggestion containing its type (e.g., "item", "category") and an attributes object with details like title, price, and image_link.
Example: Simplified JSON response
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [
    {
      "url": "https://yourshop.com/products/white-v-neck",
      "attributes": {
        "title": "White Shirt V-Neck",
        "price": "25 EUR",
        "image_link": "https://yourshop.com/images/shirt.jpg",
      },
      "type": "item",
      "updated_at": "..."
    },
    {
      "attributes": {
        "title": "White T-Shirts"
      },
      "type": "category"
    }
    //... more hits
  ]
}

        
      
    
  

You will need to parse this JSON and use the data within the attributes of each hit to render your custom autocomplete UI. Note that the API may return highlighted text (using  tags) within fields like title.
Example: Rendering results
Now that we are fetching the suggestions, we need a function to render them into our autocomplete-results container. This function will parse the hits array from the API response and build the HTML for the suggestions.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function renderResults(hits) {
    const resultsContainer = document.getElementById('autocomplete-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    if (!hits || hits.length === 0) return;

    // Group results by type (e.g., 'item', 'category')
    const groupedResults = hits.reduce((acc, hit) => {
        (acc[hit.type] = acc[hit.type] || []).push(hit);
        return acc;
    }, {});

    const groupTitleMap = { item: 'Products', category: 'Categories', query: 'Popular Searches' };

    for (const type in groupedResults) {
        const groupDiv = document.createElement('div');
        // ... code to create and append group title ...

        groupedResults[type].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'result-item';
            // Set data attributes for analytics tracking
            itemDiv.dataset.itemId = item.url || item.attributes.title;
            itemDiv.dataset.itemType = item.type;

            // Build the inner HTML for the suggestion item
            let innerHTML = '';
            if (item.attributes.image_link) {
                innerHTML += ``;
            }
            innerHTML += `${item.attributes.title}`;
            if (item.attributes.price) {
                innerHTML += `${item.attributes.price}`;
            }
            itemDiv.innerHTML = innerHTML;
            groupDiv.appendChild(itemDiv);
        });
        resultsContainer.appendChild(groupDiv);
    }
}

// Now, call this function inside getSuggestions after fetching the data:
// (Inside the `getSuggestions` try block)
// const hits = response.data.hits;
// renderResults(hits); // Add this line

        
      
    
  

This renderResults function takes the hits array, groups the suggestions by type (e.g., "item", "category"), and dynamically creates HTML elements for each suggestion, including images and prices. You should call this function from within your getSuggestions function after you receive a successful API response.
Step 4: Implement manual Analytics tracking (CRITICAL)
This is the most important difference compared to using Autocomplete.js. When you use the API directly, analytics are NOT tracked automatically. You are responsible for sending the events.



Track the view (Autocomplete list event): Immediately after you display the suggestions from the API response, you must send an Autocomplete list event to Luigi's Box. This tells the system which suggestions were shown to the user. Refer to our "Quickstart: Send your first search events with the Events API" guide, but use "Autocomplete" as the list name instead of "Search Results".

Track the click: When a user clicks on one of your rendered suggestions, you must send a click event to report this interaction. This event should include the unique identifier of the clicked item.


Without these manual analytics events, Luigi's Box cannot learn which suggestions are effective, and the quality of your autocomplete results will not improve over time.
Example: Sending Analytics via the Events API
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          const ANALYTICS_API_URL = "https://api.luigisbox.com/";
const CLIENT_ID = Math.floor(Math.random() * 1e18); // A persistent user ID is better

async function sendAnalyticsEvent(payload) {
    try {
        axios.post(ANALYTICS_API_URL, payload);
        console.log('Analytics event sent:', payload.type);
    } catch (error) {
        console.error('Failed to send analytics event:', error);
    }
}

// 1. Send VIEW event after rendering results
// (Add this inside the `getSuggestions` function, after calling renderResults)
if (hits &amp;&amp; hits.length > 0) {
    const analyticsPayload = {
        id: uuid.v4(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Autocomplete": {
                query: { string: query },
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    url: hit.url || hit.attributes.title,
                    position: index + 1
                }))
            }
        }
    };
    sendAnalyticsEvent(analyticsPayload);
}

// 2. Send CLICK event when a user selects a suggestion
document.getElementById('autocomplete-results').addEventListener('click', (e) => {
    const resultItem = e.target.closest('.result-item');
    if (resultItem) {
        const itemId = resultItem.dataset.itemId;

        const clickPayload = {
            id: uuid.v4(),
            type: "click",
            tracker_id: TRACKER_ID,
            client_id: CLIENT_ID,
            action: {
                type: "click",
                resource_identifier: itemId
            }
        };
        sendAnalyticsEvent(clickPayload);

        // Hide results after click
        document.getElementById('autocomplete-results').innerHTML = '';
    }
});

        
      
    
  

This code adds the sendAnalyticsEvent helper function. Crucially, it shows how to construct and send the Autocomplete list view event right after rendering suggestions, and how to add a click listener to send a click event when a user selects a suggestion.
Example: Sending Analytics via dataLayer collector
If you prefer to send the events via the dataLayer collector to track the view push a view_item_list event to the dataLayer after rendering the suggestions, instead of calling the sendAnalyticsEvent function.

To track the click, push a select_item event to the dataLayer.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // This replaces the Events API call for the view
if (hits &amp;&amp; hits.length > 0) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_item_list",
      ecommerce: {
        item_list_name: "Autocomplete", // This name is critical
        search_term: query,
        items: hits.map((hit, index) => ({
          item_id: hit.url || hit.attributes.title, // Must match your catalog ID
          item_name: hit.attributes.title,
          index: index + 1,
          item_list_id: "autocomplete"
        }))
      }
    });
}


// This replaces the Events API call for the click
// (Inside your click listener)
const itemId = resultItem.dataset.itemId;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "select_item",
  ecommerce: {
    items: [
      {
        item_id: itemId // The ID of the clicked item
      }
    ]
  }
});

        
      
    
  
Best Practices


Avoid proxying requests: For the best performance and lowest latency, make the API calls directly from the client-side (the user's browser or mobile app). Avoid proxying requests through your own backend server.

Use hit_fields: To minimize the response size and improve speed, use the optional hit_fields parameter in your API call to request only the attributes you actually need to display (e.g., &amp;hit_fields=title,price,image_link).

Use DNS prefetch for web: If you are integrating on a website, add  to your HTML  to speed up the first request.

Next Steps
Now that you have a basic Autocomplete widget running, you can explore its more advanced features:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/autocomplete/customizing_autocomplete_js.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide is for developers who have already implemented a basic autocomplete widget using our "Quickstart: Implementing Autocomplete with Autocomplete.js". Now that you have a working setup, you can explore the advanced configuration options available in the Autocomplete.js library to tailor the widget's appearance and functionality to your specific needs.

We will cover customizing layouts, adding interactive actions, filtering results, and more. All options are configured within the main AutoComplete({...}) settings object.
What you'll learn

How to change the visual layout of the autocomplete widget.
How to add custom interactive actions, like an "Add to Cart" button, to your suggestions.
How to pre-filter the suggestions that appear in the widget.
How to customize text and translations for multi-language sites.

Who is this guide for

Developers who have implemented the basic Autocomplete.js quickstart and want to explore its advanced customization features.

Prerequisites
Before you start, please ensure you have the following in place:


A working autocomplete implementation based on the Autocomplete.js quickstart guide.
Familiarity with the basic AutoComplete configuration object.

Step-by-step
We will now modify the code from the previous guide. The changes involve adding a new API endpoint, creating a function to fetch top items, updating your analytics tracking, and adding a focus event listener.
Step 1: Change the visual layout
The Autocomplete.js library comes with several built-in layouts that you can choose from using the Layout option. The three main layouts are line, grid, and heromobile.

Let's change the heromobile layout from our quickstart to the grid layout.
Example: Modify AutoComplete configuration
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete({
    // --- CHANGE THIS ---
    Layout: "grid", // Change from "heromobile" to "grid"

    TrackerId: "YOUR_TRACKER_ID",
    Locale: "en",
    CloseWhenQueryIsEmpty: false,
    Types: [
        { type: "item", name: "Products", recommend: {} },
        { type: "category", name: "Categories", recommend: {} }
    ]
    // ... rest of your configuration
}, "#your-search-input");

        
      
    
  

By simply changing the Layout value, you can dramatically alter the widget's appearance. Luigi's Box recommends "heromobile".
Step 2: Add an "add to cart" action
You can add interactive buttons to your suggestion items using the Actions configuration option. This is perfect for allowing users to add a product directly to their cart from the autocomplete dropdown.

The Actions option is an array of action objects. We'll add one that only appears for product (item) suggestions.
Example: Add the Actions array to your configuration
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete({
    Layout: "grid",
    TrackerId: "YOUR_TRACKER_ID",
    Types: [{ type: "item", name: "Products" }],

    // --- ADD THIS ENTIRE SECTION ---
    Actions: [
        {
            // Only show this action for rows that are products
            forRow: function (row) {
                return row.type === "item";
            },
            iconUrl: "https://www.yourshop.com/assets/buy-icon.png", // Use your own icon URL
            title: "Add to Cart",
            action: function (event, result) {
                // Prevent the default click action (navigating to the product)
                event.preventDefault(); 

                // Your custom logic here
                const productId = result.url; // Assuming URL is the product ID
                console.log(`Adding product ${productId} to cart...`);
                // e.g., your_sites_add_to_cart_function(productId);
            }
        }
    ]
    // ... rest of your configuration
}, "#your-search-input");

        
      
    
  

The action function gives you full control over what happens when the button is clicked, allowing you to integrate it with your site's cart logic.
Step 3: Add contextual filtering
You can pre-filter suggestions to make them more relevant to the page the user is on. For example, on a "Women's Apparel" category page, you might want the autocomplete only to suggest products from that specific category. You can achieve this with the defaultFilters option within a Type configuration.
Example: Add defaultFilers to a specific type

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete({
    Layout: "hero",
    TrackerId: "YOUR_TRACKER_ID",
    Types: [{
        type: "item",
        name: "Products for Her",

        // --- ADD THIS ---
        // This filter ensures only items with category: "her" are shown
        defaultFilters: {
            category: "her" 
        }
    }]
    // ... rest of your configuration
}, "#your-search-input");

        
      
    
  

This makes the autocomplete "smarter" by adapting its suggestions to the user's current browsing context.
Step 4: Customize text (localization)
You can easily change the default text of the widget (e.g., "Show all products", section headers) for different languages using the Locale and Translations options.
Example: Add the Translations object to your configuration
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          AutoComplete({
    Layout: "grid",
    TrackerId: "YOUR_TRACKER_ID",
    Locale: "en", // The current language of the website
    Types: [{ type: "item", name: "Products" }],

    // --- ADD THIS ---
    Translations: {
        en: {
            // Override only the translations you want to change
            showAllTitle: "View All Matching Results",
            types: {
                item: {
                    recommendName: "Our Top Picks" // Changes the title for on-focus items
                }
            }
        }
    }
}, "#your-search-input");

        
      
    
  

This allows you to fully integrate the widget's language with the rest of your site and even create dictionaries for languages not supported by default.
Best Practices


Trust automatic analytics: One of the biggest advantages of Autocomplete.js is that it handles sending all necessary analytics events automatically. You do not need to implement manual tracking when using this library.

Set Content Security Policy (CSP): To minimize the response size and improve speed, use the optional hit_fields parameter in your API call to request only the attributes you actually need to display (e.g., &amp;hit_fields=title,price,image_link).

Check for conflicts: Some third-party scripts (like older versions of Mootools) can interfere with Autocomplete.js. If you encounter issues, the autocomplete reference page offers workarounds.

Next Steps
Now that you have learned how to customize your Autocomplete.js widget, you can either continue to explore more advanced options or consider a direct API integration if you need even greater control.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/autocomplete/implementing_top_items_suggestions_api.html</url>

      <title></title>
      <content><![CDATA[Introduction
A powerful way to enhance product discovery is to provide suggestions the moment a user shows intent by clicking into your search bar, even before they start typing. This guide will show you how to use the Top Items API to implement this feature for a custom UI.

This approach is for developers who need full control over the user experience and are responsible for rendering the suggestions and tracking all related analytics events.
What you'll learn

How to call the Top Items API to fetch popular items.
How to call the Personalized Top Items API to fetch user-specific suggestions.
The critical importance of manually tracking analytics for these "on focus" suggestions.

Who is this guide for

Developers who have understood the "Quickstart: Getting query suggestions via the Autocomplete API" and now want to add on-focus suggestions.
Mobile developers (iOS, Android) who are integrating search suggestions.
Any developer needing to fetch top or personalized item data directly.

Prerequisites
Before you start, please ensure you have the following in place:


A working search input field in your application.
The ability to make HTTP GET requests from your application and render the results.
Your Luigi's Box trackerId.
A setup for manually sending analytics events, as detailed in the Events API guides.

Step-by-step
We will now modify the code from the previous guide. The changes involve adding a new API endpoint, creating a function to fetch top items, updating your analytics tracking, and adding a focus event listener.
Step 1: Add the Top Items API endpoint
In your JavaScript configuration section, add a new constant for the Top Items API URL.
Example
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- CONFIGURATION ---
const TRACKER_ID = "YOUR_TRACKER_ID";
const TOP_ITEMS_API_URL = "https://live.luigisbox.com/v1/top_items"; //  {
    try {
        const response = await axios.get(TOP_ITEMS_API_URL, {
            params: {
                tracker_id: TRACKER_ID,
                type: 'product:5,category:3',
                hit_fields: 'title,url,price,image_link'
            }
        });
        const hits = response.data.hits;

        // Override the default group titles for this specific view
        const customTitles = { item: 'Popular Products', category: 'Top Categories' };
        renderResults(hits, customTitles); 

        // We will send analytics in the next step

    } catch (error) {
        console.error("Failed to fetch top items:", error);
    }
};


        
      
    
  

This function is very similar to your existing getQuerySuggestions function but calls a different endpoint and doesn't require a q (query) parameter. It also prepares custom titles for the suggestion groups.
Step 3: Update Analytics for different suggestion types
To distinguish between regular query-based suggestions and these new "on-focus" suggestions, we need to modify our analytics tracking. We will update the sendAutocompleteViewAnalytics function to accept a custom filter.
Example: Replace your existing sendAutocompleteViewAnalytics function with this enhanced version
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // This function replaces your previous analytics function
function sendAutocompleteViewAnalytics(query, hits, customFilters = {}) {
    const analyticsPayload = {
        id: uuid.v4(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Autocomplete": {
                query: { 
                    string: query || "",
                    // Add custom filters to distinguish the source
                    filters: customFilters 
                },
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    url: hit.url || hit.attributes.title,
                    position: index + 1
                }))
            }
        }
    };
    sendAnalyticsEvent(analyticsPayload);
}

        
      
    
  
Example: Update the two fetcher functions
In getTopItemSuggestions, add this line after renderResults(hits):

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // Send analytics with a filter to identify this as an "on-focus" event
if (hits &amp;&amp; hits.length > 0) {
    sendAutocompleteViewAnalytics(null, hits, { source: 'top_items_on_focus' });
}

        
      
    
  

In your existing getQuerySuggestions, modify the analytics call:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // Change the original analytics call to this:
if (hits &amp;&amp; hits.length > 0) {
    sendAutocompleteViewAnalytics(query, hits); // No custom filter needed here
}

        
      
    
  
Step 4: Add the focus event listener
Finally, add a focus event listener to your search input. This will trigger your new getTopItemsSuggestions function whenever a user clicks into an empty search box.
Example
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- EVENT LISTENERS ---
searchInput.addEventListener('input', debounce(e => getQuerySuggestions(e.target.value), 300));

// ADD THIS NEW LISTENER
searchInput.addEventListener('focus', () => {
    // Only fetch top items if the search box is empty
    if (searchInput.value === '') {
        getTopItemsSuggestions();
    }
});

        
      
    
  
Advanced: Adding personalized Top itemsStep 1: Add the Personalized API endpoint
First, add the URL for the personalized API to your configuration constants.
Example: Add the following line to your configuration
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          const PERSONALIZED_TOP_ITEMS_API_URL = "https://live.luigisbox.com/v1/personalized_top_items";

        
      
    
  
Step 2: Create a function for personalized suggestions
Now, create a new function to handle fetching personalized data. This function calls the personalized endpoint and requires a user_id parameter.
Example: Add the following function to your core logic
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          const getPersonalizedTopItemsSuggestions = async (userId) => {
    if (!userId) return; // Don't run if there's no user ID

    try {
        const response = await axios.get(PERSONALIZED_TOP_ITEMS_API_URL, {
            params: {
                tracker_id: TRACKER_ID,
                user_id: userId, // The specific user's ID
                type: 'items:5,query:3' // e.g., personalized items and last searched queries
            }
        });
        const hits = response.data.hits;
        const customTitles = { item: 'Recommended For You', query: 'Your Recent Searches' };
        renderResults(hits, customTitles);

        // Add the analytics call for this new function
        if (hits &amp;&amp; hits.length > 0) {
            sendAutocompleteViewAnalytics(null, hits, { source: 'personalized_top_items' });
        }
    } catch (error) {
        console.error("Failed to fetch personalized top items:", error);
    }
};

        
      
    
  
Step 3: Update the focus event listener
The final step is to update your focus event listener with logic to choose which function to call based on whether a user is logged in.
Example: Replace your existing focus listener with the following version
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // Replace the previous searchInput.addEventListener('focus', ...) with this:
searchInput.addEventListener('focus', () => {
    if (searchInput.value === '') {
        // In a real application, you would check if the user is logged in
        // and get their actual ID from your session or auth system.
        const currentUserId = "user-123"; // Example: get this from your session

        if (currentUserId) {
            getPersonalizedTopItemsSuggestions(currentUserId);
        } else {
            getTopItemsSuggestions();
        }
    }
});

        
      
    
  
Best Practices


You are in control: Remember that when using the direct API, you are fully responsible for the implementation, including all analytics tracking. Failure to send analytics events will prevent the system from learning.

Use hit_fields: To minimize the response size and improve speed, use the optional hit_fields parameter in your API call to request only the attributes you actually need to display (e.g., &amp;hit_fields=title,price,image_link).

Match user IDs for personalization For the Personalized Top Items API to be effective, the user_id you send in the API request must match the customer_id you send in your analytics events for that same user.

Next Steps
Now that your on-focus suggestions are working, you can continue to enhance your autocomplete experience.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/autocomplete/implementing_trending_queries_suggestions.html</url>

      <title></title>
      <content><![CDATA[Introduction
In addition to showing suggestions based on user input or popular items, you can guide users by displaying "Trending Queries"—a list of popular and relevant search phrases. This list is based on your site's analytics and can be customized directly from the Luigi's Box application dashboard.

This guide will show you how to use the Trending Queries API to fetch this list and how to implement it in your custom UI, for example, as initial suggestions or as an animated search box placeholder.
What you'll learn

How to call the Trending Queries API to fetch a list of popular search terms.
How to understand the simple JSON response structure.
Practical examples of how to use this data to enhance your user interface.

Who is this guide for

Developers looking to add another layer of guidance to their custom search implementation.
Developers who want to implement features like animated search box placeholders or a "Trending Searches" section on their site.

Prerequisites
Before you start, please ensure you have the following in place:


A working search input field in your application.
The ability to make HTTP GET requests from your application and render the results.
Your Luigi's Box trackerId.
A setup for manually sending analytics events, as detailed in the Events API guides.

Step-by-step
The process involves making a simple GET request to the API and then using the returned list of queries in your UI.
Step 1: Add the Top Items API endpoint
Unlike other APIs, this endpoint does not take a user query (q) or a type parameter. The list of queries is controlled entirely from your Luigi's Box application dashboard, where you can set the number of queries, ban terms, or add your own.
Endpoint
GET https://live.luigisbox.com/v2/trending_queries
Required parameters


tracker_id: Your unique site identifier

Example
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'json'

TRACKER_ID = "YOUR_TRACKER_ID"
BASE_URL = "https://live.luigisbox.com"
API_ENDPOINT = "/v2/trending_queries"

conn = Faraday.new(url: BASE_URL)
response = conn.get(API_ENDPOINT, { tracker_id: TRACKER_ID })

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error: #{response.status}"
end

        
      
        
          request('GET', $apiEndpoint, [
    'query' => ['tracker_id' => $trackerId]
]);

echo $response->getBody()->getContents();
?>

        
      
        
          const axios = require('axios');

const TRACKER_ID = "YOUR_TRACKER_ID";
const API_ENDPOINT = "https://live.luigisbox.com/v2/trending_queries";

async function getTrendingQueries() {
  try {
    const response = await axios.get(API_ENDPOINT, {
      params: { tracker_id: TRACKER_ID }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch trending queries:", error);
    return [];
  }
}

getTrendingQueries();

        
      
    
  
Step 2: Understand the JSON Response
The API returns a simple array of objects. Each object contains a title (the query string) and an optional links array if you have configured a "top hit" URL for that query in the Luigi's Box application.
Example: JSON response
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "title": "women's running shoes"
  },
  {
    "title": "kids backpacks",
    "links": [{
      "rel": "top_content",
      "href": "https://yourshop.com/kids/backpacks"
    }]
  },
  {
    "title": "water bottle"
  }
]

        
      
    
  
Step 3: Implement the feature
You can use the list of trending queries in several ways. A common and engaging implementation is to create an animated placeholder for your search input.
Example: Animated placeholder
The following JavaScript snippet shows how to fetch the trending queries and cycle through them as the placeholder text in your search input.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          async function animatePlaceholder() {
    const searchInput = document.getElementById('search-input');
    const trendingItems = await getTrendingQueries();
    const queries = trendingItems.map(item => item.title);

    if (!queries || queries.length === 0) return;

    const typingSpeed = 100; // Time in ms between each character
    const pauseBeforeDelete = 2000; // Time in ms to wait before deleting
    const deletingSpeed = 50; // Time in ms between each character deletion
    const pauseAfterDelete = 500; // Time in ms to wait after a word is deleted

    let queryIndex = 0;

    // Helper function to create a delay using promises
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Infinite loop to cycle through queries
    while (true) {
        const currentQuery = queries[queryIndex];

        // --- Typing effect ---
        for (let i = 0; i  0; i--) {
            searchInput.placeholder = `Search... ${currentQuery.substring(0, i - 1)}`;
            await sleep(deletingSpeed);
        }

        // Pause after deletion before starting the next word
        await sleep(pauseAfterDelete);

        // Move to the next query, or loop back to the first
        queryIndex = (queryIndex + 1) % queries.length;
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', animatePlaceholder);

        
      
    
  
Analytics for trending queries
No special "view" analytics event is needed for displaying trending queries. However, if a user clicks on a trending query suggestion that you've rendered in a list, your application should:


Populate the search input with that query string.
Execute a search for that term.
This will then trigger your standard "Search Results" view event, as detailed in the analytics guides.

Best Practices


Manage queries in the UI: Remember that the content of the trending queries list is managed from the Luigi's Box application dashboard ("Search > Search Suggestions Customization"), not through API parameters. This allows non-developers to curate the list easily.

Use for guidance: Trending queries are best used as a gentle guide to help users who don't know what to search for, rather than as primary search results themselves.

Next Steps
You have now learned how to implement all the core API-driven features of a custom autocomplete.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/autocomplete/autocomplete_features_and_integration.html</url>

      <title></title>
      <content><![CDATA[Introduction to Autocomplete
Luigi's Box Autocomplete enhances your website's search experience by providing users with relevant, real-time suggestions from the very first keystroke. This "search-as-you-type" functionality helps users find what they're looking for faster, discover relevant products or content more easily, and ultimately improves the overall user journey and potential for conversion.

This guide provides an overview of Autocomplete's key features, the underlying APIs that power it, and the different strategies you can adopt for integration.
Key Autocomplete features &amp; supporting APIs
Luigi's Box Autocomplete is more than just simple query suggestions. It's a versatile tool that can present various types of helpful information:



Dynamic query suggestions:


As a user types, Autocomplete suggests matching products, categories, brands, articles, or even popular past queries.

Powered by: The main Autocomplete API (GET https://live.luigisbox.com/autocomplete/v2). This API takes the user's input and returns relevant hits.



"Top Items" on focus (empty query suggestions):


When a user clicks into an empty search box (before typing anything), you can display a list of generally popular items, recently viewed items, or personalized recommendations.

Powered by: The Top Items API (GET https://live.luigisbox.com/v1/top_items or GET https://live.luigisbox.com/v1/personalized_top_items for personalized results). This allows you to guide users even without an initial query proactively.



"Trending Queries" suggestions:


You can display popular and relevant search phrases, which can be used as search box placeholders or as initial suggestions. These queries are based on analytics events and can be customized from the Luigi's Box application.

Powered by: The Trending Queries API (GET https://live.luigisbox.com/v2/trending_queries).



Integration strategies: Choosing your path
Luigi's Box offers two primary methods for integrating Autocomplete, catering to different needs and technical preferences:
Autocomplete.js library (recommended for most users):
This is a JavaScript widget provided by Luigi's Box that works directly with the JSON APIs and is the simplest option for web integrations, requiring minimal programming, just include the script and the CSS, then provide a configuration. It integrates multiple APIs (Autocomplete, Top items, and Trending queries) into a single, configurable component.

The library offers pre-designed layouts such as "heromobile", "hero", "line" and "grid", which can be used out of the box or customized to meet your design needs. Automatic analytics tracking is built in, ensuring that impressions and clicks on suggestions are sent back to Luigi's Box without additional effort.
Direct API integration (for custom/advanced implementations):
For cases requiring more customization and control, direct API integration allows you to fetch Autocomplete, Top items, and Trending queries directly from Luigi's Box APIs. This approach is ideal for mobile applications (iOS, Android), backend-driven implementations, or web projects with highly specific UI requirements that can't be met using Autocomplete.js.

With this method, developers must handle the API requests and parse JSON responses before rendering suggestions. Additionally, analytics tracking is manual, meaning developers must send an "Autocomplete" list event whenever suggestions are displayed and track user interactions.
The importance of analytics for Autocomplete
Regardless of the integration method, tracking user interactions with Autocomplete suggestions is vital. These analytics events, specifically, impressions of the suggested items/queries and clicks on those suggestions, feed directly into the Luigi's Box AI models. This data allows the system to:


Understand which suggestions are most relevant and helpful.
Learn user preferences over time.
Continuously optimize the ordering and content of Autocomplete results.


As mentioned, if you use Autocomplete.js, this analytics tracking is handled for you. If you opt for Direct API Integration, ensuring you correctly implement analytics is a key part of the setup.
Limitations of Autocomplete
It's important to understand that Autocomplete is optimized primarily for speed (low latency) to provide seamless as-you-type experience. This optimization means:


It typically fetches only a top set of hits ("top-k") rather than scanning the entire index, so it might not provide exact hit counts for the suggestions.
Some of the more time-consuming real-time query analysis performed by the main Search service might not be applied to Autocomplete to the same extent. In rare cases, this can lead to Autocomplete showing slightly different results than a full search for the same query.

Best practices for direct API integration
If you choose the Direct API integration path, the autocomplete Luigi's Box recommends the following best practices:



Avoid proxying requests: If possible, consume the Autocomplete API directly from the frontend (user's browser). Proxying calls through your backend servers can introduce unnecessary latency.

Use DNS prefetch: To reduce latency, add a DNS prefetch for live.luigisbox.com in your HTML  section:


  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
            

        
      
    
  



Fetch only necessary fields: Use the hit_fields parameter in your API calls to request only the data attributes you will display. This can improve response times by reducing payload size.


By understanding these features, integration options, and best practices, you can effectively implement Luigi's Box Autocomplete to enhance your site's product discovery capabilities significantly.
Next steps]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/autocomplete/autocomplete_with_autocompletejs.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides the fastest way to add a powerful, feature-rich autocomplete widget to your website using the Autocomplete.js library. This JavaScript widget is the recommended integration path for most web-based implementations as it handles all the underlying API calls, renders professional layouts, and automatically tracks analytics for you.

By the end of this guide, you will have a working Luigi's Box Autocomplete widget connected to your search input field.
What you'll learn

How to include the necessary Autocomplete.js script and CSS files in your HTML.
How to write the minimal JavaScript configuration to initialize the widget.
How to link the widget to your search input field.
How to verify that your autocomplete implementation is working.

Who is this guide for

Developers who are looking for a fast, out-of-the-box solution for implementing Luigi's Box Autocomplete on their website.

Prerequisites
Before you start, please ensure you have the following in place:


An HTML search input field on your webpage.
Your Luigi's Box trackerId.

Step-by-step
The integration involves adding some tags to your HTML , ensuring you have an  element for your search box, and then adding the initialization script.
Step 1: Add required tags to you HTML 

For the best performance and styling, add the following lines inside the  tag of your webpage. The dns-prefetch link helps the browser connect to Luigi's Box servers faster, and the stylesheet link provides the default styling for the widget.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
  


        
      
    
  
Step 2: Prepare your search input field
Ensure you have an HTML  element for your search box. Give it a unique ID so you can easily target it with the script.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
  


        
      
    
  
Step 3: Add and initialize the Autocomplete.js script
Place the following script block near the end of your HTML , right after your search input field. This script will load the Autocomplete.js library asynchronously and then call an initialization function once it's ready.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  function LBInitAutocomplete() {
    // This function initializes the Luigi's Box Autocomplete widget.
    AutoComplete(
      {
        // --- Configuration Start ---

        Layout: "heromobile",           // Specifies the visual layout. "line", "hero", "grid", and "heromobile" are options.
        TrackerId: "YOUR_TRACKER_ID", // Replace with your actual Tracker ID.
        Locale: "en",             // Set the language for localization (e.g., "en", "de", "sk").
        Types: [                  // Define what content types to search for.
          {
            type: "product",         // Suggest products/items.
            name: "Products"      // The header text for the "item" section.
          },
          {
            type: "category",     // Suggest categories.
            name: "Categories"
          }
        ]

        // --- Configuration End ---
      },
      "#autocomplete-input"       // The CSS selector for your search input field.
    );
  }




        
      
    
  
Key configuration fields explained


Layout: Defines the visual appearance. We've used "line", but "hero", "heromobile", and "grid" are other powerful options.

TrackerId: Your unique identifier for your site within Luigi's Box.

Types: An array specifying which type of content to search for. You can configure each type with its own settings.

Step 4: Add "Top items" suggestions on focus
To provide suggestions the moment a user clicks into an empty search box, you can enhance your configuration. This is a great way to improve product discovery.

You need to add two key options to your AutoComplete configuration:



CloseWhenQueryIsEmpty: false: This top-level option tells the widget to stay open when the input field is empty, which is necessary to display the recommendations.

recommend: {}: Add this object to each content type within your Types array for which you want to show suggestions on focus.

Example: configuration with "Top items"
Here is how you would modify the configuration from Step 3 to enable this feature.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  function LBInitAutocomplete() {
    AutoComplete(
      {
        Layout: "line",
        TrackerId: "YOUR_TRACKER_ID",
        Locale: "en",

        // --- ADD THIS LINE ---
        // This option keeps the widget open when the input is empty
        CloseWhenQueryIsEmpty: false,

        Types: [
          {
            type: "product",
            name: "Products",
            // --- ADD THIS LINE ---
            // This option enables "Top Items" for this type on focus
            recommend: {} 
          },
          {
            type: "category",
            name: "Categories",
            // --- ADD THIS LINE ---
            // Enable "Top Items" for categories as well
            recommend: {}
          }
        ]
      },
      "#autocomplete-input"
    );
  }




        
      
    
  
Step 5: Verify your integration
After adding the code, reload your webpage. Click into the search box and start typing. You should see the Autocomplete widget appear below the input field, showing suggestions for "Products" and "Categories" as you type.
Step 6(Optional): Add more suggestion types
You can easily enhance your autocomplete by showing more types of suggestions, such as popular search queries.

To add popular query suggestions, you simply need to add a new object with type: "query" to your Types array in the AutoComplete configuration.
Example: Configuration with query suggestions
Here is how you would modify the configuration from Step 3 to also include popular searches.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  function LBInitAutocomplete() {
    AutoComplete(
      {
        Layout: "heromobile",
        TrackerId: "YOUR_TRACKER_ID",
        Locale: "en",
        CloseWhenQueryIsEmpty: false,
        Types: [
          {
            type: "item",
            name: "Products",
            recommend: {} 
          },
          {
            type: "category",
            name: "Categories",
            recommend: {}
          },
          // --- ADD THIS OBJECT ---
          {
            type: "query",
            name: "Popular Searches",
            recommend: {} // Also show trending queries on focus
          }
        ]
      },
      "#autocomplete-input"
    );
  }





        
      
    
  
Best Practices


Automatic analytics: One of the biggest advantages of Autocomplete.js is that it handles sending all necessary analytics events automatically. You do not need to implement manual tracking for autocomplete impressions or clicks when using this library.

Content security policy (CSP): If your website uses a strict CSP, you will need to add rules to allow scripts and styles from https://cdn.luigisbox.com and connections to https://live.luigisbox.com.

Potential conflicts: Some third-party scripts (like older versions of Mootools or certain cookie consent managers) can interfere with script loading. If the widget doesn't initialize, consult the Autocomplete js documentation for workarounds, such as using different event listeners for initialization.

Next Steps
Now that you have a basic Autocomplete widget running, you can explore its more advanced features:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/autocomplete.html</url>

      <title></title>
      <content><![CDATA[]]></content>
      <icon>lightning-charge</icon>
    </page>
    <page>
      <url>/quickstartguides/search/building_custom_search_ui.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides a comprehensive walkthrough for building a feature-rich, custom search results page by calling the Search API directly from your frontend. This approach gives you complete control over the final look and feel, allowing you to create a user experience that is perfectly tailored to your brand.

By the end of this guide, you will have a fully functional search page with interactive filters, numbered pagination, and dynamic product variant swatches, all powered by your own client-side JavaScript. Click here to see the result.


  
        
      
      !
    

  
  
    Warning
    
        This is a demonstration guide, not production code. In real-world application, for frontend integration, Luigi's box recommends using Search.js, which provides a more robust, maintainable, and production-ready code.
  The recommended way to use the Search API is through your own backend proxy.

    
  

What you'll learn

How to call the Search API directly from the frontend.
How to render search results, facets, and pagination controls from the API response.
How to implement interactive features like filters and variant image previews.
How to manage the browser's URL to create a shareable search experience.

Who is this guide for

Developers building single-page or custom storefront UIs.
Anyone evaluating the Search API for custom integration.

Prerequisites

Your Luigi's Box TrackerId.
The ability to write and serve a standard HTML, CSS, and JavaScript file.
The ability to make HTTP requests from your frontend code.

Step-by-stepStep 1: Set up the HTML structure
Start by creating the basic structure of your search page. This will include a search form, placeholders for results and facets, and containers for pagination.
Example: Basic HTML layout
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

  
  
  Search Demo


  
    
  
  
  
  
  

  
  
  // --- DOM ELEMENTS ---
      const searchForm = document.getElementById("search-form");
      const searchInput = document.getElementById("search-input");
      const resultsContainer = document.getElementById("results-container");
      const facetsContainer = document.getElementById("facets-container");
      const resultsHeading = document.getElementById("results-heading");
      const paginationContainer = document.getElementById(
        "pagination-container"
      );

      // --- STATE MANAGEMENT ---
      let activeFilters = {};
      let currentPage = 1;
    // JS will go here
  



        
      
    
  


  
        
      
    

  
  
    Info
    
        Styling is omitted in this guide for clarity. You can bring your styles to customize the look and feel.

    
  

Step 2: Understand the Search API request
To get results, you send a GET request to the Search API endpoint.
Endpoint
GET https://live.luigisbox.com/search
Required parameters


tracker_id: Your Luigi's Box Tracker ID.

Optional parameters (recommended for a functional search page)


q: The user's search query. While optional (for filter-only pages), this is the primary input for any search box interaction.

f[]: An array of filters using key:value syntax. (Highly Recommended) You should almost always include f[]=type:product to ensure you only get results for your main content type.

hit_fields:  A comma-separated list of product attributes to return. (Highly Recommended) Requesting only the fields you need (e.g., title,url,price,image_link) significantly improves performance by reducing the response size.

facets:  A comma-separated list of attributes for which you want to receive filter options (e.g., brand,category,price_amount).

size: The number of results per page (default is 10).

page: The page number for pagination (default is 1).

Example: Search API request URL
GET https://live.luigisbox.com/search?tracker_id=&amp;q=digital+piano&amp;f[]=type:product&amp;facets=brand,category,price_amount&amp;hit_fields=title,url,price_amount,image_link,brand,nested,color_code,color,id&amp;page=1
Step 3: Understand the API response
The API responds with a JSON object containing everything needed to render the page.
Example: Search API response
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "results": {
    "query": "digital piano",
    "filters": [
      "type:product"
    ],
    "hits": [
      {
        "url": "/smart-piano-the-one-digital-piano/?variantId=2369748",
        "attributes": {
          "brand": [
            "Smart piano"
          ],
          "color": [
            "Black"
          ],
          "title": "Smart piano The ONE Digital Piano",
          "id": [
            "2369748"
          ],
          "price_amount": 629,
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1774257-1.jpg",
          "color_code": [
            "#3d2b1f"
          ]
        },
        "nested": [
          {
            "url": "/digital-pianos/",
            "attributes": {
              "title": "Digital Pianos"
            },
            "type": "category"
          },
          {
            "url": "/smart-piano/",
            "attributes": {
              "title": "Smart piano"
            },
            "type": "brand"
          },
          {
            "url": "",
            "attributes": {
              "id": [
                "2369745"
              ],
              "brand": [
                "Smart piano"
              ],
              "price_amount": 1279,
              "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1774257.jpg",
              "color": [
                "White"
              ],
              "title": "Smart piano The ONE Digital Piano",
              "color_code": [
                "#ffffff"
              ]
            },
            "type": "variant"
          } // more nested objects 
        ],
        "type": "product"
      }
    ],
    "facets": [
      {
        "name": "brand",
        "type": "text",
        "values": [
          {
            "value": "Yamaha",
            "hits_count": 37
          } // more values
        ]
      },
      {
        "name": "category",
        "type": "text",
        "values": [
          {
            "value": "Musicians",
            "hits_count": 172
          } // more values
        ]
      },
      {
        "name": "price_amount",
        "type": "float",
        "values": [
          {
            "value": "2.89|213.0",
            "hits_count": 36,
            "normalized_hits_count": 0.21
          } //more values
        ]
      }
    ],
    "total_hits": 172
  },
  "next_page": "https://live.luigisbox.com/search?tracker_id=179075-204259&amp;q=digital%20piano&amp;f[]=type:product&amp;facets=brand,category,price_amount&amp;hit_fields=title,url,price_amount,image_link,brand,nested,color_code,color,id&amp;page=2"
}

        
      
    
  
Key fields overview


results.total_hits: The total number of products found for the query, used for building pagination.

results.hits: An array of the product results for the current page. Each hit contains:



attributes: An object with all the product data you've indexed, like title, price_amount, and image_link.

nested: An array containing product variants (e.g., different colors or sizes) if they exist. This allows you to display variant-specific information, like a different image for each color.



results.facets: An array of filter groups (e.g., "brand," "price"). Each facet contains a name and an array of values, where each value has the number of matching products (hits_count).

next_page: A pre-built URL to fetch the next page of results, which is useful for "load more" style pagination.

Step 4: Fetch search results
Here's how to call the Search API with filters and optional query text. This function handles pagination and invokes the rendering functions.
Example: Fetching search results with Axios
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- CONFIGURATION ---
const TRACKER_ID = 'YOUR_TRACKER_ID';
const API_ENDPOINT = 'https://live.luigisbox.com/search';
const RESULTS_PER_PAGE = 9;


// --- API CALL ---
async function getSearchResults(query, filters = {}, page = 1) {
    const params = {
        tracker_id: TRACKER_ID,
        'f[]': ['type:product'],
        facets: 'brand,category,price_amount',
        hit_fields: 'title,url,price_amount,image_link,brand,nested,color_code,color,id',
        size: RESULTS_PER_PAGE,
        page: page
    };

    if (query) {
        params.q = query;
    }

    for (const key in filters) {
        filters[key].forEach(value => {
            params['f[]'].push(`${key}:${value}`);
        });
    }

    try {
        const response = await axios.get(API_ENDPOINT, { params });
        const data = response.data;

        currentPage = page;
        renderResults(data.results);
        renderFacets(data.results.facets);
        renderPagination(data.results.total_hits);
        updateURL(query, filters, page);

        // Track the search event for analytics
        trackSearchView(query, data.hits, page);

    } catch (error) {
        console.error("Error fetching search results:", error);
    }
}

        
      
    
  
Step 5: Render search results and filters
These functions take the API response and generate the HTML for product cards, filter checkboxes, and pagination buttons.
Example: Render products, facets, and page controls


renderResults(resultsData): This function takes the results object from the API response. It iterates through the hits array to build and display a product card for each item, including its image, title, brand, price, and an "Add to cart" button. It also updates the main heading to show the total number of results found.

renderFacets(facetsData): This function takes the facets array from the API response. It processes this array to create the filter sidebar, rendering each facet (like "brand" or "price") as a group of checkboxes with the corresponding value and the count of matching items.

renderPagination(totalHits): This function takes the total_hits number from the API response. It calculates how many pages are needed based on the RESULTS_PER_PAGE constant and then generates the numbered pagination buttons, including the "next" and "previous" controls.

updateURL(query, filters, page): This function manages the browser's history. It takes the current search query, active filters, and page number and updates the URL in the address bar. This creates a shareable link for the current search state and allows the browser's back and forward buttons to work correctly.


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- RENDERING FUNCTIONS ---
function renderResults(resultsData) {
  const queryText = resultsData.query
    ? ` for "${resultsData.query}"`
    : "";
  resultsHeading.textContent = `Showing ${resultsData.hits.length} of ${resultsData.total_hits} results${queryText}`;

  if (resultsData.hits.length === 0) {
    resultsContainer.innerHTML = "No products found.";
    return;
  }

  resultsContainer.innerHTML = resultsData.hits
    .map((result) => {
      const { url, attributes, nested } = result;
      const imageUrl =
        attributes.image_link ||
        "https://placehold.co/400x400/eee/ccc?text=No+Image";
      const title = attributes.title || "No Title Available";
      const brand = attributes.brand ? attributes.brand[0] : "";
      const price = attributes.price_amount
        ? `${attributes.price_amount} EUR`
        : "";
      const productId = attributes.id ? attributes.id[0] : "";

      return `
              
                  
                      
                  
                  
                      ${title}
                      ${brand}
                      
                          ${price}
                          
                                .st0{fill:#fff;}           
                              Add to cart
                          
                      
                  
              
          `;
    })
    .join("");
}

function renderFacets(facetsData) {
  if (!facetsData) {
    facetsContainer.innerHTML = "";
    return;
  }
  facetsContainer.innerHTML = facetsData
    .map((facet) => {
      const content = facet.values
        .map((val) => {
          if (
            val.hits_count === 0 &amp;&amp;
            !activeFilters[facet.name]?.includes(val.value)
          ) {
            return "";
          }
          const isChecked = activeFilters[facet.name]?.includes(val.value)
            ? "checked"
            : "";
          let label = val.value;
          if (facet.name === "price_amount") {
            const [min, max] = val.value.split("|");
            label = `${parseInt(min, 10)} - ${parseInt(max, 10)} EUR`;
          }
          return `
                  
                      
                          
                          ${label}
                          ${val.hits_count}
                      
                  
              `;
        })
        .join("");

      const displayTitle =
        facet.name === "price_amount" ? "Price" : facet.name;

      return `
              
                  ${displayTitle}
                  ${content}
              
          `;
    })
    .join("");
}

function renderPagination(totalHits) {
  const totalPages = Math.ceil(totalHits / RESULTS_PER_PAGE);
  paginationContainer.innerHTML = "";
  if (totalPages &amp;lt;&amp;lt;`;
  paginationHTML += `&amp;lt;`;

  let startPage, endPage;
  if (totalPages = totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  if (startPage > 1) {
    paginationHTML += `1`;
    if (startPage > 2)
      paginationHTML += `...`;
  }

  for (let i = startPage; i ${i}`;
  }

  if (endPage ...`;
    paginationHTML += `${totalPages}`;
  }

  paginationHTML += `&amp;gt;`;
  paginationHTML += `&amp;gt;&amp;gt;`;

  paginationContainer.innerHTML = paginationHTML;
}

// --- URL MANAGEMENT ---
function updateURL(query, filters, page) {
  const urlParams = new URLSearchParams();
  if (query) urlParams.set("q", query);
  if (page > 1) urlParams.set("page", page);

  for (const key in filters) {
    filters[key].forEach((value) => {
      urlParams.append("f[]", `${key}:${value}`);
    });
  }

  const newRelativePath = `?${urlParams.toString()}`;
  if (window.location.search !== newRelativePath) {
    history.pushState({ query, filters, page }, "", newRelativePath);
  }
}

        
      
    
  
Step 6: Handle user interactions
Wire up event listeners for the search form and facet checkboxes. These will trigger new API calls whenever the user refines their search.
Example: Search and filter events
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q") || "";
  const page = parseInt(urlParams.get("page"), 10) || 1;
  const filtersFromUrl = {};
  urlParams.getAll("f[]").forEach((filterString) => {
    const [key, value] = filterString.split(":", 2);
    if (key &amp;&amp; value) {
      if (!filtersFromUrl[key]) filtersFromUrl[key] = [];
      filtersFromUrl[key].push(value);
    }
  });

  searchInput.value = query;
  activeFilters = filtersFromUrl;
  currentPage = page;

  getSearchResults(query, activeFilters, currentPage);
});

window.addEventListener("popstate", (e) => {
  if (e.state) {
    searchInput.value = e.state.query || "";
    activeFilters = e.state.filters || {};
    currentPage = e.state.page || 1;
    getSearchResults(e.state.query, e.state.filters, e.state.page);
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getSearchResults(searchInput.value, activeFilters, 1);
});

facetsContainer.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const facetName = e.target.name;
    const facetValue = e.target.value;

    if (!activeFilters[facetName]) activeFilters[facetName] = [];

    if (e.target.checked) {
      activeFilters[facetName].push(facetValue);
    } else {
      activeFilters[facetName] = activeFilters[facetName].filter(
        (v) => v !== facetValue
      );
      if (activeFilters[facetName].length === 0)
        delete activeFilters[facetName];
    }

    getSearchResults(searchInput.value, activeFilters, 1);
  }
});

paginationContainer.addEventListener("click", (e) => {
  if (e.target.matches(".pagination-button, .pagination-page")) {
    const page = parseInt(e.target.dataset.page, 10);
    if (page &amp;&amp; page !== currentPage &amp;&amp; !e.target.disabled) {
      getSearchResults(searchInput.value, activeFilters, page);
    }
  }
});

        
      
    
  
Step 7: Track Analytics events manually
To help Luigi's Box learning models improve result relevance, you must manually track search and interaction events. The following functions prepare and send this data.



sendAnalyticsEvent: A helper function to post any event payload to the Analytics API.

trackSearchView: Constructs and sends the event when a list of search results is displayed.

trackClickEvent: Sends a "click" event when a user clicks on a product link.

trackConversionEvent: Sends a conversion event, such as "add-to-cart".

Example: Tracking search views, clicks and conversions
This is the most critical step for a manual integration. You must send analytics events to Luigi's Box so our models can learn from user behavior.

First, add the analytics configuration and helper functions to your script.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- ANALYTICS CONFIGURATION ---
const ANALYTICS_API_URL = "https://api.luigisbox.com/";
// In a real application, this should be a persistent ID stored in a cookie or localStorage
const CLIENT_ID = Math.floor(Math.random() * 1e18); 

async function sendAnalyticsEvent(payload) {
    try {
        await axios.post(ANALYTICS_API_URL, payload);
        console.log('Analytics event sent:', payload.type, payload);
    } catch (error) {
        console.error('Failed to send analytics event:', error);
    }
}

function trackSearchView(query, hits) {
    if (!hits || hits.length === 0) return;

    const analyticsPayload = {
        id: crypto.randomUUID(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Search Results": {
                query: { string: query },
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    url: hit.url,
                    position: (currentPage - 1) * RESULTS_PER_PAGE + index + 1
                }))
            }
        }
    };
    sendAnalyticsEvent(analyticsPayload);
}

function trackClickEvent(productId) {
    const clickPayload = {
        id: crypto.randomUUID(),
        type: "click",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        action: {
            type: "click",
            resource_identifier: productId
        }
    };
    sendAnalyticsEvent(clickPayload);
}

function trackConversionEvent(type, productId) {
    const conversionPayload = {
        id: crypto.randomUUID(),
        type: "click", // Conversion events are a type of click
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        action: {
            type: type, // e.g., "add-to-cart"
            resource_identifier: productId
        }
    };
    sendAnalyticsEvent(conversionPayload);
}

        
      
    
  

Finally, add a listener to the resultsContainer to track clicks on product cards and "Add to cart" buttons.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          resultsContainer.addEventListener('click', function(e) {
    const productLink = e.target.closest('.product-link');
    const cartButton = e.target.closest('.add-to-cart-btn');

    if (productLink &amp;&amp; !cartButton) {
        const productId = productLink.dataset.productId;
        trackClickEvent(productId);
    }

    if (cartButton) {
        e.preventDefault();
        const productId = cartButton.dataset.productId;
        trackConversionEvent('add-to-cart', productId);
    }
});

        
      
    
  
Step 8: Add variant swatches (optional)
To enhance the user experience, you can display product variants as swatches. This allows users to see different colors or styles without leaving the search results page.
Example: Adding variant swatches to product cards
Modify the renderResults function to include variant swatches. This example assumes that each product has a nested array containing variant information.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function renderResults(resultsData) {
  const queryText = resultsData.query
    ? ` for "${resultsData.query}"`
    : "";
  resultsHeading.textContent = `Showing ${resultsData.hits.length} of ${resultsData.total_hits} results${queryText}`;

  if (resultsData.hits.length === 0) {
    resultsContainer.innerHTML = "No products found.";
    return;
  }

  resultsContainer.innerHTML = resultsData.hits
    .map((result) => {
      const { url, attributes, nested } = result;
      const imageUrl =
        attributes.image_link ||
        "https://placehold.co/400x400/eee/ccc?text=No+Image";
      const title = attributes.title || "No Title Available";
      const brand = attributes.brand ? attributes.brand[0] : "";
      const price = attributes.price_amount
        ? `${attributes.price_amount} EUR`
        : "";
      const productId = attributes.id ? attributes.id[0] : "";

      let variantSwatches = "";
      const variants = nested?.filter((v) => v.type === "variant") || [];
      if (variants.length > 0) {
        const uniqueColors = new Map();
        variants.forEach((variant) => {
          const colorName = variant.attributes.color?.[0];
          if (colorName) {
            const normalizedColorName = colorName.toLowerCase();
            if (!uniqueColors.has(normalizedColorName)) {
              uniqueColors.set(normalizedColorName, {
                colorCode: variant.attributes.color_code?.[0] || "#ccc",
                image: variant.attributes.image_link || imageUrl,
              });
            }
          }
        });

        if (uniqueColors.size > 0) {
          variantSwatches = '';
          uniqueColors.forEach((data) => {
            variantSwatches += ``;
          });
          variantSwatches += "";
        }
      }

      return `
              
                  
                      
                  
                  
                      ${title}
                      ${brand}
                      ${variantSwatches}
                      
                          ${price}
                          
                                .st0{fill:#fff;}           
                              Add to cart
                          
                      
                  
              
          `;
    })
    .join("");
}

        
      
    
  

Add  event listeners to handle swatch hovers and update the main product image accordingly.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("variant-swatch")) {
    const card = e.target.closest(".product-card");
    const imageElement = card.querySelector(".product-image");
    const newImage = e.target.dataset.image;
    if (imageElement &amp;&amp; newImage) imageElement.src = newImage;
  }
});

document.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("variant-swatch")) {
    const card = e.target.closest(".product-card");
    const imageElement = card.querySelector(".product-image");
    const mainImage = card.dataset.mainImage;
    if (imageElement &amp;&amp; mainImage) imageElement.src = mainImage;
  }
});


        
      
    
  
Best practices


Analytics is not optional: When building a custom UI, you are responsible for sending all analytics events. This is not an optional step; it is essential for the learning models that power search relevance and personalization.

Use a persistent CLIENT_ID: In this example, we generate a random CLIENT_ID on each page load. In a production environment, you should generate this ID once and store it in a long-term cookie or localStorage to track users across sessions.

Provide user feedback: Always provide clear feedback to the user. This includes showing a loading state while fetching data and displaying a "No results found" message when the API returns an empty set.

Handle data fallbacks: Your rendering code should be robust. Always check for the existence of data before trying to access it (e.g., attributes.brand ? attributes.brand[0] : '') and provide sensible fallbacks, like a placeholder image if image_link is missing.

Next steps]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/search/understanding_search.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides a high-level overview of the Luigi's Box Search feature. Search is more than just a search box; it's a powerful system designed to deliver fast, relevant results to your users, complete with advanced features like filtering, dynamic faceting, and automated ranking based on user behavior.
Before diving into a technical implementation, it's important to understand the core features of the search system and the different integration paths available to you.
Core features
Luigi's Box Search is designed to provide a modern, interactive experience for your users.



Faceted search: You can automatically generate advanced filtering menus (facets) from your product data. This allows users to drill down into search results by specifying criteria like category, brand, color, or price range.

Dynamic facets: For stores with a wide variety of products, you can let Luigi's Box system automatically select and display the most relevant facets for any given search query, adapting the UI to the user's needs in real-time.

Customizable ranking: Results are ranked using a multitude of signals, including text relevance, product availability, and data from the analytics feedback loop (e.g., product popularity). You can further influence this ranking by providing data like margin or introduced_at (for new products), or by using manual boosts in the Luigi's Box application.

Variant support: If your products have variants (like different colors or sizes), the search can be configured to either display each variant as a separate result or to intelligently select and display the "best" variant that matches the user's query.

Banner campaigns: You can easily run banner campaigns that are automatically displayed within the search results for specific queries, without any extra development work required using the search.js library.

Integration paths
There are two primary ways to integrate Luigi's Box Search into your website or application. Your choice will depend on your development resources and how much control you need over the user interface.

Search.js library (recommended for web)

This is a powerful, self-hosted JavaScript library that can rapidly build an entire interactive, single-page-application style search interface for you.



Best for: Developers looking for a fast, out-of-the-box solution to create a modern search results page on their website.

Pros:



Full-featured: Includes support for facets, sorting, pagination, and banner campaigns automatically.

Automatic analytics: search.js handles all the necessary analytics tracking for you, which is a major advantage.

Customizable: You can provide your own HTML templates to control the look and feel while the library handles the logic.



Luigi's Box recommendation: This is the recommended path for most web integrations as it provides the most features with the least development effort.


Direct search API (for custom UI / non-web)

This approach involves making direct GET requests to the Luigi's Box Search API endpoint (https://live.luigisbox.com/search) and using the JSON response to build your own user interface from scratch.



Best for:


Developers who need absolute, pixel-perfect control over the UI.
Mobile applications (iOS, Android).
Any non-web environment where a JavaScript library cannot be used.



Pros:



Maximum flexibility: You have complete control over how the results and filters are rendered.



Cons / developer responsibility:



Manual implementation: You are responsible for building the entire UI, including facets, sorting controls, and pagination logic.

Manual analytics: You must manually implement the analytics tracking for search views, clicks, and facet interactions. Without this, the system cannot learn or improve.



Next steps
Now that you understand the features and integration paths, you can proceed to the guide that best fits your needs:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/search/customizing_search_js.html</url>

      <title></title>
      <content><![CDATA[Introduction
While the Search.js library provides a modern and responsive user interface out of the box with its "boo" theme, you will often want to tailor the look and feel to perfectly match your website's branding and layout.
This guide covers how to override the default HTML templates used by Search.js. By providing your own templates, you gain full control over the structure and styling of every part of the search experience, from the overall layout to the individual product tiles and filters.
What you'll learn

How the Search.js templating system works.
How to override the main search layout to rearrange components.
How to customize the template for a single search result to match your site's product listings.
How to change the appearance of facet filters.

Who is this guide for

Developers using Search.js who want to create a custom-branded and uniquely styled search experience.

Prerequisites

You should have a working Search.js implementation, as covered in the "Quickstart: Implementing a Search Results Page with Search.js" guide.
Basic knowledge of HTML and CSS.

Step-by-stepStep 1: Understand how templating works
Search.js uses a simple templating system. To customize it, you need to follow two rules:



Define templates in  tags: Each custom template must be placed inside its own  tag. This tag needs a specific id attribute that tells Search.js which component it corresponds to (e.g., id="template-search" for the main layout).

Load templates first: You must place your custom template  tags in your HTML before the script that loads search.js. This ensures your custom HTML is ready when the library initializes.


If you don't provide a custom template for a component, the library will simply use its default built-in version.
Step 2: Customize the main layout (template-search)
This is the main template that controls the overall structure of your search page. Think of it as the main container for all other UI components. By editing this template, you can define the high-level layout, such as creating a two-column design with filters on the side and results in the main area.
Key components to place:


: The container where all your filter controls (brand, category, etc.) will be rendered.

: The container where the grid of individual search result tiles will appear.

: The component that handles page navigation.

: The dropdown menu that allows users to change the sort order.

Example: Move filters to the right
To move the filter facets from the default left side to the right, you can simply change their order in your HTML structure.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    
    
      Search results for "{{ query }}"
      
      
      
    
    
    
      
    
  


        
      
    
  
Step 3: Customize the search result tile (template-result-default)
This is the most common and impactful customization. This template defines the HTML for a single item in the search results list. You have access to all of your product's indexed data inside the result object, allowing you to display any attribute you need, such as title, image, brand, and price.
Example: Create a custom product card
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    
      
      
        
        {{ attributes.brand }}
        {{ attributes.price_amount | attributes.price }}
      
    
  


        
      
    
  

Key Tip: Use v-html="attributes.title" to ensure that search term highlights (like  tags) are rendered correctly.
Step 4: Customize facet filter templates (template-facet-multichoice)
Finally, you can restyle the filters themselves. Each filter type has its own template. The most common one is template-facet-multichoice, which is used for text-based filters where users can select one or more options (e.g., brand, color).
This template receives the name of the facet (e.g., "brand") and an array of values. Each value object contains the option's name, the number of matching hits (hits_count), and a used flag to indicate if it's currently selected.
Example: Change checkboxes to buttons
If you want to display your brand filters as styled buttons instead of a list of checkboxes, you can override the multichoice facet template.

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    {{ name }}
    
      
      
        
          
          {{ val.value }} ({{ val.hits_count }})
        
      
    
  


        
      
    
  

This example replaces the default list with custom-styled  elements that act as buttons, while keeping the underlying functionality intact.
Best Practices


Start with the 'boo' theme: Even when using custom templates, it's a good idea to keep Theme: 'boo' in your configuration. The theme provides a solid foundation of default styles for components you don't override, ensuring a consistent look.

Keep it simple: Only override the templates you need to change. If the default pagination or sorting component works for your design, there's no need to create a custom version.

Next Steps
With full control over your search UI, you can now focus on the underlying logic and data:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/search/understanding_search_rankings.html</url>

      <title></title>
      <content><![CDATA[Introduction
When a user performs a search, the order of the results is determined by a sophisticated ranking system. It's not a simple text match, Luigi's Box uses an ensemble of AI models and a multitude of signals to present the most relevant, useful, and profitable products first.

Understanding how this ranking works is key to optimizing your search. This guide breaks down the standard ranking model and explains the various ways you can influence it, from providing richer product data to making manual adjustments in the Luigi's Box App.
What you'll learn

The core signals that power Luigi's Box ranking.
How to influence ranking using product data attributes.
How to manually override ranking for specific products or queries.

Who this guide is for

Developers and e-commerce managers looking to optimize search performance.
Teams promoting new, seasonal, or high-margin products.
Anyone seeking to improve product visibility in Luigi's Box-powered search.

Prerequisites

Familiarity with how product data is indexed in Luigi's Box.
Access to your Luigi's Box App for testing manual adjustments.

1. How Luigi's Box ranks results
The default ranking behavior combines multiple signals. These are evaluated and balanced automatically to ensure the best customer experience.
Full-text match quality
Match quality is the foundation of ranking. Rather than assigning a raw "score," Luigi's Box groups products into match-quality tiers:


Exact matches
Matches with typo tolerance

Partial matches (where some words in the query are missing)



  
        
      
    

  
  
    Note
    
        Traditional full-text search engines often rely on numeric scoring systems. Luigi’s Box improves on this by using quality tiers instead of scores, ensuring more predictable and meaningful result ordering.

    
  

Availability
Products that are in stock are favored. Availability is ranked in tiers, for example:


"In stock, available now" will rank higher than
"In stock, available in 48 hours"


Learn more about the availability ranking field.
Analytics feedback loop
Products that users frequently view, add to cart, or purchase are promoted over time. This allows bestsellers and highly engaging products to rise naturally in the rankings.

Learn more about the analytics feedback loop.
Personalization
Search results can be personalized based on a user's previous interactions or profile data. That means the same query may return slightly different product orders depending on the user.
2. Influence ranking with product data attributes
You can guide the ranking engine by enriching your product data with specific attributes.


  
        
      
    

  
  
    Note
    
        There's no need to explicitly "enable" these features. Once you include fields like margin, introduced_at, or boost in your product feed, Luigi’s Box automatically begins using them as ranking signals.

    
  

Ranking by freshness
New products often lack sales data, making them harder to rank naturally. To solve this, Luigi's Box includes a freshness boost.

How it works:
Add an introduced_at field to your product feed with the product's launch date (YYYY-MM-DD or full ISO timestamp).

Effect:
Newer products receive a time-limited boost, which gradually decays over 60 days. The system uses a log-decay curve, meaning the visibility advantage fades gradually rather than abruptly.


  
        
      
    

  
  
    Note
    
        This helps compensate for the lack of data in the analytics feedback loop, giving new products a chance to surface while building their engagement history.

    
  


More on the introduced_at field.
Ranking by margin
You can favor products that are more profitable for your business.

How it works:  

Include a numeric margin attribute in your product data.

Effect:  

Products with higher margins are given a stronger ranking signal. Think of this as casting a “vote” toward profitability. It does not override other factors, relevance still comes first.


  
        
      
    

  
  
    Note
    
        Margin does not hard-sort results. Even a high-margin item won't outrank something that is a better match for the query.

    
  


More on the margin field.
Boosting with an attribute
For the strongest product-level control, you can use the boost field.

How it works:  

Set the boost value between 0 (no boost) and 3 (maximum boost) in your product feed.

Effect:  

Boosted products can outrank nearly all others, except in cases where match quality dominates. Use this to promote:


Campaign items
High-priority seasonal products
Clearance stock or urgent visibility needs


More on the boost field.
3. Override ranking in the Luigi's Box App
You can make manual, real-time adjustments without editing your product data. This is useful for campaign launches, emergency fixes, or fine-tuning performance.


  
        
      
    

  
  
    Note
    
        These manual methods are sometimes referred to as manual interference in Luigi's Box documentation.

    
  

Global product boost
Navigate to:  

Catalog management > Boosting  

There, you can manually apply a boost to any product. This works the same way as the boost attribute in your data, without needing to touch the feed.
Per-query ranking rules
Navigate to:  

Search > Search results customizations

Here, you can pin or demote products for specific queries.  

For example:  


Pin a specific "running shoe" to appear first for the query running shoes

Demote outdated or lower-converting products for branded searches


This is especially useful for:


Campaign timing
Partner brand priorities
Query-level troubleshooting

4. Ranking signal hierarchy
Here's a simplified view of how ranking signals are prioritized in the Luigi's Box engine:


Match Quality
Boost (manual or data-level)
Availability

Analytics Feedback (user behavior) or Margin or Freshness or Personalization




  
        
      
    

  
  
    Note
    
        You may see slight reordering depending on how many signals are present and how they interact, but the overall structure remains consistent.

    
  

Next steps
Now that you understand how Luigi's Box ranks and how to influence it, consider exploring:

You're now ready to control your ranking system with both precision and insight.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/search/variant_search.html</url>

      <title></title>
      <content><![CDATA[Introduction
Many e-commerce stores sell products that come in different variations, such as a t-shirt that is available in multiple colors and sizes. How these product variants are handled in search can have a significant impact on the user experience. Luigi's Box provides several powerful modes for searching and displaying variants.
This guide explains the various search modes available, the data requirements for each, and best practices for determining which approach is best suited for your business.
What you'll learn

The three different modes for handling product variants in search.
Code examples for implementing each variant search mode.
Best practices for when and when not to use variant-aware search.
The performance and analytics implications of using variants.

Who is this guide for

Developers and e-commerce managers whose products are structured into variants (e.g., by color, size, material).
Users who want to control how different versions of the same product appear in search results.

Prerequisites

An understanding of how your product data is structured and indexed with Luigi's Box.
Familiarity with the basics of Luigi's Box Analytics.

Variant Search Modes
There are two primary modes for handling product variants. The mode you choose will depend on your data structure and your desired user experience.
Mode 1: Searching variants separately
This is the simplest approach. Each variant is treated as a completely separate, standalone product in the search index.



How it works: If a product has five color variants and a user's search matches that product, all five variants will appear as individual tiles in the search results.

User experience: This increases the visibility of each variant, as they occupy more space on the results page. However, there is no guarantee that the variants will be displayed next to each other, as each is ranked independently based on its own relevance, availability, and sales data.

How to activate: Simply index each variant as if it were a standalone product. If using the API, do not index nested variants. If using feeds, do not include a grouping parameter.

Example
No special parameters are needed. This is the default behavior when variants are indexed as separate items.

Search API:

GET https://live.luigisbox.com/search?tracker_id=YOUR_TRACKER_ID&amp;q=t-shirt&amp;f[]=type:product

Search.js:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
    TrackerId: 'YOUR_TRACKER_ID',
    DefaultFilters: { type: 'product' }
    // ... other options
});

        
      
    
  
Mode 2: Retrieving the best variant (variant-aware search)
In this mode, the search is aware that variants belong to a parent product. It will only return one result tile per product, but it intelligently selects the best variant to display based on the user's query.



How it works: For a search like "blue t-shirt," the system will score the "Blue T-shirt" variant higher than the "Black T-shirt" variant and display the blue one. All other variants (black, red, etc.) are included as nested objects within the main product result, allowing you to build a variant selector on your product tile.

User experience: This provides a cleaner, less cluttered search results page. It prevents a single product from dominating the results and allows users to see a wider variety of different products.

How to activate: Index your variants as nested objects via the API, or provide a grouping identifier in your feed. Then, contact Luigi's Box support to activate variant-aware search for your account.

Example
This is the default behavior when variant-aware search is enabled for your account.

Search API:

GET https://live.luigisbox.com/search?tracker_id=YOUR_TRACKER_ID&amp;q=blue+t-shirt&amp;f[]=type:product

Search.js:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
    TrackerId: 'YOUR_TRACKER_ID',
    DefaultFilters: { type: 'product' }
    // ... other options
});

        
      
    
  
Optional: Returning all variants (non-collapsed)
By default, variant-aware search returns only the best-matching variant per product. However, in certain situations, you may need access to all variants individually.

To do this, use the query parameter:
non_collapsed_variants=true



How it works: All matching variants will be returned as separate results, even though they are still indexed and treated as part of a single product group.

Use case: Useful for any UI where users should see all variant options at once.



  
        
      
    

  
  
    Note
    
        Although this behavior may resemble Mode 1 (separate variant indexing), it is still powered by variant-aware search. Luigi's Box continues to recognize the parent-child relationship between variants, ensuring consistent analytics tracking, scoring, and grouping logic.

    
  


Search API:

GET https://live.luigisbox.com/search?tracker_id=YOUR_TRACKER_ID&amp;q=t-shirt&amp;f[]=type:product&amp;non_collapsed_variants=true

Search.js:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.Search({
    TrackerId: 'YOUR_TRACKER_ID',
    DefaultFilters: { type: 'product' },
    ModifyRequestParams: function(params) {
        params.non_collapsed_variants = true;
        return params;
    }
});

        
      
    
  
Best practices: Should you use variants?
The decision to use variant-aware search should be driven by your business needs and the user experience on the rest of your site.



Use variants for clear visual differences: Variant-aware search works best when the difference between variants is obvious to the user, such as color or material. This allows the user to immediately understand why a specific variant was shown to them.

Avoid variants for non-visual differences: Do not use variant-aware search for attributes like size in fashion. A "Small" t-shirt and a "Large" t-shirt often have the same product image, title, and price. Displaying them as separate variants in search can be confusing, as the user cannot tell them apart.

Be consistent: The most important rule is to be consistent with the rest of your website. If your category pages display each color of a product as a separate tile, your search results should do the same. Introducing a different paradigm in search can confuse users.

Performance impact
Note that enabling variant-aware search (Mode 2) can have a minor performance impact. To avoid increasing search latency, Luigi's Box recommends keeping the average number of variants per product below 10. If you have products with a very high number of variants, it may be a sign that the use case is not a good fit for variant-aware search.
Analytics considerations for variants
Properly tracking user interactions with variants is crucial for the feedback loop. The way you track analytics depends on the variant mode you are using.



For Mode 1 (Searching variants separately): Analytics are straightforward. Since each variant is treated as a unique product in the index, you simply track the view_item_list and select_item / click events using the specific ID of the variant that was displayed and clicked.

For Mode 2 (Retrieving the best variant): This mode requires careful analytics implementation. Even though a specific variant is shown in the product tile, analytics events must be tracked using the main product ID, not the variant ID.



View event (view_item_list):When listing results, report the main product ID for each displayed item. This ensures the system learns which parent products are being shown and interacted with.

Click event (select_item / click): Similarly, when a user clicks on a result, report the main product ID, regardless of which variant was visually displayed.



Next steps]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/search/integrating_search_js.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides the fastest way to build a feature-rich and interactive search results page on your website using the Search.js library. This library is the recommended integration path for most websites, as it handles all the complex parts for you: it makes the API calls, renders a professional UI with filters and pagination, and automatically tracks all necessary analytics to improve results over time.
By the end of this guide, you will have a fully functional, single-page-application-style search interface that you can easily customize.
What you'll learn

How to create a dedicated search results page on your site.
How to configure your site's search forms to direct users to this new page.
How to include and initialize the Search.js library with essential configurations.
How to enable key features like filtering (facets) right out of the box.

Who is this guide for

Developers looking for a fast, out-of-the-box solution for a search results page.
Users who want to quickly implement powerful features like faceting and pagination without needing to work directly with the API.

Prerequisites
Before you start, please ensure you have the following in place:


The ability to create new pages and edit HTML on your website.
Your Luigi's Box TrackerId.

Step-by-step: Building the search pageStep 1: Create a new search page
First, create a new HTML page on your site where the search results will be displayed. For example, you can name it search.html and place it in the root directory of your website.
This page should include your standard site layout (header, footer, etc.) and a placeholder element where Search.js will render the entire search interface. We recommend giving this placeholder a loading indicator to ensure a smooth user experience.
Example: search.html body
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
  
    ...
  

  
  
    
    
  

  
  
    ...
  

  


        
      
    
  
Step 2: Point search forms to the new page
Next, update the search forms across your website to ensure that when a user submits a query, they are redirected to the new search page.
Update your search  tag to use the GET method and set the action attribute to point to the new page you created. Make sure your search  has a name attribute (e.g., name="q"), as this will be used in the URL.
Example: Search form
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
  Search


        
      
    
  

Now, when a user types "laptops" and hits enter, their browser will navigate to /search.html?q=laptops.
Step 3: Add and initialize the search.js script
On your new search.html page, add the following script block just before the closing  tag. This will load and initialize the Search.js library.
Example: Initialize search.js
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
           on the search.html page -->


  // This initializes the Luigi's Box Search UI
  Luigis.Search(
    {
      // --- Configuration Start ---
      TrackerId: 'YOUR_TRACKER_ID', // Replace with your actual Tracker ID
      Theme: 'boo',                 // Use the 'boo' theme for a modern look

      // Tell Search.js to only search for products by default
      DefaultFilters: {
        type: 'product'
      },

      // Define which filters (facets) to show the user
      Facets: ['brand', 'category', 'price_amount'],
      // --- Configuration End ---
    },
    '[name="q"]',   // CSS selector for the search input field on this page
    '#search-ui'    // CSS selector for the placeholder element
  );


        
      
    
  
Step 4: Verify your integration
You're all set! To verify the integration:


Go to any page on your website with a search box.
Type a query for a product you know is in your catalog and press Enter.

You should be redirected to your search.html page.
The page should display a fully interactive search UI with results and filters for brand, category, and price, all rendered inside your #search-ui div.

Best practices


Automatic analytics: One of the advantages of Search.js is that it handles sending all necessary analytics events automatically. You do not need to implement any manual tracking.

Theming: The Theme option is a powerful way to control the look and feel. Luigi’s Box recommends starting with 'boo' for a modern, responsive design that works well on all devices.

Loading states: To prevent page flicker and content shifting, style your #search-ui placeholder with a fixed height and a loading indicator. This is what users will see for a moment before the Search.js library loads and renders the results.

Next steps
Now that you have a basic search page running, you can explore more advanced features:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/analytics/events_api_first_search.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides the core steps for tracking user search interactions by sending events directly to the Luigi's Box Events API. This method gives you complete control over the data you send and is the standard approach for integrations in non-browser environments like mobile applications or for tracking events from your server's backend.
What you'll learn

How to structure and send a JSON payload for a search event.
How to structure and send a JSON payload for a click event to track user interactions.
How to use the Live Session Explorer in the Luigi's Box app to verify your integration is working in real-time.

Who is this guide for
This guide is for developers who are:


Integrating Luigi's Box in a mobile application (iOS, Android).
Sending analytics events from their backend server.
Working on a website but prefer not to use the JavaScript-based DataLayer Collector.

Prerequisites
Before you start, please ensure you have the following:


The ability to make HTTP POST requests from your application or server.
Luigi's Box tracker_id.
A method for generating a unique client_id for each user/device.



  
        
      
    

  
  
    Info
    
        Your Luigi's Box tracker_id can be found in your Luigi's Box application in "General settings" > "Integration settings".

    
  

Step-by-step
All events are sent via an HTTP POST request to https://api.luigisbox.com/.
Step 1: Send the search view event
When a user sees a list of search results, you must send an event to report precisely what they saw. This is the foundation of the feedback loop.
Structure the JSON payload
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "f3f6917c-2e94-4e38-a744-24cbb82f284d", // A globally unique ID for this event
  "type": "event",
  "tracker_id": "YOUR_TRACKER_ID",
  "client_id": 6667519810961010000,
  "lists": {
    "Search Results": {                      // This exact name is critical
      "query": {
        "string": "white shirt"              // The user's raw query
      },
      "items": [
        {
          "title": "White shirt v-neck",
          "type": "item",                    // The catalog type of the object
          "url": "39818",                    // The unique ID matching your catalog
          "position": 1,                     // The item's position in the list
          "price": 19
        },
        // ... add all other visible results here
      ]
    }
  },
  "platform": "ios" // Optional: "ios", "android", "desktop", etc.
}

        
      
    
  
Key fields explained


id: Must be a globally unique id for each event (e.g., a UUID).

lists."Search Results": The object key must be exactly "Search Results" to be processed correctly.

items.url: This is the object's unique identifier. It must match the ID used in your product catalog.

Examples
These examples show how to make HTTP POST requests to the Events API.

  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'json'
require 'securerandom'

# --- Configuration ---
TRACKER_ID = "YOUR_TRACKER_ID"
API_ENDPOINT = "https://api.luigisbox.com/"
# In a real app, client_id would come from the user's session or device
CLIENT_ID = 6667519810961010000 # Example client_id

# --- Helper Function using Faraday ---
def send_luigis_box_event(payload)
  # Create a new Faraday connection
  conn = Faraday.new(url: API_ENDPOINT) do |faraday|
    faraday.request :json # Automatically encode request body as JSON
    faraday.adapter Faraday.default_adapter # Use the default HTTP adapter
  end

  begin
    # Make the POST request
    response = conn.post do |req|
      req.url API_ENDPOINT
      req.headers['Content-Type'] = 'application/json'
      req.body = payload.to_json
    end

    puts "Response Code: #{response.status}"
    puts "Response Body: #{response.body}"
    # Faraday automatically raises errors for 4xx/5xx responses if you use response.success? or conn.response :raise_error
  rescue Faraday::Error => e
    puts "Error sending event: #{e.message}"
    puts "Response body: #{e.response[:body]}" if e.response
  end
end

# --- Search View Event Data ---
search_query_term = "white shirt"
search_results_items = [
  { title: "White shirt v-neck", type: "item", url: "39818", position: 1, price: 19 },
  { title: "Another white shirt", type: "item", url: "39819", position: 2, price: 25 }
]

search_view_payload = {
  id: SecureRandom.uuid,
  type: "event",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  lists: {
    "Search Results" => {
      query: { string: search_query_term },
      items: search_results_items
    }
  },
  platform: "backend-ruby-faraday"
}

# --- Send the Event ---
puts "Sending Search View Event..."
send_luigis_box_event(search_view_payload)

        
      
        
          request('POST', $url, [
            'json' => $payload // 'json' option automatically encodes body and sets headers
        ]);

        echo "Response Code: " . $response->getStatusCode() . "\n";
        echo "Response Body: " . $response->getBody()->getContents() . "\n";
    } catch (RequestException $e) {
        echo "Error sending event: " . $e->getMessage() . "\n";
        if ($e->hasResponse()) {
            echo "Error Response Body: " . $e->getResponse()->getBody()->getContents() . "\n";
        }
    }
}

// --- Search View Event Data ---
$searchQueryTerm = "white shirt";
$searchResultsItems = [
    ["title" => "White shirt v-neck", "type" => "item", "url" => "39818", "position" => 1, "price" => 19],
    ["title" => "Another white shirt", "type" => "item", "url" => "39819", "position" => 2, "price" => 25]
];

$searchViewPayload = [
    "id" => guidv4(),
    "type" => "event",
    "tracker_id" => $trackerId,
    "client_id" => $clientId,
    "lists" => [
        "Search Results" => [
            "query" => ["string" => $searchQueryTerm],
            "items" => $searchResultsItems
        ]
    ],
    "platform" => "backend-php-guzzle"
];

// --- Send the Event ---
echo "Sending Search View Event...\n";
sendLuigisBoxEvent($apiEndpoint, $searchViewPayload);
?>

        
      
        
          const axios = require('axios');
const { v4: uuidv4 } = require('uuid'); // For generating unique event IDs

// --- Configuration ---
const TRACKER_ID = "YOUR_TRACKER_ID";
const API_ENDPOINT = "https://api.luigisbox.com/";
// In a real app, client_id would come from the user's session or device
const CLIENT_ID = 6667519810961010000; // Example client_id

// --- Helper Function to Send Event ---
async function sendLuigisBoxEvent(payload) {
  try {
    const response = await axios.post(API_ENDPOINT, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(`Response Code: ${response.status}`);
    console.log('Response Body:', response.data);
    // Add error handling based on response.status if needed
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(`Error sending event: ${error.response.status}`, error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error sending event: No response received', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error sending event:', error.message);
    }
  }
}

// --- Search View Event Data ---
const searchQueryTerm = "white shirt";
const searchResultsItems = [
  {
    title: "White shirt v-neck",
    type: "item",
    url: "39818", // Unique ID matching your catalog
    position: 1,
    price: 19
  },
  {
    title: "Another white shirt",
    type: "item",
    url: "39819",
    position: 2,
    price: 25
  }
];

const searchViewPayload = {
  id: uuidv4(), // Generate a unique ID for this event
  type: "event",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  lists: {
    "Search Results": { // This exact name is critical
      query: {
        string: searchQueryTerm
      },
      items: searchResultsItems
      // Optional: filters: { "brand": "MyBrand" }
    }
  },
  platform: "backend-nodejs" // Optional
};

// --- Send the Event ---
(async () => {
  console.log("Sending Search View Event...");
  await sendLuigisBoxEvent(searchViewPayload);
})();

        
      
    
  
Step 2: Send a click event
When a user clicks on a search result, send a click event. This tells Luigi's Box that the user showed interest in a specific item from the list you sent in Step 1.
Structure the JSON payload
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "cecceeef-f82f-4fd0-9caf-aaeef2981370", // A new unique ID for this event
  "type": "click",
  "tracker_id": "YOUR_TRACKER_ID",
  "client_id": 6667519810961010000,
  "action": {
    "type": "click",
    "resource_identifier": "39818" // The unique ID of the item that was clicked
  },
  "platform": "ios"
}

        
      
    
  

The resource_identifier must match the url of the item from the search results list so Luigi's Box can link the click to the original search.
Examples
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # (Continuing from the Ruby example above, assuming send_luigis_box_event and config are defined)

# --- Click Event Data ---
clicked_item_id = "39818"

click_payload = {
  id: SecureRandom.uuid,
  type: "click",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  action: {
    type: "click",
    resource_identifier: clicked_item_id
  },
  platform: "backend-ruby-faraday"
}

# --- Send the Event ---
puts "Sending Click Event..."
send_luigis_box_event(click_payload)

        
      
        
           guidv4(),
    "type" => "click",
    "tracker_id" => $trackerId,
    "client_id" => $clientId,
    "action" => [
        "type" => "click",
        "resource_identifier" => $clickedItemId
    ],
    "platform" => "backend-php-guzzle"
];

// --- Send the Event ---
echo "Sending Click Event...\n";
sendLuigisBoxEvent($apiEndpoint, $clickPayload);
?>

        
      
        
          // (Continuing from the NodeJS example above, assuming sendLuigisBoxEvent, uuidv4 and config are defined)

// --- Click Event Data ---
const clickedItemId = "39818"; // ID of the item that was clicked

const clickPayload = {
  id: uuidv4(),
  type: "click",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  action: {
    type: "click",
    resource_identifier: clickedItemId
  },
  platform: "backend-nodejs"
};

// --- Send the Event ---
(async () => {
  console.log("Sending Click Event...");
  await sendLuigisBoxEvent(clickPayload);
})();

        
      
    
  
Step 3: Verify your integration
You can watch your events arrive in real-time inside the Luigi's Box application.


Log in to your Luigi's Box application.
Navigate to "General settings" in the menu, and then select Live session explorer.
From your app or backend, trigger the events from Step 1 and Step 2.
You will see a new session appear in the explorer for your client_id, and clicking on it will show you the "Search event" and "Click event" you just sent.



  
        
      
    

  
  
    Note
    
        Understanding user sessions &amp; data visibility:
  In Luigi's Box, a user session is a sequence of events from a single user (identified by their client_id).
  The live session explorer is designed for real-time debugging. It shows you events from active, in-progress sessions as they are received by Luigi's Box, often with only a minimal delay. This allows you to verify your integration immediately as you send test events.
  Separately, a user session is considered closed or finished for main analytics processing after 30 minutes of inactivity (meaning no new events have been sent for that client_id for 30 minutes). It's typically after a session is closed and processed that its data will appear in the main Luigi's Box analytics dashboards and reports.
  So, use the live session explorer for immediate event verification, and expect data in the main dashboards to appear after sessions have fully concluded.

    
  

Best Practices
To avoid common issues and ensure high-quality data collection, keep these points in mind:



Always send an event: If a search returns zero results, you should still send a "Search event" with an empty items array ([]). This is crucial for identifying poorly performing queries.

Use stable, matching IDs: The identifier you use in the url field for an item must be the unique and immutable (unchanging) identifier that matches your product catalog.

Handle timestamps correctly: If you choose to send the optional local_timestamp field, ensure the value is in seconds, not milliseconds. Sending milliseconds will cause the event to be decoded as a date far in the future and dropped.

Generate unique event IDs: Every single event you send must have a new, globally unique value for the top-level id field.

Handle pagination correctly: The position for each item must be its absolute position in the full list of results. For example, if you show 20 items per page, the first item on page 2 should have "position": 21, not "position": 1.

Next Steps
Now that you have foundational search tracking working, you can expand it to track critical conversions that provide even stronger signals to the AI models:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/analytics/datalayer_first_search.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides the foundational steps for integrating Luigi's Box Analytics on a website that uses a dataLayer. You will learn how to capture the most essential user interactions for the search service: what users search for, what results they see, and which results they click on.
Implementing this tracking correctly is the most essential step to power Luigi's Box AI models and improve your search relevance.
What you'll learn

How to structure and push a view_item_list event to track which search results a user sees.
How to send a select_item event to report a user's click on a specific result.
How to use the Luigi's Box linter tool to verify that your analytics integration is working correctly.

Who is this guide for

Developers working on websites that already have a dataLayer object implemented. This is common for sites using Google Analytics or Google Tag Manager.

Prerequisites
Before you start, please ensure you have the following in place:


The main Luigi's Box script installed in the  of your website pages.
Your website has a working dataLayer object that can receive pushed events.

Step-by-stepStep 1: Track your search results view
The first step is to inform Luigi's Box about the search results presented to a user. This is done by pushing a view_item_list event to the dataLayer as soon as the search results are loaded on the page.
Example: Push a view_item_list event when search results load
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_name: "Search Results"  //this name is critical
    search_term: "phone", // The users actual query
    items : [
      {
        item_id: "SKU_12345",         // Must match your catalog ID
        item_name: "Stan and Friends Tee",
        index: 1,                     // Absolute position on the page
        price: 9.99,
        type: "item"
      },
      {
        item_id: "CAT_12345",
        item_name: "Phones",          // This result is a category
        index: 2,
        type: "category"
      }
      // ... add all other visible results here

    ]
  }
})

        
      
    
  
Step 2: Track a click on a result
When a user clicks on one of the results, you must report this interaction. this click provides a strong signal to the AI model about the relevance of that item. Use the select_item event for this action.
Example: Report user clicks with a select_item event
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // When a user clicks on the item with ID "SKU_12345"
window.dataLayer.push({
  event: "select_item",
  ecommerce: {
    items: [
      {
        item_id: "SKU_12345" // The ID of the clicked item
      }
    ]
  }
});

        
      
    
  

Luigi's Box uses the item_id to attribute this click to the list of items you provided in Step 1.
Step 3: Verify your integration
You can easily check your work directly in your browser using the built-in data linter.


Open your website page where the search is implemented.
Open your browser's Developer Console (usually by pressing the F12 key).
In the console, type the following command and press Enter:


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.lint = true

        
      
    
  


  Reload the page and perform a search. Do not close the developer console.



  
        
      
    

  
  
    Note
    
        For a successful parse you will see a blue Luigi's Box logo.
  If something goes wrong you will see a red logo with a list of errors.

    
  

Best Practices
To avoid common issues and ensure high-quality data collection, keep these points in mind:



Use exact list names: The item_list_name attribute must be exactly "Search Results" (or "Autocomplete" for autocomplete results), including capitalization. Any other name will cause the event to be ignored.

Always send an event: Push a view_item_list event even when a search returns zero results. In this case, simply provide an empty items array []. This helps Luigi's Box track queries that need improvement.

Use stable IDs: The item_id you provide must be a unique and immutable (unchanging) identifier that perfectly matches the ID in your catalog feed. Using product URLs is discouraged as they can change.

Handle pagination correctly: The index for each item must be its absolute position in the full list of results. For example, if you show 10 items per page, the first item on page 2 should have index: 11, not index: 1.

Next Steps
Now that you have foundational search tracking in place, you can enhance your analytics by tracking key conversions:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/analytics/analytics_and_object_identity.html</url>

      <title></title>
      <content><![CDATA[Introduction: Why analytics is a cornerstone
Analytics is the fundamental part of all Luigi's Box services. It's not just about providing you with performance reports; its primary role is to collect data on user interactions with your website or application. This behavioral data is then fed into the sophisticated AI models that drive intelligent ranking, personalized product selection, and relevant recommendations. Accurate and comprehensive analytics are the fuel that allows these models to learn and continuously self-tune to how your users behave.
Integration strategies: Choosing your path
Before diving into the details of how to implement analytics, it's important to understand that Luigi's Box offers multiple ways to collect and send analytics data. The choice of method depends on your specific use case, technical environment, and preferences.
The two primary methods are:



DataLayer Collector: A JavaScript-based collector that listens for standard Google Analytics ecommerce events that you push to a dataLayer. This is the ideal path if you are integrating on a website and already use Google Analytics or Google Tag Manager, as you can leverage your existing event structure.

Events API: A direct API that allows you to send structured JSON events via HTTP POST requests from any application or server. This approach is commonly used for mobile applications (iOS, Android), server-side applications, and websites that require full control over the analytics process without relying on third-party scripts.


Refer to the Next Steps section for quickstart guides relevant to your setup.
The feedback loop: Connecting user actions to your products
At the heart of Luigi's Box's intelligence is a powerful feedback loop. This loop relies on understanding what users do (analytics) and connecting those actions back to specific items in your product catalog. For this vital connection to happen, Luigi's Box needs a reliable way to identify every product, category, or piece of content. This is where "Object Identity" comes into play.
Object Identity: The key to the feedback loopWhat is Object Identity?
"Object Identity" refers to a unique identifier for a particular piece of content on your website, such as a product, category, brand, or article. This "identity" can be numerical or textual, but it must be unique across all types of content. If you use the same identity for multiple objects, the newer object will overwrite the data of the older one.

Think of it as the definitive "name" or "serial number" for each item in your system.
Why is Object Identity critical for analytics?
Object identities are essential for matching the analytics data (user interactions) with your catalog data. When a user views, clicks on, or purchases an item, the analytics event reports the "Object Identity" of that item. Luigi's Box then uses this ID to:



Attribute behavior: Understand which specific products are being engaged with.

Train AI models: Feed signals into various models. For instance, if an object with a specific ID ends up in a purchase event, that's a strong positive signal for that particular product.


For this feedback loop to work effectively, the object identity used in your analytics events must exactly match the identity used when indexing that same object in your catalog. If the IDs don't align, the system cannot make the connection, and valuable behavioral data for that object is lost.
Properties of a good Object Identity
To ensure data integrity and effective AI learning, your chosen object identities should be:



Unique: No two distinct objects (even of different types, like a product and a category) should share the same identity.

Immutable: The identity should never change over the full lifetime of the object. This is very important.

Consistent: The same identity must be used for an object in your catalog data and in all analytics events related to that object.

Format: Identities can be numerical or textual.

Choosing your identifiers wisely (e.g., SKUs vs. URLs)
Because identities must be immutable, it's best to choose an identifier that naturally does not change, such as your internal product ID or SKU. 
If an identifier that can change is used (for example, if a product's URL is used as its ID and that URL is later updated), Luigi's Box will see the item as a brand-new product. 
This causes the product to become "unpaired" from all its historically collected analytics data, leading to a drop in its learned ranking and relevance. Therefore, avoiding mutable identities is crucial for long-term success.
Core analytics concepts to track (leveraging Object Identity)
Now that we understand that every tracked interaction needs to be linked to an item via its Object Identity, let's look at the key analytics concepts Luigi's Box focuses on:
What is a "List"?
A "List" is a generic term for any group of products or items presented to the user. Common examples include:


Search results
Autocomplete suggestions
Product recommendations
Product listing pages (e.g., category or brand pages)

What is a "Query"?
A "Query" is what the user types into your search box to get search results. It's important to track the exact query string as the user entered it, without any modifications like URL encoding. Sometimes a valid search might not have a query string at all, such as an advanced search that uses only filters.
What are "Filters"?
"Filters" refer to any additional criteria or restrictions that influence which products are displayed. This can include:



User-selected facets: Such as color, size, brand, or price range.

Sorting options: Like "Sort by Price" or "Sort by Relevance".

Implicit filters: Sometimes, the category itself acts as a filter (e.g., when a user navigates to a "Men's Shirts" page, "Category: Men's Shirts" is an active filter).
Luigi's Box only cares about active filters that are currently affecting the displayed results.

What to track for "List Items / Search Results"
For each individual item displayed within a list, you need to track several key pieces of information:



title: The user-visible name or title of the item (e.g., product name).

object identity (as url/id): The unique, canonical link or, more importantly, the stable Object Identity (like a SKU) for the item. This is what links the displayed item back to your catalog. It must be unique for each distinct product.

position: A number indicating the item's rank or position in the full list of results, taking pagination into account. For example, on page 2 of results with 20 items per page, the first item should have position 21.

price (Optional): The price of the product, if applicable. This might not be available if the item isn't sellable (like a blog post) or is out of stock.


When reporting items within a list (such as search results, recommendations, or product listings), you should include all items that are part of that logical list or page of results, regardless of whether every single item is immediately visible in the user's viewport without scrolling.
What are "Conversions"?
A "Conversion" is any user action that is important to your business and signals significant user intent. Examples include:


Adding an item to the shopping cart
Completing a purchase ("buying" an item)
Adding an item to a wishlist or favorites list
Any other action you deem valuable (e.g., "liking" an item).
You should track conversions from all relevant places, such as directly from a list of search results and from the product detail page itself.



  
        
      
    

  
  
    Note
    
        While "completing a purchase" or "buying an item" falls under this broad definition of a conversion, it is typically the most critical business outcome and is often treated as a primary, dedicated signal. Because of its importance and the rich data associated with it, Luigi's Box uses more specific and detailed event structures for tracking purchases (such as the transaction event in the Events API or the purchase event in the DataLayer Collector) compared to other "micro-conversions."

    
  

Advanced: Tracking "Context"
In some advanced scenarios, you might need to track the "context" in which an interaction occurs. A context usually refers to a specific business situation, like a particular warehouse, user segment, or geographic location, where user behavior might differ significantly. Setting a context can lead to the creation of separate AI ranking models for that specific situation. This is an advanced feature and should be used when there's a clear need and sufficient data for each context.
Next Steps]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/analytics/datalayer_tracking_purchases.html</url>

      <title></title>
      <content><![CDATA[Introduction
You've learned how to track what users see and click on. The next crucial step is to track when they perform a meaningful action, known as a conversion. A conversion is any user action that is important to your business, but the most significant one is a completed purchase.
Tracking purchases provides the strongest possible positive signal to the Luigi's Box AI models, directly teaching them which products are most valuable and helping to improve search ranking and recommendations for all future users.
What you'll learn

How to send an add_to_cart event using the DataLayer Collector.
How to send a purchase event to record a completed transaction.
Best practices for tracking conversion events accurately.

Who is this guide for

Developers who have already completed one of the initial quickstart guides and have a working setup for tracking page views and clicks.

Prerequisites
Before you start, please ensure you have the following in place:


A working analytics setup for the DataLayer Collector.
The ability to add tracking code that fires when a user adds an item to the cart and completes a purchase.

Step-by-stepStep 1: Track the "add to cart" event
Tracking when a user adds an item to their cart is a key "micro-conversion" that signals strong interest. You should push an add_to_cart event every time this action occurs.
Example: Push an add_to_cart event
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    currency: "EUR",
    value: 7.77,       // Price of the item being added
    items: [
      {
        item_id: "SKU_12345" // The ID of the item added to the cart
      }
    ]
  }
});

        
      
    
  
Key fields explained


event: Must be exactly "add_to_cart"


value and currency: Optional fields that represent the monetary value of the item being added.

Step 2: Track the purchase event
On your order confirmation page, push a purchase event to the dataLayer. this event should contain details about the entire transaction.
Example: Push a purchase event to your dataLayer

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          window.dataLayer.push({
  event: "purchase",
  ecommerce: {
    transaction_id: "T_12345",      // The unique ID for this transaction
    value: 72.05,                   // The total monetary value of the transaction
    currency: "EUR",                // The transaction currency
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        price: 10.01,               // Price of a SINGLE unit
        quantity: 3
      },
      {
        item_id: "SKU_12346",
        item_name: "Grey Women's Tee",
        price: 21.01,               // Price of a SINGLE unit
        quantity: 2
      }
      // ... all other items in the transaction
    ]
  }
});

        
      
    
  
Key fields explained


transaction_id: A unique identifier for this specific order.

value: The total value of the sale, including all items.

price: In the items array for a purchase event, this should be the price of a single unit of item.

Best Practices


Track on confirmation: Fire the purchase event only after payment is confirmed. This prevents tracking abandoned or failed transactions and keeps your data clean.

Include all items: The items array should contain every single item from the order to give the AI a complete picture of what was purchased together.

Verify your events Use the Web Linter (Luigis.lint = true) to get immediate feedback in your browser's console. For end-to-end verification, use the Live Session Explorer in the Luigi's Box application to confirm the server received the event correctly.

Next Steps
Beyond adding to the cart and purchasing, you can track other important conversions that signal user interest:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/analytics/start_debugging_analytics.html</url>

      <title></title>
      <content><![CDATA[Introduction
You've implemented the tracking code, but how do you know it's working correctly? Debugging is a crucial final step to ensure you're sending high-quality data to Luigi's Box. Inaccurate or incomplete data can prevent the AI models from learning effectively.
This guide will teach you how to use the two primary tools Luigi's Box provides to verify your work and troubleshoot common problems.
What you'll learn

How to use the browser-based Linter for real-time validation on your website.
How to use the Live Session Explorer to inspect raw event data from any integration (web, mobile, or backend).
How to identify and fix the most common integration mistakes.

Who is this guide for

Developers who are currently implementing or have finished implementing Luigi's Box Analytics and want to verify their setup.

Prerequisites

An active Luigi's Box integration (in a development or production environment).
Access to your website's developer console (for the Web Linter).
Login access to your Luigi's Box application account (for the Live Session Explorer).

Step by step: Using the debugging toolsMethod 1: The web linter (for website integrations)
If you are integrating on a website (e.g., using the DataLayer Collector), the Linter is your best first stop for debugging. It provides instant feedback directly in your browser.


Open your website page where the integration is active.
Open your browser's Developer Console (usually by pressing the F12 key).

In the console tab, type the following command and press Enter:

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          Luigis.lint = true

        
      
    
  


Reload the page and perform the actions you want to test (e.g., make a search). Do not close the developer console.

Interpreting the Output


Success: A blue Luigi's Box logo will appear in the console. This confirms that the integration collected data and its structure is valid.

Errors: A red logo will appear, followed by a list of specific errors and warnings about the data quality. This tells you exactly what needs to be fixed.

Method 2: The live session explorer (for all integrations)
This is the universal tool for seeing the raw event data as it arrives at our servers. It works for all integration types, including mobile apps and backend API calls.
Log in to your Luigi's Box application.


In the left-hand menu, navigate to General settings and then click on Live session explorer.
In your application or website, perform the actions you want to test (e.g., make a search, click a product, complete a purchase).
In the Session Explorer, you will see a list of active sessions in real-time. Find your session (you can identify it by the User ID) and click on it.
The view will expand to show you the complete, ordered stream of events received for that session, allowing you to inspect the raw JSON data you sent.

Troubleshooting checklist: Common mistakes
If your data isn't appearing correctly, check for these frequent issues:



Incorrect list name: The item_list_name (in DataLayer) or the list key (in Events API) must be exactly "Search Results" or "Autocomplete". Check for typos and proper capitalization.

Missing "no results" event: You must send an analytics event even when a search returns zero results. The items array should just be empty ([]).

Incorrect item positions: For paginated results, the index or position must be absolute. The first item on page 2 (with 20 items per page) should be position 21, not 1. A very common problem is restarting positions from 1 on each page.

URL-encoded query: The search query string should be sent raw, exactly as the user typed it. Do not URL-encode it (e.g., with percent-encoding). Luigi's Box will handle any necessary encoding.

Missing conversion tracking: A frequent oversight is to track search results but forget to track conversions (like "add to cart") on both the search results page and the product detail pages.

Invalid JSON (Events API): If using the Events API, ensure your JSON is perfectly valid. The most common error is a trailing comma at the end of an array or list of object properties.

Next Steps]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/analytics/events_api_tracking_purchases.html</url>

      <title></title>
      <content><![CDATA[Introduction
You've learned how to track what users see and click on using the Events API. The next crucial step is to track when they perform a meaningful action, known as a conversion. A conversion is any user action that is important to your business, but the most significant one is a completed purchase.

Tracking purchases provides the strongest possible positive signal to the Luigi's Box AI models, directly teaching them which products are most valuable and helping to improve search ranking and recommendations for all future users.
What you'll learn

How to send an "add to cart" conversion event using the Events API.
How to send a transaction event to record a completed purchase using the Events API.
Best practices for tracking conversion events accurately with the Events API.

Who is this guide for

Developers who have already completed the "Quickstart: Send your first search events with the Events API" guide and have a working setup for tracking views and clicks via the API.

Prerequisites
Before you start, please ensure you have the following:


A working analytics setup using the Events API.
Luigi's Box tracker_id.
The ability to add tracking code to your backend logic that fires when a user adds an item to the cart and completes a purchase.



  
        
      
    

  
  
    Info
    
        Your Luigi's Box tracker_id can be found in your Luigi's Box application in "General settings" > "Integration settings".

    
  

Step-by-step
All events are sent via an HTTP POST request to https://api.luigisbox.com/.
Step 1: Track the "add to cart" event
Tracking when a user adds an item to their cart is a key "micro-conversion" that signals strong interest. You should send a click event with a descriptive action.type every time this action occurs.
Structure the JSON payload
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef", // A globally unique ID for this event
  "type": "click",
  "tracker_id": "YOUR_TRACKER_ID",
  "client_id": 6667519810961010000,
  "action": {
    "type": "add-to-cart",                   // Descriptive action type
    "resource_identifier": "SKU_12345"       // The ID of the item added to the cart
  },
  "platform": "backend" // Optional
}

        
      
    
  
Key fields explained


type: Must be exactly "click" for this type of conversion..

action.type: Use a descriptive name like "add-to-cart". Anything other than "click" for action.type is considered a conversion.

action.resource_identifier: The unique ID of the product being added to the cart. This must match the ID in your catalog.

Examples
These examples show how to make HTTP POST requests to the Events API.

  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          require 'faraday'
require 'json'
require 'securerandom'

# --- Configuration (ensure these are defined, e.g., from a previous guide/setup) ---
TRACKER_ID = "YOUR_TRACKER_ID"
API_ENDPOINT = "https://api.luigisbox.com/"
CLIENT_ID = 6667519810961010000

# --- Helper Function using Faraday (ensure this is defined) ---
# def send_luigis_box_event(payload) ... end

add_to_cart_payload = {
  id: SecureRandom.uuid,
  type: "click",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  action: {
    type: "add-to-cart",
    resource_identifier: "SKU_12345" # ID of item added
  },
  platform: "backend-ruby-faraday"
}

puts "Sending 'Add to Cart' Event..."
send_luigis_box_event(add_to_cart_payload)

        
      
        
           guidv4(),
    "type" => "click",
    "tracker_id" => $trackerId,
    "client_id" => $clientId,
    "action" => [
        "type" => "add-to-cart",
        "resource_identifier" => "SKU_12345" // ID of item added
    ],
    "platform" => "backend-php-guzzle"
];

echo "Sending 'Add to Cart' Event...\n";
sendLuigisBoxEvent($apiEndpoint, $addToCartPayload);
?>

        
      
        
          const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// --- Configuration (ensure these are defined) ---
const TRACKER_ID = "YOUR_TRACKER_ID";
const API_ENDPOINT = "https://api.luigisbox.com/";
const CLIENT_ID = 6667519810961010000;

// --- Helper Function to Send Event (ensure this is defined) ---
// async function sendLuigisBoxEvent(payload) { ... }

const addToCartPayload = {
  id: uuidv4(),
  type: "click",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  action: {
    type: "add-to-cart",
    resource_identifier: "SKU_12345" // ID of item added
  },
  platform: "backend-nodejs"
};

(async () => {
  console.log("Sending 'Add to Cart' Event...");
  await sendLuigisBoxEvent(addToCartPayload);
})();

        
      
    
  
Step 2: Track the purchase event
This is the final and most important conversion. When a transaction is successfully completed, send a transaction event. This event should contain details about the entire transaction.
Structure the JSON payload
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "id": "03dd16c3-4dd5-44c0-87c4-b3a652c06a87", // A new unique ID for this event
  "type": "transaction",
  "tracker_id": "YOUR_TRACKER_ID",
  "client_id": 6667519810961010000,
  "items": [
    {
      "title": "White shirt, round neck, short sleeves",
      "url": "9339993",              // Unique ID of the product
      "count": 1,                    // Quantity purchased
      "total_price": 19,             // Total price for this line item (quantity * unit_price)
      "was_discounted": false,
      "was_volume_discounted": false
    },
    {
      "title": "Brown overcoat",
      "url": "299299",
      "count": 2,
      "total_price": 268.50,
      "was_discounted": true,
      "was_volume_discounted": false
    }
    // ... all other items in the transaction
  ]
}

        
      
    
  
Key fields explained


type: Must be exactly "transaction" for this type of conversion..

items: An array containing details for each product in the order.

items.url: The unique ID of the purchased product, matching your catalog.

items.count: The quantity of this specific product purchased.

items.total_price: The total price for this line item (i.e., unit price multiplied by quantity), after any applicable discounts.

items.was_discounted: Boolean indicating if any discount was applied to this item.

items.was_volume_discounted: Boolean indicating if a discount was applied based on quantity.

Examples
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # (Assuming send_luigis_box_event and config from previous guide are defined)

purchased_items_details = [
  { title: "White shirt...", url: "9339993", count: 1, total_price: 19, was_discounted: false, was_volume_discounted: false },
  { title: "Brown overcoat", url: "299299", count: 2, total_price: 268.50, was_discounted: true, was_volume_discounted: false }
]

transaction_payload = {
  id: SecureRandom.uuid,
  type: "transaction",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  items: purchased_items_details
}

puts "Sending Transaction Event..."
send_luigis_box_event(transaction_payload)

        
      
        
           "White shirt...", "url" => "9339993", "count" => 1, "total_price" => 19, "was_discounted" => false, "was_volume_discounted" => false],
    ["title" => "Brown overcoat", "url" => "299299", "count" => 2, "total_price" => 268.50, "was_discounted" => true, "was_volume_discounted" => false]
];

$transactionPayload = [
    "id" => guidv4(),
    "type" => "transaction",
    "tracker_id" => $trackerId,
    "client_id" => $clientId,
    "items" => $purchasedItemsDetails
];

echo "Sending Transaction Event...\n";
sendLuigisBoxEvent($apiEndpoint, $transactionPayload);
?>

        
      
        
          // (Assuming sendLuigisBoxEvent, uuidv4, and config from previous guide are defined)

const purchasedItemsDetails = [
  { title: "White shirt...", url: "9339993", count: 1, total_price: 19, was_discounted: false, was_volume_discounted: false },
  { title: "Brown overcoat", url: "299299", count: 2, total_price: 268.50, was_discounted: true, was_volume_discounted: false }
];

const transactionPayload = {
  id: uuidv4(),
  type: "transaction",
  tracker_id: TRACKER_ID,
  client_id: CLIENT_ID,
  items: purchasedItemsDetails
};

(async () => {
  console.log("Sending Transaction Event...");
  await sendLuigisBoxEvent(transactionPayload);
})();

        
      
    
  
Best Practices


Track on confirmation: Fire the transaction event only after payment is successfully confirmed. This prevents tracking abandoned or failed transactions and keeps your data clean.

Include all items: The items array in a transaction event should contain every single item from the order to give the AI a complete picture of what was purchased together.

Verify with the session explorer: After sending a test conversion or transaction, use the Live Session Explorer in the Luigi's Box application to confirm that the event was received correctly with all its data.

Use descriptive action types: For non-purchase conversions (like "add_to_wishlist"), use clear and consistent names for action.type.

Next Steps
Beyond adding to the cart and purchasing, you can track other important conversions that signal user interest:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/product listing/understanding_plp.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides a high-level overview of the Luigi's Box Product Listing (PLP) feature. A Luigi's Box Product listing page is more than just a list of products on a category page; it's a dynamic, AI-powered system designed to present the most relevant products to each user, complete with powerful merchandising tools and advanced filtering.

Before diving into a technical implementation, it's important to understand the core features of the Product listing system and the different integration paths available to you.
Core features
Luigi's Box Product Listing is designed to give you both automated, AI-driven relevance and precise manual control over your category and brand pages.



Merchandising suite: You have full control over the products displayed on any listing page. From the Luigi's Box application, you can pin specific items to the top, boost products to improve their ranking, or hide them from the listing entirely, all without any code changes.

Faceted search: You can automatically generate advanced filtering menus (facets) from your product data. This allows users to drill down into listings by specifying criteria like category, brand, color, or price range.

Dynamic facets: For stores with a wide variety of products, you can let the Luigi's Box system automatically select and display the most relevant facets for any given category, adapting the UI to the user's needs in real-time.

Customizable ranking: Results are ranked using a multitude of signals, including text relevance, product availability, and data from the analytics feedback loop (e.g., product popularity). You can further influence this ranking by providing data like margin or introduced_at (for new products), or by using manual boosts in the Luigi's Box application.

Banner campaigns: You can easily run banner campaigns that are automatically displayed on specific category or brand pages, without any extra development work required.

Integration paths
There are two primary ways to integrate Luigi's Box Product Listing into your website or application. Your choice will depend on your development resources and the level of control you need over the user interface.

API Integration (recommended for custom storefronts)

This approach involves making direct GET requests to the Luigi's Box Search API endpoint (https://live.luigisbox.com/search) and using the JSON response to build your own user interface from scratch.



Best for:


Developers who need absolute, pixel-perfect control over the UI.
Mobile applications (iOS, Android).
Any non-web environment where a JavaScript library cannot be used.



Pros:



Maximum flexibility: You have complete control over how the results and filters are rendered.



Cons / developer responsibility:



Manual implementation: You are responsible for building the entire UI, including facets, sorting controls, and pagination logic.

Manual analytics: You must manually implement the analytics tracking for list views, clicks, and facet interactions. Without this, the system cannot learn or improve.




Search.js library (recommended for rapid web developmen)

This is a powerful, self-hosted JavaScript library that can rapidly build an entire interactive, single-page-application style listing interface for you.



Best for: Developers looking for a fast, out-of-the-box solution to create a modern product listing page on their website.

Pros:



Full-featured: Includes support for facets, sorting, pagination, and banner campaigns automatically.

Automatic analytics: search.js handles all the necessary analytics tracking for you, which is a major advantage.

Customizable: You can provide your own HTML templates to control the look and feel while the library handles the logic.



Next steps
Now that you understand the features and integration paths, you can proceed to the guide that best fits your needs:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/product listing/plp_with_search_js.html</url>

      <title></title>
      <content><![CDATA[Introduction
While the Luigi's Box API provides maximum control, the Search.js library offers the fastest path to a feature-rich and fully interactive Product Listing Page (PLP). By using Search.js for listings, you can render a complete Product listing page, including dynamic filters, sorting, and pagination, with just a few lines of JavaScript.
This guide will show you how to correctly initialize the Search.js widget and then execute a listing for a specific category, effectively turning the search UI into a powerful category page.
What you'll learn

How to include and initialize the Search.js library with essential configurations.
How to execute a product listing for a specific category using Search.js.

Who is this guide for

Developers looking for a fast, out-of-the-box solution for a product listing page.

Prerequisites

Basic knowledge of HTML and JavaScript.
Your Luigi's Box TrackerId.

Step-by-step: Building the product listing pageStep 1: Create a new product listing page
First, you need to add two key elements to your HTML page: an  for the search bar and a  that will act as a container for the entire Product listing user interface.

Search.js requires a search input for initialization, even if the primary purpose of the page is to display a category listing.
Example: plp.html body
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

    Product Listing

    
    

    
    
        Loading products...
    

    
    
    
        // The initialization script will go here
    




        
      
    
  
Step 2: Initialize and execute the listing
A key aspect of using Search.js for product listings is understanding its two-step process:



Initialization (Luigis.Search({...})): The first call you make is to Luigis.Search(). Its job is to initialize the entire search interface. It sets up all the components like facets and sorting and links the library to your HTML placeholders. At this stage, the UI is ready, but no search has been performed.

Execution  (Luigis.Search.Search(...)): The second call you make is to the Search() method on the already-initialized Luigis.Search object. Its job is to execute the initial search. For a listing page, you'll execute this with a null query but with a special IntentFilters object that tells the system what category to display.


Add the following script to your HTML file, just before the closing  tag.
Example: Initialization and execution script
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  document.addEventListener('DOMContentLoaded', function() {
    // 1. First, INITIALIZE the search UI.
    Luigis.Search({
      TrackerId: '111111-111111', // Replace with your Tracker ID
      Theme: 'boo',
      Facets: ['brand', 'price_amount'],
      DefaultFilters: {
          type: 'product'
      }
    }, 
    '#search-input', 
    '#plp-ui-container'
    );

    // 2. Immediately after, EXECUTE the search for the category.
    Luigis.Search.Search(
      null, // Query is null for a listing
      {
        ProductListingFilter: "category",
        IntentFilters: { 
          category: "Guitars" 
        }
      }
    );
  });


        
      
    
  

This script does the following:


Initializes the Search.js library with your Tracker ID and sets the theme to 'boo'.
Sets the facets to be displayed (e.g., brand and price).
Defines the default filter to only show products.
Executes the search with a null query, specifying that you want to filter by the "Guitars" category.

Step 3: Handling multiple product listing pages
The example above is perfect for a single page. But what if your website has many standalone HTML files for different brands and categories (e.g., yamaha.html, guitars.html)? You need a scalable approach.

The best practice is to create a single, reusable JavaScript file that can intelligently configure itself based on which page it's on, using HTML data- attributes.
Example: Brand product listing page (yamaha.html) HTML setup
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          



    Yamaha Products
    
    Loading...

    
    
    
     




        
      
    
  
Example: Category product listing page (guitars.html) HTML setup
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          



    Guitar Products
    
    Loading...

    
    
    
    




        
      
    
  
Example: Reusable product listing loader script (plp-loader.js)
Now, create one JavaScript file that will be included on every product listing page. This script reads the data- attributes from the body and configures Search.js dynamically.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // File: /scripts/plp-loader.js

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const filterType = body.dataset.plpType;   // Reads "data-plp-type"
    const filterValue = body.dataset.plpValue; // Reads "data-plp-value"

    // If the required data attributes aren't on this page, do nothing.
    if (!filterType || !filterValue) {
        return;
    }

    // 1. Initialize the UI (same configuration for all pages)
    Luigis.Search({
        TrackerId: '111111-111111', // Your Tracker ID
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
            ProductListingFilter: filterType,
            // Use the dynamic values to build the IntentFilters object
            IntentFilters: { 
                [filterType]: filterValue 
            }
        }
    );
});

        
      
    
  
Best practices


Match the ProductListingFilter: Ensure the value of ProductListingFilter exactly matches the key you are using in IntentFilters. This is how Luigi's Box applies your merchandising rules, and a mismatch is a common source of errors.

Use a theme: The Theme: 'boo' setting is the recommended way to apply modern, responsive styling to the widget. It provides a solid foundation that you can then customize with your own CSS or by overriding the default templates.

Plan for a universal search bar: While the multi-page example requires an  on each page, the ideal architecture for a real website is a shared layout or header that contains a single, universal search bar. This provides a more consistent user experience and simplifies your code.

Customize with templates: For full control over the look and feel, Search.js offers a powerful templating system. You can override the default HTML of any component, from the product tiles to the facet filters.

Next steps
Now that you have a working and scalable Product listing page, you can customize its appearance and explore more advanced features.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/product listing/building_custom_plp.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides the fastest way to create a basic Product listing Page (PLP) by calling the Luigi's Box API directly. You will learn how to make a simple API call to fetch all products belonging to a specific category and render them in a clean grid using client-side JavaScript.

By the end of this guide, you will have a functional, single-file HTML page that displays products from your catalog, giving you a solid foundation for a custom integration. See full example.


  
        
      
      !
    

  
  
    Warning
    
        This is a demonstration guide, not production code. In real-world application, for frontend integration, Luigi's box recommends using Search.js, which provides a more robust, maintainable, and production-ready code.
  The recommended way to use the Product listing API is through your own backend proxy.

    
  

What you'll learn

How to make a basic Product listing API call.
How to parse the JSON response and render the product results.
How to track the necessary analytics events for the AI to learn.

Who is this guide for

Developers new to the Luigi's Box Product listing API.
Developers who want to understand the core API mechanics before building a full-featured integration.

Prerequisites

Your Luigi's Box TrackerId.
The ability to write and serve a standard HTML, CSS, and JavaScript file.
A product catalog synced with Luigi's Box that has filterable attributes (e.g., category).

Step-by-stepStep 1: Set up the HTML structure
Start by creating the basic structure of your listing page. This will include placeholders for the product grid, the filter sidebar, and the pagination controls. Styling is omitted for clarity.
Example: Basic HTML layout
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          


    
    
    Product Listing Demo
    


    
        
        
            
            
                
                
            
        
    

    
        // --- DOM ELEMENTS ---
        const productGrid = document.getElementById("product-grid");
        const pageTitle = document.getElementById("page-title");
        const facetsContainer = document.getElementById("facets-container");
        const paginationContainer = document.getElementById("pagination-container");

        // --- STATE MANAGEMENT ---
        let activeFilters = {};
        let currentPage = 1;

        // JS will go here
    



        
      
    
  
Step 2: Understand the Product listing API request
To get products for a listing, you send a GET request to the Search API endpoint, omitting the q (query) parameter.
Endpoint
GET https://live.luigisbox.com/search
Required parameters


tracker_id: Your Luigi's Box Tracker ID

f[]: The filter that defines the product set (e.g., category:Kalimbas)

plp: Critical. This tells Luigi's Box this is a Product listing page and which filter key to use for merchandising. Its value must match the key in your f[] filter (e.g., plp=category)

Optional parameters


hit_fields: A comma-separated list of product attributes to return (e.g., title,url,price,image_link).

facets: A comma-separated list of attributes for which you want to receive filter options (e.g., brand,price_amount).

size: The number of results per page.

page: The page number for pagination.

Example: Product listing API request URL
GET https://live.luigisbox.com/search?tracker_id=&amp;f[]=type:product&amp;f[]=category:Guitars&amp;plp=category&amp;facets=brand,price_amount&amp;hit_fields=title,url,price_amount,image_link,brand,id&amp;page=1
Step 3: Understand the API response
The API responds with a JSON object containing everything needed to render the page.
Example: Product listing API response
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "results": {
    "total_hits": 17,
    "hits": [
      {
        "url": "/cascha-hh-2145-mahagony-10-kalimba/",
        "attributes": {
          "id": ["2377383"],
          "title": "Cascha HH 2145 Mahagony 10 Kalimba",
          "brand": ["Cascha"],
          "price_amount": 39.9,
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1777383_cascha-hh-2145-mahagony-10-kalimba.jpg?673488c5"
        },
        "type": "product"
      },
      {
        "url": "/bolf-kalimbas-chroma-2-row-chromatic-21-kalimba/",
        "attributes": {
          "id": ["2373271"],
          "title": "Bolf Kalimbas Chroma 2-Row Chromatic 21 Kalimba",
          "brand": ["Bolf Kalimbas"],
          "price_amount": 149,
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1793271_bolf-kalimbas-chroma-2-row-chromatic-21-kalimba.jpg?673488c5"
        },
        "type": "product"
      }
    ],
    "facets": [
      {
        "name": "brand",
        "type": "text",
        "values": [
          { "value": "Cascha", "hits_count": 4 },
          { "value": "Bolf Kalimbas", "hits_count": 13 }
        ]
      },
      {
        "name": "price_amount",
        "type": "float",
        "values": [
          { "value": "19.9|80.0", "hits_count": 12 },
          { "value": "80.0|150.0", "hits_count": 5 }
        ]
      }
    ]
  },
  "next_page": "https://live.luigisbox.com/search?tracker_id=...&amp;page=2"
}

        
      
    
  
Key fields overview


results.total_hits: The total number of products found, used for building pagination.

results.hits: An array of the product results for the current page.

results.facets: An array of filter groups (e.g., "brand," "price_amount") with available values and counts.

Step 4: Fetch Product listing results
This function calls the API with the current page and active filters, then invokes the rendering functions.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- CONFIGURATION ---
const TRACKER_ID = "YOUR_TRACKER_ID"; // Replace with your actual Tracker ID
const CATEGORY_NAME = "Guitars";
const API_ENDPOINT = "https://live.luigisbox.com/search";
const RESULTS_PER_PAGE = 6;

// --- API CALL ---
async function getPLPResults(page = 1, filters = {}) {
    currentPage = page;
    activeFilters = filters;

    const params = {
        tracker_id: TRACKER_ID,
        'f[]': [
            'type:product',
            `category:${CATEGORY_NAME}`
        ],
        plp: 'category',
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
        updateURL(currentPage, activeFilters);
        trackListView(hits, CATEGORY_NAME, activeFilters);

    } catch (error) {
        console.error("Error fetching products:", error);
        productGrid.innerHTML = "Sorry, there was an error loading products.";
    }
}

        
      
    
  
Step 5: Render results, facets, and pagination
These functions take the API response and generate the HTML for the page.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- RENDERING FUNCTIONS ---
function renderProducts(hits = [], total_hits = 0) {
    pageTitle.textContent = `Products in ${CATEGORY_NAME} (${total_hits})`;

    if (hits.length === 0) {
        productGrid.innerHTML = "No products found with the selected filters.";
        return;
    }

    productGrid.innerHTML = hits.map(product => {
        const imageUrl = product.attributes.image_link || `https://placehold.co/300x200/eee/ccc?text=No+Image`;
        const title = product.attributes.title || 'Untitled';
        const brand = (product.attributes.brand &amp;&amp; product.attributes.brand[0]) || 'No Brand';
        const productId = (product.attributes.id &amp;&amp; product.attributes.id[0]) ? product.attributes.id[0] : null;
        const productIdAttribute = productId ? `data-product-id="${productId}"` : '';

        return `
            
                
                    
                
                
                    ${title}
                    ${brand}
                
            
        `;
    }).join('');
}

function renderFacets(facets = []) {
    facetsContainer.innerHTML = facets.map(facet => {
        const values = facet.values.map(val => {
            const isChecked = (activeFilters[facet.name] || []).includes(val.value);
            return `
                
                    
                        
                        ${val.value} (${val.hits_count})
                    
                
            `;
        }).join('');
        return `
            
                ${facet.name}
                ${values}
            
        `;
    }).join('');
}

function renderPagination(totalHits) {
    const totalPages = Math.ceil(totalHits / RESULTS_PER_PAGE);
    paginationContainer.innerHTML = "";
    if (totalPages  {
            urlParams.append('f[]', `${key}:${value}`);
        });
    }

    history.pushState({ page, filters }, "", `?${urlParams.toString()}`);
}

        
      
    
  
Step 6: Handle user interactions
Finally, add event listeners to make the facets and pagination interactive.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- EVENT LISTENERS ---
facetsContainer.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
        const facetName = e.target.name;
        const facetValue = e.target.value;

        if (!activeFilters[facetName]) {
            activeFilters[facetName] = [];
        }

        if (e.target.checked) {
            activeFilters[facetName].push(facetValue);
        } else {
            activeFilters[facetName] = activeFilters[facetName].filter(v => v !== facetValue);
            if (activeFilters[facetName].length === 0) {
                delete activeFilters[facetName];
            }
        }
        getPLPResults(1, activeFilters);
    }
});

paginationContainer.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const page = parseInt(e.target.dataset.page, 10);
        getPLPResults(page, activeFilters);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page'), 10) || 1;
    const filters = {};
    urlParams.getAll('f[]').forEach(filterString => {
        const [key, value] = filterString.split(":", 2);
        if (key &amp;&amp; value) {
            if (!filters[key]) filters[key] = [];
            filters[key].push(value);
        }
    });
    getPLPResults(page, filters);
});

        
      
    
  
Step 7: Track analytics events manually
Analytics are not optional. For the Luigi's Box AI to learn from user behavior, you must manually track events when building a custom UI.
Example: Track list view and click events
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- ANALYTICS CONFIGURATION ---
const ANALYTICS_API_URL = "https://api.luigisbox.com/";
const CLIENT_ID = Math.floor(Math.random() * 1e18); 

async function sendAnalyticsEvent(payload) {
    try {
        await axios.post(ANALYTICS_API_URL, payload);
        console.log('Analytics event sent:', payload.type);
    } catch (error) {
        console.error('Failed to send analytics event:', error);
    }
}

function trackListView(hits, categoryName, subsequentFilters = {}) {
    if (!hits || hits.length === 0) return;

    // Build the scopes object for the PLP context
    const scopes = {
        '_category_label': categoryName,
        'category': categoryName
    };

    // Build the filters object for any subsequent user-applied filters
    const filtersForAnalytics = {};
    for (const key in subsequentFilters) {
        filtersForAnalytics[key] = subsequentFilters[key].join(',');
    }

    const analyticsPayload = {
        id: crypto.randomUUID(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Product Listing": {
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    url: hit.url,
                    position: (currentPage - 1) * RESULTS_PER_PAGE + index + 1
                })),
                query: {
                    scopes: scopes,
                    filters: filtersForAnalytics
                }
            }
        }
    };
    sendAnalyticsEvent(analyticsPayload);
}

function trackClickEvent(productId) {
    const clickPayload = {
        id: crypto.randomUUID(),
        type: "click",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        action: {
            type: "click",
            resource_identifier: productId
        }
    };
    sendAnalyticsEvent(clickPayload);
}

productGrid.addEventListener('click', function(e) {
    const productLink = e.target.closest('.product-link');
    if (productLink) {
        const productId = productLink.dataset.productId;
        if (productId) {
            trackClickEvent(productId);
        }
    }
});

        
      
    
  
Best Practices


Analytics is not optional: When building a custom UI, you are responsible for sending all analytics events. This is essential for the learning models that power search relevance and personalization.

Use a persistent CLIENT_ID: In this example, we generate a random CLIENT_ID on each page load. In a production environment, you should generate this ID once and store it in a long-term cookie or localStorage to track users across sessions.

Next Steps
With this basic integration complete, you are ready to handle more complex, real-world scenarios.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/product listing/navigable_category_page.html</url>

      <title></title>
      <content><![CDATA[Introduction
While a basic Product listing page is a good start, a modern e-commerce site requires a rich browsing experience that allows users to navigate up and down your category tree seamlessly. This guide will show you how to leverage the Luigi's Box API's hierarchical capabilities to build that experience.
By the end of this guide, you will have a single-file code example that creates a dynamic Product listing page, complete with clickable breadcrumbs, subcategory links, interactive filters, and a full pagination component, all powered by your own client-side JavaScript.
See full example.
What you'll learn

How to use the all_categories_path filter for hierarchical listings.
How to request and parse the hierarchical facet response to build a category tree.
How to render a complete UI with breadcrumbs, subcategories, filters, and pagination.
How to track the necessary analytics events for a Product listing page.

Who is this guide for

Developers who need to build a complete, hierarchical category browsing experience.
Developers who want to understand the core API mechanics before building a full-featured integration.

Prerequisites

Your Luigi's Box TrackerId.
The ability to write and serve a standard HTML, CSS, and JavaScript file.
Hierarchical category data synced with your Luigi's Box catalog.
Familiarity with the concepts in the first quickstart guide, "Quickstart: Your first API-powered product listing".

Step-by-stepStep 1: Set up the HTML structure
First, create the HTML skeleton for your page. This will include placeholders for all the dynamic components: breadcrumbs, subcategories, filters, the product grid, and pagination.
Example: Basic HTML layout
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          


    
    
    Category Page | My Super Shop
    


    
        My Super Shop
    
    
      
      
      
        
        
          Loading...
          
          
        
      
    
    
        // All our JavaScript will go here
    



        
      
    
  
Step 2: Define configuration and state
Inside your  tag, define the constants for your API configuration and the variables to manage the page's state.
Example: Configuration and state variables
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- CONFIGURATION ---
const TRACKER_ID = "YOUR_TRACKER_ID"; // Replace with your actual Tracker ID
const API_ENDPOINT = "https://live.luigisbox.com/search";
const RESULTS_PER_PAGE = 9;

// --- DOM ELEMENTS ---
const resultsContainer = document.getElementById("results-container");
const facetsContainer = document.getElementById("facets-container");
const resultsHeading = document.getElementById("results-heading");
const paginationContainer = document.getElementById("pagination-container");
const breadcrumbsContainer = document.getElementById("breadcrumbs-container");
const subcategoriesContainer = document.getElementById("subcategories-container");

// --- STATE MANAGEMENT ---
let currentCategoryPath = '';
let activeFilters = {};
let currentPage = 1;

        
      
    
  
Step 3: Fetch the product listing data
Create the main function that calls the Luigi's Box API. This function will take the current category path, filters, and page number to construct the request. Note the use of all_categories_path to get all products in the tree and facets=category_path to get the data for the navigation UI.
Example: Fetching Product Listing data
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          async function getProductListing(categoryPath, filters = {}, page = 1) {
  resultsHeading.textContent = 'Loading...';
  // Clear all containers before rendering new data
  resultsContainer.innerHTML = ''; 
  facetsContainer.innerHTML = '';
  paginationContainer.innerHTML = '';
  subcategoriesContainer.innerHTML = '';

  const params = {
    tracker_id: TRACKER_ID,
    'f[]': ['type:product'],
    facets: 'brand,price_amount,category_path',
    hit_fields: 'title,url,price_amount,image_link,brand,id',
    size: RESULTS_PER_PAGE,
    page: page,
  };

  if (categoryPath) {
      params['f[]'].push(`all_categories_path:${categoryPath}`);
      params.plp = 'all_categories_path';
  }

  for (const key in filters) {
    filters[key].forEach(value => {
      params['f[]'].push(`${key}:${value}`);
    });
  }

  try {
    const response = await axios.get(API_ENDPOINT, { params });
    const data = response.data;

    // Update state
    currentCategoryPath = categoryPath;
    currentPage = page;
    activeFilters = filters;

    // Call rendering functions (we will create these next)
    renderResults(data.results);
    renderFacets(data.results.facets);
    renderSubcategories(data.results.facets);
    renderPagination(data.results.total_hits);
    renderBreadcrumbs(currentCategoryPath);
    updateURL(currentCategoryPath, activeFilters, currentPage);
    trackListView(data.results.hits, currentCategoryPath, activeFilters); // Track analytics

  } catch (error) {
    console.error("Error fetching product listing:", error);
    resultsHeading.textContent = "Error";
  }
}

        
      
    
  
Step 4: Render the navigation (breadcrumbs &amp; subcategories)
These functions parse the hierarchical facet response to build the UI that allows users to navigate up and down the category tree
Example: Rendering breadcrumbs and subcategories
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function renderBreadcrumbs(pathString) {
    if (!pathString) {
        breadcrumbsContainer.innerHTML = `Home`;
        return;
    }
    const pathParts = pathString.split('||');
    let accumulatedPath = '';
    const breadcrumbHTML = pathParts.map((part, index) => {
        accumulatedPath += (index > 0 ? '||' : '') + part;
        if (index === pathParts.length - 1) {
            return ` / ${part}`;
        } else {
            const categoryUrl = `?category=${encodeURIComponent(accumulatedPath)}`;
            return ` / ${part}`;
        }
    }).join('');
    breadcrumbsContainer.innerHTML = `Home` + breadcrumbHTML;
}

function renderSubcategories(facetsData) {
    const categoryFacet = facetsData.find(f => f.name === 'category_path');
    if (!categoryFacet || !categoryFacet.values) return;

    let nodesToRender = [];
    if (!currentCategoryPath) {
        nodesToRender = categoryFacet.values;
    } else {
        const pathParts = currentCategoryPath.split('||');
        let currentLevelNodes = categoryFacet.values;
        let targetNode = null;
        for (const part of pathParts) {
            targetNode = currentLevelNodes.find(node => node.value === part);
            if (targetNode &amp;&amp; targetNode.children) {
                currentLevelNodes = targetNode.children;
            } else {
                targetNode = null;
                break;
            }
        }
        if (targetNode) {
            nodesToRender = targetNode.children || [];
        }
    }

    if (nodesToRender.length === 0) return;

    const listItems = nodesToRender.map(cat => {
        const fullPath = currentCategoryPath ? `${currentCategoryPath}||${cat.value}` : cat.value;
        const categoryUrl = `?category=${encodeURIComponent(fullPath)}`;
        return `${cat.value} (${cat.hits_count})`;
    }).join('');

    subcategoriesContainer.innerHTML = `Browse Subcategories${listItems}`;
}

        
      
    
  
Step 5: Render results, facets, and pagination
These functions render the product grid, the filter sidebar, and the page navigation controls.
Example: Rendering products, facets, and pagination
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function renderResults(resultsData) {
  const categoryName = currentCategoryPath.split('||').pop() || 'All Products';
  resultsHeading.textContent = `Showing ${resultsData.total_hits} results for "${categoryName}"`;

  if (resultsData.hits.length === 0) {
    resultsContainer.innerHTML = "No products found in this category.";
    return;
  }

  resultsContainer.innerHTML = resultsData.hits.map(result => {
    const imageUrl = result.attributes.image_link || "https://placehold.co/200x200/eee/ccc?text=No+Image";
    return `
      
        
          
        
        
          ${result.attributes.title}
          ${result.attributes.brand?.[0]}
        
      `;
  }).join('');
}

function renderFacets(facetsData) {
    const filteredFacets = facetsData.filter(f => f.name !== 'category_path');
    facetsContainer.innerHTML = filteredFacets.map(facet => {
        const content = facet.values.map(val => {
            const isChecked = activeFilters[facet.name]?.includes(val.value) ? "checked" : "";
            return `
                
                    
                        
                        ${val.value} (${val.hits_count})
                    
                `;
        }).join('');
        return `
            
                ${facet.name.replace(/_/g, ' ')}
                ${content}
            `;
    }).join('');
}

function renderPagination(totalHits) {
    const totalPages = Math.ceil(totalHits / RESULTS_PER_PAGE);
    paginationContainer.innerHTML = "";
    if (totalPages  1) urlParams.set("page", page);
    for (const key in filters) {
      filters[key].forEach(value => urlParams.append('f[]', `${key}:${value}`));
    }
    const newQueryString = urlParams.toString();
    const newRelativePath = newQueryString ? `?${newQueryString}` : window.location.pathname;
    try {
        if (window.location.search !== (newQueryString ? `?${newQueryString}`: '')) {
            history.pushState({ categoryPath, filters, page }, null, newRelativePath);
        }
    } catch (e) {
        console.warn("history.pushState failed.", e.message);
    }
}

        
      
    
  
Step 6: Track analytics events
Analytics are not optional. Add the configuration and functions needed to track view_item_list and click events.
Example: Track list view and click events
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- ANALYTICS CONFIGURATION ---
const ANALYTICS_API_URL = "https://api.luigisbox.com/";
const CLIENT_ID = Math.floor(Math.random() * 1e18); 

async function sendAnalyticsEvent(payload) {
    try {
        await axios.post(ANALYTICS_API_URL, payload);
        console.log('Analytics event sent:', payload.type);
    } catch (error) {
        console.error('Failed to send analytics event:', error);
    }
}

function trackListView(hits, categoryPath, subsequentFilters = {}) {
    if (!hits || hits.length === 0) return;

    // Build the scopes object to describe the PLP's context
    const scopes = {
        '_category_label': categoryPath,
        'all_categories_path': categoryPath
    };

    // Build the filters object for any subsequent user-applied filters
    const filtersForAnalytics = {};
    for (const key in subsequentFilters) {
        filtersForAnalytics[key] = subsequentFilters[key].join(',');
    }

    const analyticsPayload = {
        id: crypto.randomUUID(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Product Listing": {
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    url: hit.url,
                    position: (currentPage - 1) * RESULTS_PER_PAGE + index + 1
                })),
                query: {
                    scopes: scopes,
                    filters: filtersForAnalytics
                }
            }
        }
    };
    sendAnalyticsEvent(analyticsPayload);
}

function trackClickEvent(productId) {
    const clickPayload = {
        id: crypto.randomUUID(),
        type: "click",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        action: {
            type: "click",
            resource_identifier: productId
        }
    };
    sendAnalyticsEvent(clickPayload);
}

productGrid.addEventListener('click', function(e) {
    const productLink = e.target.closest('.product-link');
    if (productLink) {
        const productId = productLink.dataset.productId;
        if (productId) {
            trackClickEvent(productId);
        }
    }
});

        
      
    
  
Best Practices


Analytics is not optional: When building a custom UI, you are responsible for sending all analytics events. This is essential for the learning models that power search relevance and personalization.

Use a persistent CLIENT_ID: In this example, we generate a random CLIENT_ID on each page load. In a production environment, you should generate this ID once and store it in a long-term cookie or localStorage to track users across sessions.

Use all_categories_path for browsing: This is the recommended filter for category pages as it correctly fetches products from the category and all its subcategories, while also providing the necessary data in the facets response to build the subcategory navigation.

Next Steps
You now have a robust, client-side implementation of a dynamic Product listing page. The logical next step for a production environment is to move the API call from the user's browser to your own backend.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/indexing.html</url>

      <title></title>
      <content><![CDATA[]]></content>
      <icon>lightning-charge</icon>
    </page>
    <page>
      <url>/quickstartguides/search.html</url>

      <title></title>
      <content><![CDATA[]]></content>
      <icon>lightning-charge</icon>
    </page>
    <page>
      <url>/quickstartguides/recommendations.html</url>

      <title></title>
      <content><![CDATA[]]></content>
      <icon>lightning-charge</icon>
    </page>
    <page>
      <url>/quickstartguides/recommendations/building_custom_recommendations.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides a comprehensive walkthrough for building a custom recommendation widget by calling the Recommender API directly from your frontend. This approach gives you complete control over the final look and feel, allowing you to create a user experience that is perfectly tailored to your brand.

By the end of this guide, you will have a fully functional recommendation widget, powered by your own client-side JavaScript, and a clear understanding of how to implement the detailed analytics tracking required to make it effective. See full example.


  
        
      
      !
    

  
  
    Warning
    
        This is a demonstration guide, not production code. For most frontend integrations, Luigi's Box recommends using Recco.js, which provides a more robust and production-ready solution.

    
  

What you'll learn

How to call the Recommender API directly from the frontend.
How to render recommendation results from the API response.
How to manually and correctly track analytics events, which is critical for model performance.

Who is this guide for

Developers building single-page applications or custom storefront UIs.
Anyone evaluating the Recommender API for custom integration.

Prerequisites

Your Luigi's Box TrackerId.
The ability to write and serve a standard HTML, CSS, and JavaScript file.
The ability to make HTTP requests from your frontend code.
An existing product page with a unique product ID available.

Step-by-stepStep 1: Set up the HTML structure
Start by creating the basic structure for your widget. This will be a simple container on a product page where the recommended items will be displayed.
Example: Basic HTML layout on a product page
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

  
  
  Product Page


  Rider Aqua Thong Slipper
  ID: /rider-aqua-thong-slipper-blue-green-38/

  

  
  
    // --- DOM ELEMENTS ---
    const recommenderContainer = document.getElementById("recommender-container");

    // JS will go here
  



        
      
    
  
Step 2: Understand the Recommender API request
To get recommendations, you send a POST request to the Recommender API endpoint with a JSON payload.
Endpoint
Post https://live.luigisbox.com/v1/recommend
Required parameters


tracker_id: Your Luigi's Box Tracker ID.

Request body (JSON array)
The body of your POST request is an array containing one or more recommendation request objects.



recommendation_type: The identifier of the recommender model you want to use.

recommender_client_identifier: A unique name for this specific placement, used for analytics.

item_ids: An array of product IDs to base the recommendation on.

hit_fields:  An array of product attributes to return. (Highly Recommended) Requesting only the fields you need (e.g., title,url,price,image_link) significantly improves performance by reducing the response size.

size: The number of results to return.

user_id: A unique user identifier for personalization.

Example: Recommender API request
POST https://live.luigisbox.com/v1/recommend?tracker_id=111111-111111

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "recommendation_type": "item_detail_complements_1",
    "recommender_client_identifier": "item_detail_complements_1",
    "item_ids": ["/rider-aqua-thong-slipper-blue-green-38/"],
    "size": 4,
    "hit_fields": ["title", "url", "price_amount", "image_link", "brand", "id"],
    "user_id": "123456789012345678"
  }
]

        
      
    
  
Step 3: Understand the API response
The API responds with a JSON array containing a response object for each request you sent.
Example: Recommender API response
  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "recommendation_id": "a24588e9-0664-4637-91d5-165313a6eac8",
    "recommender": "c01",
    "recommendation_type": "item_detail_complements_1",
    "recommender_client_identifier": "item_detail_complements_1",
    "hits": [
      {
        "url": "/complementary-item-789",
        "attributes": {
          "title": "Matching Item",
          "id": ["ITEM-789"],
          "price_amount": 35.50
        }
      }
    ]
  }
]

        
      
    
  
Key fields overview


recommendation_id: Unique identifier for the recommendation.

recommendation_type: Type of recommendation (e.g., "item_detail_complements_1").

recommender_client_identifier: Client identifier for the specific placement.

hits: Array of recommended product objects.

Step 4: Fetch recommendations
This function builds the request, makes the POST call, and, most importantly, stores the necessary data for analytics tracking.
Example: Fetching recommendations with axios and preparing for analytics
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // --- CONFIGURATION ---
const TRACKER_ID = "YOUR_TRACKER_ID";
const API_ENDPOINT = `https://live.luigisbox.com/v1/recommend?tracker_id=${TRACKER_ID}`;
const CLIENT_ID = String(Math.floor(Math.random() * 1e18));
const CURRENT_PRODUCT_ID = "/rider-aqua-thong-slipper-blue-green-38/";
let analyticsData = {}; // Object to hold data for tracking

// --- API CALL ---
async function getRecommendations() {
    const requestPayload = {
        recommendation_type: "item_detail_complements_1",
        recommender_client_identifier: "item_detail_complements_1",
        item_ids: [CURRENT_PRODUCT_ID],
        size: 4,
        hit_fields: ["title", "url", "price_amount", "image_link", "brand", "id"],
        user_id: CLIENT_ID, 
    };

    try {
        const response = await axios.post(API_ENDPOINT, [requestPayload]);
        const recommendationData = response.data[0];

        if (recommendationData &amp;&amp; recommendationData.hits.length > 0) {
            // Store all necessary data for the analytics payload
            analyticsData = {
                RecommendationId: recommendationData.recommendation_id,
                Recommender: recommendationData.recommender,
                Type: recommendationData.recommendation_type,
                RecommenderClientId: recommendationData.recommender_client_identifier,
                ItemIds: requestPayload.item_ids
            };

            renderRecommendations(recommendationData.hits);
            trackRecommendationView(recommendationData.hits);
        }
    } catch (error) {
        console.error("Error fetching recommendations:", error);
    }
}

        
      
    
  
Step 5: Render the results
This function takes the API response and generates the HTML for the product cards. This part is fully customizable to your needs.
Example: Render recommendations
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function renderRecommendations(hits, title = "Complement Products") {
    const productsHTML = hits
        .map((hit) => {
            const { url, attributes } = hit;
            const imageUrl =
                attributes.image_link ||
                "https://placehold.co/400x400/eee/ccc?text=No+Image";
            const productTitle = attributes.title || "No Title Available";
            const brand = attributes.brand ? attributes.brand[0] : "";
            const price = attributes.price_amount
                ? `${attributes.price_amount} EUR`
                : "";
            const productId = attributes.id ? attributes.id[0] : url;

            return `
                
                    
                        
                        
                            ${productTitle}
                            ${brand}
                            ${price}
                        
                    
                `;
        })
        .join("");

    recommenderContainer.innerHTML = `
        ${title}
        ${productsHTML}
    `;
}

        
      
    
  
Step 6: Track analytics events manually
This is the most critical step. You must manually construct and send analytics events.
The "view_items_list" event
After displaying the recommendations, you must immediately send a "view_item_list" event. This tells Luigi's Box which products were shown to the user.
Example: Tracking the event
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function trackRecommendationView(hits) {
    const viewPayload = {
        id: crypto.randomUUID(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Recommendation": {
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    type: "item",
                    url: hit.attributes.id ? hit.attributes.id[0] : hit.url, // Object identity
                    position: index + 1,
                    price: hit.attributes.price_amount
                })),
                query: {
                    filters: {
                        RecommendationId: analyticsData.RecommendationId,
                        RecommenderClientId: analyticsData.RecommenderClientId,
                        ItemIds: analyticsData.ItemIds,
                        Recommender: analyticsData.Recommender,
                        Type: analyticsData.Type,
                    }
                }
            }
        }
    };
    sendAnalyticsEvent(viewPayload);
}

        
      
    
  
Breaking down the query.filters object
This object provides the full context for the recommendation and is required for analytics to work correctly.



RecommendationId: (Required) The unique ID for this set of results. We get this from the analyticsData object we saved.

RecommenderClientId: (Required) The unique name for this placement. We also get this from analyticsData.

ItemIds: The list of product IDs used in the original request.

Recommender: The name of the recommender model, from the API response.

Type: The type of the recommender, also from the API response.

The "click" event
You must also track when a user clicks on a recommended item.
Example: Tracking a click event
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          function trackClickEvent(productId) {
    const clickPayload = {
        id: crypto.randomUUID(),
        type: "click",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        action: {
            type: "click",
            resource_identifier: productId,
            recommendation_id: analyticsData.RecommendationId // Link the click to the view
        }
    };
    sendAnalyticsEvent(clickPayload);
}

        
      
    
  
Best practices


Analytics is not optional: Sending view_list_tem and click events is mandatory. Without them, the models cannot learn, and you will not see performance data in your dashboard.

Use a persistent CLIENT_ID:  For accurate tracking, the CLIENT_ID should be a persistent identifier stored in a long-term cookie or local storage.

Next steps]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/recommendations/choosing_recommendation_models.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides strategic advice on which recommendation models to use on different parts of your website. Choosing the right model for the right context is key to maximizing engagement, increasing order value, and creating a better user experience.

While the technical implementation is covered in other guides, this document focuses on the "why" and "where" of using Luigi's Box's powerful recommendation models.
What you'll learn

Which models are best suited for product pages, shopping carts, and homepages.
How to use different models to achieve specific business goals like upselling, cross-selling, and personalization.
A framework for thinking about your overall recommendation strategy.

Who is this guide for

Developers who are planning their recommendation strategy.
Users looking to understand the business value of different recommendation types.

Choosing models by page type
The most effective recommendation strategies are context-aware. A recommendation that works well on a product page might not be the best choice for the homepage. Here's a breakdown of the best models for key pages on your site.
1. The product detail page (PDP)
Goal: Keep the user engaged with your catalog and encourage them to either upgrade their choice (upsell) or add more items to their cart (cross-sell).



For "You might also like" (alternatives):



Model: item_detail_alternatives


Why: This model is perfect for showing similar products. It's trained to find alternatives that are often slightly more expensive, which can help increase the average order value. It helps users find the perfect product if the current one isn't quite right.



For "Frequently bought together" (complements):



Model: item_detail_complements


Why: This is the classic cross-sell model. It recommends items that are commonly purchased with the product being viewed, like accessories, batteries, or matching items. This is a highly effective way to increase the number of items per order.



2. The shopping cart / basket page
Goal: Increase the final order value just before the user begins to check out.



Model: basket


Why: This powerful model looks at all items currently in the user's cart and finds products that are complementary to the entire order. It's smarter than a simple PDP complement model because it considers the combination of products, leading to more relevant last-minute suggestions.

3. The homepage
Goal: Immediately capture the user's interest, whether they are a new or returning visitor.



For new visitors ("Trending Now"):



Model: trends


Why: New visitors don't have a history with your site, so you can't personalize their experience yet. The trends model shows them your most popular products, providing social proof and a great starting point for exploration.



For returning visitors ("Picked for you"):



Model: user_click_based or favorites


Why: For returning users, personalization is key. The user_click_based model recommends products similar to what they've recently viewed but haven't purchased. The favorites model is excellent for consumable goods, reminding users to repurchase items they've bought before.



4. 404 and "No search Results" pages
Goal: Recover a broken user journey and guide the user back to relevant products.



Model: trends or user_conversion_based


Why: When a user hits a dead end, you want to show them something engaging. Displaying your most popular products (trends) is a safe and effective bet. Alternatively, for a known user, user_conversion_based can show them products related to their past purchases, offering a personalized path forward.

Next steps
Now that you have a basic understanding of recommender models.]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/recommendations/customizing_recco_js.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide is for users who have a basic Recco.js integration and want to customize the visual appearance of their recommendation widgets. While the default 'luigis' theme provides a clean look, you will likely want to modify the HTML structure to perfectly match your website's branding and styles.
Recco.js uses a powerful templating system based on Vue.js, allowing you to take full control over the rendered HTML. By the end of this guide, you will know how to override the default templates to create a fully custom design for your recommendations.
What you'll learn

How to identify and override the two main Recco.js templates.
How to access and display product data (like title, image, and price) within your custom template.
How to create unique templates for different recommendation widgets on your site.

Who is this guide for

Developers who want to seamlessly integrate the look and feel of recommendation widgets with their existing site design.
Users who need to display custom product attributes in their recommendations.

Prerequisites
Before you start, please ensure you have the following in place:


A working basic integration of Recco.js as covered in the first guide.
Your Luigi's Box TrackerId.
The ability to edit the HTML of the page where the recommender is located.

Step-by-step: Customizing templatesStep 1: Understand the core templates
Recco.js uses two primary templates to render a widget:



#template-recommend: This is the main container or wrapper for the entire widget. It typically includes a title and the loop that renders each item.

#template-recommend-item: This is the template for a single recommended product. This is the template you will customize most often.


To override them, you simply define a  tag with the corresponding id and type="text/x-template" anywhere in your HTML, before the script that initializes Luigis.Recommend.
Step 2: Create a custom item template
Let's start by creating a custom design for a single product card. In this example, we will display the product's image, title, brand, and price.
You can access all product data through the item object, primarily within item.attributes.
Example: Custom #template-recommend-item

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

  
    
      
    
    
      {{ item.attributes.title }}
      {{ item.attributes.brand[0] }}
      
        {{ item.attributes.price_amount | price }}
      
    
  


        
      
    
  
Key template features:


Data binding: Use {{ variable }} for text and :attribute="variable" (shorthand for v-bind:attribute) for HTML attributes.

Conditionals: Use v-if to only render an element if the data exists (e.g., v-if="item.attributes.brand").

Fallbacks: Use the || operator to provide a default value, like a placeholder image.

Price Filter: The | price filter automatically formats the price number with the correct currency symbol and decimals.

Step 3: Customize the main container (optional)
You can also customize the main wrapper. For example, you might want to add a custom title or change the list structure from s to a .
The main template must include the  component, which will automatically use your custom #template-recommend-item template.
Example: Custom #template-recommend

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          
  
    You Might Also Like
    
      
    
  


        
      
    
  
Step 4: Use specific templates for different widgets
If you are using Batch Mode to display multiple recommenders, you can give each one a unique design. This is done by adding a suffix to the template id that matches the Name you provided in the configuration.

If you have a recommender named 'alternatives', Recco.js will look for #template-recommend-item-alternatives first, before falling back to the default #template-recommend-item.
Example: A specific template for a "complements" widget
  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          // From your BatchRecommenders settings...
{
  Name: 'complements',
  Type: 'item_detail_complements',
  // ... other settings
}

        
      
    
  
Example: HTML structure
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

  
    
      
      {{ item.attributes.title }}
    
  


        
      
    
  
Best practices


Define templates first: Always place your  tags in the HTML before the  tag that calls Luigis.Recommend. If the templates aren't present when the library initializes, it will use its internal defaults.

Style with classes: Use your own CSS classes in the templates. This is the easiest way to ensure the widgets match your site's existing styles.

Be robust: Always check if data exists with v-if or provide fallbacks to prevent errors and ensure your layout doesn't break if a product is missing a specific attribute.

Next steps]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/recommendations/integrating_recco_js.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides the fastest way to build a feature-rich and interactive recommendation widget on your website using the Recco.js library. This library is the recommended integration path for most websites, as it handles all the complex parts for you: it makes the API calls, renders a professional UI, and automatically tracks all necessary analytics to improve recommendation quality over time.
By the end of this guide, you will have a fully functional recommendation widget displaying relevant products on any page of your site.
What you'll learn

How to add a recommendation widget to a page (e.g., a product detail page).
How to include and initialize the Recco.js library with essential configurations.
How to configure the widget to show specific recommendation types, such as "similar items" or "frequently bought together."

Who is this guide for

Developers looking for a fast, out-of-the-box solution for on-site recommendations.
Users who want to quickly implement powerful recommendation models without needing to work directly with the API.

Prerequisites
Before you start, please ensure you have the following in place:


The ability to edit HTML and add JavaScript to your website.
Your Luigi's Box TrackerId.
An existing page, such as a product detail page, where a unique product ID is available.

Step-by-step: Building the recommendation widgetStep 1: Choose a page and add a placeholder
First, decide where you want to display recommendations. Product detail pages, shopping carts, and homepages are all excellent choices.
On your chosen page, add an empty placeholder element where Recco.js will render the recommendation interface. If the element is not empty, its contents will be replaced.
Example: Placeholder on a product detail page
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          

  Awesome T-Shirt
  Product ID: TSHIRT-123
  




  




        
      
    
  
Step 2: Add and initialize the Recco.js script
Next, add the following script block just before the closing  tag on your page. This will load and initialize the Recco.js library.
The configuration tells Luigi's Box what to recommend and where to render it. In this example, we will configure a recommender to show alternative items on a product detail page.
Example: Initialize Recco.js for "similar items"
  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
           -->


  // This initializes the Luigi's Box Recommender UI
  Luigis.Recommend(
    {
      // --- Configuration Start ---
      TrackerId: 'YOUR_TRACKER_ID', // Replace with your actual Tracker ID
      Theme: 'luigis',              // Use the 'luigis' theme for a modern look
      Size: 4,                      // The number of items you want to display

      // Specify which recommender model to use.
      // 'item_detail_alternatives' is perfect for showing similar items on a product page.
      Type: 'item_detail_alternatives',

      // This function tells the recommender which product to base its recommendations on.
      // In a real application, you would get this ID dynamically from your page.
      GetItemIds: function() {
        return ['TSHIRT-123']; // The ID of the product the user is currently viewing
      },
      // --- Configuration End ---
    },
    '#recommender-alternatives'    // CSS selector for the placeholder element
  );


        
      
    
  
Step 3: Verify your integration
You're all set! To verify the integration:


Open the page where you added the script (e.g., the product detail page for "TSHIRT-123").
You should see a fully styled recommendation widget appear inside your #recommender-alternatives div
The widget will display products from your catalog that are considered alternatives to the main product on the page.

Best practices


Automatic analytics: A key advantage of Recco.js is that it automatically handles sending all necessary analytics events. You do not need to implement any manual tracking.

Theming: The Theme option is a powerful way to control the look and feel. Luigi's Box recommends starting with 'luigis' for a modern, responsive design that works well on all devices.

Dynamic product IDs: In the example, we used a hardcoded product ID ('TSHIRT-123'). For a real-world application, your GetItemIds function must be able to dynamically get the current product's ID from your page's data or HTML.

Next steps
Now that you have a basic recommender running, you can explore more advanced features:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/indexing/data_layout.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides a walkthrough for developers to understand how to structure their product data (or any content) before sending it to Luigi's Box for indexing. Properly structured data is fundamental for effective search and recommendations.
What you'll learn
By following this guide, you will learn:


The basic "index-object" structure Luigi's Box expects.
Key principles for naming and formatting your data fields.
How to represent different types of data (like text, numbers, arrays, and dates).
Which special fields Luigi's Box uses for specific functionalities (e.g., title, price, availability).
General best practices for preparing your data for any indexing method (API or Feeds).

Who is this guide for
This guide is intended for:


Developers new to Luigi's Box who need to understand data formatting requirements.
Technical users responsible for preparing catalog data for synchronization with Luigi's Box.
Anyone who wants to ensure their data is optimally structured for Luigi's Box search and recommendation features.

Prerequisites
Before you begin, it's helpful to have:



A general understanding of your own data: Know what information you have for your products, articles, or other content you wish to index (e.g., names, descriptions, prices, categories, custom attributes).

Basic understanding of JSON: Familiarity with JSON (JavaScript Object Notation) data format structure. This guide will use JSON examples as it's common for API interactions.

Core concepts of Luigi's Box data layout
Luigi's Box is designed with a "convention over configuration" philosophy. Adhering to specific data formats and naming conventions helps you achieve better results with minimal explicit configuration.
The index-object: Your fundamental data unit
The data you send to Luigi's Box, whether via API or feeds, is conceptualized as a collection of index-objects. Each index-object represents a single item you want to make searchable, like a product, a category, an article, or a brand.

Each index-object typically has:



identity: A unique identifier for this object across all types (e.g., your product SKU). This is crucial.

type: The kind of object this is (e.g., "item", "product", "category", "article"). This is also crucial.

fields: A collection of key-value pairs representing the attributes of the object. This is where most of your data will go.

title: Required within fields. The primary display name.

web_url: Highly recommended within fields. The canonical URL to the item on your website.

nested (Optional): An array for related objects, like product variants or categories associated with a product.

Your data: Key-value pairs in fields

Inside the fields object, your data takes the form of key-value pairs.



Key: The attribute name (e.g., "Color", "Product Name", "Stock Level").

Value: The actual data for that attribute (e.g., "Red", "Awesome T-Shirt", 100).


Naming conventions for keys (attributes):


Use lowercase letters, uppercase letters, and spaces (e.g., "Screen Size" is valid).
Avoid using dots (.) and brackets ([]) in attribute names, as these can interfere with data access in JSON.

Indexing arrays (multiple values for an attribute)
Luigi's Box supports storing multiple values for a single attribute. Internally, all data is stored as arrays.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          "fields": {
  "Available Colors": ["Red", "Blue", "Green"],
  "tags": ["New", "Eco-friendly"]
}

        
      
    
  
What data should You include in fields?
To maximize effectiveness, your fields should generally include attributes that:



Make Objects Findable: Titles, product codes (EANs, SKUs), categories, brands, detailed descriptions, specific parameters (e.g., "Material: Cotton").

Allow You to Render Product Tiles/Listings: Information needed for display in search results (image URLs, labels like "Sale", delivery estimates).

Affect Ranking (Special Fields): Certain fields influence ranking (see below).

Enable Faceted Filtering: Attributes users can use to refine search results (e.g., "Size", "Color", "Brand").


General Rule: The more comprehensive and well-structured your data, the better the findability and relevance.
Special fields and their behavior
Luigi's Box recognizes certain field names within fields (or at the top level of the index-object) as "special," having predefined behaviors:
      
        
Field Name
Description
Expected Data Type


        
title
Required. Primary display name.
Text


web_url
Canonical URL to the object. Crucial if using immutable IDs.
Text (URL)


availability
1 for available, 0 for unavailable. Affects sorting.
Numeric (0 or 1)


availability_rank
Granular availability (1-15, lower is more available).
Numeric (1-15)


availability_rank_text
Exact text for availability (e.g., "Ships in 2 days").
Text


price
Fully formatted display price (e.g., "€19.99").
Text


price_amount
Numeric value of the price. Auto-extraction is skipped if sent.
Numeric (Float)


price_old
Original price if on sale.
Text


image_link
URL to an image. Variants like image_link_s, _m, _l are valid.
Text (URL)


_margin
Hidden Field. Relative margin (0-1). Affects ranking.
Numeric (Float)


introduced_at
Date product added (ISO 8601). Newer items ranked higher.
Date (ISO 8601)


boost
Ranking boost (1, 2, or 3).
Numeric (1,2,3)


geo_location
Geographical point: {"lat": 49.0, "lon": 18.5}.
Geo Point


description
A textual description of the item.
Text


category
Category information, often with hierarchy (e.g., "Electronics, Audio").
Text


brand
The brand of the item.
Text


      


  
        
      
    

  
  
    Note
    
        Attributes in fields starting with an underscore ( _ ) (e.g., _internal_code, _margin) are hidden fields: searchable but not exposed in API responses.

    
  

Data types
Luigi's Box automatically infers the data type (text, numeric, boolean, date) based on the first value it sees for an attribute.


  
        
      
      !
    

  
  
    Warning
    
        Date: Expects ISO 8601 format (e.g., "2023-11-23T06:27:19Z").

    
  

Output data structure (when retrieving data via API calls)
Generally, all attributes are returned as arrays, even if indexed as a single value. Exceptions (returned as scalars) include title, price, availability, description, etc.
Derived Fields
Luigi's Box automatically derives some attributes (e.g., category_lvl_1, _count attributes). You don't need to index these.
Step-by-Step: Preparing your first product data
Let's imagine you want to index a product. Here's how you'd structure the data for one product, keeping the above concepts in mind. This is what you would prepare before making an API call or constructing a feed.

Example index-object for a product:

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  {
  "identity": "SKU67890",
  "type": "item",
  "active_from": "2025-01-01T00:00:00Z",
  "fields": {
    "title": "Eco-Friendly Carbon Fiber Bicycle",
    "web_url": "https://www.example.com/products/eco-bike-67890",
    "description": "Ride in style with our lightweight carbon fiber-frame bicycle. Built for speed, durability, and urban commuting.",
    "price": "€999.99",
    "price_eur": "€999.99",
    "price_eur_amount": 999.99,
    "price_old": "€1,099.99",
    "brand": "EcoRide",
    "category": [
      "Bicycles | Urban Commuters",
      "Sustainable Products | Mobility"
    ],
    "image_link": "https://www.example.com/images/eco-bike-67890.jpg",
    "image_link_m": "https://www.example.com/images/medium/eco-bike-67890.jpg",
    "labels": ["New Arrival", "Eco-Friendly", "Lightweight"],
    "Color": "Matte Black",
    "Frame Material": ["Carbon Fiber", "Aluminum"],
    "Gear System": "7-Speed Shimano",
    "Wheel Size (cm)": 71,
    "Brake Type": "Disc Brakes",
    "availability": 1,
    "availability_rank": 1,
    "availability_rank_text": "In Stock",
    "stock_quantity": 50,
    "introduced_at": "2024-06-01T10:00:00Z",
    "_margin": 0.40,
    "boost": 1
  }
}

        
      
    
  
Explanation of the example


identity and type are clearly defined.

fields contain various attributes:


Required title and web_url.
Descriptive fields like description, brand, and category.
Pricing information including price_old for comparison.
Multiple image_link sizes for different uses.
Arrays for labels and Frame Material to enhance searchability.
Custom attributes like Gear System, Brake Type, and Wheel Size (cm).
Availability data including availability_rank_text and stock_quantity.



Best practices summary for data layout


Be Consistent: Use consistent naming and data types for your attributes.

Be Comprehensive: The more relevant, well-structured data you provide, the better the search and recommendations.

Use Conventions: Adhere to naming conventions for special fields to unlock built-in features.

Mind Your Dots and Brackets: Avoid . and [] in attribute names within fields.

Plan for Arrays: Use arrays for attributes that can have multiple values.

Test Your Structure: After indexing, use the Catalog Browser in the Luigi's Box app or API search requests to verify how your data has been processed and stored.

Next steps
Once your data is structured like the example above (as an array of one or more such index-objects if sending via API), you would then proceed to:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/indexing/indexing.html</url>

      <title></title>
      <content><![CDATA[Introduction
This guide provides a step-by-step walkthrough for developers to send their first product data to Luigi's Box for indexing using the Content Update API. The Content Update API is the recommended method for ensuring your search index remains fresh and up-to-date.
What you'll learn
By following this guide, you will learn how to:


Prepare your product data in the required JSON format.
Authenticate your requests to the Luigi's Box Content Update API using HMAC.
Send your product data to Luigi's Box to be indexed using POST /v1/content.
Send a partial update to an existing product using PATCH /v1/content.
Understand the basic responses from these API endpoints.

Who is this guide for
This guide is intended for:


Developers who are new to integrating with Luigi's Box indexing.
Technical users responsible for synchronizing an e-commerce catalog or other content with Luigi's Box.

Prerequisites
Before you begin, ensure you have the following:



Luigi's Box account: Access to the Luigi's Box application/dashboard. If you don't have an account, please contact the Luigi's Box sales or support team.

API keys (Public &amp; Private): Credentials required to authenticate your API requests for a specific Luigi's Box tracker. These are generated within the Luigi's Box application. Consult the application's help section or your account manager for specific instructions.

Basic understanding of JSON: Familiarity with JSON (JavaScript Object Notation) data format structure.

HTTP request tool / programming language: Ability to make HTTP POST and PATCH requests. This guide provides conceptual examples for:



PHP (using GuzzleHttp)

JavaScript (Node.js) (using axios)

Ruby (using faraday gem)



Understanding of Data Layout: It's highly recommended to first review the "Quickstart: Structuring your data for indexing" guide.



  
        
      
    

  
  
    Info
    
        Your Luigi's Box API keys can be found in your Luigi's Box application in "General settings" > "Integration settings".

    
  

Core concepts of Luigi's Box indexing (a brief primer)
Before diving into the steps, let's briefly cover a few core concepts:



index-object: This is the fundamental unit of data you send to Luigi's Box for indexing. Each index-object represents an item like a product, category, or article.

identity (required): Every index-object must have an identity that must be unique across all types because an object indexed later will replace the data of any former object that shares the same ID.

type (required): A label that classifies the object (e.g., "product", "category", "article").

full vs. partial updates:



full update (POST /v1/content): This method replaces the entire object in the index with the data you send. If you omit fields that were previously indexed, they will be removed. This guide uses full updates.

partial update (PATCH /v1/content): This method allows you to update only specific fields of an existing object without sending the entire object.



index freshness: Keeping your index up-to-date with your catalog (e.g., price changes, stock availability) is vital for a good user experience. The Content Update API allows for near real-time updates, which is generally preferred over scheduled feed processing that can result in a temporarily stale index.

HMAC Authentication: All requests must be authenticated. The actual HMAC signature generation is complex and requires precise adherence to the main Luigi's Box Authentication documentation.

Step-by-step: Indexing and updating your first product (Content Update API)
Let's embark on indexing and then updating "My Very First Item."
Setting Up: Obtaining API keys
Ensure you have your Public Key and Private Key from your Luigi's Box account dashboard. Keep the Private Key secure. We'll refer to these as YOUR_PUBLIC_KEY and YOUR_PRIVATE_KEY in the examples.
Part 1: Indexing your first product (full update with POST /v1/content)
We'll create our "My Very First Item" product in the Luigi's Box index.
1. Prepare your product data (JSON)
This is the initial data for our product.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
    "identity": "product-001",
    "type": "item",
    "fields": {
      "title": "My Very First Item",
      "web_url": "https://www.example.com/products/product-001",
      "price": "€49.99",
      "brand": "CoolBrand",
      "availability": 1
    }
  }

        
      
    
  
2. Send the data
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # --- Ruby Example for POST /v1/content ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, endpoint_path, date_header, content_type_header)
  data = "#{http_method}\n#{content_type_header}\n#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, private_key, data)).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/content'

product_data = [
  {
    identity: "product-001",
    type: "item",
    fields: {
      title: "My Very First Item",
      web_url: "https://www.example.com/products/product-001",
      price: "€49.99",
      brand: "CoolBrand",
      availability: 1
    }
  }
]
request_body_json = { objects: product_data }.to_json

http_method = 'POST'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, current_date, content_type)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.post(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? &amp;&amp; response_body['ok_count'] &amp;&amp; response_body['ok_count'] > 0
  puts "Product GADGET-001 successfully indexed: #{JSON.pretty_generate(response_body)}"
else
  puts "Error indexing product: HTTP Status #{response.status}, Response: #{response.body}"
end

        
      
        
           'product-001',
        'type'     => 'item',
        'fields'   => [
            'title'        => 'My Very First Item',
            'web_url'      => 'https://www.example.com/products/product-001',
            'price'        => '€49.99',
            'brand'        => 'CoolBrand',
            'availability' => 1
        ]
    ]
];

$request_body = ['objects' => $product_data];

$http_method  = 'POST';
$content_type = 'application/json; charset=utf-8';

// Create a HTTP-date string (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest($YOUR_PRIVATE_KEY, $http_method, $ENDPOINT_PATH, $current_date, $content_type);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request($http_method, "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]);

$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 &amp;&amp; isset($response_body['ok_count']) &amp;&amp; $response_body['ok_count'] > 0) {
    echo "Product successfully indexed:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error indexing product: HTTP Status " . $response->getStatusCode() . "\nResponse: " . $response->getBody();
}

?>

        
      
        
          const axios = require('axios');
const crypto = require('crypto');


function generateLuigisBoxDigest(privateKey, httpMethod, endpointPath, dateHeader, contentTypeHeader) {
  const data = `${httpMethod}\n${contentTypeHeader}\n${dateHeader}\n${endpointPath}`;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64').trim();
}

// Configuration
const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/content';

// Product data
const productData = [
  {
    identity: "product-001",
    type: "item",
    fields: {
      title: "My Very First Item",
      web_url: "https://www.example.com/products/product-001",
      price: "€49.99",
      brand: "CoolBrand",
      availability: 1
    }
  }
];

const requestBody = { objects: productData }

const httpMethod = 'POST';
const contentType = 'application/json; charset=utf-8';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, currentDate, contentType);
const authorizationHeader = `ApiAuth ${YOUR_PUBLIC_KEY}:${signature}`;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: `${LUIGISBOX_HOST}${ENDPOINT_PATH}`,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 &amp;&amp; responseBody.ok_count &amp;&amp; responseBody.ok_count > 0) {
    console.log("Product successfully indexed:", JSON.stringify(responseBody, null, 2));
  } else {
    console.error(`Error indexing product: HTTP Status ${response.status}, Response: ${JSON.stringify(responseBody)}`);
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});

        
      
    
  
3. Understand the response
If successful, Luigi's Box API will respond with an HTTP 200 OK (or 201 Created / 202 Accepted depending on the exact processing). The JSON response body will typically look like this:

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "ok_count": 1,
  "errors_count": 0,
  "errors": {}
}

        
      
    
  

An ok_count of 1 means our product was successfully accepted for indexing.
Part 2: Updating your indexed product (partial update with PATCH /v1/content)1. Prepare your product data (JSON)
We only need to send the identity of the product and the fields we want to add or change.

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "identity": "product-001",
  "type": "item",
  "fields": {
    "description": "The latest and greatest product from CoolBrand, now with more awesome!",
  }
}

        
      
    
  
2. Send the update
  
    
      
        
          ruby
        
      
        
          php
        
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          # --- Ruby Example for PATCH /v1/content ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, endpoint_path, date_header, content_type_header)
  data = "#{http_method}\n#{content_type_header}\n#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, private_key, data)).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/content'

product_data = [
  {
    "identity": "product-001",
    "type": "item",
    "fields": {
      "description": "The latest and greatest product from CoolBrand, now with more awesome!",
    }
  }
]
request_body_json = { objects: product_data }.to_json

http_method = 'PATCH'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, current_date, content_type)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.post(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? &amp;&amp; response_body['ok_count'] &amp;&amp; response_body['ok_count'] > 0
  puts "Product successfully updated: #{JSON.pretty_generate(response_body)}"
else
  puts "Error updating the product: HTTP Status #{response.status}, Response: #{response.body}"
end

        
      
        
           'product-001',
        'type'     => 'item',
        'fields'   => [
            'description' => 'The latest and greatest product from CoolBrand, now with more awesome!'
        ]
    ]
];

$request_body = ['objects' => $product_data];

$http_method  = 'PATCH';
$content_type = 'application/json; charset=utf-8';

// Create a HTTP-date string (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest($YOUR_PRIVATE_KEY, $http_method, $ENDPOINT_PATH, $current_date, $content_type);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request($http_method, "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]);

$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 &amp;&amp; isset($response_body['ok_count']) &amp;&amp; $response_body['ok_count'] > 0) {
    echo "Product successfully indexed:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error indexing product: HTTP Status " . $response->getStatusCode() . "\nResponse: " . $response->getBody();
}

?>


        
      
        
          // JavaScript Example for PATCH /v1/content
// Assumes axios is installed (npm install axios)

const axios = require('axios');
const crypto = require('crypto');

// Helper function for authentication
function generateLuigisboxDigest(privateKey, httpMethod, endpointPath, dateHeader, contentTypeHeader) {
  const data = `${httpMethod}\n${contentTypeHeader}\n${dateHeader}\n${endpointPath}`;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64');
}

const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/content';

const productData = [
  {
    "identity": "product-001",
    "type": "item",
    "fields": {
      "description": "The latest and greatest product from CoolBrand, now with more awesome!",
    }
  }
];

const requestBody = { objects: productData };

const httpMethod = 'PATCH';
const contentType = 'application/json; charset=utf-8';
const currentDate = new Date().toUTCString();

const signature = generateLuigisboxDigest(YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, currentDate, contentType);
const authorizationHeader = `faraday ${YOUR_PUBLIC_KEY}:${signature}`;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: `${LUIGISBOX_HOST}${ENDPOINT_PATH}`,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 &amp;&amp; responseBody.ok_count &amp;&amp; responseBody.ok_count > 0) {
    console.log("Product successfully indexed:", JSON.stringify(responseBody, null, 2));
  } else {
    console.error(`Error indexing product: HTTP Status ${response.status}, Response: ${JSON.stringify(responseBody)}`);
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});
});

        
      
    
  
3. Understand the response
The success response for a PATCH request is similar to POST:

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "ok_count": 1,
  "errors_count": 0,
  "errors": {}
}

        
      
    
  

If the identity "product-001" was not found (e.g., if the initial POST failed or you had a typo), you would receive an error in the errors object, and ok_count would be 0. For example:

  
    
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          {
  "ok_count": 0,
  "errors_count": 1,
  "errors": {
    "GADGET-001": { 
      "type": "not_found",
      "reason": "Identity not in catalog"
    }
  }
}

        
      
    
  
Verifying your changes
After performing these operations, you can verify your data in Luigi's Box:



Catalog Browser: Log in to your Luigi's Box application and navigate to "Catalog > Catalog browser." Search for your product by its identity ("product-001") or title.


After the POST, you should see the initial fields: title, web_url, price, brand, availability.
After the PATCH, you should see the added description, along with the original fields. The price, brand, etc., should remain unchanged because PATCH only modifies the fields you send.



Search API: You can also query the Search API directly for your product to inspect its indexed data.

Best practices


Use API for dynamic data: Implement the API for frequent updates like price changes and stock availability to keep your index fresh.

POST vs. PATCH: Use POST /v1/content for creating new items or completely overwriting existing ones. Use PATCH /v1/content for updating only specific fields of an existing item.

Manage object identity carefully: Consistency in identity and type is key for accurate updates and analytics.

Handle HMAC authentication securely: Protect your Private Key diligently.

Optimize payloads:


Use compression (e.g., Gzip) for request bodies if sending large amounts of data.
Send only necessary data, especially for partial updates.



Test thoroughly: Always test your integration in a staging or development environment before deploying to production. Verify data in the Catalog Browser.

Monitor your integration: Keep an eye on API responses and logs to catch any issues early.

Next steps
Congratulations! You've indexed and updated your first product using the Luigi's Box Content Update API. Here's what you can explore further:]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/quickstartguides/analytics.html</url>

      <title></title>
      <content><![CDATA[]]></content>
      <icon>lightning-charge</icon>
    </page>
    <page>
      <url>/tutorials/recommender.html</url>

      <title>Recommender tutorial</title>
      <content><![CDATA[Recommender tutorial

Recommender boxes
This tutorial will guide you through the integration of a recommender experience and show interactions between different services and APIs.

Use the recommender service to implement personalized recommender boxes such as the one depicted in the image.





  
Define recommender models
To start, you will need a recommender model which specifies the logic used to select the products into the recommender box.

You can create the models yourself in the Luigi's Box application in the Recommendations > Recommenders setup section.



Click the "Add new recommender" button and follow the instructions.



When you are done with the setup you will see the recommender model name assigned by the system (such as item_detail_complements). Note it down as you will need it to make API requests.



  
Make a request to recommender API
Make a request to the recommender API. This is a POST request with a JSON payload.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": ""
  }
]



        
      
    
  



Tips

Note that the payload is an array, as you can ask for several recommendations in a single request (more on that later)

item_ids is the array of identities for which you are asking the recommendations. They must point to valid catalog identities. You will typically see these scenarios: empty array for cases where there is no input item (such as when recommending on a home page), a single-element array (when recommending for a specific product) or multi-element array (when recommending for several products at once, typically in the basket).

recommendation_type is the model name you have obtained in the previous step

recommender_client_identifier is the recommender name for analytics. Feel free to use the same name as for the recommendation_type.

user_id is the transient user id from the _lb cookie (unless the user is signed in, more on that later)





  
Render recommendation box
The recommender API response includes a metadata fields and the hits field which you should be already familiar with from implementing autocomplete and search endpoints. The structure of the hits attribute contains all the product data you have indexed.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "generated_at": "2025-01-06T23:34:59.585570",
    "hits": [
      {
        "url": "PR-100659",
        "attributes": {
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1778046_gibson-les-paul-studio.jpg",
          "title": "Gibson Les Paul Studio",
          "price_amount": 1359,
          "web_url": "/gibson-les-paul-studio/"
        },
        "type": "item"
      },
      {
        "url": "PR-70615",
        "attributes": {
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1777002_chapman-guitars-ml1-modern-baritone.jpg",
          "title": "Chapman Guitars ML1 Modern Baritone",
          "price_amount": 598,
          "web_url": "/chapman-guitars-ml1-modern-baritone/"
        },
        "type": "item"
      }
    ],
    "recommendation_id": "e9d6957a-f471-4ea9-be7a-770c32a94afa",
    "recommendation_type": "item_detail_complements",
    "recommender": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "recommender_version": "04563f77e",
    "user_id": "7456102757361609000"
  }
]

        
      
    
  



(API response shortened for brevity)




  
Fire a dataLayer event for recommender
After the recommendations have been rendered, fire a Recommendation dataLayer event describing what you have just rendered.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
event: "view_item_list",
  ecommerce: {
    item_list_name: "Recommendation",
    items: [
      {
        item_id: "PR-100659",
        item_name: "Gibson Les Paul Studio",
        index: 1,
        price: 1359
      },
      {
        item_id: "PR-70615",
        item_name: "Chapman Guitars ML1 Modern Baritone",
        index: 1,
        price: 598
      }
    ],
    filters: {
      "RecommenderClientId": "item_detail_complements",
      "ItemIds": ["PR-15553"]
    }
  }
});

        
      
    
  



(dataLayer event shortened for brevity)
Tips

Make sure that the item_id refers to the object identity (the url attribute in the top-level object data).
The dataLayer event structure is the same as for Autocomplete, except the item_list_name. Make sure to use Recommendation here.
The RecommenderClientId in the filters field refers to the analytics identified you have used in the recommender_client_identifier in the request data.
The ItemIds array should echo the item_ids you have used in the request.





  
Fire dataLayer click event
When the user clicks on a recommendation, immediately fire a dataLayer event.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "select_item",
    ecommerce: {
        items: [
            {
                item_id: "PR-70615",
            }
        ]
    }
});

        
      
    
  




  
Fire dataLayer customer_id event

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "luigisbox.collector.customer_id",
    customer_id: "281827";
  },
});

        
      
    
  


Once you know the personalized user ID, emit a customer_id dataLayer event. It is safe to emit the event just once per session, but it will not cause any problems if you emit it more than once per session.





  
Make a request to recommender API for identified user
Make a request to the recommender API. This is a POST request with a JSON payload. Note that the only difference is in the value of the user_id parameter which now points to your internal user ID which you propagated to the dataLayer.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": ""
  }
]



        
      
    
  



Tips


user_id is the persistent user id. It must be the same user ID you are propagating in the dataLayer event





  
Batch multiple recommendations into a single API request
For cases where you need to request recommendations for several different models, it is more efficient to issue a single request. This will be typically useful for scenarios where you are rendering several recommender boxes on a single page.

By asking for several recommendations in a single request you will also automatically avoid duplicate recommendations.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": ""
  },
  {
    "item_ids": [],
    "recommendation_type": "last_seen",
    "recommender_client_identifier": "last_seen",
    "size": 6,
    "user_id": ""
  }
]



        
      
    
  



Tips

Note that the payload is an array, as you can ask for several recommendations in a single request.





  
Limit amount of data transferred
To limit the amount of data transferred between systems, specify the hit_fields attribute in the API request. It is an array of result properties which will be included in the API response. By using this, you can significantly reduce the amount of data transfer and increase performance.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": "",
    "hit_fields": ["title", "image_link", "description", "price_amount"]
  }
]



        
      
    
  



Tips

Notice the hit_fields attribute.





  
What's next?
Continue by implementing the product listings.







    



      



          
            
              Next
              
                Define recommender models →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Recommender boxes
              
            
          
      



          
            
              Next
              
                Make a request to recommender API →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Define recommender models
              
            
          
      



          
            
              Next
              
                Render recommendation box →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Make a request to recommender API
              
            
          
      



          
            
              Next
              
                Fire a dataLayer event for recommender →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render recommendation box
              
            
          
      



          
            
              Next
              
                Fire dataLayer click event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire a dataLayer event for recommender
              
            
          
      



          
            
              Next
              
                Fire dataLayer customer_id event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire dataLayer click event
              
            
          
      



          
            
              Next
              
                Make a request to recommender API for identified user →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire dataLayer customer_id event
              
            
          
      



          
            
              Next
              
                Batch multiple recommendations into a single API request →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Make a request to recommender API for identified user
              
            
          
      



          
            
              Next
              
                Limit amount of data transferred →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Batch multiple recommendations into a single API request
              
            
          
      



          
            
              Next
              
                What's next? →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Limit amount of data transferred
              
            
          
      



      



  


  .tutorial-nav-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
  }

  .tutorial-nav-container .nav-slot {
    flex-basis: 50%;
  }

  .tutorial-nav-container .card:hover {
    border-color: var(--bs-primary);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }



document.addEventListener('DOMContentLoaded', function() {
  const updateView = (newStepNumber) => {
    // Scroll to the top of the page immediately on step change
    window.scrollTo(0, 0);

    const curStep = parseInt(newStepNumber, 10);
    if (isNaN(curStep)) return;

    // Show content
    document.querySelectorAll('[data-flow-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-flow-step="${curStep}"]`)?.classList.remove('d-none');

    // Show nav tiles
    document.querySelectorAll('[data-nav-for-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-nav-for-step="${curStep}"]`)?.classList.remove('d-none');

    // Update sidebar
    const totalSteps = 11;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.height = `${100 / totalSteps * curStep}%`;
    }
    document.querySelectorAll('[data-step]').forEach((step, index) => {
      const stepNumber = index + 1;
      const checkIcon = step.nextElementSibling;
      const themeColor = "#682175";
      if (stepNumber = curStep);
      }
    });
  };

  window.addEventListener('hashchange', () => {
    const newStep = location.hash.slice(1) || '1';
    updateView(newStep);
  });

  const initialStep = location.hash.slice(1) || '1';
  updateView(initialStep);
  if (!location.hash) {
      location.hash = '#1';
  }
});]]></content>
      <icon>rocket-takeoff</icon>
    </page>
    <page>
      <url>/tutorials/plp.html</url>

      <title>Product listing tutorial</title>
      <content><![CDATA[Product listing tutorial

Product listing integration
Product listing integration follows the same principles as the search integration. Follow the search tutorial for more details.

This tutorial only highlights the couple of deviations from search.





  
Product listing integration prerequisites
Before you begin the implementation, ensure that a valid pairing between products and categories exists. See the Pairing docs for more details.



  
PLP API request



  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?f[]=type:item
  &amp;f[]=category_id:
  &amp;plp=category_id
  &amp;facets=price_amount,category



        
      
    
  



Tips


f[]=type:item - each search must have exactly one main type which will be used to compute available filters, to provide pagination and to sort on. Use an explicit filter on type attribute to provide the main type.

f[]=category_id: - you must provide a filter option to load the products specific to this particular product listing. Note that you don't have to use an explicit category_id attribute but you can filter on any attribute or a combination of attributes. You can also use the virtual category_path or all_categories_path attributes. See the PLP docs for more details

plp=category_id - This parameter indicated that this is a PLP request and is important for all the PLP customizations defined in the Luigi's Box application to work. The value of the plp attribute has to be set to the name of the attribute that is used to filter products for this specific Product listing.

facets=price_amount,category - the response will include breakdown of attribute values for attributes price_amount and category. This part will let you render filtering options.

user_id &amp; client_id - refer to the search tutorial





  
Fire a dataLayer event for product listing
After the results have been rendered, fire a Product listing dataLayer event describing what you have just rendered.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "view_item_list",
    ecommerce: {
        item_list_name: "Product Listing",
        items: [
            {
                item_id: "PR-49738",
                item_name: "Fender Newporter Player",
                index: 0,
                price: 289
            },
            {
                item_id: "PR-103416",
                item_name: "Fender Malibu Classic Aged Cognac Burst",
                index: 1,
                price: 619
            }
        ],
        scopes: {
          "CategoryLabel": "Musicians | Guitars | Electro-Acoustic Guitars",
          "CategoryIdentity": "882827",
        },
        filters: {}

    }
});

        
      
    
  



(dataLayer event shortened for brevity)
Tips

Make sure that the item_id refers to the object identity (the url attribute in the top-level object data).
The dataLayer event structure is the same as for Search, except the item_list_name. Make sure to use Product Listing here.
The CategoryLabel within scopes refers to the full category hierarchy. It is used strictly for display purposes in PLP analytics.
The CategoryIdentity within scopes refers to the category identity as index in the catalog.





  
dataLayer click event
When the user clicks on a result, immediately fire a dataLayer event.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "select_item",
    ecommerce: {
        items: [
            {
                item_id: "PR-49738",
            }
        ]
    }
});

        
      
    
  






    



      



          
            
              Next
              
                Product listing integration prerequisites →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Product listing integration
              
            
          
      



          
            
              Next
              
                PLP API request →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Product listing integration prerequisites
              
            
          
      



          
            
              Next
              
                Fire a dataLayer event for product listing →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← PLP API request
              
            
          
      



          
            
              Next
              
                dataLayer click event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire a dataLayer event for product listing
              
            
          
      



      



  


  .tutorial-nav-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
  }

  .tutorial-nav-container .nav-slot {
    flex-basis: 50%;
  }

  .tutorial-nav-container .card:hover {
    border-color: var(--bs-primary);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }



document.addEventListener('DOMContentLoaded', function() {
  const updateView = (newStepNumber) => {
    // Scroll to the top of the page immediately on step change
    window.scrollTo(0, 0);

    const curStep = parseInt(newStepNumber, 10);
    if (isNaN(curStep)) return;

    // Show content
    document.querySelectorAll('[data-flow-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-flow-step="${curStep}"]`)?.classList.remove('d-none');

    // Show nav tiles
    document.querySelectorAll('[data-nav-for-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-nav-for-step="${curStep}"]`)?.classList.remove('d-none');

    // Update sidebar
    const totalSteps = 5;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.height = `${100 / totalSteps * curStep}%`;
    }
    document.querySelectorAll('[data-step]').forEach((step, index) => {
      const stepNumber = index + 1;
      const checkIcon = step.nextElementSibling;
      const themeColor = "#682175";
      if (stepNumber = curStep);
      }
    });
  };

  window.addEventListener('hashchange', () => {
    const newStep = location.hash.slice(1) || '1';
    updateView(newStep);
  });

  const initialStep = location.hash.slice(1) || '1';
  updateView(initialStep);
  if (!location.hash) {
      location.hash = '#1';
  }
});]]></content>
      <icon>rocket-takeoff</icon>
    </page>
    <page>
      <url>/tutorials/autocomplete.html</url>

      <title>Autocomplete tutorial</title>
      <content><![CDATA[Autocomplete tutorial

Initial page load


This tutorial will walk you through integrating the autocomplete feature and demonstrate interactions between various Luigi's Box services and APIs.

The autocomplete flow begins by the user entering the site at a title page. The included LBX script will automatically set an _lb cookie which will represent the transient user ID.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          document.cookie.match(/_lb=(.*?);/)'})

        
      
    
  


Inspect the _lb cookie using browser developer tool or use the code above to read its value. If the cookie does not exist, ensure that the LBX script is included.




  
Load query suggestions
As the page loads, fetch the query suggestions using the Trending queries API.

Implementing this experience is not strictly necessary, but it will point user attention to search and increase search usage.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          https://live.luigisbox.com/v2/trending_queries
  ?tracker_id=


        
      
    
  



Tips
The trending queries are automatically learned by the system from the analytics events. When you are starting the development, there are probably no queries learned at this time and the API call will return an empty response. You can set up some query suggestions in the Luigi's Box application in the Search suggestions customization section.




  
Render query suggestions
The API call will give you back a list of queries. You can render these as typing suggestions or placeholder texts in the searchbox to nudge the user into using the search.




Example response from the Trending queries endpoint:



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          [
  {
    "title": "search and get 10% off"
  },
  {
    "title": "piano"
  },
  {
    "title": "casio"
  }
]

        
      
    
  



Tips
The trending queries are automatically learned by the system from the analytics events. When you are starting the development, there are probably no queries learned at this time and the API call will return an empty response. You can set up some query suggestions in the Luigi's Box application in the Search suggestions customization section.




  
User clicks into empty searchbox


When the user clicks into the searchbox, display the autocomplete popup immediately, showing recommendations. Call the Top items API endpoint to load recommendations for categories, brands, products and other types you have indexed.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          https://live.luigisbox.com/v1/personalized_top_items
?tracker_id=
&amp;type=item:6,category:3,brand:3,query:3
&amp;user_id=
&amp;remove_fields=nested



        
      
    
  





type=item:6,category:3,brand:3,query:3 - list the object types you want to load and the sizes

user_id= - pass the value of the _lb cookie

remove_fields=nested - this will omit nested objects from the API response and will lead to faster loading times.

Tips
The selection of "top items" depends on analytics data. Without analytics, you will get back random products. To see more reasonable recommendations, consider uploading a log of historical purchases to prime the models.




  
Render initial recommendations in the autocomplete popup
Use the API response from the Top items endpoint to render suggestions for the users. 




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [
    {
      "url": "PR-105359",
      "attributes": {
        "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1773108_veles-x-piano-key-dust-cover-124-x-15cm.jpg",
        "title": "Veles-X Piano Key Dust Cover 124 x 15cm",
        "price_eur_amount": 15.9,
        "web_url": "/veles-x-piano-key-dust-cover-124-x-15cm/"
      },
      "type": "item"
    },
    {
      "url": "PR-6552",
      "attributes": {
        "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1772742_gewa-900530.jpg",
        "title": "GEWA 900530",
        "price_eur_amount": 28.9,
        "web_url": "/gewa-900530/"
      },
      "type": "item"
    },
    {
      "url": "kalimba",
      "attributes": {
        "title": "kalimba"
      },
      "type": "query"
    },
    {
      "url": "ukulele",
      "attributes": {
        "title": "ukulele"
      },
      "type": "query"
    },
    {
      "url": "/ukulele-capos/",
      "attributes": {
        "title": "Ukulele Capos",
        "web_url": "/ukulele-capos/"
      },
      "type": "category"
    },
    {
      "url": "/smart-piano/",
      "attributes": {
        "title": "Smart piano",
        "web_url": "/smart-piano/"
      },
      "type": "brand"
    }
  ],
  "recommendation_id": "default"
}

        
      
    
  



(API response shortened for brevity)
Tips
Note that in the response, the top-level url field refers to object identities which is not necessarily an HTTP link. The exact details of the response depend on the data you have indexed. In general, the "url" property will be numerical identity and the web link will be in attributes.web_url.

Also note that the API response gives you back data for all the types requested in the API request. The object type is noted in the top-level type attribute.




  
Fire dataLayer event
After the top items recommendations have been rendered, fire a recommendation dataLayer event describing what you have just rendered.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "view_item_list",
    ecommerce: {
        item_list_name: "Recommendation",
        items: [
            {
                item_id: "PR-105359",
                item_name: "Veles-X Piano Key Dust Cover 124 x 15cm",
                index: 1,
                price: 15.9,
                type: "item"
            },
            {
                item_id: "PR-6552",
                item_name: "GEWA 900530",
                index: 3,
                price: 28.9,
                type: "item"
            },
            {
                item_id: "/ukulele-capos/",
                item_name: "Ukulele Capos",
                index: 3,
                type: "category"
            },
            {
                item_id: "/smart-piano/",
                item_name: "Smart piano",
                index: 4,
                type: "brand"
            }
        ],
        filters: {
            "RecommenderClientId": "autocomplete_popup"
        }
    }
});

        
      
    
  



(dataLayer event shortened for brevity)
Tips

Make sure that the item_id refers to the object identity (the url attribute in the top-level object data).
Provide data for all types, not just for products.
Make sure that the position index is unique for each item (independed of the type)





  
User starts typing
When the user types in a query into the searchbox, fire an API request to the autocomplete endpoint to fetch the suggestions for the popup.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/autocomplete/v2
  ?q=digital+piano
  &amp;type=item:7,category:3,brand:3,query:3
  &amp;user_id=


        
      
    
  





q - pass the search phrase (value of the searchbox)

type=item:7,category:3,brand:3,query:3 - list the object types you want to load and the sizes

user_id= - pass the value of the _lb cookie





  
Render autocomplete/suggestions
The API response will include all the product data that you will use to render a popup or widget that shows the results.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [
    {
      "url": "PR-15553",
      "attributes": {
        "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1774257_smart-piano-the-one-digital-piano.jpg",
        "title": "Smart piano The ONE Digital Piano",
        "title.untouched": "Smart piano The ONE Digital Piano",
        "price_amount": 629,
        "web_url": "/smart-piano-the-one-digital-piano/"
      },
      "type": "item"
    },
    {
      "url": "PR-76761",
      "attributes": {
        "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1784343_kurzweil-digital-piano.jpg",
        "title": "Kurzweil Digital Piano",
        "title.untouched": "Kurzweil Digital Piano",
        "price_amount": 890,
        "web_url": "/kurzweil-digital-piano/"
      },
      "type": "item"
    },
    {
      "url": "piano",
      "attributes": {
        "title": "piano",
        "title.untouched": "piano"
      },
      "type": "query"
    },
    {
      "url": "/digital-pianos/",
      "attributes": {
        "title": "Digital Pianos",
        "title.untouched": "Digital Pianos",
        "hierarchy": [
          "Musicians",
          "Keys"
        ],
        "web_url": "/digital-pianos/"
      },
      "type": "category"
    },
    {
      "url": "/smart-piano/",
      "attributes": {
        "title": "Smart piano",
        "web_url": "/smart-piano/"
      },
      "type": "brand"
    }
  ]
}

        
      
    
  



(API response shortened for brevity)
Tips
The API response will include  highlights in attributes.title. If you need access to the original title without highlight, use the attributes["title.untouched"] field.




  
Fire a dataLayer event for autocomplete
After the results have been rendered, fire a dataLayer event describing what you have just rendered.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "view_item_list",
    ecommerce: {
        item_list_name: "Autocomplete",
        search_term: "digital piano",
        items: [
            {
                item_id: "PR-15553",
                item_name: "Smart piano The ONE Digital Piano",
                index: 1,
                price: 629
            },
            {
                item_id: "PR-76761",
                item_name: "Kurzweil Digital Piano",
                index: 2,
                price: 890
            },
            {
                item_id: "/digital-pianos/",
                item_name: "Digital pianos",
                index: 3,
                type: "category"
            },
            {
                item_id: "/smart-piano/",
                item_name: "Smart piano",
                index: 4,
                type: "brand"
            }
        ]
    }
});

        
      
    
  



(dataLayer event shortened for brevity)
Tips

Make sure that the item_id refers to the object identity (the url attribute in the top-level object data).
Provide data for all types, not just for products.
Make sure that the position index is unique for each item (independed of the type)
When using the Autocomplete API to build the event, use the title.untouched attribute as the value for item_name as that includes the original title without highlights. If you use the title attribute, you will be reporting titles with  tags.





  
Fire dataLayer click event
When the user clicks on a result, immediately fire a dataLayer event.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "select_item",
    ecommerce: {
        items: [
            {
                item_id: "PR-76761",
            }
        ]
    }
});

        
      
    
  




  
Fire impression dataLayer event
When the product detail page loads, fire an impression dataLayer event.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
event: "view_item",
    ecommerce: {
        items: [
            {item_id: "PR-76761"}
        ]
    }
});

        
      
    
  




  
Fire add_to_cart event
When the user adds the product to cart, fire an add_to_cart dataLayer event.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
        currency: "EUR",
        value: 890,
        items: [
            {item_id: "PR-76761"}
        ]
    }
});

        
      
    
  




  
Fixit rules integration
To provide deeper integration with Luigi's Box Fixit redirect rules, you can mark the redirect queries and you can provide early redirects to ensure smooth experience for the user.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [
    {
      "url": "contact",
      "attributes": {
        "fixit_redirect_url": [
          "https://demoshop.luigisbox.com/contact-us/"
        ],
        "title": "contact",
        "title.untouched": "contact"
      },
      "type": "query"
    }
  ],
  "suggested_url": "https://demoshop.luigisbox.com/contact-us/?lb_redirected_from=contact"
}

        
      
    
  



(API response shortened for brevity)
Tips

If a query is found, for which a Fixit redirect rule is set up in Luigi's Box application, the query result (hit) will have a fixit_redirect_url attribute. This allows you to perhaps specifically visualize the query, as you can see in the illustrative image.
If submitting the query to search should cause a redirect because a Fixit redirect rule exists, the Autocomplete API endpoint response will include a suggested_url attribute, indicating the redirect URL.





  
Banner campaigns integration
To provide integration for the Banner campaigns feature obey the banner instructions in the campaigns attribute in the API response.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [

  ],
  "campaigns": [
    {
      "id": 45,
      "target_url": "https://www.luigisbox.com",
      "banners": {
        "autocomplete_list": {
          "desktop_url": "https://cdn.example.com/uploads/banners/310x240.png",
          "mobile_url": "https://cdn.example.com/uploads/banners/420x240.png"
        }
      }
    }
  ]
}

        
      
    
  



(API response shortened for brevity)




  
User sign in
When the user signs in, the API calls needs to be adjusted slightly, since you now have a persistent user identity. By propagating this persistent identity to Luigi's Box, you will get more accurate personalization since the system will be able to aggregate user data across different devices and sessions.





  
Fire dataLayer customer_id event

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "luigisbox.collector.customer_id",
    customer_id: "281827";
  },
});

        
      
    
  


Once you know the personalized user ID, emit a customer_id dataLayer event. It is safe to emit the event just once per session, but it will not cause any problems if you emit it more than once per session.





  
Identified user clicks into the searchbox
When loading the autocomplete recommendations on searchbox click, pass the persistent user ID instead of the transient user ID from the _lb cookie.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          https://live.luigisbox.com/v1/personalized_top_items
?tracker_id=
&amp;type=item:6,category:3,brand:3,query:3
&amp;user_id=
&amp;client_id=
&amp;remove_fields=nested



        
      
    
  





user_id= - pass the persistent user ID

client_id= - pass the value of the _lb cookie





  
Identified user starts typing
When the user types in a query into the searchbox, you will fire an API request to the autocomplete endpoint to fetch the suggestions for the popup, passing both transient and persistent user IDs.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/autocomplete/v2
  ?q=digital+piano
  &amp;type=item:7,category:3,brand:3,query:3
  &amp;user_id=
  &amp;client_id=


        
      
    
  





user_id= - pass the persistent user ID

client_id= - pass the value of the _lb cookie





  
Limit amount of data transferred

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/autocomplete/v2
  ?q=digital+piano
  &amp;type=item:7,category:3,brand:3,query:3
  &amp;hit_fields=product_id,title,price,image_link
  &amp;remove_fields=nested
  &amp;user_id=


        
      
    
  


To limit the amount of data transferred between systems, specify the hit_fields and/or remove_fields attribute in the API request. It is an array of result properties which will be included in the API response. By using this, you can significantly reduce the amount of data transfer and increase performance.



  
What's next?
Continue by implementing the search experience, i.e. the search results page (SERP) when user presses Enter.







    



      



          
            
              Next
              
                Load query suggestions →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Initial page load
              
            
          
      



          
            
              Next
              
                Render query suggestions →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Load query suggestions
              
            
          
      



          
            
              Next
              
                User clicks into empty searchbox →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render query suggestions
              
            
          
      



          
            
              Next
              
                Render initial recommendations in the autocomplete popup →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← User clicks into empty searchbox
              
            
          
      



          
            
              Next
              
                Fire dataLayer event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render initial recommendations in the autocomplete popup
              
            
          
      



          
            
              Next
              
                User starts typing →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire dataLayer event
              
            
          
      



          
            
              Next
              
                Render autocomplete/suggestions →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← User starts typing
              
            
          
      



          
            
              Next
              
                Fire a dataLayer event for autocomplete →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render autocomplete/suggestions
              
            
          
      



          
            
              Next
              
                Fire dataLayer click event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire a dataLayer event for autocomplete
              
            
          
      



          
            
              Next
              
                Fire impression dataLayer event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire dataLayer click event
              
            
          
      



          
            
              Next
              
                Fire add_to_cart event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire impression dataLayer event
              
            
          
      



          
            
              Next
              
                Fixit rules integration →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire add_to_cart event
              
            
          
      



          
            
              Next
              
                Banner campaigns integration →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fixit rules integration
              
            
          
      



          
            
              Next
              
                User sign in →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Banner campaigns integration
              
            
          
      



          
            
              Next
              
                Fire dataLayer customer_id event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← User sign in
              
            
          
      



          
            
              Next
              
                Identified user clicks into the searchbox →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire dataLayer customer_id event
              
            
          
      



          
            
              Next
              
                Identified user starts typing →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Identified user clicks into the searchbox
              
            
          
      



          
            
              Next
              
                Limit amount of data transferred →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Identified user starts typing
              
            
          
      



          
            
              Next
              
                What's next? →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Limit amount of data transferred
              
            
          
      



      



  


  .tutorial-nav-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
  }

  .tutorial-nav-container .nav-slot {
    flex-basis: 50%;
  }

  .tutorial-nav-container .card:hover {
    border-color: var(--bs-primary);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }



document.addEventListener('DOMContentLoaded', function() {
  const updateView = (newStepNumber) => {
    // Scroll to the top of the page immediately on step change
    window.scrollTo(0, 0);

    const curStep = parseInt(newStepNumber, 10);
    if (isNaN(curStep)) return;

    // Show content
    document.querySelectorAll('[data-flow-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-flow-step="${curStep}"]`)?.classList.remove('d-none');

    // Show nav tiles
    document.querySelectorAll('[data-nav-for-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-nav-for-step="${curStep}"]`)?.classList.remove('d-none');

    // Update sidebar
    const totalSteps = 20;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.height = `${100 / totalSteps * curStep}%`;
    }
    document.querySelectorAll('[data-step]').forEach((step, index) => {
      const stepNumber = index + 1;
      const checkIcon = step.nextElementSibling;
      const themeColor = "#682175";
      if (stepNumber = curStep);
      }
    });
  };

  window.addEventListener('hashchange', () => {
    const newStep = location.hash.slice(1) || '1';
    updateView(newStep);
  });

  const initialStep = location.hash.slice(1) || '1';
  updateView(initialStep);
  if (!location.hash) {
      location.hash = '#1';
  }
});]]></content>
      <icon>rocket-takeoff</icon>
    </page>
    <page>
      <url>/tutorials/search.html</url>

      <title>Search tutorial</title>
      <content><![CDATA[Search tutorial

Search results page (SERP)
Search results page is typicaly rendered after the user presses the Enter key and provides the full search experience including filtering, sorting and pagination.





  
Search results page URL


Each search results page should have a shareable URL which when opened, renders the search results preserving the phrase (query), selected filters and sorting.

This will usually be a dedicated page at a location such as /search. Usually, the page will have a GET parameter such as q which will capture the user's phrase. Visiting this location will trigger the search flow.

When this search page is visited, make an API request to Luigi's Box Search endpoint.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;facets=price_amount,category
  &amp;user_id=


        
      
    
  





q - pass the search phrase

f[]=type:item - each search must have exactly one main type which will be used to compute available filters, to provide pagination and to sort on. Use an explicit filter on type attribute to provide the main type. You can request more than one type in a single request using quicksearch_types which will be demonstrated in a later step.

facets=price_amount,category - the response will include breakdown of attribute values for attributes price_amount and category. This part will let you render filtering options.

user_id= - pass the value of the _lb cookie.





  
Search API response overview

Search API response high-level structure



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "results": {
    "query": "digital piano",
    "corrected_query": null,
    "filters": [
      "type:item"
    ],
    "accepted_filters": [

    ],
    "hits": [

    ],
    "quicksearch_hits": [

    ],
    "facets": [

    ],
    "suggested_facet": {
    },
    "total_hits": 171,
    "campaigns": [

    ]
  },
  "next_page": "https://live.luigisbox.com/search?tracker_id=179075-204259&amp;f[]=type:item&amp;q=digital%20piano&amp;page=2"
}

        
      
    
  


The search API respnse consists of several top-level keys which contain data that let you build a full-featured search results page.



query - echoes back the query

corrected_query - in case the search phrase was modified in some way, the corrected query will be present here

filters - echoes back the filters in a structured way

hits - contains data for the search results for the main type

quicksearch_types - contains data for additional types you requested (typically categories and brands

facets - contains data that lets you render filtering options

total_hits - number of results that match the phrase and filters

campaigns - contains campaign data if a search campaigns has been set up in Luigi's Box application for this specific query




  
Render the product tiles
The hits part of the Search API response contains data for the main type (the type you requested with the f[]=type: filter, typically products). You will use this data to render the product tiles. If you need additional data that is not indexed in Luigi's Box, you can load the additinal data from your database.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [
    {
      "url": "PR-15553",
      "attributes": {
        "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1774257_smart-piano-the-one-digital-piano.jpg",
        "title": "Smart piano The ONE Digital Piano",
        "price_amount": 629,
        "web_url": "/smart-piano-the-one-digital-piano/"
      },
      "type": "item"
    },
    {
      "url": "PR-76761",
      "attributes": {
        "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1784343_kurzweil-digital-piano.jpg",
        "title": "Kurzweil Digital Piano",
        "price_amount": 890,
        "web_url": "/kurzweil-digital-piano/"
      },
      "type": "item"
    }
  ]
}

        
      
    
  



(API response shortened for brevity)




  
Render facets
The facets part of the Search API response contains data for the filtering options. There are several types of facets that you may see in the response:


float facet which is generated for numerical fields. This facet type operates on ranges and is designed to bucket the attribute values into smaller equally distributed ranges. Each smaller range includes hits_count which indicated number of results within this range (2.89|182.5 translates to a range of values between 2.89 and 182.5). normalized_hits_count indicate a percentage of total, e.g. a value of 0.2 means that 20% of all results are within this range.
text facet which is generated for string fields. This facet type gives you back individual attribute values along with number of results that have this attribute value.
boolean facet which is generated for boolean attributes. This facet may contain only 2 values - "true" and "false". It is typically rendered as a single checkbox.





  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "facets": [
    {
      "name": "price_eur_amount",
      "type": "float",
      "values": [
        {
          "value": "2.89|182.5",
          "hits_count": 34,
          "normalized_hits_count": 0.2
        },
        {
          "value": "182.5|365.0",
          "hits_count": 8,
          "normalized_hits_count": 0.05
        },
        {
          "value": "365.0|547.5",
          "hits_count": 12,
          "normalized_hits_count": 0.07
        }
      ]
    },
    {
      "name": "category",
      "type": "text",
      "values": [
        {
          "value": "Musicians",
          "hits_count": 171
        },
        {
          "value": "Keys",
          "hits_count": 162
        },
        {
          "value": "Digital Pianos",
          "hits_count": 91
        }
      ]
    },
    {
      "name": "on_sale",
      "type": "boolean",
      "values": [
        {
          "value": "true",
          "hits_count": 80
        },
        {
          "value": "false",
          "hits_count": 190
        }
      ]
    }
  ]
}

        
      
    
  



(API response shortened for brevity)




  
Render facets universally
Luigi's Box can automatically select the most appropriate facets for the user's query. It is also possible to set up specific facets manually in Luigi's Box administration. In order to support these features, do not rely on the predefined facets in the response. Instead, render the facets based on the API response.

In general this requires you to prepare components for each of the main facet types (numerical, text, boolean) and act on the API response, reading the list of returned facets and their types.

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          response.facets.forEach(facet) {
  if (facet.type === 'float') {
    renderRangeFacet(facet);
  }
  if (facet.type === 'text') {
    renderCheckboxesFacet(facet);
  }
  if (facet.type === 'boolean') {
    renderSingleCheckboxFacet(facet);
  }
}

        
      
    
  



  
Render total number of results
The total_hits attribute in the API response indicates the total number of results. You can use this data to provide information to the user.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "total_hits": 171
}

        
      
    
  



(API response shortened for brevity)




  
Render pagination
There are several attributes in the API response that help you with pagination:



total_hits indicates the total results that can be retrieved when using pagination. Divide it by size (which is a request parameter) to calculate total number of pages. Use the page request parameter to indicate the page you want to retrieve by the API call

next_page provides the API call to retrieve the next page of results. If you want to implement a simple "Next page" type of pagination, you can use the value of this attribute as-is to request the next page of results.





  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "total_hits": 171,
  "next_page": "https://live.luigisbox.com/search?tracker_id=&amp;f[]=type:item&amp;q=digital%20piano&amp;facets=price_eur_amount,category&amp;page=2"
}

        
      
    
  



(API response shortened for brevity)




  
Render sorting options
Use the sort API parameter to change the sorting. Note that when you request an explicit sorting, the results will be sorted by this attribute and no AI-based ranking will be used. 

To use the AI-based ranking, provide no sort parameter at all. If you pass the sort parameter, the results are simply ranked by that attribute and personalization and AI-based ranking is not used.

Also note that requesting an explicit sort may cause the number of results to vary. See the Knowledge base article for more details.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;facets=price_amount,category
  &amp;sort=price_amount:desc
  &amp;user_id=


        
      
    
  

Tips

When sorting on string attributes, the sort will respect the lexicographical ordering. Keep this in mind when attempting to sort over attributes that were indexed as text. This may be the case with price, as per Luigi's Box conventions it is usually indexed as text including the currency. This may lead to surprising ordering (e.g. "10 EUR", "100 EUR", "20 EUR"). To get correct ordering, use a numerical attribute. In case of price, this will be the automatically derived price_amount attribute.
Make sure to use no sort parameter if you want to get the AI-based ranking. Refer to the Standard ranking documentation to understand it in more detail. Note that the standard ranking will automatically consider availability and there's no need to sort by it explicitely.




  
Interacting with filters
When the user selects a filter, issue a new search API request using the f[] parameter to indicate the selected filter. The example request on this page serves the search results page in the case the user selected "Stage Pianos" in the "Category" facet. The value of the f[] attribute is always a colon separated pair - attribute:value.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;f[]=category:Stage+Pianos
  &amp;facets=price_amount,category
  &amp;user_id=


        
      
    
  



Notice the f[]=category=Stage+Pianos parameter which indicates the selected filter.




  
Interacting with numerical filters
When the user interacts with a numerical attribute, use a slightly different approach in the API request. The numeric attributes can be filtered using a range syntax.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;f[]=price_eur_amount:730.0|11590.0
  &amp;facets=price_amount,category
  &amp;user_id=


        
      
    
  



Notice the f[]=price_eur_amount:730.0|11590.0 parameter which indicates the selected filter. This will cause the API to return only products with price_amount_eur attribute in the interval 730 ‒ 11590.




  
Filtering on several attributes
You can filter on several values and several attributes in a single request. Simply add as many f[] parameters as necessary.

Note the implicit semantics: filtering on different values on a single attribute is a bool OR operation and there's a bool AND across different attributes.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;f[]=category:Stage+Pianos
  &amp;f[]=category:Digital+Pianos
  &amp;f[]=price_amount:730.0|11590.0
  &amp;facets=price_amount,category
  &amp;user_id=


        
      
    
  



Notice the various f[] parameters which indicate the selected filter. This specific combination will be interpreted as (category: Stage Pianos OR Digital Pianos) AND (price_amount within 730 - 11590).




  
Rendering results for several types (products, categories, brands)
It is a standard practice to include results for more than one type on the search results page. From the perspective of the user experience, there's always one main type that is used for filtering, sorting and pagination. The other types (called quicksearch types) are provided without pagination or filtering option (but you can specify sorting).



To request quicksearch types, add a quicksearch_types parameter.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;quicksearch_types=category:6,brand:3
  &amp;facets=price_amount,category
  &amp;user_id=


        
      
    
  




The f[]=type:item parameter specifies the main type to which sorting, filtering and pagination options apply.
The quicksearch_types parameter specifies results for the additional types that should be loaded.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "quicksearch_hits": [
    {
      "url": "/digital-pianos/",
      "attributes": {
        "hierarchy": [
          "Musicians",
          "Keys"
        ],
        "title": "Digital Pianos",
        "web_url": "/digital-pianos/"
      },
      "type": "category"
    },
    {
      "url": "/stage-pianos/",
      "attributes": {
        "hierarchy": [
          "Musicians",
          "Keys"
        ],
        "title": "Stage Pianos",
        "web_url": "/stage-pianos/"
      },
      "type": "category"
    },
    {
      "url": "/smart-piano/",
      "attributes": {
        "title": "Smart piano",
        "web_url": "/smart-piano/"
      },
      "type": "brand"
    },
    {
      "url": "/kurzweil/",
      "attributes": {
        "title": "Kurzweil",
        "web_url": "/kurzweil/"
      },
      "type": "brand"
    }
  ]
}

        
      
    
  



(API response shortened for brevity)




  
Fire a dataLayer event for search
After the results have been rendered, fire a Search Results dataLayer event describing what you have just rendered.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "view_item_list",
    ecommerce: {
        item_list_name: "Search Results",
        search_term: "digital piano",
        items: [
            {
                item_id: "PR-15553",
                item_name: "Smart piano The ONE Digital Piano",
                index: 1,
                price: 629,
                type: "item"
            },
            {
                item_id: "PR-76761",
                item_name: "Kurzweil Digital Piano",
                index: 2,
                price: 890,
                type: "item"
            },
            {
                item_id: "/digital-pianos/",
                item_name: "Digital pianos",
                index: 3,
                type: "category"
            },
            {
                item_id: "/smart-piano/",
                item_name: "Smart piano",
                index: 4,
                type: "brand"
            }
        ]
    }
});

        
      
    
  



(dataLayer event shortened for brevity)
Tips

Make sure that the item_id refers to the object identity (the url attribute in the top-level object data).
The dataLayer event structure is the same as for Autocomplete, except the item_list_name. Make sure to use Search Results here.
Provide data for all types, not just for products.
Make sure that the position index is unique for each item (independed of the type)





  
Fire a dataLayer event for search with filters
In case the user selected some filters, include the filters in the dataLayer event. Make sure to use the same attribute names as in the API request to provide feedback to the models.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "view_item_list",
    ecommerce: {
        item_list_name: "Search Results",
        search_term: "digital piano",
        items: [
            {
                item_id: "PR-15553",
                item_name: "Smart piano The ONE Digital Piano",
                index: 0,
                price: 629
            },
            {
                item_id: "PR-76761",
                item_name: "Kurzweil Digital Piano",
                index: 1,
                price: 890
            }
        ],
        filters: {
            "category": ["Stage Pianos", "Digital Pianos"],
            "price_amount": "730.0|11590.0"
        }
    }
});

        
      
    
  



(dataLayer event shortened for brevity)
Tips

Make sure that the item_id refers to the object identity (the url attribute in the top-level object data).
The dataLayer event structure is the same as for Autocomplete, except the item_list_name. Make sure to use Search Results here.





  
Fire a dataLayer click event
When the user clicks on a result, immediately fire a dataLayer event.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "select_item",
    ecommerce: {
        items: [
            {
                item_id: "PR-76761",
            }
        ]
    }
});

        
      
    
  




  
Banners in search results
To provide integration for the Banner campaigns feature obey the banner instructions in the campaigns attribute in the API response.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [

  ],
  "campaigns": [
    {
      "id": 45,
      "target_url": "https://www.luigisbox.com",
      "banners": {
        "search_panel": {
          "desktop_url": "https://luigisbox-tmp-public-feeds.s3.eu-central-1.amazonaws.com/240x280.png",
          "mobile_url": "https://luigisbox-tmp-public-feeds.s3.eu-central-1.amazonaws.com/420x240.png"
        },
        "search_list": {
          "desktop_url": "https://luigisbox-tmp-public-feeds.s3.eu-central-1.amazonaws.com/340x490.png",
          "mobile_url": "https://luigisbox-tmp-public-feeds.s3.eu-central-1.amazonaws.com/340x490.png"
        }
      }
    }
  ]
}

        
      
    
  



(API response shortened for brevity)




  
User sign in

  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          dataLayer.push({
    event: "luigisbox.collector.customer_id",
    customer_id: "281827";
  },
});

        
      
    
  


Once you know the personalized user ID, emit a customer_id dataLayer event





  
Render search results page for an identified user
When the user loads a search results page, you will fire an API request to the search endpoint to fetch the search results, passing both transient and persistent user IDs.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;facets=price_amount,category
  &amp;user_id=
  &amp;client_id=



        
      
    
  





user_id= - pass the persistent user ID

client_id= - pass the value of the _lb cookie





  
Limit amount of data transferred

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &amp;f[]=type:item
  &amp;facets=price_amount,category
  &amp;hit_fields=product_id,title,price,image_link
  &amp;remove_fields=nested
  &amp;user_id=


        
      
    
  


To limit the amount of data transferred between systems, specify the hit_fields and/or remove_fields attribute in the API request. It is an array of result properties which will be included in the API response. By using this, you can significantly reduce the amount of data transfer and increase performance.



  
What's next?
Continue by implementing the recommendation boxes.







    



      



          
            
              Next
              
                Search results page URL →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Search results page (SERP)
              
            
          
      



          
            
              Next
              
                Search API response overview →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Search results page URL
              
            
          
      



          
            
              Next
              
                Render the product tiles →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Search API response overview
              
            
          
      



          
            
              Next
              
                Render facets →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render the product tiles
              
            
          
      



          
            
              Next
              
                Render facets universally →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render facets
              
            
          
      



          
            
              Next
              
                Render total number of results →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render facets universally
              
            
          
      



          
            
              Next
              
                Render pagination →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render total number of results
              
            
          
      



          
            
              Next
              
                Render sorting options →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render pagination
              
            
          
      



          
            
              Next
              
                Interacting with filters →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render sorting options
              
            
          
      



          
            
              Next
              
                Interacting with numerical filters →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Interacting with filters
              
            
          
      



          
            
              Next
              
                Filtering on several attributes →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Interacting with numerical filters
              
            
          
      



          
            
              Next
              
                Rendering results for several types (products, categories, brands) →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Filtering on several attributes
              
            
          
      



          
            
              Next
              
                Fire a dataLayer event for search →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Rendering results for several types (products, categories, brands)
              
            
          
      



          
            
              Next
              
                Fire a dataLayer event for search with filters →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire a dataLayer event for search
              
            
          
      



          
            
              Next
              
                Fire a dataLayer click event →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire a dataLayer event for search with filters
              
            
          
      



          
            
              Next
              
                Banners in search results →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Fire a dataLayer click event
              
            
          
      



          
            
              Next
              
                User sign in →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Banners in search results
              
            
          
      



          
            
              Next
              
                Render search results page for an identified user →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← User sign in
              
            
          
      



          
            
              Next
              
                Limit amount of data transferred →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Render search results page for an identified user
              
            
          
      



          
            
              Next
              
                What's next? →
              
            
          
      



  
  
    



          
            
              Previous
              
                ← Limit amount of data transferred
              
            
          
      



      



  


  .tutorial-nav-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
  }

  .tutorial-nav-container .nav-slot {
    flex-basis: 50%;
  }

  .tutorial-nav-container .card:hover {
    border-color: var(--bs-primary);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }



document.addEventListener('DOMContentLoaded', function() {
  const updateView = (newStepNumber) => {
    // Scroll to the top of the page immediately on step change
    window.scrollTo(0, 0);

    const curStep = parseInt(newStepNumber, 10);
    if (isNaN(curStep)) return;

    // Show content
    document.querySelectorAll('[data-flow-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-flow-step="${curStep}"]`)?.classList.remove('d-none');

    // Show nav tiles
    document.querySelectorAll('[data-nav-for-step]').forEach(el => el.classList.add('d-none'));
    document.querySelector(`[data-nav-for-step="${curStep}"]`)?.classList.remove('d-none');

    // Update sidebar
    const totalSteps = 21;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.height = `${100 / totalSteps * curStep}%`;
    }
    document.querySelectorAll('[data-step]').forEach((step, index) => {
      const stepNumber = index + 1;
      const checkIcon = step.nextElementSibling;
      const themeColor = "#682175";
      if (stepNumber = curStep);
      }
    });
  };

  window.addEventListener('hashchange', () => {
    const newStep = location.hash.slice(1) || '1';
    updateView(newStep);
  });

  const initialStep = location.hash.slice(1) || '1';
  updateView(initialStep);
  if (!location.hash) {
      location.hash = '#1';
  }
});]]></content>
      <icon>rocket-takeoff</icon>
    </page>
    <page>
      <url>/examples.html</url>

      <title>Examples</title>
      <content><![CDATA[Examples

  
    
      
        Autocomplete.js
        
        Examples for autocomplete.js, the frontend library for autocomplete integration
        See the examples 👀
      
    
  

  
    
      
        Search.js
        
        Examples for search.js, the frontend library for search integration
        See the examples 👀
      
    
  



  
    
      
        Recco.js
        
        Examples for recco.js, the frontend library for recommender integration
        See the examples 👀
      
    
  

  
    
      
        Search.js for Product listing
        
        Examples for search.js, the frontend library for product listing integration
        Coming soon 🚧]]></content>
      <icon></icon>
    </page>
    <page>
      <url>/guidelines.html</url>

      <title>Guidelines</title>
      <content><![CDATA[Guidelines
The guidelines below describe the most common integration scenarios, based on our experience.


      
        
          
            Small business
            
            
            Read the docs →
          
        
      
      
        
          
            B2B business
            
            
            Read the docs →
          
        
      
      
        
          
            Medium-to-large business
            
            
            Read the docs →
          
        
      
  
  
      
        
          
            Mobile apps
            
            
            Read the docs →
          
        
      
      
        
          
            Migrating LBX to API
            
            
            Read the docs →]]></content>
      <icon>compass</icon>
    </page>
</root>