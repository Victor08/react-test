let BaseComponent = require('../BaseComponent.react');
let FluxTweetApp = require('../FluxTweetApp.react');
let NavigationBar = require('../layout/NavigationBar.react');
let SlideMenuStore = require('../../stores/SlideMenuStore');
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let SlideMenuActions = require('../../actions/FluxSlideMenuActions');
(require("react-tap-event-plugin"))(); // injecting tap event plugin

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

    _closeMenu(){
        console.log('close menu');
        SlideMenuActions.toggleMenu(false);
    }

    // adjusts css of html and body if offcanvas menu is visible
    _adjustCssOnWrapped(flag){
        if (flag) {
            $('html').css({'overflow': 'hidden'});
            $('body').css({'overflow': 'hidden'});
        } else {
            $('html').css({'overflow': 'auto'});
            $('body').css({'overflow': 'visible'});
        }
    }

    render(){
        this._adjustCssOnWrapped(false);
        let container = (<div className="container">
            <NavigationBar/>
            <FluxTweetApp />
        </div>);
        if (this.state.wrapped) {
            this._adjustCssOnWrapped(true);
            return (
                <ReactCSSTransitionGroup transitionName="wrapper" transitionAppear="true">
                    <div id="wrapper">
                        <div id="overlay" onClick={this._closeMenu} onTouchTap={this._closeMenu}></div>
                        { container }
                    </div>
                </ReactCSSTransitionGroup>
            );
        }
        return (container);
    }
}

module.exports = Container;