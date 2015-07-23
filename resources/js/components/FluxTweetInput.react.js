var React = require('react');
var FluxTweetActions = require('../actions/FluxTweetlistActions');


var FluxTweetInput = React.createClass({
    getInitialState: function(){
        return {
            newTweet: 'wake up Neo'
        }
    },

    postTweet: function(){
        FluxTweetActions.addTweet(this.state.newTweet)
    },

    setNewTweet: function(e){
        console.log(e.target.value);
        this.setState({
            newTweet: e.target.value
        });
    },

    render: function(){
        return (
            <div className="form-inline">
                <div class="form-group">
                    <input className="form-control" type="text" onChange={this.setNewTweet}/>
                    <button className="btn btn-success" type="button" onClick={this.postTweet}>tweet them!</button>
                </div>
            </div>
        )
    }
});

module.exports = FluxTweetInput;