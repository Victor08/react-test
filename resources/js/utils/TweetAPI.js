
var FluxTweetlistActions = require('../actions/FluxTweetlistActions');

module.exports = {

    getTweetData: function(url, params) {
        $.get(url, params, function(data){
            if (data.status === 'OK'){
                FluxTweetlistActions.receiveTweets(data.tweets);
            }
        });
    }
};