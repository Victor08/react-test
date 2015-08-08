"use strict";
let _ = require('lodash');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let FluxLayoutConstants = require('../constants/FluxLayoutConstants');

let _wrapped;

function setWrapped (wrapped) {
    _wrapped = wrapped;
}
function toggleWrapped() {
    _wrapped = _wrapped ? false : true;
}

let LayoutStore = _.extend({}, EventEmitter.prototype, {

    emitChange: function(){
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },

    getWrapped: function(){
        return _wrapped;
    }

});

AppDispatcher.register(function(payload) {
    let action = payload.action;
    switch (action.actionType) {
        case FluxLayoutConstants.WRAP_CONTENT:
            setWrapped(action.data);
            break;
        case FluxLayoutConstants.TOGGLE_CONTENT_WRAP:
            toggleWrapped();
            break;
        default :
            return true;

    }
    LayoutStore.emitChange();
    return true;
});

module.exports = LayoutStore;