var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxTweetConstants = require('../constants/FluxTweetConstants');

// Define actions object
var FluxTweetActions = {

    loadTweets: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.LOAD_TWEETS,
                data: data
        })
    },

    // Receive inital product data
    receiveTweets: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.RECEIVE_DATA,
            data: data
        })
    },

    // Set currently selected product variation
    addTweet: function(text) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.TWEET_ADD,
            data: text
        })
    },

    addedTweet: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.TWEET_ADDED,
            data: data
        })
    },

    removeTweet: function(id) {
        AppDispatcher.handleAction({
            actionType: FluxTweetConstants.TWEET_REMOVE,
            data: id
        })
    }

};

module.exports = FluxTweetActions;