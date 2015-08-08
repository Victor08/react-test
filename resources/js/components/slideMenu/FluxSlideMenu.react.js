"use strict";
let SlideMenuStore = require('../../stores/SlideMenuStore');
let FluxSlideMenuLink = require('./FluxSlideMenuLink.react');
let BaseComponent = require('../BaseComponent.react');
//let Body = require('../layout/Body.react');
let FluxLayoutActions = require('../../actions/FluxLayoutActions');

class FluxSlideMenu extends BaseComponent {
    constructor(props) {
        super(props);
        this._bind('_onChange', 'render');
        this.state = { items: SlideMenuStore.getItems(), selected: '0' }
    }

    componentDidMount(){
        SlideMenuStore.addChangeListener(this._onChange);
    }

    wrapContainer(){
        FluxLayoutActions.toggleContentWrap();
    }

    _onChange(){
        this.setState({
            items: SlideMenuStore.getItems(),
            selected: SlideMenuStore.getSelected()
        })
    }

    render() {
        console.log('rendering slide menu');
        var that = this;
        let items = [];

        _.each(this.state.items, function(item, key) {
            items.push(
                <FluxSlideMenuLink selected={item.id == that.state.selected ? true : false} href={ item.href } title={ item.title } />
            )
        });

        return (
            <ul className="nav nav-pills nav-stacked">
                <li><a className="btn btn-info" onClick={this.wrapContainer}>wrap with wrapper</a></li>
                {items}
            </ul>
        )
    }
}

module.exports = FluxSlideMenu;