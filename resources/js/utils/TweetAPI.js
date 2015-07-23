
var FluxTweetlistActions = require('../actions/FluxTweetlistActions');

module.exports = {

    getTweetData: function(url, params) {
        $.get(url, params, function(data){
            if (data.status === 'OK'){
                FluxTweetlistActions.receiveTweets(data.tweets);
            }
        });
    },

    postNewTweet: function(text){
        $.get('api/statuses/update', {status: text}, function(data){
            if (data.status === 'OK') {
                FluxTweetlistActions.addedTweet(data);
            }
        })
    },

    loadTweets: function() {
        $.get('/api/statuses/user_timeline', {count: 10, screen_name: 'imtiredofthinki'}, function(data){
            if (data.status === 'OK') {
                FluxTweetlistActions.loadTweets(data);
            }
        })
    },

    removeTweet: function (id){
        $.get('/api/statuses/destroy/' + id, {}, function(data){
            if (data.status === 'OK') {
                FluxTweetlistActions.removeTweet(data.tweet.id);
            }
        })
    }

};