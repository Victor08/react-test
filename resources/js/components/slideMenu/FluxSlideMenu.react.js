let SlideMenuStore = require('../../stores/SlideMenuStore');
let FluxSlideMenuLink = require('./FluxSlideMenuLink.react');
let BaseComponent = require('../BaseComponent.react');

class FluxSlideMenu extends BaseComponent {
    constructor(props) {
        super(props);
        this._bind('_onChange', 'render');
        this.state = {
            items: SlideMenuStore.getItems(),
            selected: '0',
            visible: SlideMenuStore.getVisible()
        }
    }

    componentDidMount(){
        SlideMenuStore.addChangeListener(this._onChange);
    }

    _onChange(){
        this.setState({
            items: SlideMenuStore.getItems(),
            selected: SlideMenuStore.getSelected(),
            visible: SlideMenuStore.getVisible()
        })
    }

    render() {

        let items = []; // menu items to render
        let classes = ''; // string of css classes for slide menu div

        this.state.visible ? classes += 'slide-menu-shown' : false;

        _.each(this.state.items, function(item, key) {
            items.push(
                <FluxSlideMenuLink selected={item.id == this.state.selected ? true : false} href={ item.href } title={ item.title } />
            )
        }.bind(this));

        return (
            <div id="slide-menu" className={classes}>
                <ul className="nav nav-pills nav-stacked">
                    {items}
                </ul>
            </div>
        )
    }
}

module.exports = FluxSlideMenu;