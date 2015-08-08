"use strict";
let BaseComponent = require('../BaseComponent.react');
let Container = require('./Container.react');
let Wrapper = require('./Wrapper.react');
let FluxSlideMenu = require('../slideMenu/FluxSlideMenu.react');
let LayoutStore = require('../../stores/LayoutStore');

class Body extends BaseComponent {
    constructor(props){
        super(props);
        this._bind('toggleContainerWrap', '_onChange');
        LayoutStore.addChangeListener(this._onChange);
        this.state = {
            wrapped: false
        }
    }

    _onChange() {
        this.setState({
            wrapped: LayoutStore.getWrapped()
        })
    }

    toggleContainerWrap() {
        this.setState({
            wrapped: (this.state.wrapped ? false : true)
        })
    }

    render(){

        let container = this.state.wrapped ? <Wrapper/> : <Container/>

        return(
            <div id="body-div">
                <FluxSlideMenu/>
                {container}
            </div>
        )
    }
}

module.exports = Body;