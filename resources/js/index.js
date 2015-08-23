window.React = require('react/addons');
window.$ = require('jquery');
window._ = require('lodash');
//let FluxTweetApp = require('./components/FluxTweetApp.react');
//let Root = require('./components/layout/Root');
let LayoutApi = require('./utils/LayoutApi');
let TweetApi = require('./utils/TweetAPI');
let Container = require('./components/layout/Container.react');
let SlideMenu = require('./components/slideMenu/FluxSlideMenu.react');

LayoutApi.getMenuItems();
TweetApi.loadTweets();

// Render FluxCartApp Controller View
React.render(
    <div>
        <SlideMenu/>
        <Container/>
    </div>
    ,
    document.getElementById('flux-tweets')
);

