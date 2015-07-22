window.React = require('react');
window.$ = require('jquery');

var TweetAPI = require('./utils/TweetAPI');
var FluxTweetApp = require('./components/FluxTweetApp.react');


TweetAPI.getTweetData('/api/statuses/user_timeline', {
    count: 10,
    screen_name: 'imtiredofthinki'
});

console.log('iam working now');
// Render FluxCartApp Controller View
React.render(
    <FluxTweetApp />,
    document.getElementById('flux-tweets')
);