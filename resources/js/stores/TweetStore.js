var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxTweetConstants = require('../constants/FluxTweetConstants');

var _tweets = {};

function loadTweetsData(data){
    _tweets = data;
}

function removeTweet(key){
    delete _tweets[key];
}

function showNewTweet(newTweet){
    var alteredTweets = {};
    _.transform(_tweets, function prependTweets(acc, val, key){
        acc[Number(key) + 1] = val;
    }, alteredTweets );
    alteredTweets[0] = newTweet;
    _tweets = alteredTweets;
}

var TweetStore = _.extend({}, EventEmitter.prototype, {

    getTweets: function(){
        return _tweets;
    },

    emitChange: function(){
        this.emit('change');
    },

    addChangeListener: function(callback) {
        //console.log('adding change listeneer to', this, 'func', callback);
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
            loadTweetsData(action.data.tweets);
            break;

        case FluxTweetConstants.TWEET_ADDED:
            showNewTweet(action.data.tweets);
            break;

        case FluxTweetConstants.TWEET_REMOVE:
            removeTweet(action.data);
            break;

        default:
            return true;
    }

    // If action was responded to, emit change event
    TweetStore.emitChange();

    return true;

});

module.exports = TweetStore;