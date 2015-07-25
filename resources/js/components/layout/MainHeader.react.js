'strict mode'
var React = require('react');

class MainHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: props.text };
    }

    setText(text) {
        this.setState({text: text});
    }

    render() {
        return (
            <div className="page-header">
                <h2>{ this.state.text }</h2>
            </div>
        )
    }

}

module.exports = MainHeader;