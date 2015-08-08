"use strict";
let BaseComponent = require('../BaseComponent.react');
let FluxTweetApp = require('../FluxTweetApp.react');

class Container extends BaseComponent {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <FluxTweetApp/>
            </div>
        )
    }
}

module.exports = Container;