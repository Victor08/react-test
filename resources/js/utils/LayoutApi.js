let FluxSlideMenuActions = require('../actions/FluxSlideMenuActions');
let $ = require('jquery');

module.exports = {
    getMenuItems: function () {
        $.get('api/menu.json', {}, function(response) {
            if (response.status === 'OK') {
                FluxSlideMenuActions.receiveItems(response.data);
            }
        });
    }
} ;

