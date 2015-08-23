let BaseComponent = require('../BaseComponent.react');
let $ = require('jquery');
let SlideMenuToggleBtn = require('../slideMenu/FluxToggleButton.react');

class NavigationBar extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-12">
                    <SlideMenuToggleBtn/>
                </div>
            </div>
        )
    }
}

module.exports = NavigationBar;