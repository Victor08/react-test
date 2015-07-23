var React = require('react');
var TweetStore = require('../stores/TweetStore');
var FluxTweetInput = require('./FluxTweetInput.react');
var FluxTweet = require('./FluxTweet.react');


function getTweetsState() {
    return {
        tweets: TweetStore.getTweets()
    };
}

var FluxTweetApp = React.createClass({
    getInitialState: function(){
        return getTweetsState();
    },

    componentDidMount: function(){
        TweetStore.addChangeListener(this._onChange);
    },

    render: function() {
        var tweets = [];
        _.each(this.state.tweets, function(tweet, key){
             tweets.push(<FluxTweet name={ tweet.user.name } text={ tweet.text } date={ tweet.created_at } />)
        });

        return (
            <div>
                <FluxTweetInput/>
                { tweets }
            </div>
        )
    },

    _onChange: function() {
        this.setState(getTweetsState());
    }
});

module.exports = FluxTweetApp;