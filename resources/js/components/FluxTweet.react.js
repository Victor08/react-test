var React = require('react');
var TweetApi = require('../utils/TweetAPI');


var FluxTweet = React.createClass({

    removeTweet: function(){
        TweetApi.removeTweet(this.props.tweetid, this.props.storeKey);
    },

    render: function(){
        return (
            <div className="row">
                <div className="col-lg-6 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                { this.props.name } { this.props.date }
                                <button className="btn btn-danger pull-right" onClick={ this.removeTweet }><i className="glyphicon glyphicon-remove"></i></button>
                            </h4>
                        </div>
                        <div className="panel-body">
                            {this.props.text}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = FluxTweet;