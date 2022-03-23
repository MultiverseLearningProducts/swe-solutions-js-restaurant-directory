# Restaurant directory

Let's use our restaurant API to create a front end!

1. With [semantic HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) in mind, let's start writing the markup for our front end. You can use the [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to help you choose the most semantic elements.
2. Can you start adding some CSS to style your HTML? You can design it however you want! You might find these references helpful: [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) and [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).
3. Inside a JavaScript module (`data.js`), can you fetch the data from your API, and `export` it so it's available to your other JavaScript files (`index.js` and `restaurant.js`)? You might find this helpful: [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
4. Now that you have your API data available to your `index.js` file, can you use it to populate the HTML for the index page?
5. Using the API data you exported from your `data.js` file, can you populate your `restaurant.html` page with the data for a particular restaurant? You'll need to get the restaurant ID from the query string in the URL.
6. Can you use [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize your API data and protect your users from [XSS attacks](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)? Since we're using ES modules, you'll need the `purify.es.js` version. You can either download it or serve it from a CDN like [jsDelivr](https://www.jsdelivr.com/package/npm/dompurify?path=dist&tab=collection).
