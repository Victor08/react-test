let BaseComponent = require('../BaseComponent.react');
let FluxTweetApp = require('../FluxTweetApp.react');
let NavigationBar = require('../layout/NavigationBar.react');
let SlideMenuStore = require('../../stores/SlideMenuStore');
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Container extends BaseComponent {
    constructor(props){
        super(props);
        this._bind('_onChange');
        this.state = {
            wrapped: SlideMenuStore.getVisible()
        };
        SlideMenuStore.addChangeListener(this._onChange);
    }

    _onChange(){
        this.setState({
            wrapped: SlideMenuStore.getVisible()
        })
    }

    render(){
        let container = (<div className="container">
            <NavigationBar/>
            <FluxTweetApp />
        </div>);
        if (this.state.wrapped) {
            return (
                <ReactCSSTransitionGroup transitionName="wrapper" transitionAppear="true">
                    <div id="wrapper">
                    { container }
                    </div>
                </ReactCSSTransitionGroup>
            );
        }
        return (container);
    }
}

module.exports = Container;