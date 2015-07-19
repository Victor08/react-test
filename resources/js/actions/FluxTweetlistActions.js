var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxTweetConstants = require('../constants/FluxTweetConstants');

// Define actions object
var FluxTweetActions = {

    // Receive inital product data
    receiveTweets: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.RECEIVE_DATA,
            data: data
        })
    },

    // Set currently selected product variation
    addTweet: function(index) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.TWEET_ADD,
            data: index
        })
    },

    removeTweet: function(index) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.TWEET_REMOVE,
            data: index
        })
    }

};

module.exports = FluxTweetActions;