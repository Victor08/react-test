let SlideMenuStore = require('../../stores/SlideMenuStore');
let FluxSlideMenuLink = require('./FluxSlideMenuLink.react');

class FluxSlideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: props.items, selected: props.selected }
    }

    componentDidMount(){
        SlideMenuStore.addChangeListener(this._onChange);
    }

    _onChange(){
        this.setState({
            items: SlideMenuStore.getItems(),
            selected: SlideMenuStore.getSelected()
        })
    }

    render() {
        let items = [];

        _.each(this.state.items, function(item, key){
            items.push(
                <FluxSlideMenuLink selected={item.id === this.state.selected ? true : false} href={ item.href } title={ item.title } />
            )
        });

        return (
            <ul className="nav nav-stacked">
                {items}
            </ul>

        )
    }
}

module.exports = FluxSlideMenu;