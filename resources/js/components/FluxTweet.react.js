var React = require('react');


var FluxTweet = React.createClass({

    componentDidMount: function() {
        var that = this;
        setTimeout(function(){
            console.log('this tweets', that.props.tweets)
        }, 4000);
    },

    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">{ this.props.name } { this.props.date }</h4>
                </div>
                <div className="panel-body">
                {this.props.text}
                </div>
            </div>
        )
    }

});

module.exports = FluxTweet;