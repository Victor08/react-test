window.React = require('react');
window.$ = require('jquery');
window._ = require('lodash');
//var FluxTweetApp = require('./components/FluxTweetApp.react');
let Body = require('./components/layout/Body.react');

var LayoutApi = require('./utils/LayoutApi');
var TweetApi = require('./utils/TweetAPI');

LayoutApi.getMenuItems();
TweetApi.loadTweets();
console.log('fdsdsdfsdffdsl');
// Render FluxCartApp Controller View
React.render(
    <Body/>,
    document.getElementById('root-element')
);
