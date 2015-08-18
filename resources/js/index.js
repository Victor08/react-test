window.React = require('react');
window.$ = require('jquery');
window._ = require('lodash');
//let FluxTweetApp = require('./components/FluxTweetApp.react');
let Root = require('./components/layout/Root');
let LayoutApi = require('./utils/LayoutApi');
let TweetApi = require('./utils/TweetAPI');

LayoutApi.getMenuItems();
TweetApi.loadTweets();

// Render FluxCartApp Controller View
React.render(
    <Root/>
    ,
    document.getElementById('flux-tweets')
);

