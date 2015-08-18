let Container = require ('./Container.react');
let FluxSlideMenu = require('../slideMenu/FluxSlideMenu.react');
let BaseComponent = require('../BaseComponent.react');
let $ = require('jquery');

class Root extends BaseComponent {
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <body>
                <FluxSlideMenu/>
                <Container/>
            </body>
        )
    }
}

module.exports = Root;