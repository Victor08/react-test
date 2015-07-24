window.React = require('react');
window.$ = require('jquery');
window._ = require('lodash');
var FluxTweetApp = require('./components/FluxTweetApp.react');

// Render FluxCartApp Controller View
React.render(
    <FluxTweetApp />,
    document.getElementById('flux-tweets')
);