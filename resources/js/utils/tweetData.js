var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {

    getTweetData: function(url, params) {
        $.get(url, params, function(data){
            let tweets = JSON.parse(data);
            FluxTweetlistActions.receiveTweets(tweets);
        });
    }
};