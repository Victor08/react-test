"use strict";
let BaseComponent = require('../BaseComponent.react');
let Container = require('./Container.react');

class Wrapper extends BaseComponent {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="wrapper">
                <Container/>
            </div>
        )
    }
}

module.exports = Wrapper;