var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxSlideMenuConstants = require('../constants/FluxTweetConstants');

let _items = {};    // the object of menu items
let _visible;       // bool, reflecting menu visibility
let _selected;      // selected item id

function switchVisibility(bool) {
    if (bool) {
        _visible = true;
        return true;
    } else {
        _visible = false;
        return false;
    }
}

function setSelectedItem(id) {
    _selected = id;
}

class SliderMenuStore extends EventEmitter {

    getItems(){
        return _items;
    }

    getSelected(){
        return _selected;
    }

    getVisible(){
        return _visible;
    }

    emitChange(){
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
}

AppDispatcher.register((payload) => {
    let action = payload.action;

    switch(action.actionType) {
        case FluxSlideMenuConstants.MENU_TOGGLE :
            switchVisibility(action.data);
            break;

        case FluxSlideMenuConstants.SET_SELECTED:
            setSelectedItem(action.data);
            break;

        default :
            return true;
    }

    SliderMenuStore.emitChange();
    return true;
});

module.exports = SliderMenuStore;