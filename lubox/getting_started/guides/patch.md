```javascript
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
    "identity": "product-001",
    "type": "item",
    "fields": {
      "description": "The latest and greatest product from CoolBrand, now with more awesome!",
    }
  }
];

const requestBody = {objects: productData};

const httpMethod = 'PATCH';
const contentType = 'application/json; charset=utf-8';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, currentDate, contentType);
const authorizationHeader = `ApiAuth ${YOUR_PUBLIC_KEY}:${signature}`;

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
  if (response.status === 200 && responseBody.ok_count && responseBody.ok_count > 0) {
    console.log("Product successfully indexed:", JSON.stringify(responseBody, null, 2));
  } else {
    console.error(`Error indexing product: HTTP Status ${response.status}, Response: ${JSON.stringify(responseBody)}`);
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});
```

```php

```