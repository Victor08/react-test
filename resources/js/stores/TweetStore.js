var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxTweetConstants = require('../constants/FluxTweetConstants');
var TweetAPI = require('../utils/TweetAPI');

var _ = require('lodash');

var _tweets = {};

function loadTweetsData(data){
    _tweets = data;
    console.log('now tweets in store', _tweets);
}


function removeTweet(id){
   TweetAPI.removeTweet(id);
}

function showNewTweet(newTweet){
    var alteredTweets = {};
    _.transform(_tweets, function prependTweets(acc, val, key){
        acc[key + 1] = val;
    }, alteredTweets );
    alteredTweets[0] = newTweet;
    _tweets = alteredTweets;
}

function getTweets() {

}

var TweetStore = _.extend({}, EventEmitter.prototype, {

    getTweets: function(){
        return _tweets;
    },

    emitChange: function(){
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType) {

        // Respond to RECEIVE_DATA action
        case FluxTweetConstants.RECEIVE_DATA:
            loadTweetsData(action.data);
            break;

        case FluxTweetConstants.TWEET_ADD:
            showNewTweet(action.data.tweets);
            break;

        case FluxTweetConstants.TWEET_REMOVE:

        default:
            return true;
    }

    // If action was responded to, emit change event
    TweetStore.emitChange();

    return true;

});

module.exports = TweetStore;