let SlideMenuStore = require('../../stores/SlideMenuStore');
let FluxSlideMenuLink = require('./FluxSlideMenuLink.react');
let BaseComponent = require('../BaseComponent.react');

class FluxSlideMenu extends BaseComponent {
    constructor(props) {
        super(props);
        this._bind('_onChange');
        this.state = { items: props.items, selected: props.selected }
    }

    componentDidMount(){
        SlideMenuStore.addChangeListener(this._onChange);
    }

    _onChange(){
        console.log('now items are', SlideMenuStore.getItems());
        this.setState({
            items: SlideMenuStore.getItems(),
            selected: SlideMenuStore.getSelected()
        })
        console.log('this state', this.state);
    }

    render() {
        let items = [];

        _.each(this.state.items, (item, key) => {
            items.push(
                <FluxSlideMenuLink selected={item.id === this.state.selected ? true : false} href={ item.href } title={ item.title } />
            )
        });
        console.log('items fff', items);

        return (
            <ul className="nav nav-stacked">
                {items}
            </ul>

        )
    }
}

module.exports = FluxSlideMenu;