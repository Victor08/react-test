var FluxSlideMenuActions = require('../actions/FluxSlideMenuActions');

module.exports = {
    getMenuItems: function () {
        $.get('api/menu.json', {}, function(response) {
            if (response.status === 'OK') {
                console.log('respose', response.data);
                FluxSlideMenuActions.receiveItems(response.data);
            }
        });
    }
} ;

