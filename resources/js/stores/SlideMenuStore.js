var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxSlideMenuConstants = require('../constants/FluxSlideMenuConstants');

let _items = {};    // the object of menu items
let _visible;       // bool, reflecting menu visibility
let _selected = 0;      // selected item id

function switchVisibility(bool) {
    if (bool) {
        _visible = true;
        return true;
    } else {
        _visible = false;
        return false;
    }
}

function setItems(items) {
    _items = items;
}

function setSelectedItem(id) {
    _selected = id;
}

var SlideMenuStore = _.extend({}, EventEmitter.prototype, {


    getItems: function(){
        return _items;
    },

    getSelected: function(){
        return _selected;
    },

    getVisible: function(){
        return _visible;
    },

    emitChange: function(){
        this.emit('change');
    },

    addChangeListener: function(callback) {
        //console.log('adding change listeneer to', this, 'func', callback);
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register((payload) => {
    let action = payload.action;

    switch(action.actionType) {
        case FluxSlideMenuConstants.MENU_TOGGLE :
            switchVisibility(action.data);
            break;

        case FluxSlideMenuConstants.SET_SELECTED:
            setSelectedItem(action.data);
            break;

        case FluxSlideMenuConstants.RECEIVE_ITEMS:
            setItems(action.data);
            break;

        default :
            return true;
    }

    SlideMenuStore.emitChange();
    return true;
});

module.exports = SlideMenuStore;