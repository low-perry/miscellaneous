<?xml version="1.0" encoding="utf-8"?>
<root>
        <section>
          <page>/</page>
          <full_path></full_path>
          <title><![CDATA[Unlock the Power of Luigi's Box]]></title>
          <url>/#</url>
          <content><![CDATA[
    

      Your comprehensive guide to integrating, customizing, and mastering
      our AI-powered search and discovery solutions. Find everything you
      need to enhance your e-commerce platform.
    

    

      
        
          
        
        Quickstart guides
      
      Explore the documentation
    

    
Overview

  ]]></content>
        </section>
        <section>
          <page>/ab/intro.html</page>
          <full_path>ab/intro</full_path>
          <title><![CDATA[Intro to AB testing]]></title>
          <url>/ab/intro.html#intro-to-ab-testing</url>
          <content><![CDATA[

The first thing about AB tests is that we are trying to predict the future. What happens if we do X instead of Y. How much will we earn? Predicting the future is why we need to use statistical methods.



It’s not enough to just create two groups, measure some transactions and look which earned more.



Extreme example: What if you have two groups, each has exactly one session. Group A has a transaction, group B does not. Can you reliably say group A is better, or was the transaction done in this group by chance? Most likely it was by chance. 



Now how many sessions do you need to be certain to tell if it was an actual cause of the difference between groups, and not by chance? Ten sessions? A hundred? A thousand? We can’t tell until we look at the variability of the data (how much they naturally fluctuate).



Enter A:A testing.

]]></content>
        </section>
        <section>
          <page>/ab/intro.html</page>
          <full_path>ab/intro</full_path>
          <title><![CDATA[Why we need A:A tests]]></title>
          <url>/ab/intro.html#why-we-need-a-a-tests</url>
          <content><![CDATA[

A:A tests simply put two groups against each other while there is no real difference between them. Every day, one group will be slightly better than the other. Which side is better will change often, as the data fluctuate.



We need this to see how much fluctuation there is, and therefore, how long we need to run the AB test to detect certain amount of difference. If the group A is +8% better than B one day and -10% the next day, we’ll not be able to measure a difference of 0.3% simply because it’ll drown in the noise. 



Often making the AB test run longer helps to detect the difference more reliably, but sometimes the noise is too large and the difference too small to detect anything.



In such cases the test is inconclusive.



This happens and we need to keep that in mind when running AB tests.



Actually most of the tests in ecommerce end up inconclusive. It’s ok that they do. Many of the changes we think might do well actually don’t have any detectable effect.

]]></content>
        </section>
        <section>
          <page>/ab/intro.html</page>
          <full_path>ab/intro</full_path>
          <title><![CDATA[A:B tests]]></title>
          <url>/ab/intro.html#a-b-tests</url>
          <content><![CDATA[

When we know the variability of the data, we get an idea how long the test needs to run to detect a difference of a given amount. Then we can plan the test itself.



Best practices for running the test:




Clearly define what are the changes you’re going to test.
Determine the subset of users you’ll assign the test to. Will it be all users divided into A and B groups evenly, or otherwise? Try to have the groups as even in relevant metrics as possible, especially if the number of users will be too small to rely on natural random distribution. An example is 1000 users making tens or hundreds of thousands of orders per month in a B2B store. Consider excluding unusual groups of users (e.g. exclude B2B users if your shop is predominantly B2C).
Consider outliers beforehand. How will you tell which orders are too extreme? Top 1% of orders by their value?
Determine what metrics you’re going to track and where. Google Analytics? Data warehouse? Test if the metrics are being measured and are reliable.
Determine what type of calculation will be used to determine statistical significance. Frequentist or Bayesian?
Determine what are your criteria to consider the test to be conclusive (e.g. p-value < 0.05, test power > 85%)
Don’t change anything while the AB test is running. You want to control the variables.
Make sure the users are divided evenly during the AB test. Take care not to accidentally boost one group by for example sending it more users from a marketing campaign.
It is generally advised against running multiple AB tests simultaneously (if there is a chance they could interfere with each other).
Note if there were some outages or disruptions in service during the AB test. Consider discarding the test if the disruption was too large or affected one group of visitors disproportionately.


]]></content>
        </section>
        <section>
          <page>/lbx/requirements/platforms.html</page>
          <full_path>lbx/requirements/platforms</full_path>
          <title><![CDATA[Ecommerce platforms]]></title>
          <url>/lbx/requirements/platforms.html#ecommerce-platforms</url>
          <content><![CDATA[

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


Luigi's Box can process standard Upgates export feeds. You will need to provide links to the existing feeds, but there is no other work necessary on your side.

]]></content>
        </section>
        <section>
          <page>/lbx/requirements/product_identification.html</page>
          <full_path>lbx/requirements/product_identification</full_path>
          <title><![CDATA[Product identification]]></title>
          <url>/lbx/requirements/product_identification.html#product-identification</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




For effective learning of the AI models, we need to agree on the data identities that we will use for pairing. These identities will have to be present in the catalog data that you are pushing to Luigi's Box (via API or feeds). They also have to be present on the website where the analytics module can pick them up and use them for reporting.


You are using Google analytics enhanced ecommerce


If you use enhanced ecommerce in Google analytics and report ecommerce events via dataLayer, Luigi's Box analytics will pick them up automatically. The identities that you use for GA should also be used for Luigi's Box.



Below is an example "purchase" event that you can find the official GA documentation. Look inside the products and id field.



Please note that we are not asking you to implement enhanced ecommerce tracking for GA. If you don't already have a similar code on your site that's ok and you are ok to choose arbitrary product identity. If you already have enhanced ecommerce implemented, to use it effectively in tandem with Luigi's Box, we should align on using the same product identity.



Luigi's Box reads the events for "product detail view" - the detail event. See an example event from the GA documentation



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          <script>
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
</script>

        
      
    
  



Luigi's Box reads the events for purchase - the purchase event. See an example event from the GA documentation



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          <script>
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
</script>

        
      
    
  




If you are using GA4 and emit enhanced ecommerce events, you don't have to do anything else in terms of product identification.



You are not using Google analytics enhanced ecommerce


If you are not using enhanced ecommerce tracking, feel free to chose an immutable product identifier, such as SKU or your internal product ID. You will have to inlude this identifier in the product data you are pushing to Luigi's Box and also include it on your website in the product detail page.



Add the meta header for lb:id including the product identifier.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <html>
  <head>
    <meta property="lb:id" content="9293">
    ...
</script>

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/lbx/requirements/plp_instructions.html</page>
          <full_path>lbx/requirements/plp_instructions</full_path>
          <title><![CDATA[Provide instructions for Product listing rendering]]></title>
          <url>/lbx/requirements/plp_instructions.html#provide-instructions-for-product-listing-rendering</url>
          <content><![CDATA[


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
        
      
      
      

      
    
  
  
    
      
        
          <script>
  window.LbxPlp = { labels: "new" }
</script>

        
      
    
  



A configuration like this will translate to an API filter f[]=labels:new



You may use combination of attributes and values, e.g., to load new products for "Men", use:



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script>
  window.LbxPlp = { labels: "new", gender: "male" }
</script>

        
      
    
  



Note that the attribute names must match your indexed data, so if you provide instructions for label, your indexed data must contain label attribute.

]]></content>
        </section>
        <section>
          <page>/lbx/requirements/add_to_wishlist.html</page>
          <full_path>lbx/requirements/add_to_wishlist</full_path>
          <title><![CDATA[Add to wishlist]]></title>
          <url>/lbx/requirements/add_to_wishlist.html#add-to-wishlist</url>
          <content><![CDATA[


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
        
      
      
      

      
    
  
  
    
      
        
          <div class="wishlist-panel">
  <i class="icon icon-heart icon-heart-empty" data-wishlist-product-id="8382"></i>
</div>

        
      
    
  



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

]]></content>
        </section>
        <section>
          <page>/lbx/requirements/add_to_wishlist.html</page>
          <full_path>lbx/requirements/add_to_wishlist</full_path>
          <title><![CDATA[CORS]]></title>
          <url>/lbx/requirements/add_to_wishlist.html#cors</url>
          <content><![CDATA[

If you are providing us with an API endpoint, and that API lives on another domain or a subdomain than the main website, then you will need to provide CORS headers.
The request to your API will be done with withCredentials: true, in order to allow the browser to send cookies which allow you to identify the user. Using withCredentials: true in the request has an impact on the CORS headers that you need to set.



These are the response HTTP headers that you need to set. Please replace https://www.yourstore.com in the example with your domain.



  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://www.yourstore.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: *

        
      
    
  



Note that you can't simply set Access-Control-Allow-Origin: * because the wildcard mode is not compatible with the credentials mode.

]]></content>
        </section>
        <section>
          <page>/lbx/requirements/spa_events.html</page>
          <full_path>lbx/requirements/spa_events</full_path>
          <title><![CDATA[Single page applications (SPAs)]]></title>
          <url>/lbx/requirements/spa_events.html#single-page-applications-spas</url>
          <content><![CDATA[


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




You only have to do this if your website is written as a Single page application.


]]></content>
        </section>
        <section>
          <page>/lbx/requirements/recommender_wrappers.html</page>
          <full_path>lbx/requirements/recommender_wrappers</full_path>
          <title><![CDATA[Recommender wrappers]]></title>
          <url>/lbx/requirements/recommender_wrappers.html#recommender-wrappers</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




Recommenders will occupy a space on your website which must be prepared upfront. This space is denoted by wrappers - a specifically designated HTML elements in your website structure, which are just placeholders, waiting to be replaced by the real content generated by the recommenders.



These wrappers/placeholders are necessary to maintain a good user experience and avoid shifting contents of the website down, as new content generated by the recommenders appear. It is technically possible to integrate the recommenders even without wrappers, but this leads to "layout shifts". As the recommenders fill the space, the contents of the page move down. These shifts will worsen your Cumulative Layout Shift metric, which is part of Core Web Vitals and impacts your SEO score.



When the placeholders are present on the web, there are no layout shifts, becase the recommenders simply fill in the space previously occupied by the placeholders.



See the video below for a more detailed explanation.






Placeholders


To avoid the negative effects of layout shifts, we will ask you to create the wrapper elements for every recommender that we will be integrating.



The wrappers will be very simple, they will usually require adding a snippet of HTML code and respective CSS rules which indicate that the recommenders are loading.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <div id="lbx-recommender-homepage"></div>

        
      
    
  



Every wrapper must have a unique id which we can target. It is very important that every wrapper fills in the intended space and has a height set up. See the CSS below for an example.



  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          #lbx-recommender-homepage {
  height: 200px;
}

        
      
    
  



The element below demonstrates the placeholder with the loading state. The loading state would disappear once the Luigi's Box recommender initializes and takes over.



You can build more complex wrappers by providing a loading state, see the example below for inspiration.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <div class="recommender-loading" id="lbx-recommender-homepage">
 <div class="spinner"></div>
</div>

        
      
    
  



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




Placeholder:




 


]]></content>
        </section>
        <section>
          <page>/lbx/requirements/add_to_cart.html</page>
          <full_path>lbx/requirements/add_to_cart</full_path>
          <title><![CDATA[Add to cart]]></title>
          <url>/lbx/requirements/add_to_cart.html#add-to-cart</url>
          <content><![CDATA[


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
        
      
      
      

      
    
  
  
    
      
        
          <form action="/store/cart" method="post">
  <input type="hidden" name="product_id" value="2342"/>
  <input type="hidden" name="quantity" value="1"/>
  <button>Add to cart</button>
</form>

        
      
    
  



In most cases, this scenario relies on Javascript listeners which intercept clicking on the "add to cart" button, read the prescribed HTML structure and handle the user interaction. For this solution to work, these listeners must be set up as "live listeners" and handle product tiles which are added dynamically. In other words, this solution must handle product tiles which are added after the page has been rendered, e.g., when the user clicks next page in the pagination. Luigi's Box services are integrated as single page applications and there will be no page load.

]]></content>
        </section>
        <section>
          <page>/lbx/solutions.html</page>
          <full_path>lbx/solutions</full_path>
          <title><![CDATA[Solutions]]></title>
          <url>/lbx/solutions.html#solutions</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




The solutions below describe the standard approach to some of the more complex situations. Take the questionnaire to see what applies to your situation.





      
        
          
            Pricing API
            
            
            Read the docs →
          
        
      
      
        
          
            Pricing levels
            
            
            Read the docs →
          
        
      
  

]]></content>
        </section>
        <section>
          <page>/lbx/robustness/marking_search_fields.html</page>
          <full_path>lbx/robustness/marking_search_fields</full_path>
          <title><![CDATA[Marking search fields]]></title>
          <url>/lbx/robustness/marking_search_fields.html#marking-search-fields</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




When integrating autocomplete and search, we need to hook into your existing searchboxes. We will identify all of your searchboxes (there may be several of them, e.g. on desktop and on mobile) by their CSS classes.



If at any point in the future you change the CSS classes for the searchbox, the integration will break, as Luigi's Box will no longer be able to find the searchboxes and autocomplete and search will stop working. We will usually be able to provide a fix and update the selectors very easilly, but the downtime of autocomplete and search may impact your business in a negative way.



To avoid unexpected breakage, you can mark the searchboxes with a CSS class dedicated to Luigi's Box. See the examples below.



The example below shows how the HTML code for a searchbox typically looks like.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <input name="q" class="searchbox" placeholder="Search.."></input>

        
      
    
  



To avoid unexpected breakage, you can add the lbx-searchbox CSS class and change the HTML code to:



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <input name="q" class="searchbox lbx-searchbox" placeholder="Search.."></input>

        
      
    
  



This way it will be more obvious to your developers that the searchbox has special purpose for Luigi's Box and as long as they keep this class, they can add or remove style-related CSS classes.

]]></content>
        </section>
        <section>
          <page>/lbx/robustness/wrapper.html</page>
          <full_path>lbx/robustness/wrapper</full_path>
          <title><![CDATA[Marking wrapper element for search and product listing]]></title>
          <url>/lbx/robustness/wrapper.html#marking-wrapper-element-for-search-and-product-listing</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




The search and product listing integration provided by the Luigi's Box team needs an existing HTML element that it will replace with the search/listing user interface. Luigi's Box team will identify a suitable HTML element in your existing HTML structure and use it. To avoid breaking the integration in the future when you do a minor redesign, we recommend that you explicitely mark this HTML element with a CSS class lbx-wrapper. This way you will avoid an accidental search/product listing downtime when you deploy a design change.



The example below shows how the HTML code for a wrapper typically looks like.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <html>
  <body>
    <nav>..</nav>
    <main class="container"></main>
    <footer></footer>
  </body>
</html>

        
      
    
  



To avoid unexpected breakage, you can add the lbx-wrapper CSS class and change the HTML code to:



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <html>
  <body>
    <nav>..</nav>
    <main class="container lbx-wrapper"></main>
    <footer></footer>
  </body>
</html>

        
      
    
  



This way it will be more obvious to your developers that the wrapper has special purpose for Luigi's Box and as long as they keep this class, they can add or remove style-related CSS classes.

]]></content>
        </section>
        <section>
          <page>/lbx/solutions/pricing_levels.html</page>
          <full_path>lbx/solutions/pricing_levels</full_path>
          <title><![CDATA[Pricing levels]]></title>
          <url>/lbx/solutions/pricing_levels.html#pricing-levels</url>
          <content><![CDATA[


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
        
      
      
      

      
    
  
  
    
      
        
          <product>
  <price_level_1>13.9 EUR</price_level_1>
  <price_level_2>13.9 EUR</price_level_2>
  <price_level_3>12.8 EUR</price_level_3>
</product>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <product>
  <price_level_regular>13.9 EUR</price_level_regular>
  <price_level_gold_membership>13.9 EUR</price_level_gold_membership>
  <price_level_vip>12.8 EUR</price_level_vip>
</product>

        
      
        
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
Set a meta header in the HTML code <meta property="pricing_level" content="regular">



]]></content>
        </section>
        <section>
          <page>/lbx/solutions/pricing_api.html</page>
          <full_path>lbx/solutions/pricing_api</full_path>
          <title><![CDATA[Pricing API]]></title>
          <url>/lbx/solutions/pricing_api.html#pricing-api</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




The pricing API is used mostly in B2B store for the complex scenarios where you are using a pricing model where the same product can have different price for different customers. Note that if you have relatively small number (less than 20) of pricing levels, we can use a simpler solution than the pricing API. The pricing API is usually used for cases where there are infinite numbers of pricing combinations and they are impossible to enumerate.



Luigi's Box can use a pricing API to load prices for the specific products for the currently logged in customer.



The pricing API has to be implemented by you and respect the specification in this document.

]]></content>
        </section>
        <section>
          <page>/lbx/solutions/pricing_api.html</page>
          <full_path>lbx/solutions/pricing_api</full_path>
          <title><![CDATA[Specification]]></title>
          <url>/lbx/solutions/pricing_api.html#specification</url>
          <content><![CDATA[

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


]]></content>
        </section>
        <section>
          <page>/lbx/solutions/pricing_api.html</page>
          <full_path>lbx/solutions/pricing_api</full_path>
          <title><![CDATA[CORS]]></title>
          <url>/lbx/solutions/pricing_api.html#cors</url>
          <content><![CDATA[

If you are providing us with an API endpoint, and that API lives on another domain or a subdomain than the main website, then you will need to provide CORS headers.
The request to your API will be done with withCredentials: true, in order to allow the browser to send cookies which allow you to identify the user. Using withCredentials: true in the request has an impact on the CORS headers that you need to set.



These are the response HTTP headers that you need to set. Please replace https://www.yourstore.com in the example with your domain.



  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://www.yourstore.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: *

        
      
    
  



Note that you can't simply set Access-Control-Allow-Origin: * because the wildcard mode is not compatible with the credentials mode.

]]></content>
        </section>
        <section>
          <page>/lbx/robustness.html</page>
          <full_path>lbx/robustness</full_path>
          <title><![CDATA[Robustness]]></title>
          <url>/lbx/robustness.html#robustness</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




This sections describes optional changes in your website that make the Luigi's Box integration more robust and less likely to break in case of changes on your side. None of the changes described here are necessary to start the integration and we recommend to leave these out to a phase when the integration is finished. Take the questionnaire to see what applies to your situation.





      
        
          
            Marking search fields
            
            
            Read the docs →
          
        
      
      
        
          
            Marking wrapper
            
            
            Read the docs →
          
        
      
  

]]></content>
        </section>
        <section>
          <page>/lbx/form.html</page>
          <full_path>lbx/form</full_path>
          <title><![CDATA[Questionnaire]]></title>
          <url>/lbx/form.html#questionnaire</url>
          <content><![CDATA[

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

  summarize();


]]></content>
        </section>
        <section>
          <page>/lbx/requirements.html</page>
          <full_path>lbx/requirements</full_path>
          <title><![CDATA[Requirements]]></title>
          <url>/lbx/requirements.html#requirements</url>
          <content><![CDATA[


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
            
            
            Read the docs →
          
        
      
  

]]></content>
        </section>
        <section>
          <page>/lbx/design.html</page>
          <full_path>lbx/design</full_path>
          <title><![CDATA[Design]]></title>
          <url>/lbx/design.html#design</url>
          <content><![CDATA[


You are reading about requirements for the integration done by the Luigi's Box team. You can safely skip this part of the documentation if you are integrating yourself using either API or Luigi's Box frontend libraries.




The design of the services is delivered in the standard Luigi's Box design which is defined in the Figma document attached below. We will automatically adjust the following styles to match the design of your web:




Color scheme
Fonts
Product tile in search, PLP and recommenders, to match the design of your original product tile.




Other adjustments are possible, but are not included in the standard integration package and may be billed extra using the agreed hourly customization rate.






Customizations


The design of all of the Luigi's Box services can be customized. Note that this part of the documentation only deals with the scenario where the services are integrated by the Luigi's Box team. When you are integrating the services yourself, either using the API or frontend libraries, you get unlimited flexibility and can implement the design in any way that's most appropriate for your business.



When you request customizations during the onboarding phase, the Luigi's Box team will provide the initial time and price estimate of the amount of work necessary to implement your customizations. Based on the initial estimate, you may adjust the scope of the customizations. In case of more complex customizations, we recommend that you integrate the services yourself using either API or the frontend libraries.

]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Autocomplete.js]]></title>
          <url>/autocomplete/autocomplete_js.html#autocomplete-js</url>
          <content><![CDATA[

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
      
    
  


]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Autocomplete integration]]></title>
          <url>/autocomplete/autocomplete_js.html#autocomplete-integration</url>
          <content><![CDATA[


Note that the widget uses autocomplete endpoint which is cached internally. If you are using this
widget to check your data after you've issued a content update, you might need to wait up to 5 minutes for
the recent changes to show up. Consider checking the data through raw REST endpoints as described in content updates.




Add dns-prefetch instructions for browsers, for faster autocomplete experience and add autocomplete.css reference to your <head> element.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <link rel="dns-prefetch" href="//live.luigisbox.com" />
<link rel="stylesheet" href="https://cdn.luigisbox.com/autocomplete.css" />

        
      
    
  



Locate the HTML element of your search box, and add the initialization code
after its input element.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <form>
  <input id="autocomplete" />
  <!-- your search box -->
</form>

<script>
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
</script>
<script
  src="https://cdn.luigisbox.com/autocomplete.js"
  async
  onload="LBInitAutocomplete()"
></script>

        
      
    
  



You can configure the autocomplete widget to enable extra features. See Options reference for details and examples.




If you are pushing data into Luigi's Box via API make sure you are also indexing Web URL, otherwise the links in autocomplete may not work.




If you are using Cookiebot to manage cookie consent, we have seen cases where Cookiebot is interfering with the script onload event. If you initialize autocomplete via the onload event such as in the example above, the onload handler will never be executed. If you see this issue, try initializing via Cookiebot's CookiebotOnTagsExecuted event.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script src="https://cdn.luigisbox.com/autocomplete.js" async="async" />

<script>
  window.addEventListener('CookiebotOnTagsExecuted', function (e) {
    LBInitAutocomplete();
  });
</script>

        
      
    
  

Autocomplete parameters


AutoComplete object accepts 4 main parameters:



REQUIRED1. settings as a JSON object of the options.



REQUIRED2. selector of the input element.



optional3. HTML document.



optional4. Array of selectors to wait for bafore initializing autocomplete.js



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script>
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
</script>

        
      
    
  

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


      

]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Options reference]]></title>
          <url>/autocomplete/autocomplete_js.html#options-reference</url>
          <content><![CDATA[

The example below shows a more complex example of autocomplete setup. Consult the options reference below for explanations.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <form>
  <input id="autocomplete" />
</form>

<script>
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
          attributes: ['categories_hierarchy.last-1<-2'],
        },
        {
          type: 'article',
          name: 'Articles',
          size: 2,
        },
      ],
      Actions: [
        {
          forRow: function (row) {
            return row.type === 'item';
          },
          iconUrl: 'https://www.myshop.com/assets/buy.png',
          title: 'Buy',
          action: function (e, result) {
            e.preventDefault();
            $.post('/add-to-cart', { product_id: result.attributes.code });
          },
        },
      ],
      Width: 500,
    },
    '#autocomplete'
  );
</script>

        
      
    
  



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
        
      
      
      

      
    
  
  
    
      
        
          <script>
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
</script>

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Public functions]]></title>
          <url>/autocomplete/autocomplete_js.html#public-functions</url>
          <content><![CDATA[

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



      

]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Layouts]]></title>
          <url>/autocomplete/autocomplete_js.html#layouts</url>
          <content><![CDATA[

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

        
      
    
  





]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Placement of items]]></title>
          <url>/autocomplete/autocomplete_js.html#placement-of-items</url>
          <content><![CDATA[

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

        
      
    
  





]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Attribute expressions]]></title>
          <url>/autocomplete/autocomplete_js.html#attribute-expressions</url>
          <content><![CDATA[

Grid Layout
Line Layout



Attribute expressions allow you to specify which item attributes will be shown
in the second line of a single autocomplete row.



A generic form of attribute expression is attribute.start->after<-behind.



Attribute expressions operate on arrays of values and consist of 4 parts:

      

        
Part
Comment


        
attributeREQUIRED

Which attribute will be shown in autocomplete


startoptional

Required, when you want to define behind or after context. So attribute->10<-5 is not valid.


behind contextoptional

Consist of <- and positive number.


after contextoptional

Consist of -> and positive number.


      



-> delimits after context and <- delimits behind context.



For example, expression category.hl->1<-1 operating on ['Electronics', 'Smart <em>TV</em>', 'LED', '50"']
will find the first highlighted value (i.e. the value which matched the query) and
take one value after it and one value before it. In this case, the result would
be Electronics, Smart <em>TV</em>, LED shown in the second line, under the
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


]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Localisation]]></title>
          <url>/autocomplete/autocomplete_js.html#localisation</url>
          <content><![CDATA[
  
    
      
        
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

]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Filtering in autocomplete]]></title>
          <url>/autocomplete/autocomplete_js.html#filtering-in-autocomplete</url>
          <content><![CDATA[defaultFilters option


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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Pricing API integration]]></title>
          <url>/autocomplete/autocomplete_js.html#pricing-api-integration</url>
          <content><![CDATA[

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
  if (result && result.attributes && result.attributes.price_amount) {
    result._after_price = "<div class='loader'></div>"
  }

  return result;
}

        
      
    
  



And display the loading indicator.



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          FormatForDisplay: function (result) {
  if (result && result.attributes && !result.attributes.price) {
    result.attributes.price = "&nbsp;";
    result._after_price = "<div class='loader'></div>";
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
  if (results && results.length > 0) {
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
        for (var i = 0; i < prices.length; i++) {
            prices[i].style.visibility = 'visible';
        }

        // Hide the loaders
        var loaders = document.querySelectorAll('.luigi-ac .loader');
        for (var i = 0; i < loaders.length; i++) {
            loaders[i].style.display = 'none';
        }
    }

    var apiUrl = 'https://yourdomain.example/api/pricing?ids='+ids.join(',');
    xhttp.open("GET", apiUrl);
    xhttp.send();
  }
}

        
      
    
  



When autocomplete widget renders, fire an XHR request to your pricing API and use the result to replace the loaders with per-customer prices.
This code assumes that the pricing API response is an object where the keys are product IDs, and values are fully-formatted prices.




Note that in this example, we use the 'id' attribute to collect the IDs of the found products and update the HTML layout for each result. If you plan to use a different attribute, make sure to update the script accordingly.


]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Compatibility]]></title>
          <url>/autocomplete/autocomplete_js.html#compatibility</url>
          <content><![CDATA[

Luigi's Box autocomplete widget is compatible with all modern browsers,
however, some third-party scripts are known to cause problems.


Mootools


Mootools is overriding a native Function.prototype.bind function in an
incompatible way. If you try to use Luigi's Box autocomplete widget on a
website that is using Mootools, the widget will not work.



You can however use a simple workaround and save the original bind function,
before you load Mootools. Put this script tag <script>window._bind =
Function.prototype.bind;</script> before the script tag that loads
mootols. It will save the original bind function into a _bind variable. If
we detect that your website is using Mootools, we will automatically fallback
to this _bind function and the widget will work.

]]></content>
        </section>
        <section>
          <page>/autocomplete/autocomplete_js.html</page>
          <full_path>autocomplete/autocomplete_js</full_path>
          <title><![CDATA[Postponing data collection]]></title>
          <url>/autocomplete/autocomplete_js.html#postponing-data-collection</url>
          <content><![CDATA[

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
          const priceTagMarkup = `<meta itemprop="${jsonParsed[productId]}" content="129">`;
          priceElement.insertAdjacentHTML('afterbegin', priceTagMarkup);
      }
  })
  // Call the emitAnalyticsEventFn once the schema.org annotations are complete
  emitAnalyticsEventFn()
}

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/autocomplete/trending_queries.html</page>
          <full_path>autocomplete/trending_queries</full_path>
          <title><![CDATA[Trending queries API]]></title>
          <url>/autocomplete/trending_queries.html#trending-queries-api</url>
          <content><![CDATA[

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


]]></content>
        </section>
        <section>
          <page>/autocomplete/trending_queries.html</page>
          <full_path>autocomplete/trending_queries</full_path>
          <title><![CDATA[Get trending queries]]></title>
          <url>/autocomplete/trending_queries.html#get-trending-queries</url>
          <content><![CDATA[

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




        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';


$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://analytics.luigisbox.com/v2/trending_queries?tracker_id=1234-5678", [
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
]

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/autocomplete/top_items.html</page>
          <full_path>autocomplete/top_items</full_path>
          <title><![CDATA[Top items API]]></title>
          <url>/autocomplete/top_items.html#top-items-api</url>
          <content><![CDATA[

You can use our Top items endpoint to get the list of most popular items of any type in the same output manner as with Autocomplete.




  
    
      Autocomplete API integration tutorial
      
        
 See the full guide to integrating Luigi's Box Autocomplete using API
        See the tutorial
      
    
  





The top items endpoint is publicly available and requires no authentication.


]]></content>
        </section>
        <section>
          <page>/autocomplete/top_items.html</page>
          <full_path>autocomplete/top_items</full_path>
          <title><![CDATA[Get top items]]></title>
          <url>/autocomplete/top_items.html#get-top-items</url>
          <content><![CDATA[

GET https://live.luigisbox.com/v1/top_items


Required parameters
      

        
 
 


        
type
Comma separated list of required types and their quantity, e.g. items:6,category:3



tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


      


Optional parameters
      

        
 
 


        

f_type[]optional

Filter, where type part of the parameter name is a name of a requested type. The value itself is using key:value syntax. E.g., use f_item[]=color:green to filter hits of type item which have an attribute color with a value green.You can use several filters in one request, e.g., f_item[]=color:green together with f_brand[]=promoted:true.Filtering on top of numerical and date attributes supports ranges, using pipe as a separator, e.g., f_item[]=price:5|7. This range can be left open from either side, e.g., f_item[]=price:6|. If a combination of filters for the same field is provided, they are applied with OR. E.g., filters f_item[]=color:green&f_item[]=color:blue will retrieve products, that have either green OR blue color.



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




        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';


$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://live.luigisbox.com/v1/top_items", [
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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/autocomplete/top_items.html</page>
          <full_path>autocomplete/top_items</full_path>
          <title><![CDATA[Personalized top items/last searched queries]]></title>
          <url>/autocomplete/top_items.html#personalized-top-items-last-searched-queries</url>
          <content><![CDATA[

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

drives model selection, using key:value syntax e.g., ctx[]=warehouse:berlin. you can provide multiple key:value pairs, that are combined into one context definition. order of key:value pairs in request is not important. however, please note that key:value pairs must match one of the contexts which are being reported into luigi's box search analytics. see the multi-warehouse solution and context in analytics for more details.


      

]]></content>
        </section>
        <section>
          <page>/autocomplete/api.html</page>
          <full_path>autocomplete/api</full_path>
          <title><![CDATA[Autocomplete API]]></title>
          <url>/autocomplete/api.html#autocomplete-api</url>
          <content><![CDATA[

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


]]></content>
        </section>
        <section>
          <page>/autocomplete/api.html</page>
          <full_path>autocomplete/api</full_path>
          <title><![CDATA[Get autocomplete results]]></title>
          <url>/autocomplete/api.html#get-autocomplete-results</url>
          <content><![CDATA[

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

Filter, where type part of the parameter name is a name of a requested type. The value itself is using key:value syntax. E.g., use f_item[]=color:green to filter hits of type item which have an attribute color with a value green.You can use several filters in one request, e.g., f_item[]=color:green together with f_brand[]=promoted:true.Filtering on top of numerical and date attributes supports ranges, using pipe as a separator, e.g., f_item[]=price:5|7. This range can be left open from either side, e.g., f_item[]=price:6|. If a combination of filters for the same field is provided, they are applied with OR. E.g., filters f_item[]=color:green&f_item[]=color:blue will retrieve products, that have either green OR blue color.



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

response = connection.get("/autocomplete/v2?q=harry+potter&tracker_id=1234-5678&type=item:5")

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XGET --compressed\
  "https://live.luigisbox.com/autocomplete/v2?q=harry+potter&tracker_id=1234-5678&type=item:5"\




        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';


$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://live.luigisbox.com/autocomplete/v2?q=harry+potter&tracker_id=1234-5678&type=item:5", [
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
                "title": "<em>Product</em> X",
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
                "title.untouched": "<em>Product</em> Y",
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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/autocomplete/api.html</page>
          <full_path>autocomplete/api</full_path>
          <title><![CDATA[Integration with other Luigi's Box services]]></title>
          <url>/autocomplete/api.html#integration-with-other-luigi-39-s-box-services</url>
          <content><![CDATA[Fixits


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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/autocomplete/api.html</page>
          <full_path>autocomplete/api</full_path>
          <title><![CDATA[Sample requests]]></title>
          <url>/autocomplete/api.html#sample-requests</url>
          <content><![CDATA[

The requests below use the sample Luigi's Box data. You will have to adapt the examples to your specific situation and adapt:




The tracker_id parameter
The type names



Get autocomplete results for several types in a single request


This is the most basic request where you only provide the query and request the types.



GET https://live.luigisbox.com/autocomplete/v2?tracker_id=179075-204259&type=product:7,query:6,category:6&q=ukulele



Try it live →


Limit results based on a specific attribute


The request below will only return results from the "Ukulele straps" category. This is a slightly contrived example but you may use to filter for gender, warehouse or other use cases.



GET https://live.luigisbox.com/autocomplete/v2?tracker_id=179075-204259&type=product:7,query:6,category:6&q=ukulele&f_product[]=category:Ukulele+Straps



Try it live →


Limit fields


To achieve better performance, list the fields that you need in the response in hit_fields.



GET https://live.luigisbox.com/autocomplete/v2?tracker_id=179075-204259&type=product:7,query:6,category:6&q=ukulele&hit_fields=title,category,images



Try it live →

]]></content>
        </section>
        <section>
          <page>/autocomplete/api.html</page>
          <full_path>autocomplete/api</full_path>
          <title><![CDATA[Best practices]]></title>
          <url>/autocomplete/api.html#best-practices</url>
          <content><![CDATA[Avoid proxying requests


If you choose to implement the JSON API, we recommend that you consume
it on the frontend side, i.e., directly from the HTML page. This API was
designed for this use case and no
sensitive information is required to call it (e.g., your private key). Do not
proxy calls to Luigi's Box Autocomplete API via your backend servers as this
will introduce additional latency.


Prefetch DNS


We recommend that you add DNS prefetch instruction to your HTML code to
avoid the DNS lookup penalty on the first autocomplete request. Add the
following code anywhere to your <head> to instruct browser to do the DNS
lookup in advance.




  <link rel="dns-prefetch" href="//live.luigisbox.com">



Fetch only the fields you will use


To avoid a performance penalty, only request the fields that you will use. Use hit_fields parameter to list the fields.

]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Search.js]]></title>
          <url>/search/search_js.html#search-js</url>
          <content><![CDATA[

Search.js is a self-hosted JavaScript library which can be used to rapidly build an interactive, single-page-application user interface around the Luigi’s Box Search API.



You can integrate Luigi's Box search by including the search.js script, setting configuration parameters and providing custom templates to customize the visual appearance.




  
    
      Live demo
      
        
 Basic example
        Try the live example
      
    
  


]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Features]]></title>
          <url>/search/search_js.html#features</url>
          <content><![CDATA[

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
  


]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Integration]]></title>
          <url>/search/search_js.html#integration</url>
          <content><![CDATA[

By following this guide you will configure your site, such that when your users type into the search box and press Enter, their browser will send them to a search page where our search.js library requests search results and renders the search UI.




Example layout for the /search page




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <html>
  <body>
    <nav></nav>
    <input type="search" name="q" id="q"/>
    <div id="search-ui">
      <!-- empty placeholder for search UI, styled with a loading indicator -->
    </div>
    <footer></footer>
  </body>
</html>

        
      
    
  

1. Create new search page


Create a new HTML page (e.g., /search) which includes your standard application layout (i.e., header, menus, footer, etc.) and define an placeholder element where search.js will render search UI. The placeholder should indicate that the search is loading, see Loading states for more details.






2. Submit all search queries to new search page


Update your existing search forms to submit to this newly created webpage via GET method (default when no method is given). You need to ensure that when users type in a query and press Enter or click the search button, they are sent to page you created in step 1 and the query is passed as an URL parameter.



The easiest way to do this, is to wrap all your search fields with a <form> tag, with action attribute set to the path of the page from step 1.
E.g. <form action="/search"><input name="q" type="search"></form>



If your search fields are already wrapped in a <form> tag, then just update the action attribute and make sure that the form is submitted via GET method.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="..">
</script>
<script type="text/x-template" id="..">
</script>

<!-- Make sure that you define your templates before you load the search.js script -->
<script src="https://cdn.luigisbox.com/search.js"></script>
<script>
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
</script>

        
      
    
  

3. Setup search.js


Include the script and set configuration parameters. See the right column for an example.



Please note that:




You must define your templates before you initialize search.js script. Templates are looked up when search.js initializes and when they are not present in the page at that time, search.js will fall back to the default built-in templates.
You must initialize the search by calling Luigis.Search. The initialization function takes 3 arguments: configuration object, CSS selector for the input element and CSS selector for the placeholder element where it will render the Search UI.
You must define the initialization script (call to Luigis.Search) in the HTML after the search input element and after the placeholder element. The script expects to find both elements on initialization.
It is important that the search form input name parameter matches the query parameter (UrlParamName.QUERY) in configuration.








Without defining custom templates, you will get a very simple and unstyled search UI. You will most likely want to define custom templates where you can reuse your existing styles.



If you define the templates to match the HTML you are using today, there should be no extensive styling necessary.

]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Content Security Policy]]></title>
          <url>/search/search_js.html#content-security-policy</url>
          <content><![CDATA[

If your website is using Content Security Policy, you need to add following
rules to allow Luigi's Box search.js to work.

      

        
CSP directive
Value


        
connect-src
https://live.luigisbox.com


script-src
https://cdn.luigisbox.com


      

]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Options reference]]></title>
          <url>/search/search_js.html#options-reference</url>
          <content><![CDATA[

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

Boolean indicating whether to separate exact results from non exact (default: false). When set to true, you need to add <additional-results> component to template to show non exact results.




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

]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Templates]]></title>
          <url>/search/search_js.html#templates</url>
          <content><![CDATA[

Luigi's Box Search.js is using templates to render the Search UI. While we
include all templates in the default search.js distribution, they are not
styled. Usually, you will want to define your custom template which matches the
styling of your site. Templates are using Vue.js template
syntax under the hood.



You should define these templates directly in your HTML code. Each template
must be defined in its own <script type="text/x-template> tag. Templates are
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
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-search">
    <div class="row">
        <div class="col-4">
            <facets></facets>
            <banner position="panel"></banner>
        </div>
        <div class="col-8">
            <h1>Search results for query "{{ query }}", {{ hitsCount }} results</h1>
            <div v-if="correctedQuery">
              We have modified the search phrase for you: {{ correctedQuery }}
            </div>
            <div class="pull-right">
                <sort></sort>
            </div>
            <loading></loading>
            <banner position="header"></banner>
            <quick-search type="brand"></quick-search>
            <quick-search type="category"></quick-search>
            <results></results>
            <pagination></pagination>
            <banner position="footer"></banner>
        </div>
    </div>
</script>

        
      
    
  



This is the root template used for rendering search layout. Use this template
to define how your Search UI should look and which features it should support.
Should it support faceting and sorting? Should the pagination component go above or
below search results?



You have access to correctedQuery property. Luigi’s Box Search API corrects typos and optimizes search query automatically, you can show these changes to your vistitors.



You can reference these main components:





<facets>: Facet component which will render faceting (filtering) controls.

<sort>: Sort component, which will render sorting controls.

<loading>: Loading component, which will indicate that search results are
loading.

<results>: Results component, which will render results.

<additional-results>: Optional. You need to define this if you want to include "Did you mean?" results.

<pagination>: Pagination component, which will render pagination controls.

<quick-search>: Quicksearch component, which will render "search also in" results.

<banner>: Banner component, applicable only if you are using Luigi's Box banner campaigns. If you are missing this component in the main search template, banner feature will not work. The <banner> component takes a position parameter, which specifies which banner position to use. Valid values are: header, footer and panel. Note that the banner inside results is rendered as part of the <result> component.



Facets component



Example of a facets component definition




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-facets">
    <div>
        <facet :facet="facet" v-for="(facet, i) in facets" :key="i"></facet>
    </div>
</script>

        
      
    
  



Referenced as <facets>.



Used for generating list of facets. The default definition will render each
facet in a separate div. Override this template if you want to render facets in
a custom structure, such as <ul> list.

      

        
Name
Description


        
facets
Array of facets


      



To render a single facet reference <facet> component. <facet> component is
a special component that will detect facet type and render a template designed
specifically for that component. The <facet> component accepts these
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
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-facet-multichoice">
  <div class="lb-facet-multichoice">
    <h1>{{ name }}</h1>
    <ul class="lb-facet__list">
      <li v-for="val in values">
        <label>
          <input v-model="val.used" type="checkbox"/>
          {{ val.value }} ({{ val.hits_count }})
        </label>
      </li>
    </ul>
  </div>
</script>

        
      
    
  



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
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-facet-numeric-range">
  <div class="lb-facet-range">
    <h1>{{ name }}</h1>
    From {{ min }} - To {{ max }} ({{ value }})
    <vue-slider :min="min" :max="max" v-model="value" @callback="callback"></vue-slider>
  </div>
</script>

        
      
    
  



Range facet allows you to build a slider-like filtering component. Range facets
are most commonly used for prices, where users can select their acceptable
price range by adjusting a slider.







Range facet is automatically built from your numerical attributes. When your
source data includes integer or floating point attribute and you request a
facet for it, we will automatically build a range facet.



Search.js bundles a <vue-slider> component which you can use to easily build
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
Function that you need to call after the user changes the range to trigger search. If you are using the bundled <vue-slider>, then pass the callback as @callback (see the example on the right.


      


Date facet



Example of a date facet template




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-facet-date">
  <div class="lb-facet-date">
    <h1>{{ name }}</h1>
    {{ dates }}
    <div>
        Smaller than<br>
        <button @click="onDateChange({dates, options: {smallerThan: true}})">get</button>
    </div>
    Exact day:
    <lb-datepicker id="datepicker" :dates="dates" @change="onDateChange"></lb-datepicker>
    Bigger then:
    <lb-datepicker id="datepicker" :dates="dates" @change="onDateChange" :options="{biggerThan: true}"></lb-datepicker>
    Range:
    <lb-datepicker id="datepicker-range" :dates="dates" :options="{mode: 'range'}" @change="onDateChange"></lb-datepicker>
  </div>
</script>

        
      
    
  



Date facet allows you to build a calendar-based filter. Date facets are
automatically built from your source data attributes which contain date values.



Search.js bundles a custom <lb-datepicker> component which you can use to
build a user-friendly calendar selection filters.


Template parameters
      

        
Name
Description


        
name
Facet name. Note that this is the field name (in your source data) and not a human readable label so you will need to translate it for display


dates
Currently selected date range encoded as the 2-elements array. The [0] element is the range lower bound, [1] is the range upper bound.


onDateChange
Function that you need to call after the user changes the date range to trigger search. If you are using the bundled <lb-datepicker> component, then pass the callback as @change (see the example on the right.


      


Luigi's Box datepicker component



Component invocation




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <lb-datepicker id="unique-id" :options="optionsObject" @change="onDateChange"></lb-datepicker>

        
      
    
  



The <lb-datepicker> supports 2 different modes, integrated with the Luigi's
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
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-facet-boolean">
  <div class="lb-facet-bool">
    <label>
      {{ name }}
      ({{ hits_count }})
      <input v-model="value" type="checkbox"/>
    </label>
  </div>
</script>

        
      
    
  



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
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-facet-hierarchical">
  <div
      v-if="isFirstLevel"
      class="lb-facet lb-facet--hierarchical"
      :class="(isCollapsed ? 'lb-facet--collapsed' : '') + ' lb-facet--'.concat(name)"
  >
      <div class="lb-facet__header">
          <div class="lb-facet__title" @click="$parent.toggleCollapsed">
              {{ trans('facet.name.'.concat(name)) }} <span>({{values.length}})</span>
          </div>
      </div>
      <div v-if="useSearch" class="lb-facet__search">
          <input :value="search" @input="function(e){search = e.target.value}" :placeholder="trans('facet.multichoice.search.placeholder', { facet: name, facetTranslated: trans('facet.name.'.concat(name)).toLowerCase() })" />
          <div class="lb-facet__search-clear" @click="clearSearch" v-if="search !== ''"></div>
      </div>
      <div class="lb-facet__list">
          <div
              v-for="val in visibleValues"
              :key="val.value"
              class="lb-facet__hierarchical-first-level"
              :class="{ 'children-visible': !!childrenVisible[val.value], 'has-children-count': activeChildren[val.value], 'caret-visible': childrenFound(val) }"
          >
              <div class="hf-wrap">
                  <div class="children-caret" v-if="val.children && val.children.length" @click="toggleChildrenVisible(val.value)"></div>
                  <div class="children-count lb-search-bg-color-primary" v-if="activeChildren[val.value]">
                      {{ activeChildren[val.value] }}
                  </div>
                  <div :is="isFacetColor ? 'checkbox-color' : 'checkbox'" :data="val"  @input="cbInput"></div>
              </div>
              <facet-hierarchical :data="data" v-if="!!childrenVisible[val.value] && val.children && val.children.length" :parent="val" :parent-search="search"></facet-hierarchical>
          </div>
          <template v-if="(!useSearch || (useSearch && search === '')) && hiddenValues.length">
              <div
                  class="lb-facet__hidden-list"
                  :class="{ 'is-visible': isToggleMore }"
              >
                  <div
                      v-for="val in hiddenValues"
                      :key="val.value"
                      :class="{ 'children-visible': !!childrenVisible[val.value], 'has-children-count': activeChildren[val.value], 'caret-visible': childrenFound(val) }"
                  >
                  <div class="hf-wrap">
                      <div class="children-caret" v-if="val.children && val.children.length" @click="toggleChildrenVisible(val.value)"></div>
                      <div class="children-count lb-search-bg-color-primary" v-if="activeChildren[val.value]">
                          {{ activeChildren[val.value] }}
                      </div>
                      <div :is="isFacetColor ? 'checkbox-color' : 'checkbox'" :data="val"></div>
                  </div>

                  <facet-hierarchical :data="data" v-if="val.children && val.children.length" :parent="val" :parent-search="search"></facet-hierarchical>
                  </div>
              </div>
              <a
                  href
                  class="lb-facet__more"
                  @click.prevent="toggleMore"
              >
                  <template v-if="isToggleMore">
                      {{ trans('facet.multichoice.showLess', { count: hiddenValues.length }) }}
                  </template>
                  <template v-else>
                      {{ trans('facet.multichoice.showMore', { count: hiddenValues.length }) }}
                  </template>
              </a>
          </template>
      </div>
      <div class="lb-facet__search-empty" v-if="noValuesFound">
          {{ trans('facet.multichoice.search.nothingFound', { facet: name, facetTranslated: trans('facet.name.'.concat(name)).toLowerCase(), search:search }) }}
      </div>
  </div>
  <div v-else class="hierarchical-level" :data-level="level">
      <div
              v-for="val in visibleValues"
              :key="val.value"
              class="lb-facet__hierarchical-other-level"
              :class="{ 'children-visible': !!childrenVisible[val.value], 'has-children-count': activeChildren[val.value], 'caret-visible': childrenFound(val) }"
          >
              <div class="hf-wrap">
                  <div class="children-caret" v-if="val.children && val.children.length" @click="toggleChildrenVisible(val.value)"></div>
                  <div class="children-count lb-search-bg-color-primary" v-if="activeChildren[val.value]">
                      {{ activeChildren[val.value] }}
                  </div>
                  <div :is="isFacetColor ? 'checkbox-color' : 'checkbox'" :data="val"  @input="cbInput"></div>
              </div>
              <facet-hierarchical :data="data" v-if="val.children && val.children.length" :parent="val" :parent-search="search"></facet-hierarchical>
          </div>
  </div>
</script>

        
      
    
  



This type of facet is very similar to Multichoice facet, but it has multiple levels that respect hierarchy and can be collapsed or expanded as needed for better UX.



Right now, this facet type is only available for category_path facet. If your data feed is structured correctly and items contain hierarchical information about their respective categories (ancestors), this facet is available to you. Maximum of 3 levels if currently supported.



Template for this facet is fairly complicated, if you absolutely need to customize it, contact us for more information.






Sort component



Example of a sort component template




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-sort">
    <div>
        <a href="#" v-if="sortBy === 'price'"
           class="lb-sort lb-sort--active"
           :class="'lb-sort--' + sortDir"
           @click.prevent="doSort('price:' + sortDirReverse)">
            Price {{ sortDir }}
        </a>
        <a href="#" v-if="sortBy !== 'price'"
           class="lb-sort lb-sort--asc"
           @click.prevent="doSort('price:asc')">
            Price
        </a>
    </div>
</script>

        
      
    
  



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
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-loading">
    <div v-if="isLoading">
        LOADING ... {{ isLoading }}
    </div>
</script>

        
      
    
  



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
<v-if="isLoading"> on the main Search template to set a specific CSS class.
Want to replace facet templates with a loading animation for each facet? Use a
<v-if="isLoading"> in the Facet template to render a different HTML when
loading.


Results component



Example of a results component template




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-results">
    <div>
        <result :result="result" v-for="(result, i) in results" :key="i"></result>
    </div>
</script>

        
      
    
  



Referenced as <results>.



Used for rendering search results.




Template rendered when no results were found




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-no-results">
    <div class="lb-no-results">
        No results found
    </div>
    <top-items></top-items>
</script>

        
      
    
  



Note that in case the Search API returns no results, search.js will render
template with id template-no-results.


Template parameters
      

        
Name
Description


        
hitsCount
Number of search results in total (including those that are not displayed and only accessible via pagination) that are matching the queries and filters.


results
Array of search results that you should individually pass to a <result> component via its :result property.


      


Single result component

  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-result-default">
    <div class="lb-result-default">
        {{ attributes.title }} - {{ url }}
    </div>
</script>

        
      
    
  



Referenced as <result>



Use this component to render a single product representation. You can directly reference all
attributes that you have indexed for this type of content.



For convenience, each result can have the template based on its type.



If the result is of type product, template engine will search for template id template-result-product, and if not found fallback to template with id template-result-default.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-result-{type}">
    <div>
        Result {{ type }}
    </div>
</script>

        
      
    
  

Additional results component


Referenced as <additional-results>.



Used for displaying additional results only when SeparateExactResults option set to true. When set up, then





<results> component will display only results found via exact match.

<additional-results> component will display items found via approximate match exact: false.




When there are no approximate matches, then this component will not be rendered. When
all matches are approximate, then by default all of them will be rendered inside
<results> component



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <additional-results>
    <h2>You may also like</h2>
    <div slot="after">Show after additional results</div>
</additional-results>

        
      
    
  



Content wrapped inside <additional-results> will be displayed before
additional results. You can use this to show a title. You can use a special
"after" slot marker to display content after additional results, e.g., <div slot="after">.



Since this content is wrapped inside the component template
it is not shown when the component is not shown, e.g., when there are no
approximate matches.



This component is using the same mechanism and templates as the <results>
component.



If you are using ResultsRenderer, then the product representation will be generated by
your external ResultsRenderer API via a separate API call. If part of your
search result hits are exact and part is approximate, search.js will call the
ResultsRenderer endpoint twice. You should consider this additional load in
your capacity planning.


Pagination component


Referenced as <pagination>.



Used for displaying pagination component. Search.js only supports the
"next-page" style pagination where users can request another page of results
and the next page of results is appended to the already displayed results.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-pagination">
    <div class="lb-pagination">
        <a href class="lb-pagination__pager lb-pagination__next"
           v-if="isNextPage"
           @click.prevent="nextPage"
        >
            Load page {{ page }}
        </a>
    </div>
</script>

        
      
    
  

      

        
Name
Description


        

page integer

Next page number.



isNextPage boolean

Indicates whether a next page of results is available.



nextPage function

Call this function to trigger loading of next page of results.


      


"Also search in" component


Referenced as <quick-search>



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-quick-search-{type}">
    <div v-if="items.length > 0">
        Quick search name
        <div v-for="item in items">
            {{ item.attributes.title }} - {{ item.url }}
        </div>
    </div>
</script>

        
      
    
  



Displays matches within additional types if QuicksearchTypes option is present.
These templates are scoped to specified type. Each type must have its own
template with the type name embedded in the template id. E.g., if quicksearch
type is brand, template engine will search for template-quick-search-brand.

      

        
Name
Description


        

items array

Array of quick search results for current type. You can access the indexed attributes directly on each array element.


      

]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Recipes]]></title>
          <url>/search/search_js.html#recipes</url>
          <content><![CDATA[Theming


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
        "headlineTitle": "Sort by: &nbsp;"
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



  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          v-for="(facet, i) in facets.sort(function(a,b) {if (a.name.toUpperCase() < b.name.toUpperCase()) {return -1;} if (a.name.toUpperCase() > b.name.toUpperCase()) {return 1;} return 0;})"

        
      
    
  

Loading states


There are 2 separate loading states which you should handle in your UI.


1. Loading state before search.js loads


When you are redirecting users to a standalone search page, that search page usually contains just the bare minimum, most often just the header, footer and an empty placeholder element for search results. You should make sure that this page looks good, because that bare minimum is what your users will see for a split second while search.js loads.



We recommend that the search placeholder element is not empty, but instead shows a loading message. A loading spinner that you use elsewhere on your site is a good placeholder. Make sure that the placeholder is correctly spaced — it is usually desirable to set some height CSS property to push the footer all the way down to the bottom of the page.


2. Loading state while search.js loads search results


To implement loading state inside the search UI, you can ether define your custom loading template which will be rendered as an overlay on top of the results. You may need to adjust the CSS. If you don't need an overlay on top of the results, you can use a isLoading variable to create a simple loading effect in CSS.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-search">
  <div :class="isLoading ? 'search-loading' : ''">
  ...
</script>

        
      
    
  



For example, to fade-out results while new results are loading, you can set a custom search-loading class somewhere in the template.
Note that the isLoading property is accessible from all templates.








Example CSS style which will create a fade-out effect




  
    
      
        
          css
        
      
      
      

      
    
  
  
    
      
        
          .search-loading { opacity(0.7); }

        
      
    
  



Use a matching CSS to create an fade-out effect.







Use loading state as an overlay over results to avoid flicker and scroll position reset.




Example of a bad UX. Having a code like this in your template-search will lead to flicker and scroll reset.




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-search">
  <div v-if="isloading">
    Loading..
  <div v-else>
    <results></results>
  </div>
</script>

        
      
    
  



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
        
      
      
      

      
    
  
  
    
      
        
          <div class="product">
  Product 10292
</div>
<div class="product">
  Product 87261
</div>
<div class="product">
  Product 21827
</div>

        
      
    
  




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


If you are overriding templates and banners campaigns are not rendering at all, make sure that you are referencing the <banner> components at the appropriate places.




Rendering results with the result template




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <result :result="result" v-for="(result, i) in results" :key="i" :index="i"></result>

        
      
    
  




To override the result template (but not the banner template), override template-result-default.


      

        
Banner type
Rendering mechanism


        
Header banner
Reference <banner position="header"></banner> in your custom template (most commonly in template-search).


Footer banner
Reference <banner position="footer"></banner> in your custom template (most commonly in template-search).


Side banner
Reference <banner position="panel"></banner> in your custom template (most commonly in template-search).


5th result banner
Make sure you are rendering results via <result> component, which will make sure that the banner is rendered within results.


      


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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/search/search_js.html</page>
          <full_path>search/search_js</full_path>
          <title><![CDATA[Pricing API integration]]></title>
          <url>/search/search_js.html#pricing-api-integration</url>
          <content><![CDATA[

If you are using different pricing levels depending on the signed-in user, one
of the strategies that you can use to render correct user prices in
search is using your pricing API.



Search.js is written in Vue.js and that means that you can use the concept of reactivity to re-render prices after you load them from your API.



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          OnDone: function(query, results, emitAnalyticsEventFn) {
  window.Luigis.Search.$app.$store.commit('setItgState', {key: 'prices', data: null});

  if (results && results.length > 0) {
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
        
      
      
      

      
    
  
  
    
      
        
          <div class="product-price">
    <span v-if="itgState.prices && itgState.prices[attributes.id]"> {{ itgState.prices[attributes.id] | price }}</span>
    <span v-else> {{ attributes.price_amount | price }}</span>
</div>

        
      
    
  



Template uses attributes.price_amount by default (feel free to use a loader element) and when the API call succeeds, Vue.js will automatically re-render component and use itgState.prices instead. You can use the xxx | price filter just like with price_amount.

]]></content>
        </section>
        <section>
          <page>/search/shopping_assistant.html</page>
          <full_path>search/shopping_assistant</full_path>
          <title><![CDATA[Shopping Assistant API]]></title>
          <url>/search/shopping_assistant.html#shopping-assistant-api</url>
          <content><![CDATA[

Use the Shopping Assistant API endpoint to design interactive, guided product discovery experiences tailored for your users.



This API endpoint navigates conversation flows you have already created. To get started first create an assistant in the Luigi's Box app.



Luigi's Box Assistant can learn from user interactions to provide better recommendations. To enable learning, integrate Luigi's Box Search Analytics service with your website by following the instructions.




The assistant endpoint is publicly available and requires no authentication.



Endpoint


POST https://live.luigisbox.com/v1/assistant


Request
Query parameters
      

        
 
 


        
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

response = connection.post("/v1/assistant?tracker_id=1234-5678&assistant_handle=piano_finder&user_id=123456") do |req|
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
  "https://live.luigisbox.com/v1/assistant?tracker_id=1234-5678&assistant_handle=piano_finder&user_id=123456"\

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


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';


$client = new GuzzleHttp\Client();
$res = $client->request('POST', "https://live.luigisbox.com/v1/assistant?tracker_id=1234-5678&assistant_handle=piano_finder&user_id=123456", [
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
    "title_html": "<strong>What type of piano are you looking for?</strong>",
    "description_html": "<p>Please select one of the options below.</p>",
    "image_link": "https://example.com/images/question_image.jpg",
    "type": "single_choice",
    "handle": "piano_type",
    "options": [
      {
        "title_html": "<strong>Grand Piano</strong>",
        "description_html": "<p>A large and elegant piano.</p>",
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


      


Integration guide
Building a conversation flow


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
    const url = `${API_ENDPOINT}?tracker_id=${TRACKER_ID}&assistant_handle=${ASSISTANT_HANDLE}&user_id=${USER_ID}`;
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
    const url = `${API_ENDPOINT}?tracker_id=${TRACKER_ID}&assistant_handle=${ASSISTANT_HANDLE}&user_id=${USER_ID}`;
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
    if (data.question && data.question.options.length > 0) {
        // Render the question and options...
    } else {
        // No more questions, the conversation is over.
        displayCompletionMessage();
    }
}

        
      
    
  

Price range display


The Assistant API automatically calculates price ranges for each option, helping users understand the price distribution of products that match each option. This is calculated using the field specified in the price_field parameter (defaults to price_amount).


Best practices
Design effective questions


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


Design your assistant interface to work well on mobile devices, where users may prefer a guided experience over traditional filtering.

]]></content>
        </section>
        <section>
          <page>/search/facet_value.html</page>
          <full_path>search/facet_value</full_path>
          <title><![CDATA[Facet value search]]></title>
          <url>/search/facet_value.html#facet-value-search</url>
          <content><![CDATA[

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



Examples
Standard search request


GET https://live.luigisbox.com/search?tracker_id=111111-111111&f[]=type:product&f[]=color:White&q=piano&facets=brand,color,price_amount&size=24


Corresponding facet value search


GET https://live.luigisbox.com/v1/facet_value?tracker_id=111111-111111&f[]=type:product&f[]=color:White&q=piano&facets=brand&size=24&facet_q=yamaha


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

        
      
        
          <?php
// Install Guzzle: composer require guzzlehttp/guzzle
require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

// Constants
const BASE_URL = 'https://live.luigisbox.com';
const FACET_VALUE_ENDPOINT = '/v1/facet_value';
const TRACKER_ID = 'YOUR_TRACKER_ID';

/**
 * Search within facet values using Luigi's Box API
 */
function searchFacetValues($facetQuery, $searchQuery, $filters) {
    $client = new Client();

    try {
        $response = $client->request('GET', BASE_URL . FACET_VALUE_ENDPOINT, [
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

        
      
    
  

Error handling
Common errors


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

Error handling: Implement proper error handling for HTTP status codes and API-specific error responses.


]]></content>
        </section>
        <section>
          <page>/search/variants.html</page>
          <full_path>search/variants</full_path>
          <title><![CDATA[Variant search]]></title>
          <url>/search/variants.html#variant-search</url>
          <content><![CDATA[

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

]]></content>
        </section>
        <section>
          <page>/search/variants.html</page>
          <full_path>search/variants</full_path>
          <title><![CDATA[Performance impact]]></title>
          <url>/search/variants.html#performance-impact</url>
          <content><![CDATA[

Note that variants search comes with a minor performance impact. To avoid increasing latencies, we recommend to keep the number of variants per product below 10 on average. If you have need to index more variants you are probably trying to use variants-aware search for a scenario where it may not make sense and search performance may suffer.

]]></content>
        </section>
        <section>
          <page>/search/ranking.html</page>
          <full_path>search/ranking</full_path>
          <title><![CDATA[Ranking]]></title>
          <url>/search/ranking.html#ranking</url>
          <content><![CDATA[

When ordering search results, Luigi's Box ranks (sorts) the products using a multitude of signals and an ensemble of global and local models. There are several rules and main principles that guide the final ranking.

]]></content>
        </section>
        <section>
          <page>/search/ranking.html</page>
          <full_path>search/ranking</full_path>
          <title><![CDATA[Standard ranking model]]></title>
          <url>/search/ranking.html#standard-ranking-model</url>
          <content><![CDATA[

At the basic level, the ranking is based on:




Fulltext match. Luigi's Box will show products with the best match against the user phrase. If you are familiar with the was standard fulltext works, you may know about the concept of "score" - a number that represents the strength of the match. This concept has several problems and we are using a concept of "match quality" instead to rank the results. You will see the results assigned into distinct match quality levels and sorted in this order:


Exact matches
Matches with typo tolerance allowed
Partial matches where some parts of the user phrase did not match


Availability. The ranking prefers available products over unavailable products. We allow for different "levels" of availability, which allow us to rank products "in stock, available now" over products "in stock, available in 48 hours". See Availability rank for more details.
Signals from the analytics feedback loop. This makes sure that better selling products take precedence over products with no sales.
Personalization features, i.e., Luigi's Box ranks results with respect to user profile. The ranking of the product will be dependent on the user who is submitting the query.


]]></content>
        </section>
        <section>
          <page>/search/ranking.html</page>
          <full_path>search/ranking</full_path>
          <title><![CDATA[Influencing ranking]]></title>
          <url>/search/ranking.html#influencing-ranking</url>
          <content><![CDATA[

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

]]></content>
        </section>
        <section>
          <page>/search/ranking.html</page>
          <full_path>search/ranking</full_path>
          <title><![CDATA[Manual interference]]></title>
          <url>/search/ranking.html#manual-interference</url>
          <content><![CDATA[

If you need to affect ranking of a product in general, or on a per-query basis, you can use Luigi's Box app to adjust the ranking in real-time, using these features:




Catalog management > Boosting, which allows for manual boosting.
Search > Search results customizations, where you can set manual per-query rules.


]]></content>
        </section>
        <section>
          <page>/search/api.html</page>
          <full_path>search/api</full_path>
          <title><![CDATA[Search API]]></title>
          <url>/search/api.html#search-api</url>
          <content><![CDATA[

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


]]></content>
        </section>
        <section>
          <page>/search/api.html</page>
          <full_path>search/api</full_path>
          <title><![CDATA[Search]]></title>
          <url>/search/api.html#search</url>
          <content><![CDATA[

GET https://live.luigisbox.com/search


Required Parameters
      

        
 
 


        
q
User input - query. Optional, if you do not send q parameter, the API will only apply filters (f[] parameter). This is useful for generating listing pages.


tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


      


Optional Parameters
      

        
 
 


        

f[]optional

Filter using key:value syntax e.g., f[]=categories:Gadgets to filter hits according to chosen criteria. Filtering on top of numerical and date attributes supports ranges, using pipe as a separator, e.g., f[]=price_amount:5|7. This range can be left open from either side, e.g., f[]=price_amount:6|. If a combination of filters for the same field is provided, they are applied with OR. E.g., filters f[]=categories:jackets&f[]=categories:coats will retrieve products, that have either jackets OR coats category.



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

response = connection.get("/search?q=harry+potter&tracker_id=1234-5678")

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error, HTTP status #{response.status}"
  puts response.body
end


        
      
        
          #!/bin/bash

curl -i -XGET --compressed\
  "https://live.luigisbox.com/search?q=harry+potter&tracker_id=1234-5678"\




        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';


$client = new GuzzleHttp\Client();
$res = $client->request('GET', "https://live.luigisbox.com/search?q=harry+potter&tracker_id=1234-5678", [
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
          "title": "<em>Product</em> X",
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
          "title.untouched": "<em>Product</em> Y",
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
  "next_page": "https://live.luigisbox.com/search?q=harry+potter&tracker_id=1234-5678&page=2"
}

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/search/api.html</page>
          <full_path>search/api</full_path>
          <title><![CDATA[Facets]]></title>
          <url>/search/api.html#facets</url>
          <content><![CDATA[

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






]]></content>
        </section>
        <section>
          <page>/search/api.html</page>
          <full_path>search/api</full_path>
          <title><![CDATA[Integration with other Luigi's Box services]]></title>
          <url>/search/api.html#integration-with-other-luigi-39-s-box-services</url>
          <content><![CDATA[Query rewrite


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

]]></content>
        </section>
        <section>
          <page>/search/api.html</page>
          <full_path>search/api</full_path>
          <title><![CDATA[Scenarios]]></title>
          <url>/search/api.html#scenarios</url>
          <content><![CDATA[Filtering search results


To implement filtering, use the f[] and f_must[] parameters.



By default when searching filters of same type are applied with OR and
filters of different types are applied with AND. E.g., request with filters
f[]=category:jackets&f[]=category:windproof will find products, that have
category jackets OR category windproof OR both, and request with
filters f[]=category:jackets&f[]=protection:windproof will find products,
that have category jackets AND protection windproof.



If you want to combine two filters of same type in AND like fashion, use
f_must[] instead of f[]. E.g., you want to find only products that have
category jackets and category windproof matching query 'adidas'. So instead
of using the following request:



GET https://live.luigisbox.com/search?tracker_id=*your_tracker_id*&f[]=type:item&f[]=category:jackets&f[]=category:windproof&query=adidas



you should use this request:



GET https://live.luigisbox.com/search?tracker_id=*your_tracker_id*&f[]=type:item&f_must[]=category:jackets&f_must[]=category:windproof&query=adidas


Filtering using complex compound filters (OR, NOT)


You might have a use-case where you need to submit a more complex filter, perhaps a compound of nested conditions, mixing logic of and, or or not.
You can achieve this by changing the request method to POST from default GET and submitting the complex filter within request body as JSON.
Keep all the other parameters (tracker_id, q, ...) in the request URL. You can even put additional filters in the request URL. These will be combined using AND logic with the complex filter.



POST https://live.luigisbox.com/search?tracker_id=*your_tracker_id*&f[]=type:item&f[]=category:jackets&query=adidas`



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




f[]=color:red&f[]=color:value_missing




This special filter value is allowed for numeric, date, boolean and text filters.


Query correction


Luigi's Box search endpoint offers optional functionality that allows it to avoid no-results or low-relevance results for the search query.
If it recognizes that the requested query would end in a no-result state, it automatically augments the query to provide higher chances of finding results.
There are two ways a query can be augmented, depending on the type of entered query. If a query includes a typo, such as searching for sheos instead of shoes,
Luigi's Box can "fix" the typo prior the actual search, in order to avoid fuzzy search with uncertain results.



In this case, the corrected_query would be a string looking like this:



<strike>sheos</strike> <b>shoes</b>



If there is no typo but a part of query is causing the no result state, for example if there is no whiskey or whiskey shoes in catalog and query would be shoes whiskey, the corrected query would be this:



shoes <strike>whiskey</strike>



The last case is a search query consisting of a code. For example, 6834a88asc. But, there is no product in catalog with this code. There is only one with 6834a77asb. Since Luigi's Box is strict with codes and does not allow fuzziness for them, the query would end in no result state. But Luigi's Box can try to get a match with corrected query, in which case it would look like this:



6834a<strike>88asc</strike>



In every case, the corrected query is an HTML representation of the augmented query, that can be used to inform the user on the site, that the original query was in fact altered in some way.

]]></content>
        </section>
        <section>
          <page>/search/api.html</page>
          <full_path>search/api</full_path>
          <title><![CDATA[Best practices]]></title>
          <url>/search/api.html#best-practices</url>
          <content><![CDATA[Provide filter for the main type


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



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&quicksearch_types=category,brand&q=ukulele



Try it live →


Use pagination


The API supports pagination, you can page through the result set by using the page parameter. Request a smaller size of results for better performance and let the user request more.



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&q=ukulele&size=30&page=2



Try it live →


Avoid default explicit sorting


The results are sorted by Luigi's Box AI by default. The AI models are only involved if you do not specify explicit sorting though. Once you set the sort parameters, the results are ordered by the sort field you requested and not by AI.




  
        
      
      !
    

  
  
    Warning
    
        
    Using the sort parameter does more than just reorder results. It overrides the default AI-driven relevance ranking, which can cause the total_hits count to change. Additionally, this may alter the results for quicksearch_types (e.g., categories, brands). This is due to a known limitation where these secondary results are inferred from the paginated list of products; as the sort order changes this list, the quicksearch results also change.
  

    
  



Use dynamic facets


For products with hundreds, perhaps thousands of different parameters, it is often impossible to settle on a static list of filters (facets) to show to the users. Use the dynamic_facets_size parameter to let the AI model choose the most suitable facets for the given phrase. Compare the two requests below. The search request for "ukulele" will compute facets such as "Bridge" or "Finish", while the search request for "piano" responds with facets such as "Number of Keys".



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&q=ukulele&facets=price_amount,category&dynamic_facets_size=3



Try it live →



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&q=piano&facets=price_amount,category&dynamic_facets_size=3



Try it live →


Avoid loading unnecessary data


By default, the search API will include all of visible product attributes in the search response. Most of the time, that is not necessary and you can improve performance and decrease latency by only asking for the attributes that you will need and use. The hit_fields parameter drives the attribute selection. You pass it a list of comma separated attributes that you require to be included in the API response, such as hit_fields=image_link,price. Note that title is always returned by default, whether you specify it or not.



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&q=ukulele&hit_fields=image_link,price



Try it live →



Note that the API response has 2.13kB (at the time of writing) while the original unfiltered API response has 8.23kB. That's roughly a 4-fold improvement.



Alternatively, you can use a reverse approach and instead of specifying what should be included, specify what attributes should be excluded by setting remove_fields. It is, again, a comma separated list of attributes that you want to remove from the API response, such as remove_fields=image_link,price.



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&q=ukulele&remove_fields=image_link,price



Try it live →



Notice that the nested data is included in the API response implicitly and you can remove it via remove_fields. For the smallest possible API response size and the best latency, combine hit_fields with remove_fields=nested.



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&q=ukulele&hit_fields=image_link,price&remove_fields=nested



Try it live →



Notice that the API response is only 1.8kB for this scenario (at the time of writing).

]]></content>
        </section>
        <section>
          <page>/analytics/collector.html</page>
          <full_path>analytics/collector</full_path>
          <title><![CDATA[DataLayer collector]]></title>
          <url>/analytics/collector.html#datalayer-collector</url>
          <content><![CDATA[

Luigi's Box leverages Google Analytics' ecommerce events for efficient data collection. In simple terms, the process involves the collector monitoring the dataLayer object and gathering all pertinent events that are pushed. If you are not currently pushing ecommerce events to the dataLayer, there are two methods to implement this:




Using gtag manager:
Utilize the gtag manager to seamlessly push ecommerce events to the dataLayer.
Using native dataLayer.push method:
Alternatively, employ the native dataLayer.push method to achieve the same outcome of logging events to the dataLayer.




Both options yield equivalent results, as they effectively record events in the dataLayer, which the collector can subsequently access. It's worth noting that there is a slight disparity in the structure of events within the dataLayer object between the two methods, but the collector is designed to interpret both seamlessly.


Collector initialization


Collector script will be added via LBX script. Please insert the LBX script to the <head> element of each page.



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          <script async src="https://scripts.luigisbox.com/LBX-XXXXXX.js"></script>

        
      
    
  

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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/analytics/collector.html</page>
          <full_path>analytics/collector</full_path>
          <title><![CDATA[User identifiers]]></title>
          <url>/analytics/collector.html#user-identifiers</url>
          <content><![CDATA[

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

]]></content>
        </section>
        <section>
          <page>/analytics/collector.html</page>
          <full_path>analytics/collector</full_path>
          <title><![CDATA[Troubleshooting]]></title>
          <url>/analytics/collector.html#troubleshooting</url>
          <content><![CDATA[

While you are developing the integration, we recommend that you turn on data linter to see debugging information. Make sure that Luigi's Box integration script is included in the page and then, in your web browser, open the developer console (usually by pressing the F12 key), find the "Console" tab and type in the following command: Luigis.lint = true



After that, reload the page, but do not close the developer console. Each time, the integration collects search-related data, you will see what was parsed from your site and you'll get a report about data quality in the console tab of the developer tools.



If you've done everything correctly, you should see a blue Luigi's Box logo. If there were some problems with the data, you will see a red logo and a list of errors.



If you are not seeing the linter messages and logos, the most probable cause is that you are already running an early version of integration that does not support linting. Let us know and we will upgrade your integration.





]]></content>
        </section>
        <section>
          <page>/analytics/collector.html</page>
          <full_path>analytics/collector</full_path>
          <title><![CDATA[Support]]></title>
          <url>/analytics/collector.html#support</url>
          <content><![CDATA[

Troubles? Different nesting? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!

]]></content>
        </section>
        <section>
          <page>/analytics/debugging.html</page>
          <full_path>analytics/debugging</full_path>
          <title><![CDATA[Debugging]]></title>
          <url>/analytics/debugging.html#debugging</url>
          <content><![CDATA[

To ease the debugging of analytics events you can use the Session explorer screen in the Luigi's Box application. This screen shows a real-time overview of all sessions which are in-progress and not yet flushed to Luigi's Box analytics. The screen shows you the list of sessions and a view of all events associated with that session.







Click the session to explore individual events.







You can find the session explorer in the "General settings" menu.





]]></content>
        </section>
        <section>
          <page>/analytics/data-layer.html</page>
          <full_path>analytics/data-layer</full_path>
          <title><![CDATA[Javascript collector]]></title>
          <url>/analytics/data-layer.html#javascript-collector</url>
          <content><![CDATA[]]></content>
        </section>
        <section>
          <page>/analytics/data-layer.html</page>
          <full_path>analytics/data-layer</full_path>
          <title><![CDATA[DataLayer-based collection]]></title>
          <url>/analytics/data-layer.html#datalayer-based-collection</url>
          <content><![CDATA[

Luigi's Box leverages Google Analytics' ecommerce events for efficient data collection. In simple terms, the process involves the collector monitoring the dataLayer object and gathering all pertinent events that are pushed. If you are not currently pushing ecommerce events to the dataLayer, there are two methods to implement this:




Using gtag manager:
Utilize the gtag manager to seamlessly push ecommerce events to the dataLayer.
Using native dataLayer.push method:
Alternatively, employ the native dataLayer.push method to achieve the same outcome of logging events to the dataLayer.




Both options yield equivalent results, as they effectively record events in the dataLayer, which the collector can subsequently access. It's worth noting that there is a slight disparity in the structure of events within the dataLayer object between the two methods, but the collector is designed to interpret both seamlessly.


Collector initialization


Insert the LBX script to the <head> element of each page.



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          <script async src="https://scripts.luigisbox.com/LBX-XXXXXX.js"></script>

        
      
    
  



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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/analytics/data-layer.html</page>
          <full_path>analytics/data-layer</full_path>
          <title><![CDATA[User identifiers]]></title>
          <url>/analytics/data-layer.html#user-identifiers</url>
          <content><![CDATA[

By default Luigi's Box Search Analytics script assigns each user a unique identifier and saves it in a _lb cookie. We use this cookie to count various usage metrics in Luigi's Box application and it serves also as a basis for personalization of search and recommendation services. However, there are some use cases when it might be better to use your own unique user identifiers:




If you would like to integrate Luigi's Box Search as a Service with personalization enabled or Recommender on backend without using our JavaScript libraries, using you own unique user identifiers enables you to use the services up to their full potential by sending user identifier also for the first visit of a user, when you do not have our _lb cookie identifier available on your backend.
If you know that most or all of your users are logged in while browsing your site, you may leverage your user identifiers to get insight into their behavior cross-device.




If you would like to set your own unique user identifiers add the following code to the 
 element of your website.


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          <script>
  window._lbcq = [];
  window.Luigis = window.Luigis || {};
  window.Luigis.User = '...'; // Your user identifier goes here
  window.Luigis.Scan = window.Luigis.Scan || function(a, r) {
    window._lbcq.push([a, r]);
  }
</script>

        
      
    
  



If the window.Luigis.User property is not set or empty the default behavior will be triggered and Luigi's Box Search Analytics script will assign a unique identifier as describe.



The window._lcbq and window.Luigis.Scan are part of asynchronous loading of the script and help to make sure everything works even in case Luigi's Box Search Analytics script is not yet loaded. See more details when implementing via embedded JSON+LD.

]]></content>
        </section>
        <section>
          <page>/analytics/data-layer.html</page>
          <full_path>analytics/data-layer</full_path>
          <title><![CDATA[Troubleshooting]]></title>
          <url>/analytics/data-layer.html#troubleshooting</url>
          <content><![CDATA[

While you are developing the integration, we recommend that you turn on data linter to see debugging information. Make sure that Luigi's Box integration script is included in the page and then, in your web browser, open the developer console (usually by pressing the F12 key), find the "Console" tab and type in the following command: Luigis.lint = true



After that, reload the page, but do not close the developer console. Each time, the integration collects search-related data, you will see what was parsed from your site and you'll get a report about data quality in the console tab of the developer tools.




When running in linting mode, the data you send is not stored and analyzed. You won't see it in any of the reports in Luigi's Box application.




If you've done everything correctly, you should see a blue Luigi's Box logo. If there were some problems with the data, you will see a red logo and a list of errors.



If you are not seeing the linter messages and logos, the most probable cause is that you are already running an early version of integration that does not support linting. Let us know and we will upgrade your integration.





]]></content>
        </section>
        <section>
          <page>/analytics/data-layer.html</page>
          <full_path>analytics/data-layer</full_path>
          <title><![CDATA[Support]]></title>
          <url>/analytics/data-layer.html#support</url>
          <content><![CDATA[

Troubles? Different nesting? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!

]]></content>
        </section>
        <section>
          <page>/analytics/api.html</page>
          <full_path>analytics/api</full_path>
          <title><![CDATA[Event API]]></title>
          <url>/analytics/api.html#event-api</url>
          <content><![CDATA[

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



GET https://live.luigisbox.com/search?tracker_id=123456-789&f[]=type:product&f[]=nested_category_id:10283&f[]=color:blue



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



GET https://live.luigisbox.com/search?tracker_id=123456-789&f[]=type:product&f[]=nested_brand_id:123456&f[]=color:blue



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


      

]]></content>
        </section>
        <section>
          <page>/analytics/api.html</page>
          <full_path>analytics/api</full_path>
          <title><![CDATA[Scenarios]]></title>
          <url>/analytics/api.html#scenarios</url>
          <content><![CDATA[

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


      

]]></content>
        </section>
        <section>
          <page>/analytics/api.html</page>
          <full_path>analytics/api</full_path>
          <title><![CDATA[Limits]]></title>
          <url>/analytics/api.html#limits</url>
          <content><![CDATA[

Events API has the following limits tied to the combination of Tracker ID and User (the value of client_id from events):




A maximum of 30 events per User per 15 seconds.
A maximum of 400 events per User per session. A session ends after 30 minutes of inactivity.


]]></content>
        </section>
        <section>
          <page>/analytics/api.html</page>
          <full_path>analytics/api</full_path>
          <title><![CDATA[Support]]></title>
          <url>/analytics/api.html#support</url>
          <content><![CDATA[

Troubles? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Annotations Introduction (deprecated)]]></title>
          <url>/analytics/json+ld.html#annotations-introduction-deprecated</url>
          <content><![CDATA[


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

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Embedded JSON+LD]]></title>
          <url>/analytics/json+ld.html#embedded-json-ld</url>
          <content><![CDATA[


This section talks about implementation details, before you dive in make sure to read the concepts part which will help you understand what to track and why.





While you are developing the integration, we recommend that you turn on data linter to see debugging information. See Troubleshooting section for more details.


]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Search example]]></title>
          <url>/analytics/json+ld.html#search-example</url>
          <content><![CDATA[

Sample JSON+LD document



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="application/ld+json">
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
</script>

        
      
    
  



The sample document shows all concepts in a JSON+LD format. You should include a document similar to this, wrapped in a script tag somewhere in your page HTML code.


Top-level attributes
      

        
Element
Hint


        
<script type="application/ld+json">
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


      


]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Recommendation example]]></title>
          <url>/analytics/json+ld.html#embedded-json-ld-recommendation-example</url>
          <content><![CDATA[



Sample JSON+LD document for Recommendation




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="application/ld+json">
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
</script>

        
      
    
  



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


      


]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Explicit trigger]]></title>
          <url>/analytics/json+ld.html#embedded-json-ld-explitict-notifications</url>
          <content><![CDATA[



An example to show you the logical flow of results rendering. In the example
below, the script requests results asynchronously, then renders the results
with annotations and only after the results are rendered, calls Luigis.Scan.
You only need to use the Luigis.Scan call with appropriate arguments, the
rest of the code is just for demonstration.




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
            <div id="search-results">
  <div>

  <script id="search-results-annotations" type="application/ld+json">
  </script>

  <script>
    $.get('/search/results?q=iphone', function(data) {
      renderResults(data);
      generateJsonLd(data);
      Luigis.Scan('#search-results-annotations', '#search-results');
    });
  </script>

        
      
    
  



After filling in the JSON+LD, you must call a notification function which will
trigger data collection.



The notification function is called Luigis.Scan and accepts 2 arguments:




Selector for annotations which must point to a <script> element with
JSON+LD annotations
Selector for an element which contains the actual user-visible search
results. We need to find the actual search result elements so we can detect
user interactions (clicks, conversions). This selector is optional, and by
default set to body, meaning we are searching all body for search result
elements, but we strongly suggest that you provide this selector as
narrowly scoped as possible.




Since you are (and should be) loading the analytics script asynchronously, there is a possibility that when you call Luigis.Scan, the analytics script is not yet loaded and the function does not exist.



To prevent this situation, you must add the following code to the <head> element of your website.



  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          <script>
  window._lbcq = [];
  window.Luigis = window.Luigis || {};
  window.Luigis.User = '...'; // Optionally, set your user identifier here; see below
  window.Luigis.Scan = window.Luigis.Scan || function(a, r) {
    window._lbcq.push([a, r]);
  }
</script>

        
      
    
  



The code will define a simple implementation of the Luigis.Scan function,
which will just add "scan" commands to a queue. When the integration script is
loaded it redefines the function with real implementation and processes the
queued commands.



Defining the simple implementation early will allow you to load the integration
script asynchronously, without impacting your page load speed.



This is also the place to customize user ID used for search analytics via window.Luigis.User property. Even though it is not necessary in most use cases, see User identifiers section for examples when it might be better for you.

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Conversions]]></title>
          <url>/analytics/json+ld.html#conversions</url>
          <content><![CDATA[

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
        
      
      
      

      
    
  
  
    
      
        
          <div data-lb-action="buy">
    Add to cart
</div>
<div data-lb-action="wishlist">
    Add to wishlist
</div>

        
      
    
  

      

        
Element
Hint


        
data-lb-action="buy"
Clicks anywhere within the element will be considered as conversion action with type "buy".


data-lb-action="wishlist"
Clicks anywhere within the element will be considere as conversion action with type "wishlist".


      








Negative Conversion




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <div data-lb-action="thumbs-down" data-action-attitude="negative">
    Add to cart
</div>

        
      
    
  

      

        
Element
Hint


        
data-action-attitude="negative"
Clicks anywhere within the element will be considere as a negative conversion actions. Note that you must still include data-lb-action attribute for the click to be considered (negative) conversion.


      

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Autocomplete]]></title>
          <url>/analytics/json+ld.html#autocomplete</url>
          <content><![CDATA[


Sample JSON+LD document for Autocomplete




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="application/ld+json">
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
</script>

        
      
    
  



You should annotate Autocomplete results in the same way as regular search
results. We recommend that you create a separate <script
type="application/ld+json"> tag where you will describe your autocomplete
results. When you update Autocomplete results, you should also update the
JSON+LD document for the Autocomplete search. A good strategy is to assign the
script tag containing the Autocomplete JSON+LD a special id attribute and then
replace its contents with new JSON+LD when autocomplete results change.





      

        
Element
Hint


        
name
It is important that the name attribute is set to "Autocomplete" to mark this as an autocomplete list.


      

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[No search results]]></title>
          <url>/analytics/json+ld.html#no-search-results</url>
          <content><![CDATA[


JSON+LD for no search results




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="application/ld+json">
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
</script>

        
      
    
  



When your search returns no results, you need to add a json+ld markup anyway. You must annotate the query, the used filters and the search name (Search Results/Autocomplete). Since your search returned no results, set itemListElement to empty array.





      

        
Element
Hint


        
itemListElement
Notice that this attribute is present, but set to empty array since there are no results.


      

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Infinite scrolling]]></title>
          <url>/analytics/json+ld.html#infinite-scrolling</url>
          <content><![CDATA[

When your site is using infinite scrolling, you should update the JSON+LD document for regular search results. It is not necessary to build JSON+LD document for all visible search results — only build the JSON+LD for the search results that were freshly loaded.

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Using custom identifiers to pair analytics data with catalog]]></title>
          <url>/analytics/json+ld.html#using-custom-identifiers-to-pair-analytics-data-with-catalog</url>
          <content><![CDATA[


This is an advanced topic that is only relevant if you are using Luigi's Box search and have special requirements. When pairing analytics data (for search relevance models), we are using URLs to pair web data with catalog data. In some cases you may need to use some other pairing identifier, such as product id. For these cases, you must also provide this identifier in the analytics JSON+LD annotations.

Changing the identifiers in analytics must always be coordinated with changing the identifiers in the catalog data. Get in touch with our support (support@luigisbox.com) before attempting this change, to avoid adverse effect on your search ranking quality.




Changing the identifiers requires several changes.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="application/ld+json">
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
</script>

        
      
    
  



 1. Update the JSON+LD annotations to also include the item identifier. Use the identifier key for each item inside itemListElement. The value of the identifier will be used for pairing with catalog data and must be present in the catalog data.







  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <div data-lb-id="SKU_9293" class="product-result">
  <h1>Android Phone PX100</h1>
  <img src="thumbnail.png"/>
  <p class="description">A nice and reliable phone</p>
</div>
</script>

        
      
    
  



 2. Mark the HTML for each particular search result with the data-lb-id annotation. Mark the element that is wrapping the item "tile" in search results.







  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <html>
  <head>
    <meta property="lb:id" content="SKU_9293">
    ...
</script>

        
      
    
  



 3. On the item detail page (e.g. the product detail page), insert a <meta> tag in the <head> section to associate the item with the identifier.







All of the above changes are necessary to correctly link conversion attributions to searches using your provided item identifiers instead of URLs.

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[User identifiers]]></title>
          <url>/analytics/json+ld.html#user-identifiers</url>
          <content><![CDATA[

By default Luigi's Box Search Analytics script assigns each user a unique identifier and saves it in a _lb cookie. We use this cookie to count various usage metrics in Luigi's Box application and it serves also as a basis for personalization of search and recommendation services. However, there are some use cases when it might be better to use your own unique user identifiers:




If you would like to integrate Luigi's Box Search as a Service with personalization enabled or Recommender on backend without using our JavaScript libraries, using you own unique user identifiers enables you to use the services up to their full potential by sending user identifier also for the first visit of a user, when you do not have our _lb cookie identifier available on your backend.
If you know that most or all of your users are logged in while browsing your site, you may leverage your user identifiers to get insight into their behavior cross-device.




If you would like to set your own unique user identifiers add the following code to the 
 element of your website.


  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          <script>
  window._lbcq = [];
  window.Luigis = window.Luigis || {};
  window.Luigis.User = '...'; // Your user identifier goes here
  window.Luigis.Scan = window.Luigis.Scan || function(a, r) {
    window._lbcq.push([a, r]);
  }
</script>

        
      
    
  



If the window.Luigis.User property is not set or empty the default behavior will be triggered and Luigi's Box Search Analytics script will assign a unique identifier as describe.



The window._lcbq and window.Luigis.Scan are part of asynchronous loading of the script and help to make sure everything works even in case Luigi's Box Search Analytics script is not yet loaded. See more details when implementing via embedded JSON+LD.

]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Frequent problems]]></title>
          <url>/analytics/json+ld.html#frequent-problems</url>
          <content><![CDATA[

Here's a list of frequent problems that we have noticed with implementation.




Malformed JSON in JSON+LD integration. We've seen many cases of malformed JSON, but the most common error is a trailing comma at the end of the JSON array. If you suspect that your generated JSON+LD is not valid, open the browser developer tools (usually by pressing F12 key) and switch to the Console tab. If we cannot parse the JSON, we will show an error message.
Bad or no results list name. We collect and analyze only searches where the ItemList name is present and set to "Search Results" or "Autocomplete" (mind the capitalization). If you set the list name to something else we will ignore that list altogether.
No annotations for "no search results". When your search returns no results, the backend system very often renders a completely different HTML template which is missing the annotations. Please check the corresponding section for JSON+LD no search results.
Are you setting product positions with respect to pagination? Result position should be relative to full search results list. When you are showing 10 results per page, then on 2nd page in pagition, the products should be numbered 11–20. On 3rd page 21–30. A very frequent problem that we are seeing is that the positions on each page in pagination start from 1 again.
Query string is encoded. Sometimes we see that the query is URL encoded (percent-encoding) and it leads to double encoding since we encode the query again if necessary. It's best to use the query as is and leave encoding to us.
No conversion annotations. Very often, clients implement search results tracking and then forget about conversion tracking. Please check the corresponding section for JSON+LD conversions.
No conversion annotations on product detail. Make sure to implement conversion tracking on both search results page and product detail page. Please check the corresponding section for JSON+LD conversions.
No filter annotations. Very often filter annotations are missing, but they are as important as the query string. Consider that your query "skirt" is returning results and converting very well, but as soon as users check "Color: black" in your facets, your search returns no results. Filter are a natural part of the query and you should track them. Please check the corresponding section for JSON+LD filters.


]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Troubleshooting]]></title>
          <url>/analytics/json+ld.html#troubleshooting</url>
          <content><![CDATA[

While you are developing the integration, we recommend that you turn on data linter to see debugging information. Make sure that Luigi's Box integration script is included in the page and then, in your web browser, open the developer console (usually by pressing the F12 key), find the "Console" tab and type in the following command: Luigis.lint = true



After that, reload the page, but do not close the developer console. Each time, the integration collects search-related data, you will see what was parsed from your site and you'll get a report about data quality in the console tab of the developer tools.



If you've done everything correctly, you should see a blue Luigi's Box logo. If there were some problems with the data, you will see a red logo and a list of errors.



If you are not seeing the linter messages and logos, the most probable cause is that you are already running an early version of integration that does not support linting. Let us know and we will upgrade your integration.





]]></content>
        </section>
        <section>
          <page>/analytics/json+ld.html</page>
          <full_path>analytics/json+ld</full_path>
          <title><![CDATA[Support]]></title>
          <url>/analytics/json+ld.html#support</url>
          <content><![CDATA[

Troubles? Different nesting? Cannot get it to work? Contact us at support@luigisbox.com, we are glad to help!

]]></content>
        </section>
        <section>
          <page>/analytics/past_transactions_import.html</page>
          <full_path>analytics/past_transactions_import</full_path>
          <title><![CDATA[Past, offline and omnichannel transactions import]]></title>
          <url>/analytics/past_transactions_import.html#past-offline-and-omnichannel-transactions-import</url>
          <content><![CDATA[

After integrating with Luigi's Box, it takes some time to collect enough behavioral data (products bought together within the same order, by the same user, etc.) to achieve full effectiveness of our services. In order to shorten or completely overcome this ramp-up period, it's possible for clients to provide past user transactions they have collected before the integration. For omnichannel clients, in this way, it is possible to import user transactions outside collected channels (typically from brick&mortar stores).



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


POST https://live.luigisbox.com/v1/interactions/<TRACKER_ID>/files




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
An uploaded file must fully transmit within 10 minutes. If the upload takes longer than the 10-minute timeout limit, an error will be returned and the upload canceled. If you encounter issues while uploading, reach out to support@luigisbox.com.


]]></content>
        </section>
        <section>
          <page>/identity.html</page>
          <full_path>identity</full_path>
          <title><![CDATA[Identity]]></title>
          <url>/identity.html#identity</url>
          <content><![CDATA[

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
Use consistently in analytics and catalog data



]]></content>
        </section>
        <section>
          <page>/lbx.html</page>
          <full_path>lbx</full_path>
          <title><![CDATA[Integration by the Luigi's Box team]]></title>
          <url>/lbx.html#integration-by-the-luigi-39-s-box-team</url>
          <content><![CDATA[

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
        Take the questionnaire →
      
    
  


]]></content>
        </section>
        <section>
          <page>/solutions.html</page>
          <full_path>solutions</full_path>
          <title><![CDATA[Solutions]]></title>
          <url>/solutions.html#solutions</url>
          <content><![CDATA[

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
            Read the docs →
          
        
      
  

]]></content>
        </section>
        <section>
          <page>/api_principles.html</page>
          <full_path>api_principles</full_path>
          <title><![CDATA[API principles]]></title>
          <url>/api_principles.html#api-principles</url>
          <content><![CDATA[

Luigi's Box provides several HTTP-based APIs. In general, the APIs that access sensitive data (such as analytics export) or manipulate data in your catalog require HMAC authentication. The APIs that serve the search and recommender data are designed to be called from the browser, provide no sensitive data are callable without authentication.



All APIs are throttled (you cannot call them more often than the throttling limits allow you).

]]></content>
        </section>
        <section>
          <page>/api_principles.html</page>
          <full_path>api_principles</full_path>
          <title><![CDATA[Authentication]]></title>
          <url>/api_principles.html#authentication</url>
          <content><![CDATA[

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


]]></content>
        </section>
        <section>
          <page>/api_principles.html</page>
          <full_path>api_principles</full_path>
          <title><![CDATA[Error handling]]></title>
          <url>/api_principles.html#error-handling</url>
          <content><![CDATA[

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

]]></content>
        </section>
        <section>
          <page>/api_principles.html</page>
          <full_path>api_principles</full_path>
          <title><![CDATA[Throttling]]></title>
          <url>/api_principles.html#throttling</url>
          <content><![CDATA[

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



If you find these limits insufficient for your site, please contact us and we can put exceptions for higher limits in place.

]]></content>
        </section>
        <section>
          <page>/plp/pairing.html</page>
          <full_path>plp/pairing</full_path>
          <title><![CDATA[Pairing]]></title>
          <url>/plp/pairing.html#pairing</url>
          <content><![CDATA[

To use product listing, you need to provide a mapping between categories and products. The default mapping used in our services is id -> category_id. This means that we expect your category object to contain the attribute id, and your product object to contain attribute category_id. The default mapping cannot be changed by you, but if you wish to change it, please contact our support at support@luigisbox.com, we are glad to help!



If you try to integrate a product listing while using invalid mapping, you will see an error message saying Error creating query - invalid category attribute or Could not find attribute <attribute_name> in your category structure.

]]></content>
        </section>
        <section>
          <page>/plp/search_js.html</page>
          <full_path>plp/search_js</full_path>
          <title><![CDATA[Category listing with search.js]]></title>
          <url>/plp/search_js.html#category-listing-with-search-js</url>
          <content><![CDATA[

Search.js can be used to render category listings. Category listing is a search, where the search input consists of only filters (to set filter for the category) and no query. If you wanted to list all products belonging to a category via API, you would send a request like /search?f[]=category:T-shirts. This request would return a list of all products for that category, sorted by Luigi's Box AI and respecting all merchandizig rules that you have set up.



There is almost nothing special about category listing from the initialization perspective. Follow the same setup as when initializating search including the loading placeholder for best UX.



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          IntentFilters: {
  category: 'T-shirts'
},

        
      
    
  



To set the filter for category, use a special-purpose IntentFilters configuration. Intent filters are designed to only persist for the duration of user's intent. Browsing the category listing is an intent and when the user decides to start searching, the intent changes, and the intent filters void. Note that the intent is an implicit concept inside search.js and there's no way to control it from outside.



If possible, use a more precise filtering by category ID, instead of its name.

]]></content>
        </section>
        <section>
          <page>/plp/api.html</page>
          <full_path>plp/api</full_path>
          <title><![CDATA[Product listing API]]></title>
          <url>/plp/api.html#product-listing-api</url>
          <content><![CDATA[

Use the Search API to integrate product listing, but avoid
setting the query parameter (q). See the Search API documentation for complete usage details.




  
    
      Product listing API integration tutorial
      
        
 See the full guide to integrating Luigi's Box Product listing using the API
        See the tutorial
      
    
  


]]></content>
        </section>
        <section>
          <page>/plp/api.html</page>
          <full_path>plp/api</full_path>
          <title><![CDATA[Product listing]]></title>
          <url>/plp/api.html#product-listing</url>
          <content><![CDATA[

GET https://live.luigisbox.com/search


Required parameters
      

        
 
 


        
f[] or f_must[]
Filters to apply to fetch the listing products. This will typically be the category or, preferably, the special category_path attribute described below.


tracker_id
Identifier of your site within Luigi's Box. You can see this identifier in every URL in the Luigi's Box app once you are logged-in.


plp
E.g. plp=category. Name of the filter (from the f[] supplied filters) that serves as the unique identifier of the category. This is used to retrieve and apply any customizations (facets, pins) made for that category.


      



Note: Both plp and f[] (or f_must[]) are required but also must use the same key. See the example below with plp=category&f[]=category:Kalimbas.



GET https://live.luigisbox.com/search?tracker_id=179075-204259&plp=category&f[]=category:Kalimbas&f[]=type:product&hit_fields=all_categories



Try it live →

]]></content>
        </section>
        <section>
          <page>/plp/api.html</page>
          <full_path>plp/api</full_path>
          <title><![CDATA[Best practices]]></title>
          <url>/plp/api.html#best-practices</url>
          <content><![CDATA[Filtering within full category hierarchy


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



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&f[]=category:Musicians&plp=category



Try it live →



This example presents an invalid plp request for the same mapping as above because the letter case does not match (musicians instead of Musicians).



GET https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&f[]=category:musicians&plp=category



Try it live →

]]></content>
        </section>
        <section>
          <page>/tutorials.html</page>
          <full_path>tutorials</full_path>
          <title><![CDATA[Tutorials]]></title>
          <url>/tutorials.html#tutorials</url>
          <content><![CDATA[

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
            Read the docs →
          
        
      
  

]]></content>
        </section>
        <section>
          <page>/solutions/multi_warehouse.html</page>
          <full_path>solutions/multi_warehouse</full_path>
          <title><![CDATA[Multi-warehouse search]]></title>
          <url>/solutions/multi_warehouse.html#multi-warehouse-search</url>
          <content><![CDATA[

Most ecommerce businesses use several geographically distributed warehouses but the underlying warehousing infrastructure is transparent to the end users. They simply interact with the store, place an order and the order is delivered to them from one of the warehouses.



For some businesses however, the concept of the warehouse is an integral part of their business and the users are aware of the warehouse and frequently, they choose the warehouse that they want to use for their delivery. This will typically be B2B commerces, online groceries, or in general, business, where speed of delivery is of utmost importance.



The requirements for this scenario are usually:




User selects one of the available warehouses in the user interface (or the warehouse is selected automatically by the system)
Several aspects of the products, most notably availability of the products are considered in the context of the selected warehouse




The important aspect of a multi-warehouse solution is that it is not a simple display problem. The underlying models have to obey the warehouse-related product data when applying Ranking rules.



Luigi's Box Autocomplete and Search are designed to let you plug in your own attributes which drive the underlying ranking models and getting a warehouse-scoped ranking.


Availability & availability rank


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
        
      
      
      

      
    
  
  
    
      
        
          `&context[availability_field]=availability_warehouse_${current_user_warehouse_id}&context[freshness_field]=introduced_at_warehouse_${current_user_warehouse_id}`;

        
      
    
  

Feeds vs. API


This solution and the context fields in general are agnostic of the indexing method. The solution will work the same whether you are using Feeds or API to index the data.

]]></content>
        </section>
        <section>
          <page>/solutions/multi_warehouse.html</page>
          <full_path>solutions/multi_warehouse</full_path>
          <title><![CDATA[Constraining the feedback loop]]></title>
          <url>/solutions/multi_warehouse.html#constraining-the-feedback-loop</url>
          <content><![CDATA[

If by the nature of your business the users behave very differently across different warehouses, you can force Luigi's Box to create several ranking models for every warehouse. Note that this is a very advanced use case and you should consider the implications before you proceed with the integration. By splitting the model into several smaller models you are making each model slighly less robust, since it will get exposed to less behavioral data. You should be reasonably certain that the user behavior is different across the different warehouses that the split will lead to a benefit.



Creation of the models is driven by the context in the analytics data. Note that since contexts are an advanced feature, the context is currently only supported when pushing analytics events via API.



To create a separate ranking model for each of your warehouses, start by adding a context parameter to the analytics events.



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
            "context": {
    "warehouse": "Berlin"
  }

        
      
    
  



This will create a separate model for each warehouse in the background and each events will contribute to the warehouse-specific model.



To use the model in the retrieval APIs, specify the ctx key/value parameter in the API request. The ctx parameter must match one of the key/value context pairs that you use in analytics and which identify the model. In this specific example, you would use



&ctx[]=warehouse:Berlin



The model selection (the ctx parameter) is supported in:




Autocomplete API
Search API
Top items




To effectively scope each of the services to the specific warehouse, use the ctx parameter consistenly when calling the respective retrieval endpoints.

]]></content>
        </section>
        <section>
          <page>/solutions/query_time_boosting.html</page>
          <full_path>solutions/query_time_boosting</full_path>
          <title><![CDATA[Query-time boosting]]></title>
          <url>/solutions/query_time_boosting.html#query-time-boosting</url>
          <content><![CDATA[

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
}








]]></content>
        </section>
        <section>
          <page>/solutions/colors_and_hex_codes.html</page>
          <full_path>solutions/colors_and_hex_codes</full_path>
          <title><![CDATA[Colors and color codes]]></title>
          <url>/solutions/colors_and_hex_codes.html#colors-and-color-codes</url>
          <content><![CDATA[

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
          },

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/guidelines/mobile_apps.html</page>
          <full_path>guidelines/mobile_apps</full_path>
          <title><![CDATA[Mobile apps]]></title>
          <url>/guidelines/mobile_apps.html#mobile-apps</url>
          <content><![CDATA[

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
    Recommend for large amount of users in scheduled time
  


]]></content>
        </section>
        <section>
          <page>/guidelines/b2b.html</page>
          <full_path>guidelines/b2b</full_path>
          <title><![CDATA[B2B business]]></title>
          <url>/guidelines/b2b.html#b2b-business</url>
          <content><![CDATA[

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
      orUse pricing levels for less complex scenarios
  

  


]]></content>
        </section>
        <section>
          <page>/guidelines/lbx-to-be.html</page>
          <full_path>guidelines/lbx-to-be</full_path>
          <title><![CDATA[Migrating to API integration]]></title>
          <url>/guidelines/lbx-to-be.html#migrating-to-api-integration</url>
          <content><![CDATA[

Migrating Luigi's Box integrated services (via the LBX script) to the integration over API which you fully control is a risk-free operation in general. Follow these steps to complete the migration:





Request a modified LBX script. Contact Luigi’s Box support to obtain a copy of the LBX script with the services you’re migrating disabled. For example, if you’re migrating recommenders to backend API calls but retaining the search integration, Luigi’s Box will provide an LBX script version with search integration active and recommender integration disabled.

Deploy the modified script in your development and testing environments. Retain the original LBX script in your production environment to prevent any service disruption during development and  testing.

Develop the API integration. Implement and test the API calls. Refer to Search API and Recommender API for guidance.

Release to production. When ready to release the API integration to production, deploy your code and keep the original production LBX script. Use Luigi’s Box’s emergency deactivation feature to disable frontend integration for the services you’ve launched via API, preventing interference between the old and new setups.




Tips & considerations




Use browser developer tools (specifically the Network tab) to monitor the requests currently handled by Luigi’s Box, and replicate these in your API calls.
Ensure consistency in user IDs (for personalization) and object identities when requesting recommendations. Inconsistent object identities are a common cause of unexpected results in backend integrations.







Related



  
    
      
        
 Migrating from feeds to API
        
        Migrating the data imports from feeds to API
        Read the docs →
      
    
  


]]></content>
        </section>
        <section>
          <page>/guidelines/large_business.html</page>
          <full_path>guidelines/large_business</full_path>
          <title><![CDATA[Medium-to-large business]]></title>
          <url>/guidelines/large_business.html#medium-to-large-business</url>
          <content><![CDATA[

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
    Recommend for large amount of users in scheduled time
  


]]></content>
        </section>
        <section>
          <page>/guidelines/small_business.html</page>
          <full_path>guidelines/small_business</full_path>
          <title><![CDATA[Small business]]></title>
          <url>/guidelines/small_business.html#small-business</url>
          <content><![CDATA[

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
        Take the questionnaire →
      
    
  


]]></content>
        </section>
        <section>
          <page>/quickstart.html</page>
          <full_path>quickstart</full_path>
          <title><![CDATA[Quickstart Guides]]></title>
          <url>/quickstart.html#</url>
          <content><![CDATA[
    
Get started with Luigi's Box by following our step-by-step guides. These guides walk you through everything from basic setup to advanced integrations—helping you build your skills along the way.

  ]]></content>
        </section>
        <section>
          <page>/changelog.html</page>
          <full_path>changelog</full_path>
          <title><![CDATA[Changelog]]></title>
          <url>/changelog.html#changelog</url>
          <content><![CDATA[


  
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

  
2023-11-04 Deprecated inline schema.org annotations. JSON+LD is now the only supported annotation format.


]]></content>
        </section>
        <section>
          <page>/identity/map.html</page>
          <full_path>identity/map</full_path>
          <title><![CDATA[Identity]]></title>
          <url>/identity/map.html#identity</url>
          <content><![CDATA[

The following diagram shows a full picture of various identities across subsystems:




highlighted in red is the Object identity
highlighted in green is the Customer identity
highlighted in yellow is the transient user identity






]]></content>
        </section>
        <section>
          <page>/resiliency.html</page>
          <full_path>resiliency</full_path>
          <title><![CDATA[Resiliency]]></title>
          <url>/resiliency.html#resiliency</url>
          <content><![CDATA[

We understand that the services that we provide are at the heart of every ecommerce store and are critical for your business. Every downtime or problem has a direct and tangible impact on your revenue and on your success. We are commited to the highest engineering and operational standards to provide services which power your business without interruptions.



Here are some of the things that we do:




We have an exhausting monitoring infrastructure in place and monitor thousands of different metrics which tell us about health and performance of all of the parts of the system.
We use a proactive alerting system with hundreds of alerting rules. When something goes wrong, we are aware of it and take action.
We have 24/7 engineering on-call rotation where trained engineers are always on duty. When a critical alert fires, the on-call team receives a pager and acts on the problem. Even during the night, weekend or public holidays.
We designed Luigi's Box with resiliency in mind. Luigi's Box runs in several geographically separated datacenters. All of the services and underlying infrastructure are operated with a level of redundancy to account for potential failures.
We actively test for resiliency problems using chaos engineering. The system is designed to gracefully degrade (instead of failing) in case some pieces of infrastructure are not available.





We are transparent about our incidents. You can find the system status at the Luigi's Box status page at https://www.luigisboxstatus.com/


]]></content>
        </section>
        <section>
          <page>/resiliency.html</page>
          <full_path>resiliency</full_path>
          <title><![CDATA[What to do in case of an incident?]]></title>
          <url>/resiliency.html#what-to-do-in-case-of-an-incident</url>
          <content><![CDATA[

To learn about Luigi's Box incidents, we recommend that you subscribe to updates on the Luigi's Box status page. In case we announce an incident, you will receive an email notification.



Depending on the severity of the incident and impact on your business, you may decide that you want to disable Luigi's Box services until the incident is resolved.


Services integrated by Luigi's Box team


In case the services have been integrated by the Luigi's Box team, you can simply head to "General settings" and "Emergency deactivation" in the Luigi's Box application. From this screen you can disable or enable individual services.






Services integrated by you


In case the services are integrated by you, we recommend that you implement the option to disable Luigi's Box services and fall back to your original solution for search or PLP. In a case there should be serious incident it is better to fall back to a temporary solution.

]]></content>
        </section>
        <section>
          <page>/lbx-script.html</page>
          <full_path>lbx-script</full_path>
          <title><![CDATA[LBX script]]></title>
          <url>/lbx-script.html#lbx-script</url>
          <content><![CDATA[

When you sign up for Luigi's Box
you will receive a tracking script in the format as shown below.



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script async src="https://scripts.luigisbox.com/LBX-123.js"></script>

        
      
    
  



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

]]></content>
        </section>
        <section>
          <page>/lbx-script.html</page>
          <full_path>lbx-script</full_path>
          <title><![CDATA[Inside <head> element]]></title>
          <url>/lbx-script.html#inside-lt-head-gt-element</url>
          <content><![CDATA[

We recommend that you insert the script tag inside the <head> element in your
HTML code. Note, that the script is marked as async and thus will not impact
your page load speed.

]]></content>
        </section>
        <section>
          <page>/lbx-script.html</page>
          <full_path>lbx-script</full_path>
          <title><![CDATA[Google Tag Manager integration]]></title>
          <url>/lbx-script.html#google-tag-manager-integration</url>
          <content><![CDATA[

If you are unable to insert the script tag directly into your HTML, you can use
Google Tag Manager. Tracking script you insert into your HTML is the same you
would use with Google Tag Manager, however using Google Tag Manager will impact
the data collection process and some advanced features (e.g., fixit rules) will
appear to be working slowly. We recommend that you always insert the script to
<head> element for full experience.




Note that adblockers block GTM and in effect block all scripts that are
included via GTM. If you include Luigi's Box master script via GTM, for a
portion of your users the Luigi's Box script will be blocked by adblockers.


]]></content>
        </section>
        <section>
          <page>/lbx-script.html</page>
          <full_path>lbx-script</full_path>
          <title><![CDATA[Content Security Policy]]></title>
          <url>/lbx-script.html#content-security-policy</url>
          <content><![CDATA[

If your website is using Content Security Policy, you need to add following
rules.

      

        
CSP directive
Value


        
connect-src
https://api.luigisbox.com https://live.luigisbox.com https://app.luigisbox.com


script-src
https://scripts.luigisbox.com https://cdn.luigisbox.com


style-src
https://cdn.luigisbox.com


      

]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Reporting APIs]]></title>
          <url>/reporting/api.html#reporting-apis</url>
          <content><![CDATA[

Some of the analytics & reporting APIs support segmentation and date filtering. To apply them, use the following query parameters:





segment_id - visit the Luigis Analytics Dashboard and switch to desired segmentation. Copy segmentation id from the current URL (a value of parameter apply_segment). For example, for this URL https://app.luigisbox.com/sites/XXX-XXX/searches?apply_segment=999, value of segment_id is 999.

from - if given, only sessions starting after midnight of date from will be taken into account. Required format: YYYY-MM-DD (e.g., 2021-12-21)

to - if given, only sessions starting before the end of date to will be taken into account. Required format: YYYY-MM-DD (e.g., 2021-12-30)





  If you want to filter by date, both from and to must be provided. E.g., if you want data for 30th December 2021, from should be set to 2021-12-30 and to should be set to 2021-12-30, as well.





  Please note that a maximum window size given by from/to parameters is capped to the last 90 days.


]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Breakdown]]></title>
          <url>/reporting/api.html#breakdown</url>
          <content><![CDATA[

GET https://analytics.luigisbox.com/breakdown



The breakdown endpoint returns the high-level search KPIs, the same KPIs that you can see in the Luigi's Box dashboard funnel. All of the attributes in the response should be interpreted as percentages in the interval <0, 1>, e.g. 0.23 means 23%. In attributes sessions and searches you can find absolute numbers that are used to calculate these percentages.




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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/breakdown" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/breakdown"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Filters]]></title>
          <url>/reporting/api.html#filters</url>
          <content><![CDATA[

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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/filters" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/filters"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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

]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Frequent queries]]></title>
          <url>/reporting/api.html#frequent-queries</url>
          <content><![CDATA[

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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/frequent_queries" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/frequent_queries"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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

]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[No results queries]]></title>
          <url>/reporting/api.html#no-results-queries</url>
          <content><![CDATA[

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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/no_results_queries" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/no_results_queries"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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
       "href": "https://app.luigisbox.com/sites/23-7723/queries?in=Search+Results&q=query+x&show=noresults"
      }
    ]
  },
  {
    "query": "query y",
    "searches_count": 1475,
    "links": [
      {
        "rel": "self",
        "href": "https://app.luigisbox.com/sites/23-7723/queries?in=Search+Results&q=query+y&show=noresults"
      }
    ]
  },
  {
    "query": "query z",
    "searches_count": 1127,
    "links": [
      {
        "rel": "self",
        "href": "https://app.luigisbox.com/sites/23-7723/queries?in=Search+Results&q=query+z&show=noresults"
      }
    ]
  }
]

        
      
    
  




The self href leads to query detail page in Luigi's Box app.


]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Query Detail]]></title>
          <url>/reporting/api.html#query-detail</url>
          <content><![CDATA[

GET https://analytics.luigisbox.com/query_detail?q=term



The query detail endpoint gives you top hits (in terms of CTR and conversions) of the chosen query.




This endpoint requires HMAC authentication. Refer to the Authentication section for details.





This endpoint supports segmentation and date filtering. Refer to the Analytics APIs section for details.



Request Headers


Consider sending request header of Accept-Encoding as well with values for supported encoding methods of your HTTP client, e.g. gzip or br, gzip, deflate for multiple supported methods. Encodings make the response from the JSON API considerably smaller and thus faster to transfer.

]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Sample request]]></title>
          <url>/reporting/api.html#sample-request</url>
          <content><![CDATA[
  
    
      
        
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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/query_detail" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/query_detail?q=term"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Query Enhancement]]></title>
          <url>/reporting/api.html#query-enhancement</url>
          <content><![CDATA[

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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/rephrase" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/rephrase"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/reporting/api.html</page>
          <full_path>reporting/api</full_path>
          <title><![CDATA[Global ranking]]></title>
          <url>/reporting/api.html#global-ranking</url>
          <content><![CDATA[

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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/ranking_global" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://analytics.luigisbox.com/ranking_global"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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
}

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/banner_campaigns.html</page>
          <full_path>banner_campaigns</full_path>
          <title><![CDATA[Banner Campaigns]]></title>
          <url>/banner_campaigns.html#banner-campaigns</url>
          <content><![CDATA[

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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/banner_campaigns.html</page>
          <full_path>banner_campaigns</full_path>
          <title><![CDATA[Banner Positions]]></title>
          <url>/banner_campaigns.html#banner-positions</url>
          <content><![CDATA[

We support (and advertise in autocomplete/search responses) following names of banner positions:




Autocomplete


autocomplete_list
autocomplete_top


Search


search_header
search_panel
search_list
search_footer






If you are using Luigi's Box frontend libraries for autocomplete & search results rendering,
we assume that those positions are displayed as follows, with the stated dimensions of banners.



If you are using backend integration, you do not need to abide to these dimensions & positions at all and you can customize display of banners to your need.
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
    420x240px (JPG, 840x480, max 600kb)
    
  


]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Recommendation batch publisher]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#recommendation-batch-publisher</url>
          <content><![CDATA[

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


]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Step 1 - The client defines set of users to be recommended for]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#step-1-the-client-defines-set-of-users-to-be-recommended-for</url>
          <content><![CDATA[

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


POST https://live.luigisbox.com/v1/recommender/batching/<TRACKER_ID>/users




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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Step 2 - Luigi's Box sets up recommendation logics based on the client's preferences]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#step-2-luigi-39-s-box-sets-up-recommendation-logics-based-on-the-client-39-s-preferences</url>
          <content><![CDATA[

Client defines business requirements, based on which Luigi's Box prepares recommendation logics.

]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Step 3 - Luigi's Box sets up a recommendation batch publisher schedule based on the client's preferences]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#step-3-luigi-39-s-box-sets-up-a-recommendation-batch-publisher-schedule-based-on-the-client-39-s-preferences</url>
          <content><![CDATA[

Client defines how often recommendations for each logic should be generated.

]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Step 4 - Luigi's Box prepares and publishes recommendations at the scheduled time]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#step-4-luigi-39-s-box-prepares-and-publishes-recommendations-at-the-scheduled-time</url>
          <content><![CDATA[

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

]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Step 5 - The integrated platform retrieves the generated recommendations]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#step-5-the-integrated-platform-retrieves-the-generated-recommendations</url>
          <content><![CDATA[

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
        
      
      
      

      
    
  
  
    
      
        
          <?xml version='1.0' encoding='UTF-8'?>
<users>
    <user> ... </user>
    <user> ... </user>
    <user> ... </user>
</users>

        
      
    
  



Detailed structure of recommendations for one user:



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <?xml version='1.0' encoding='UTF-8'?>
<users>
    <user>
       <auth_user_id>u123</auth_user_id>
       <data>
           <_metadata>
               <updated_at>2024-08-28T10:00:00</updated_at>
           </_metadata>
           <recommendations>
               <recommendation>
                   <recommendation_type>mail-recommender-1</recommendation_type>
                   <results>
                       <result>
                           <id>product1-id</id>
                           <url>https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890</url>
                           <title>Product 1</title>
                           <image_link>https://www.client-xyz.com/product1-img.jpg/</image_link>
                       </result>
                       <result>
                           <id>product2-id</id>
                           <url>https://www.client-xyz.com/product2-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890</url>
                           <title>Product 2</title>
                           <image_link>https://www.client-xyz.com/product2-img.jpg/</image_link>
                       </result>
                   </results>
               </recommendation>
               <recommendation>
                   <recommendation_type>mail-recommender-2</recommendation_type>
                   <results>
                       <result>
                           <id>product3-id</id>
                           <url>https://www.client-xyz.com/product3-url/?recommendation_id=wxyz7890-7425-4fee-bed2-214d1234abcd</url>
                           <title>Product 3</title>
                           <image_link>https://www.client-xyz.com/product3-img.jpg/</image_link>
                       </result>
                       <result>
                           <id>product4-id</id>
                           <url>https://www.client-xyz.com/product4-url/?recommendation_id=wxyz7890-7425-4fee-bed2-214d1234abcd</url>
                           <title>Product 4</title>
                           <image_link>https://www.client-xyz.com/product4-img.jpg/</image_link>
                       </result>
                   </results>
               </recommendation>
           </recommendations>
       </data>
    </user>
</users>

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Step 6 - The integrated platform distributes recommendations to customers]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#step-6-the-integrated-platform-distributes-recommendations-to-customers</url>
          <content><![CDATA[

It is important to stress that Luigi's Box only generates batch recommendations and does not handle actual delivery of
the recommendations to end customers. In fact, email addresses or any other contact data are not even collected in
the Luigi's Box database. This responsibility is delegated to the integrated platform.

]]></content>
        </section>
        <section>
          <page>/recommendations/recommendation_batch_publisher.html</page>
          <full_path>recommendations/recommendation_batch_publisher</full_path>
          <title><![CDATA[Step 7 - Luigi's Box / client collects analytics data]]></title>
          <url>/recommendations/recommendation_batch_publisher.html#step-7-luigi-39-s-box-client-collects-analytics-data</url>
          <content><![CDATA[

By default, Luigi’s Box analytics collector supports tracking of recommendations from batch publishers. This is possible because the URLs of generated recommendations contain the recommendation_id parameter (e.g., https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890). Based on these URLs, Luigi’s Box analytics collector on the client’s web is able to collect user interactions with recommendations. The analytics dashboard (https://app.luigisbox.com/sites/<TRACKER_ID>/recommenders/analytics) then shows statistics of particular newsletter recommendations in the same manner as for other models.



In case of a custom analytics integration, please follow Events API documentation to pass the value of recommendation_id into the Impression analytics event.

]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Recco.js]]></title>
          <url>/recommendations/recco_js.html#recco-js</url>
          <content><![CDATA[

Recco.js is a self-hosted JavaScript library which can be used to rapidly build an interactive, single-page-application user interface around the Luigi’s Box Recommender API.



You can integrate Luigi's Box Recommender by including the Recco.js script, setting configuration parameters and providing custom templates to customize the visual appearance.




  
    
      Live demo
      
        
 Basic example
        Try the live example
      
    
  


]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Integration]]></title>
          <url>/recommendations/recco_js.html#integration</url>
          <content><![CDATA[

By following this guide you will configure your site to use Recco.js to make request on your behalf to Luigi's Box Recommender API and display these recommendations back to your users. Since recommender is independent of what site is it included on you might use any site you have control over.




Example layout for the page




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <html>
  <body>
    <!-- Header -->
    <!-- Product detail or other page content -->
    <div id="recommender-ui">
      <!-- Empty placeholder for recommender UI -->
    </div>
    <!-- Footer -->
  </body>
</html>

        
      
    
  

Prepare page for recommendations


Pick a page from your site that you would like to enrich with Luigi's Box Recommender – product pages, shopping carts or even home pages work best. Create an empty placeholder element where Recco.js will render recommender UI into. Note that if you pick an element that is not empty, its contents will be replaced by the recommender UI.



For now we will use <div id="recommender-ui"></div>, however you can use any element or selector that fits you and your website.







  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="..">
</script>
<script type="text/x-template" id="..">
</script>

<!-- Make sure that you define your templates before you initialize the Recco.js library -->
<script src="https://cdn.luigisbox.com/recco.js"></script>
<script>
  Luigis.Recommend({
    TrackerId: '2291-22343',
    Theme: 'luigis',
    Size: 5,
    Name: 'basket_detail',
    Type: 'basket_recommender'
  }, '#recommender-ui')
</script>

        
      
    
  

Setup Recco.js


Include the script and set configuration parameters. See the right column for an example.



Please note that:




You must define your templates before you initialize Recco.js script. Templates are looked up when Recco.js first initializes and when they are not present in the page at that time, Recco.js will fall back to the default built-in templates.
You must initialize the recommender by calling Luigis.Recommend. The initialization function takes 2 arguments: configuration object and CSS selector for the placeholder element where it will render the UI.
You must define the initialization script (call to Luigis.Recommend) in the HTML after the placeholder element. The script expects to find the placeholder on initialization.








Without defining custom templates, you will get a very basic and unstyled recommender UI. You will most likely want to define custom templates where you can reuse your existing styles.



If you define the templates to match the HTML you are using today, there should be no extensive styling necessary.

]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Content Security Policy]]></title>
          <url>/recommendations/recco_js.html#content-security-policy</url>
          <content><![CDATA[

If your website is using Content Security Policy, you need to add following
rules to allow Luigi's Box Recco.js to work.

      

        
CSP directive
Value


        
connect-src
https://live.luigisbox.com


script-src
https://cdn.luigisbox.com


      

]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Options reference]]></title>
          <url>/recommendations/recco_js.html#options-reference</url>
          <content><![CDATA[

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


]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Templates]]></title>
          <url>/recommendations/recco_js.html#templates</url>
          <content><![CDATA[


Luigi's Box Recco.js is using templates to render a list of recommendations. While we
include all templates in the default Recco.js distribution, they are not
styled. Usually, you will want to define your custom template which matches the
styling of your site. Templates are using Vue.js template
syntax under the hood.



You should define these templates directly in your HTML code. Each template
must be defined in its own <script type="text/x-template> tag. Templates are
looked up by their id attribute — make sure to not change it. You don't
have to redefine every template, only those that you will actually use.

]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Main template]]></title>
          <url>/recommendations/recco_js.html#main-template</url>
          <content><![CDATA[


Example of main recommendations template




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-recommend">
    <div>
        {{ $t('recommend.title', { name: name }) }}
        <recommend-item
            v-for="item in items"
            :key="name.concat('-').concat(item.url)"
            :item="item"
        ></recommend-item>
    </div>
</script>

        
      
    
  



This is the root template used for rendering recommendations layout. Use this template
to define how your recommendation UI should look. You can reference a <recommend-item> component which renders individual recommended items.




If you set the `Name` attribute when initializing a recommender, don't forget to use it as a suffix when defining a template. For example, Name: 'home-popular' and <script type="text/x-template" id="template-recommend-home-popular">...</script>


]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Recommended item component]]></title>
          <url>/recommendations/recco_js.html#recommended-item-component</url>
          <content><![CDATA[


Default recommend-item component definition




  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-recommend-item">
    <div>
        <strong class="lb-default">Default Recommend Item</strong>
        <small>{{ item.url }}</small>
    </div>
</script>

        
      
    
  



Referenced as <recommend-item>.



Used for generating a single recommended item. The default definition will render URL of each
recommended item in a separate div with just the product URL. Override this template
to render items in a custom structure, such as <ul> list or if you would like to
display more details.




If you set `Name` attribute when initializing reccomender, don't forget to use it as a suffix when defining template. For example, Name: 'home-popular' and <script type="text/x-template" id="template-recommend-item-home-popular">...</script>



]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Recipes]]></title>
          <url>/recommendations/recco_js.html#recipes</url>
          <content><![CDATA[
]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Theming]]></title>
          <url>/recommendations/recco_js.html#theming</url>
          <content><![CDATA[

Recco.js comes with 2 themes which control the visual style of the recommender UI.





luigis - which will give you a nicely styled list of recommendations. Use this theme, unless you have special requirements and plan to implement the recommender UI yourself from scratch.

default - which is a barebone visual style, which only provides a very basic and unstyled UI. If you plan on implementing all templates by yourself, use this template.


]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Localisation]]></title>
          <url>/recommendations/recco_js.html#localisation</url>
          <content><![CDATA[

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


      

]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Batch mode]]></title>
          <url>/recommendations/recco_js.html#batch-mode</url>
          <content><![CDATA[


  
    
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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Carousel mode]]></title>
          <url>/recommendations/recco_js.html#carousel-mode</url>
          <content><![CDATA[


  
    
      Live demo
      
        
 Carousel
        Try the live example
      
    
  




Use lbx-carousel in template



  
    
      
        
          html
        
      
      
      

      
    
  
  
    
      
        
          <script type="text/x-template" id="template-recommend">
    <div>
        {{ $t('recommend.title', { name: name }) }}
        <!--
        <recommend-item
            v-for="item in items"
            :key="name.concat('-').concat(item.url)"
            :item="item"
        ></recommend-item>
        -->
        <lbx-carousel v-if="items.length"></lbx-carousel>
    </div>
</script>

        
      
    
  



Recco.js has a built-in carousel. If you want to use it, replace <recommend-item v-for="..." /> with <lbx-carousel /> component in your recommender template. Further customisation is possible by settings in CarouselOptions object. In this code example you can see possible options with their default values.




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

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Prevent products from being recommended via annotations]]></title>
          <url>/recommendations/recco_js.html#prevent-products-from-being-recommended-via-annotations</url>
          <content><![CDATA[

If you do not want to recommend some items and need a simple and quick solution for this, here are blocked items annotations.



Simply add this script tag anywhere to your site (recommended to <head>), where you put all item IDs separated by comma for blocklist ({recommenderName} refers to Name of the recommendations component, see Name):



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          <script type="x-blocked-{recommenderName}">item-1-not-to-recommend, item-2-not-to-recommend</script>

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Pricing API integration]]></title>
          <url>/recommendations/recco_js.html#pricing-api-integration</url>
          <content><![CDATA[

If you are using different pricing levels depending on the signed-in user, one
of the strategies that you can use to render correct user prices in
search is using your pricing API.



Search.js is written in Vue.js and that means that you can use the concept of reactivity to re-render prices after you load them from your API.



  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          OnItemsReady: function(context) { var results = context.items;
  context.$store.commit('setItgState', {key: 'prices', data: null});

  if (results && results.length > 0) {
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
        
      
      
      

      
    
  
  
    
      
        
          <div class="product-price">
    <span v-if="itgState.prices && itgState.prices[attributes.id]"> {{ itgState.prices[attributes.id] | price }}</span>
    <span v-else> {{ attributes.price_amount | price }}</span>
</div>

        
      
    
  



Template uses attributes.price_amount by default (feel free to use a loader element) and when the API call succeeds, Vue.js will automatically re-render a component and use itgState.prices instead. You can use the xxx | price filter just like with price_amount.

]]></content>
        </section>
        <section>
          <page>/recommendations/recco_js.html</page>
          <full_path>recommendations/recco_js</full_path>
          <title><![CDATA[Postponing Data Collection]]></title>
          <url>/recommendations/recco_js.html#postponing-data-collection</url>
          <content><![CDATA[

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
}

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/recommendations/models.html</page>
          <full_path>recommendations/models</full_path>
          <title><![CDATA[Reference models]]></title>
          <url>/recommendations/models.html#reference-models</url>
          <content><![CDATA[

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


        
Books & Games
item_detail_complements
Related products usually bought together (cross-sell) with an input product. Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it doesn't prefer cheaper products, also it allows recommendations from exactly the same category.
Product detail page (PDP)
product id, user id (optional)


Books & Games
basket
Basket detail recommender modified for books & games industry segment. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it doesn't prefer cheaper products, also it allows recommendations from exactly the same category.
Basket detail
product ids, user id (optional)


Books & Games
basket_popup
Basket popup recommender modified for books & games industry segment. Related products usually bought together (cross-sell) with a product most recently added into the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it doesn't prefer cheaper products, also it allows recommendations from exactly the same category.
Basket pop up window
product id, user id (optional)


Food & Beverages
item_detail_complements
Related products usually bought together (cross-sell) with an input product. Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it prefers previously bought products and doesn't filter out expensive products.
Product detail page (PDP)
product id, user id (optional)


Food & Beverages
basket
Basket detail recommender modified for fast-moving consumer goods, typically from food the and beverages industry segment. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it prefers previously bought products and doesn't filter out expensive products.
Basket detail
product ids, user id (optional)


Food & Beverages
basket_popup
Basket popup recommender modified for fast-moving consumer goods, typically the food and beverages industry segment. Related products usually bought together (cross-sell) with a product most recently added into the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it prefers previously bought products and doesn't filter out expensive products.
Basket pop up window
product id, user id (optional)


Food & Beverages
last_seen
Products most recently visited by a user, including already bought ones.
Arbitrary
user id


Luxury goods & Jewelry
item_detail_complements
Related products usually bought together (cross-sell) with an input product. Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it prefers products of similar price.
Product detail page (PDP)
product id, user id (optional)


Luxury goods & Jewelry
basket
Basket detail recommender modified for luxury goods & jewelry industry segment. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it prefers products of similar price.
Basket detail
product ids, user id (optional)


Luxury goods & Jewelry
basket_popup
Basket popup recommender modified for luxury goods & jewelry industry segment. Related products usually bought together (cross-sell) with a product most recently added into the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it prefers products of similar price.
Basket pop up window
product id, user id (optional)


Pharma / Medical, Cosmetics & Body care
item_detail_complements
Related products usually bought together (cross-sell) with an input product. By default, recommender prefers cheaper products (complements). Products are diversified by category to offer a variety of different products if possible. In comparison to the general complements model, it prefers products from more different categories.
Product detail page (PDP)
product id, user id (optional)


Pharma / Medical, Cosmetics & Body care
basket
Basket detail recommender modified for medical, cosmetics & body care industry segments. Related products usually bought together (cross-sell) with all products already in the basket. Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket model, it prefers products from more different categories.
Basket detail
product ids, user id (optional)


Pharma / Medical, Cosmetics & Body care
basket_popup
Basket popup recommender modified for medical, cosmetics & body care industry segments. Related products usually bought together (cross-sell) with a product most recently added into the basket. Recommender prefers cheaper products (complements). Products are diversified by category to offer a variety of different products if possible. In comparison to the general basket popup model, it prefers products from more different categories.
Basket pop up window
product id, user id (optional)


Pharma / Medical, Cosmetics & Body care
last_seen
Products most recently visited by a user, including already bought ones.
Arbitrary
user id


      

]]></content>
        </section>
        <section>
          <page>/recommendations/api.html</page>
          <full_path>recommendations/api</full_path>
          <title><![CDATA[Recommender API]]></title>
          <url>/recommendations/api.html#recommender-api</url>
          <content><![CDATA[

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

]]></content>
        </section>
        <section>
          <page>/recommendations/api.html</page>
          <full_path>recommendations/api</full_path>
          <title><![CDATA[Get recommendations]]></title>
          <url>/recommendations/api.html#get-recommendations</url>
          <content><![CDATA[

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


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';


$client = new GuzzleHttp\Client();
$res = $client->request('POST', "https://live.luigisbox.com/v1/recommend?tracker_id=1234-5678", [
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
]

        
      
    
  
]]></content>
        </section>
        <section>
          <page>/recommendations/train_data.html</page>
          <full_path>recommendations/train_data</full_path>
          <title><![CDATA[Train data import]]></title>
          <url>/recommendations/train_data.html#train-data-import</url>
          <content><![CDATA[

The behavioral recommenders are trained on user behavior. Luigi's Box analytics collects co-purchases (items bought together within the same session, by the same user, etc.). It however takes some time from the beginning of data collection until we have enough knowledge to learn good quality recommendations. To speed the learning period, we can import a log of historical transactions from a file.



The data can be imported via Transactions API.

]]></content>
        </section>
        <section>
          <page>/recommendations/concepts.html</page>
          <full_path>recommendations/concepts</full_path>
          <title><![CDATA[Basic concepts]]></title>
          <url>/recommendations/concepts.html#basic-concepts</url>
          <content><![CDATA[Recommendation models


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
recommended by different recommender models


]]></content>
        </section>
        <section>
          <page>/crossroads.html</page>
          <full_path>crossroads</full_path>
          <title><![CDATA[What is Luigi's Box?]]></title>
          <url>/crossroads.html#what-is-luigi-39-s-box</url>
          <content><![CDATA[

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








Service integration
Backend integration



  
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
  
  
    
  








Summary & recommendations



  
    
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
        server performance to other tasks.
    
  


]]></content>
        </section>
        <section>
          <page>/indexing/feeds-to-api.html</page>
          <full_path>indexing/feeds-to-api</full_path>
          <title><![CDATA[Migrating from feeds to API]]></title>
          <url>/indexing/feeds-to-api.html#migrating-from-feeds-to-api</url>
          <content><![CDATA[

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
        Read the docs →
      
    
  


]]></content>
        </section>
        <section>
          <page>/indexing/data_layout.html</page>
          <full_path>indexing/data_layout</full_path>
          <title><![CDATA[Data Layout and Modeling Guide]]></title>
          <url>/indexing/data_layout.html#data-layout-and-modeling-guide</url>
          <content><![CDATA[Introduction


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
  "identity": "<unique-identity>",
  "type": "<object-type>",
  "active_from": "<iso-8601-date>",
  "active_to": "<iso-8601-date>",
  "fields": {
    "title": "<title>",
    "web_url": "<web-url>",
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

        
      
    
  

Post-indexing information
Searchability and visibility




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
Category hierarchy best practices


]]></content>
        </section>
        <section>
          <page>/indexing/api/v1/export.html</page>
          <full_path>indexing/api/v1/export</full_path>
          <title><![CDATA[Content export]]></title>
          <url>/indexing/api/v1/export.html#content-export</url>
          <content><![CDATA[

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


public_key = "<your-public-key>"
private_key = "<your-private-key>"

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


public_key="<your-public-key>"
private_key="<your-private-key>"

date=$(env LC_ALL=en_US date -u '+%a, %d %b %Y %H:%M:%S GMT')
signature=$(digest "$private_key" "GET" "/v1/content_export" "$date")

curl -i -XGET --compressed\
  -H "Date: $date" \
  -H "Content-Type: application/json; charset=utf-8" \
  -H "Authorization: curl $public_key:$signature" \
  "https://live.luigisbox.com/v1/content_export"


        
      
        
          <?php

// Using Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation)
require 'GuzzleHttp/autoload.php';

function digest($key, $method, $endpoint, $date) {
  $content_type = 'application/json; charset=utf-8';

  $data = "{$method}\n{$content_type}\n{$date}\n{$endpoint}";

  $signature = trim(base64_encode(hash_hmac('sha256', $data, $key, true)));

  return $signature;
}


$date = gmdate('D, d M Y H:i:s T');

$public_key = "<your-public-key>";
$private_key = "<your-private-key>";

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



Make sure that you are requesting only the fields that you want to export using hit_fields parameter. It is a much simpler and more efficient way than requesting all the fields and filtering only the relevant fields afterwards.


]]></content>
        </section>
        <section>
          <page>/indexing/feeds.html</page>
          <full_path>indexing/feeds</full_path>
          <title><![CDATA[Data Layout and Modeling Guide - Feeds]]></title>
          <url>/indexing/feeds.html#data-layout-and-modeling-guide-feeds</url>
          <content><![CDATA[Introduction


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
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <identity>product-123</identity>
    <title><![CDATA[Blue Cotton T-Shirt</title>
    <web_url>https://example.com/products/blue-tshirt</web_url>
  </item>
  <!-- more products -->
</items>

        
      
        
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


Avoid using tag attributes. Instead of <product id="123">... use <product><id>123</id></product>

Keep the structure as flat as possible. Nesting tags is ok, but don't use complex nesting if possible
In many cases, nesting is unavoidable and it's acceptable



Field naming: Name the attributes in a way that makes sense to you, there's no prescribed naming
convention



Common XML issues to avoid


Luigi's Box frequently encounters these problems when dealing with XML files. Avoiding them will make
the process much faster:



1. No encoding of special characters (e.g., &)



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG - Invalid XML -->
<title>Black & White</title>

<!-- ✓ CORRECT - Using entities -->
<title>Black &amp; White</title>

<!-- ✓ CORRECT - Using CDATA -->
<title><![CDATA[Black & White</title>

        
      
    
  



2. Double encoding using both CDATA and entities



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG - Double encoded, will display as "Black &amp; White" -->
<title><![CDATA[Black &amp; White</title>

<!-- ✓ CORRECT - Use either CDATA or entities, not both -->
<title><![CDATA[Black & White</title>
<!-- OR -->
<title>Black &amp; White</title>

        
      
    
  



3. HTML in descriptions



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✓ CORRECT - HTML tags inside CDATA -->
<description><![CDATA[A nice & comfortable shirt. It's ok to use <strong>html tags</strong> in description.</description>

        
      
    
  

Feed types and structure


Each of your searchable types must have a separate feed. Here's how to structure each type:


Product feeds


Product feeds use <items> or <products> as the root element:



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <!-- product attributes -->
  </item>
  <item>
    <!-- product attributes -->
  </item>
</items>

        
      
    
  

Category feeds


Category feeds use <categories> as the root element:



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<categories>
  <category>
    <!-- category attributes -->
  </category>
</categories>

        
      
    
  

Brand feeds


Brand feeds use <brands> as the root element:



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<brands>
  <brand>
    <!-- brand attributes -->
  </brand>
</brands>

        
      
    
  

Article feeds


Article feeds use <articles> as the root element:



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<articles>
  <article>
    <!-- article attributes -->
  </article>
</articles>

        
      
    
  

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
✗ Especially in <parameters> tags: "N. Size" is not valid (use "Size" instead)
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
<title><![CDATA[Black & Decker Drill</title>


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
<description><![CDATA[A comfortable <strong>cotton</strong> shirt.</description>


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
<price_eur>65 EUR</price_eur>


price_*_old
String

Original price in a specific currency before discount (e.g., price_eur_old, price_usd_old).
<price_eur_old>67.50 EUR</price_eur_old>


      



Multi-currency example:



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <price>$78.9</price>
<price_old>$81.9</price_old>
<price_eur>65 EUR</price_eur>
<price_eur_old>67.50 EUR</price_eur_old>
<price_czk>1,850 Kč</price_czk>

        
      
    
  

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

Numeric value strictly within <1, 15>, which encodes the availability of the product. The higher the number, the less available the product is. Takes precedence over availability if both are provided. For unavailable products, must be 15 with availability: 0.

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
        
      
      
      

      
    
  
  
    
      
        
          <availability>1</availability>
<availability_rank>3</availability_rank>
<availability_rank_text><![CDATA[In external warehouse / Ships within 5 days</availability_rank_text>

        
      
    
  

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

Relative profit margin of the product. Must be a float value between <0, 1> (e.g., 0.42 means 42% margin of product price). Used to prefer items with higher margin when sorting search results. If omitted, treated as if there is no margin.
0.42


      



Example:



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <boost>2</boost>
<introduced_at>2021-07-15</introduced_at>
<margin>0.42</margin>

        
      
    
  

Category and brand fields
      

        
Field Name
Type
Required
Description
Example


        
category
String

Product category with full hierarchy using pipe ( | ) delimiter. This exact category with hierarchy must appear in the category feed. If the product is in multiple categories, use the <category> tag multiple times. For XML, mark the primary category with primary="true" attribute. For JSON, the first element in the array is treated as primary.
<category primary="true"><![CDATA[Apparel | Men | Shirts</category>


brand
String

Product brand. This exact brand must appear in the brand feed.

Nike


      



  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          <category primary="true"><![CDATA[Apparel | Men | Shirts</category>
<category><![CDATA[Seasons | Summer | Shirts</category>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <item>
  <identity>NH7636A</identity>
  <title>Black Nike Shirt</title>
  <item_group_id>8272</item_group_id>
  <!-- other attributes -->
</item>
<item>
  <identity>NH7636B</identity>
  <title>White Nike Shirt</title>
  <item_group_id>8272</item_group_id>
  <!-- All variants must follow each other -->
</item>

        
      
    
  

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
        
      
      
      

      
    
  
  
    
      
        
          <geo_location>{"lat": 49.0448, "lon": 18.553}</geo_location>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <parameters>
  <param>
    <name><![CDATA[Size</name>
    <value><![CDATA[XS, M, L, XL</value>
  </param>
  <param>
    <name><![CDATA[Material</name>
    <value><![CDATA[Cotton (80%), Polyester (20%)</value>
  </param>
</parameters>

        
      
        
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

        
      
    
  

Complete feed examples
Product feed example

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <identity>NH757A</identity>
    <title><![CDATA[Black Nike Shirt</title>
    <web_url>https://example.org/2172-black-nike-shirt</web_url>

    <availability>1</availability>
    <availability_rank>3</availability_rank>
    <availability_rank_text><![CDATA[In external warehouse / Ships within 5 days</availability_rank_text>

    <category primary="true"><![CDATA[Apparel | Men | Shirts</category>
    <category><![CDATA[Seasons | Summer | Shirts</category>
    <brand><![CDATA[Nike</brand>

    <price>$78.9</price>
    <price_old>$81.9</price_old>
    <price_eur>65 EUR</price_eur>
    <price_eur_old>67.50 EUR</price_eur_old>

    <image_link_s>https://example.org/images/thumbs/100x100/2172.png</image_link_s>
    <image_link_m>https://example.org/images/thumbs/200x200/2172.png</image_link_m>
    <image_link_l>https://example.org/images/thumbs/600x600/2172.png</image_link_l>

    <description><![CDATA[A nice & comfortable shirt. It's ok to use <strong>html tags</strong> in description.</description>
    <labels><![CDATA[Summer sale, Free shipping</labels>

    <product_code>NK8277S</product_code>
    <ean>8288881881818</ean>
    <to_cart_id>2172</to_cart_id>

    <margin>0.42</margin>
    <boost>1</boost>
    <introduced_at>2021-07-15</introduced_at>

    <parameters>
      <param>
        <name><![CDATA[Size</name>
        <value><![CDATA[XS, M, L, XL</value>
      </param>
      <param>
        <name><![CDATA[Material</name>
        <value><![CDATA[Cotton (80%), Polyester (20%)</value>
      </param>
    </parameters>
  </item>
  <!-- more products -->
</items>

        
      
        
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

      "description": "A nice & comfortable shirt. It's ok to use <strong>html tags</strong> in description.",
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
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<categories>
  <category>
    <identity>1</identity>
    <name>Shirts</name>
    <web_url>https://example.org/categories/shirts</web_url>
  </category>
  <category>
    <identity>2</identity>
    <name>Blazers</name>
    <web_url>https://example.org/categories/blazers-men</web_url>
    <hierarchy>Apparel | Men</hierarchy>
    <image_url>https://example.org/images/categories/blazers.png</image_url>
  </category>
  <category>
    <identity>3</identity>
    <name>Blazers</name>
    <web_url>https://example.org/categories/blazers-women</web_url>
    <hierarchy>Apparel | Women</hierarchy>
    <image_url>https://example.org/images/categories/blazers-women.png</image_url>
  </category>
</categories>

        
      
        
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
  
    The feed must be flat, no nesting is allowed (no <category> nested in another <category> tag).
    If your categories are nested in a category tree, use the hierarchy tag to denote parent categories.
    
The name + hierarchy must match exactly with what you use in the product feed to ensure correct pairing.
  

    
  



Brand feed example

  
    
      
        
          xml
        
      
        
          json
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<brands>
  <brand>
    <identity>7</identity>
    <name>NiceShirts</name>
    <web_url>https://example.org/brands/nice-shirts</web_url>
    <image_url>https://example.org/images/brands/niceshirts-logo.png</image_url>
  </brand>
  <brand>
    <identity>8</identity>
    <name>Blue</name>
    <web_url>https://example.org/brands/blue</web_url>
  </brand>
</brands>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<articles>
  <article>
    <identity>37271</identity>
    <name>Lorem ipsum title of the blog post</name>
    <annotation>Short description, perex</annotation>
    <text>Full text of the article goes here...</text>
    <web_url>https://example.org/article/blog-post-lorem</web_url>
  </article>
  <article>
    <identity>37272</identity>
    <name>Another blog post title</name>
    <annotation>Another short description</annotation>
    <text>Full text of this article...</text>
    <web_url>https://example.org/article/blog-post-ipsum</web_url>
  </article>
</articles>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <item>
  <identity>white-tshirt-123</identity>
  <title><![CDATA[White T-shirt</title>
  <web_url>/products/white-tshirt</web_url>
  <!-- Full category path: Top-level | Parent | Leaf -->
  <category primary="true"><![CDATA[Apparel | Men | T-shirts</category>
</item>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <categories>
  <!-- Top-level category - no hierarchy -->
  <category>
    <identity>category-apparel</identity>
    <name>Apparel</name>
    <web_url>/categories/apparel</web_url>
  </category>

  <!-- Second-level category - hierarchy shows parent -->
  <category>
    <identity>category-men</identity>
    <name>Men</name>
    <web_url>/categories/apparel/men</web_url>
    <hierarchy>Apparel</hierarchy>
  </category>

  <!-- Third-level category - hierarchy shows full path to it -->
  <category>
    <identity>category-t-shirts</identity>
    <name>T-shirts</name>
    <web_url>/categories/apparel/men/t-shirts</web_url>
    <hierarchy>Apparel | Men</hierarchy>
  </category>
</categories>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <item>
  <identity>cheddar-cheese-456</identity>
  <title><![CDATA[Cheddar Cheese</title>
  <web_url>/products/cheddar-cheese</web_url>
  <category primary="true"><![CDATA[Dairy | Cow milk</category>
  <category><![CDATA[Wine | Snacks</category>
</item>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <categories>
  <category>
    <identity>category-dairy</identity>
    <name>Dairy</name>
    <web_url>/categories/dairy</web_url>
  </category>
  <category>
    <identity>category-cow-milk</identity>
    <name>Cow milk</name>
    <web_url>/categories/dairy/cow-milk</web_url>
    <hierarchy>Dairy</hierarchy>
  </category>
  <category>
    <identity>category-wine</identity>
    <name>Wine</name>
    <web_url>/categories/wine</web_url>
  </category>
  <category>
    <identity>category-snacks</identity>
    <name>Snacks</name>
    <web_url>/categories/wine/snacks</web_url>
    <hierarchy>Wine</hierarchy>
  </category>
</categories>

        
      
        
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
        
      
      
      

      
    
  
  
    
      
        
          <?xml version="1.0" encoding="UTF-8"?>
<items>
  <!-- First variant group -->
  <item>
    <identity>NH7636A</identity>
    <title>Black Nike Shirt</title>
    <web_url>https://example.org/2172-black-nike-shirt</web_url>
    <item_group_id>8272</item_group_id>
    <color>Black</color>
    <size>M</size>
    <availability>1</availability>
    <price>$45.00</price>
    <!-- other attributes -->
  </item>
  <item>
    <identity>NH7636B</identity>
    <title>White Nike Shirt</title>
    <web_url>https://example.org/2173-white-nike-shirt</web_url>
    <item_group_id>8272</item_group_id>
    <color>White</color>
    <size>M</size>
    <availability>1</availability>
    <price>$45.00</price>
  </item>
  <item>
    <identity>NH7636C</identity>
    <title>Red Nike Shirt</title>
    <web_url>https://example.org/2174-red-nike-shirt</web_url>
    <item_group_id>8272</item_group_id>
    <color>Red</color>
    <size>L</size>
    <availability>0</availability>
    <price>$45.00</price>
  </item>

  <!-- All variants with item_group_id=8272 must be listed together -->
  <!-- Now start a new variant group -->

  <item>
    <identity>NM2887A</identity>
    <title>Black Hoodie - Small</title>
    <web_url>https://example.org/2175-black-hoodie</web_url>
    <item_group_id>8273</item_group_id>
    <color>Black</color>
    <size>S</size>
    <availability>1</availability>
    <price>$65.00</price>
  </item>
  <item>
    <identity>NM2887B</identity>
    <title>Black Hoodie - Medium</title>
    <web_url>https://example.org/2176-black-hoodie-m</web_url>
    <item_group_id>8273</item_group_id>
    <color>Black</color>
    <size>M</size>
    <availability>1</availability>
    <price>$65.00</price>
  </item>
  <!-- more products/items -->
</items>

        
      
        
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



Common mistakes and how to avoid them
1. Category mismatch between feeds


Problem: Category in product feed doesn't match category feed exactly.



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG - Product feed -->
<category>Apparel | Men's | T-shirts</category>

<!-- Category feed -->
<category>
  <name>T-shirts</name>
  <hierarchy>Apparel | Men</hierarchy>
</category>
<!-- The "Men's" vs "Men" mismatch will break the pairing -->

<!-- ✓ CORRECT - Product feed -->
<category>Apparel | Men | T-shirts</category>

<!-- Category feed -->
<category>
  <name>T-shirts</name>
  <hierarchy>Apparel | Men</hierarchy>
</category>

        
      
    
  

2. Variants not listed consecutively

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG - Variants separated by other products -->
<item>
  <identity>shirt-red-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>
<item>
  <identity>different-product</identity>
  <item_group_id>other-456</item_group_id>
</item>
<item>
  <identity>shirt-blue-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>

<!-- ✓ CORRECT - All variants together -->
<item>
  <identity>shirt-red-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>
<item>
  <identity>shirt-blue-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>
<item>
  <identity>different-product</identity>
  <item_group_id>other-456</item_group_id>
</item>

        
      
    
  

3. Inconsistent data types


Problem: Sending different data types for the same field across products.



  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG - Mixing types -->
<item>
  <identity>prod-1</identity>
  <availability>1</availability>
  <margin>0.42</margin>
</item>
<item>
  <identity>prod-2</identity>
  <availability>yes</availability>  <!-- Should be 1 or 0 -->
  <margin>42%</margin>  <!-- Should be 0.42 -->
</item>

<!-- ✓ CORRECT - Consistent types -->
<item>
  <identity>prod-1</identity>
  <availability>1</availability>
  <margin>0.42</margin>
</item>
<item>
  <identity>prod-2</identity>
  <availability>1</availability>
  <margin>0.42</margin>
</item>

        
      
    
  

4. Using dots in parameter names

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG -->
<parameters>
  <param>
    <name>N. Size</name>  <!-- Dots are not allowed -->
    <value>M</value>
  </param>
</parameters>

<!-- ✓ CORRECT -->
<parameters>
  <param>
    <name>Size</name>
    <value>M</value>
  </param>
</parameters>

        
      
    
  

5. Incorrect availability_rank values

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG - Values outside allowed range -->
<availability_rank>20</availability_rank>  <!-- Max is 15 -->
<availability_rank>0</availability_rank>   <!-- Min is 1 -->

<!-- ✓ CORRECT -->
<availability_rank>1</availability_rank>   <!-- In stock -->
<availability_rank>7</availability_rank>   <!-- Ships in 7-14 days -->
<availability_rank>15</availability_rank>  <!-- Out of stock -->

        
      
    
  

6. Missing primary category marker

  
    
      
        
          xml
        
      
      
      

      
    
  
  
    
      
        
          <!-- ✗ WRONG - Multiple categories without primary marker in XML -->
<category>Apparel | Men | Shirts</category>
<category>Seasons | Summer | Shirts</category>

<!-- ✓ CORRECT - Primary category marked -->
<category primary="true">Apparel | Men | Shirts</category>
<category>Seasons | Summer | Shirts</category>

        
      
    
  

Troubleshooting
"My categories aren't showing up in search"


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




Wrap text in CDATA: <title><![CDATA[Black & White</title>

Or use entities: <title>Black &amp; White</title>

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

Product Listing Pages (PLP) - Category page search integration


]]></content>
        </section>
        <section>
          <page>/tutorials/recommender.html</page>
          <full_path>tutorials/recommender</full_path>
          <title><![CDATA[Recommender tutorial]]></title>
          <url>/tutorials/recommender.html#recommender-tutorial</url>
          <content><![CDATA[



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


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=<tracker_id>
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": "<transient_user_id>"
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


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=<tracker_id>
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": "<persistent_user_id>"
  }
]



        
      
    
  



Tips


user_id is the persistent user id. It must be the same user ID you are propagating in the dataLayer event






  

Batch multiple recommendations into a single API request
For cases where you need to request recommendations for several different models, it is more efficient to issue a single request. This will be typically useful for scenarios where you are rendering several recommender boxes on a single page.

By asking for several recommendations in a single request you will also automatically avoid duplicate recommendations.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=<tracker_id>
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": "<transient_user_id>"
  },
  {
    "item_ids": [],
    "recommendation_type": "last_seen",
    "recommender_client_identifier": "last_seen",
    "size": 6,
    "user_id": "<transient_user_id>"
  }
]



        
      
    
  



Tips

Note that the payload is an array, as you can ask for several recommendations in a single request.






  

Limit amount of data transferred
To limit the amount of data transferred between systems, specify the hit_fields attribute in the API request. It is an array of result properties which will be included in the API response. By using this, you can significantly reduce the amount of data transfer and increase performance.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          POST https://live.luigisbox.com/v1/recommend?tracker_id=<tracker_id>
[
  {
    "item_ids": ["PR-15553"],
    "recommendation_type": "item_detail_complements",
    "recommender_client_identifier": "item_detail_complements",
    "size": 4,
    "user_id": "<transient_user_id>",
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
      if (stepNumber <= curStep) {
        step.style.fontWeight = (stepNumber === curStep) ? 'bold' : 'normal';
        step.style.color = themeColor;
      } else {
        step.style.fontWeight = 'normal';
        step.style.color = 'gray';
      }
      if (checkIcon) {
        checkIcon.classList.toggle('d-none', stepNumber >= curStep);
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
});


]]></content>
        </section>
        <section>
          <page>/tutorials/plp.html</page>
          <full_path>tutorials/plp</full_path>
          <title><![CDATA[Product listing tutorial]]></title>
          <url>/tutorials/plp.html#product-listing-tutorial</url>
          <content><![CDATA[



Product listing integration
Product listing integration follows the same principles as the search integration. Follow the search tutorial for more details.

This tutorial only highlights the couple of deviations from search.






  

Product listing integration prerequisites
Before you begin the implementation, ensure that a valid pairing between products and categories exists. See the Pairing docs for more details.




  

PLP API request



  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?f[]=type:item
  &f[]=category_id:<category_id>
  &plp=category_id
  &facets=price_amount,category



        
      
    
  



Tips


f[]=type:item - each search must have exactly one main type which will be used to compute available filters, to provide pagination and to sort on. Use an explicit filter on type attribute to provide the main type.

f[]=category_id:<category_id> - you must provide a filter option to load the products specific to this particular product listing. Note that you don't have to use an explicit category_id attribute but you can filter on any attribute or a combination of attributes. You can also use the virtual category_path or all_categories_path attributes. See the PLP docs for more details

plp=category_id - This parameter indicated that this is a PLP request and is important for all the PLP customizations defined in the Luigi's Box application to work. The value of the plp attribute has to be set to the name of the attribute that is used to filter products for this specific Product listing.

facets=price_amount,category - the response will include breakdown of attribute values for attributes price_amount and category. This part will let you render filtering options.

user_id & client_id - refer to the search tutorial






  

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
      if (stepNumber <= curStep) {
        step.style.fontWeight = (stepNumber === curStep) ? 'bold' : 'normal';
        step.style.color = themeColor;
      } else {
        step.style.fontWeight = 'normal';
        step.style.color = 'gray';
      }
      if (checkIcon) {
        checkIcon.classList.toggle('d-none', stepNumber >= curStep);
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
});


]]></content>
        </section>
        <section>
          <page>/tutorials/autocomplete.html</page>
          <full_path>tutorials/autocomplete</full_path>
          <title><![CDATA[Autocomplete tutorial]]></title>
          <url>/tutorials/autocomplete.html#autocomplete-tutorial</url>
          <content><![CDATA[



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
  ?tracker_id=<tracker_id>


        
      
    
  



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
?tracker_id=<tracker_id>
&type=item:6,category:3,brand:3,query:3
&user_id=<transient_user_id>
&remove_fields=nested



        
      
    
  





type=item:6,category:3,brand:3,query:3 - list the object types you want to load and the sizes

user_id=<transient_user_id> - pass the value of the _lb cookie

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
  &type=item:7,category:3,brand:3,query:3
  &user_id=<transient_user_id>


        
      
    
  





q - pass the search phrase (value of the searchbox)

type=item:7,category:3,brand:3,query:3 - list the object types you want to load and the sizes

user_id=<transient_user_id> - pass the value of the _lb cookie






  

Render autocomplete/suggestions
The API response will include all the product data that you will use to render a popup or widget that shows the results.




  
    
      
        
          javascript
        
      
      
      

      
    
  
  
    
      
        
          {
  "hits": [
    {
      "url": "PR-15553",
      "attributes": {
        "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1774257_smart-piano-the-one-digital-piano.jpg",
        "title": "Smart <em>piano</em> The ONE <em>Digital</em> Piano",
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
        "title": "Kurzweil <em>Digital</em> <em>Piano</em>",
        "title.untouched": "Kurzweil Digital Piano",
        "price_amount": 890,
        "web_url": "/kurzweil-digital-piano/"
      },
      "type": "item"
    },
    {
      "url": "piano",
      "attributes": {
        "title": "<em>piano</em>",
        "title.untouched": "piano"
      },
      "type": "query"
    },
    {
      "url": "/digital-pianos/",
      "attributes": {
        "title": "<em>Digital</em> <em>Piano</em>s",
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
The API response will include <em> highlights in attributes.title. If you need access to the original title without highlight, use the attributes["title.untouched"] field.





  

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
When using the Autocomplete API to build the event, use the title.untouched attribute as the value for item_name as that includes the original title without highlights. If you use the title attribute, you will be reporting titles with <em> tags.






  

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
        "title": "<em>contact</em>",
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
?tracker_id=<tracker_id>
&type=item:6,category:3,brand:3,query:3
&user_id=<persistent_user_id>
&client_id=<transient_user_id>
&remove_fields=nested



        
      
    
  





user_id=<persistent_user_id> - pass the persistent user ID

client_id=<transient_user_id> - pass the value of the _lb cookie






  

Identified user starts typing
When the user types in a query into the searchbox, you will fire an API request to the autocomplete endpoint to fetch the suggestions for the popup, passing both transient and persistent user IDs.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/autocomplete/v2
  ?q=digital+piano
  &type=item:7,category:3,brand:3,query:3
  &user_id=<persistent_user_id>
  &client_id=<transient_user_id>


        
      
    
  





user_id=<persistent_user_id> - pass the persistent user ID

client_id=<transient_user_id> - pass the value of the _lb cookie






  

Limit amount of data transferred

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/autocomplete/v2
  ?q=digital+piano
  &type=item:7,category:3,brand:3,query:3
  &hit_fields=product_id,title,price,image_link
  &remove_fields=nested
  &user_id=<transient_user_id>


        
      
    
  


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
      if (stepNumber <= curStep) {
        step.style.fontWeight = (stepNumber === curStep) ? 'bold' : 'normal';
        step.style.color = themeColor;
      } else {
        step.style.fontWeight = 'normal';
        step.style.color = 'gray';
      }
      if (checkIcon) {
        checkIcon.classList.toggle('d-none', stepNumber >= curStep);
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
});


]]></content>
        </section>
        <section>
          <page>/tutorials/search.html</page>
          <full_path>tutorials/search</full_path>
          <title><![CDATA[Search tutorial]]></title>
          <url>/tutorials/search.html#search-tutorial</url>
          <content><![CDATA[



Search results page (SERP)
Search results page is typicaly rendered after the user presses the Enter key and provides the full search experience including filtering, sorting and pagination.






  

Search results page URL


Each search results page should have a shareable URL which when opened, renders the search results preserving the phrase (query), selected filters and sorting.

This will usually be a dedicated page at a location such as /search. Usually, the page will have a GET parameter such as q which will capture the user's phrase. Visiting this location will trigger the search flow.

When this search page is visited, make an API request to Luigi's Box Search endpoint.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &f[]=type:item
  &facets=price_amount,category
  &user_id=<transient_user_id>


        
      
    
  





q - pass the search phrase

f[]=type:item - each search must have exactly one main type which will be used to compute available filters, to provide pagination and to sort on. Use an explicit filter on type attribute to provide the main type. You can request more than one type in a single request using quicksearch_types which will be demonstrated in a later step.

facets=price_amount,category - the response will include breakdown of attribute values for attributes price_amount and category. This part will let you render filtering options.

user_id=<transient_user_id> - pass the value of the _lb cookie.






  

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
  "next_page": "https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:item&q=digital%20piano&page=2"
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
  "next_page": "https://live.luigisbox.com/search?tracker_id=&f[]=type:item&q=digital%20piano&facets=price_eur_amount,category&page=2"
}

        
      
    
  



(API response shortened for brevity)





  

Render sorting options
Use the sort API parameter to change the sorting. Note that when you request an explicit sorting, the results will be sorted by this attribute and no AI-based ranking will be used. 

To use the AI-based ranking, provide no sort parameter at all. If you pass the sort parameter, the results are simply ranked by that attribute and personalization and AI-based ranking is not used.

Also note that requesting an explicit sort may cause the number of results to vary. See the Knowledge base article for more details.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &f[]=type:item
  &facets=price_amount,category
  &sort=price_amount:desc
  &user_id=<transient_user_id>


        
      
    
  

Tips

When sorting on string attributes, the sort will respect the lexicographical ordering. Keep this in mind when attempting to sort over attributes that were indexed as text. This may be the case with price, as per Luigi's Box conventions it is usually indexed as text including the currency. This may lead to surprising ordering (e.g. "10 EUR", "100 EUR", "20 EUR"). To get correct ordering, use a numerical attribute. In case of price, this will be the automatically derived price_amount attribute.
Make sure to use no sort parameter if you want to get the AI-based ranking. Refer to the Standard ranking documentation to understand it in more detail. Note that the standard ranking will automatically consider availability and there's no need to sort by it explicitely.





  

Interacting with filters
When the user selects a filter, issue a new search API request using the f[] parameter to indicate the selected filter. The example request on this page serves the search results page in the case the user selected "Stage Pianos" in the "Category" facet. The value of the f[] attribute is always a colon separated pair - attribute:value.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &f[]=type:item
  &f[]=category:Stage+Pianos
  &facets=price_amount,category
  &user_id=<transient_user_id>


        
      
    
  



Notice the f[]=category=Stage+Pianos parameter which indicates the selected filter.





  

Interacting with numerical filters
When the user interacts with a numerical attribute, use a slightly different approach in the API request. The numeric attributes can be filtered using a range syntax.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &f[]=type:item
  &f[]=price_eur_amount:730.0|11590.0
  &facets=price_amount,category
  &user_id=<transient_user_id>


        
      
    
  



Notice the f[]=price_eur_amount:730.0|11590.0 parameter which indicates the selected filter. This will cause the API to return only products with price_amount_eur attribute in the interval 730 ‒ 11590.





  

Filtering on several attributes
You can filter on several values and several attributes in a single request. Simply add as many f[] parameters as necessary.

Note the implicit semantics: filtering on different values on a single attribute is a bool OR operation and there's a bool AND across different attributes.




  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &f[]=type:item
  &f[]=category:Stage+Pianos
  &f[]=category:Digital+Pianos
  &f[]=price_amount:730.0|11590.0
  &facets=price_amount,category
  &user_id=<transient_user_id>


        
      
    
  



Notice the various f[] parameters which indicate the selected filter. This specific combination will be interpreted as (category: Stage Pianos OR Digital Pianos) AND (price_amount within 730 - 11590).





  

Rendering results for several types (products, categories, brands)
It is a standard practice to include results for more than one type on the search results page. From the perspective of the user experience, there's always one main type that is used for filtering, sorting and pagination. The other types (called quicksearch types) are provided without pagination or filtering option (but you can specify sorting).



To request quicksearch types, add a quicksearch_types parameter.


  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &f[]=type:item
  &quicksearch_types=category:6,brand:3
  &facets=price_amount,category
  &user_id=<transient_user_id>


        
      
    
  




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
  &f[]=type:item
  &facets=price_amount,category
  &user_id=<persistent_user_id>
  &client_id=<transient_user_id>



        
      
    
  





user_id=<persistent_user_id> - pass the persistent user ID

client_id=<transient_user_id> - pass the value of the _lb cookie






  

Limit amount of data transferred

  
    
      
        
          
        
      
      
      

      
    
  
  
    
      
        
          GET https://live.luigisbox.com/search
  ?q=digital+piano
  &f[]=type:item
  &facets=price_amount,category
  &hit_fields=product_id,title,price,image_link
  &remove_fields=nested
  &user_id=<transient_user_id>


        
      
    
  


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
      if (stepNumber <= curStep) {
        step.style.fontWeight = (stepNumber === curStep) ? 'bold' : 'normal';
        step.style.color = themeColor;
      } else {
        step.style.fontWeight = 'normal';
        step.style.color = 'gray';
      }
      if (checkIcon) {
        checkIcon.classList.toggle('d-none', stepNumber >= curStep);
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
});


]]></content>
        </section>
        <section>
          <page>/examples.html</page>
          <full_path>examples</full_path>
          <title><![CDATA[Examples]]></title>
          <url>/examples.html#examples</url>
          <content><![CDATA[


  
    
      
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
        Coming soon 🚧
      
    
  


]]></content>
        </section>
        <section>
          <page>/guidelines.html</page>
          <full_path>guidelines</full_path>
          <title><![CDATA[Guidelines]]></title>
          <url>/guidelines.html#guidelines</url>
          <content><![CDATA[

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
            
            
            Read the docs →
          
        
      
  

]]></content>
        </section>
</root>
