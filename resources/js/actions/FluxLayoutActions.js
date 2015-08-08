"use strict";
let AppDispatcher = require('../dispatcher/AppDispatcher');
let FluxLayoutConstants = require('../constants/FluxLayoutConstants');

let FluxLayoutActions = {
    wrapContent: (wrapped)=>{
        AppDispatcher.handleAction({
            actionType: FluxLayoutConstants.WRAP_CONTENT,
            data: wrapped
        })
    },
    toggleContentWrap: ()=>{
        AppDispatcher.handleAction({
            actionType: FluxLayoutConstants.TOGGLE_CONTENT_WRAP
        })
    }
};

module.exports = FluxLayoutActions;