window.React = require('react');
window.$ = require('jquery');
window._ = require('lodash');
var FluxTweetApp = require('./components/FluxTweetApp.react');

var LayoutApi = require('./utils/LayoutApi');
var TweetApi = require('./utils/TweetAPI');

LayoutApi.getMenuItems();
TweetApi.loadTweets();

// Render FluxCartApp Controller View
React.render(
    <FluxTweetApp />,
    document.getElementById('flux-tweets')
);