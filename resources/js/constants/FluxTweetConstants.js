var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
    TWEET_ADD: null,       // Adds item to cart
    TWEET_REMOVE: null,    // Remove item from cart
    TWEETS_VISIBLE: null,   // Shows or hides the cart
    SET_SELECTED: null,   // Selects a product option
    RECEIVE_DATA: null    // Loads our data
});