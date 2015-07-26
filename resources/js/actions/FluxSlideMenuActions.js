var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxSlideMenuConstants = require('../constants/FluxTweetConstants');

let FluxSlideMenuActions = {

    toggleMenu: function(visibility){
        AppDispatcher.handleAction({
            actionType: FluxSlideMenuConstants.MENU_TOGGLE,
            data: visibility
        })
    },

    selectItem: function(itemId) {
        AppDispatcher.handleAction({
            actionType: FluxSlideMenuConstants.SET_SELECTED,
            data: itemId
        })
    }

};


module.exports = FluxSlideMenuActions;