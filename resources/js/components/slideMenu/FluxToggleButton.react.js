
let BaseComponent = require('../BaseComponent.react');
let $ = require('jquery');
let SlideMenuActions = require('../../actions/FluxSlideMenuActions');

class ToggleButton extends BaseComponent {
    constructor(props){
        super(props);
        this._bind('toggleMenu');
    }

    toggleMenu() {
        SlideMenuActions.toggleMenu();
    }

    render() {
        return(
            <button type="button" className="btn btn-info" onClick={this.toggleMenu}>
                <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
        )
    }
}

module.exports = ToggleButton;