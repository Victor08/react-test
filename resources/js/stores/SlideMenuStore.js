let _ = require('lodash');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let FluxSlideMenuConstants = require('../constants/FluxSlideMenuConstants');

let _items = {};    // the object of menu items
let _visible;       // bool, reflecting menu visibility
let _selected = 0;      // selected item id

function switchVisibility(bool) {
    // if no payload, just toggle _visible
    if (_.isUndefined(bool)){
        if (_visible) {
            _visible = false;
            return false;
        } else {
            _visible = true;
            return true;
        }
    }
    // if payload is supplied, make sure to set certain visibility
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

let SlideMenuStore = _.extend({}, EventEmitter.prototype, {

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

    emitCustomEvent: function(event){
        this.emit(event);
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    addCustomEventListener: function(event, callback) {
        this.on('event', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
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