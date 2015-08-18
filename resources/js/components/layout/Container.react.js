let BaseComponent = require('../BaseComponent.react');
let FluxTweetApp = require('../FluxTweetApp.react');

class Container extends BaseComponent {
    constructor(props){
        super(props);
        this.state = {
            slideMenuOpened: false
        }
    }

    render(){
        let container = (<div className="container">
            <FluxTweetApp />
        </div>);
        if (this.state.slideMenuOpened) {
            return (
                <div id="wrapper">
                    { container }
                </div>
            )
        } else {
            console.log('wtf', container);
            return (
                <div></div>
            )
        }
    }
}

module.exports = Container;