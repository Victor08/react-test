var React = require('react');
var TweetStore = require('../stores/TweetStore');
var FluxTweetInput = require('./FluxTweetInput.react');
var FluxTweet = require('./FluxTweet.react');
var TweetApi = require('../utils/TweetAPI');
var MainHeader = require('./layout/MainHeader.react');


function getTweetsState() {
    console.log('tw state', TweetStore.getTweets());
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
        TweetApi.loadTweets();
    },

    render: function() {
        var tweets = [];
        _.each(this.state.tweets, function(tweet, key){
            tweets.push(<FluxTweet name={ tweet.user.name } text={ tweet.text } date={ tweet.created_at } tweetid={ tweet.id_str } storeKey={ key } />)
        });

        return (
            <div className="row">
                <div className="col-sm-12">
                    <MainHeader text="wake up neo"/>
                    <FluxTweetInput/>
                { tweets }
                </div>
            </div>
        )
    },

    _onChange: function() {
        this.setState(getTweetsState());
    }
});

module.exports = FluxTweetApp;