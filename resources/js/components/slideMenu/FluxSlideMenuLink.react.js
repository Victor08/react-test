let SlideMenuActions = require('../../actions/FluxSlideMenuActions');

class FluxSlideMenuLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, title: props.title, href: props.href, selected: props.selected }
    }

    selectItem(){
        SlideMenuActions.selectItem(this.state.id);
    }

    render(){
        return (
            <li className={ this.state.selected ? 'active' : 'nofing' }>
                <a href={ this.state.href } onСlick={this.selectItem}>{ this.state.title }</a>
            </li>
        )
    }

}

module.exports = FluxSlideMenuLink;