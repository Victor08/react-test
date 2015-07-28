var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxSlideMenuConstants = require('../constants/FluxSlideMenuConstants');

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
    },

    receiveItems: function(items) {
        AppDispatcher.handleAction(({
            actionType: FluxSlideMenuConstants.RECEIVE_ITEMS,
            data: items
        }))
    }

};

module.exports = FluxSlideMenuActions;