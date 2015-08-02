var keyMirror = require('react/lib/keyMirror');
console.log('key mirror', keyMirror({
    MENU_TOGGLE: null,          // shows or hides menu block
    SET_SELECTED: null,         // sets selected menu item
    RECEIVE_ITEMS: null         // fires when menu items recieved
}))

module.exports = keyMirror ({
    MENU_TOGGLE: null,          // shows or hides menu block
    SET_SELECTED: null,         // sets selected menu item
    RECEIVE_ITEMS: null         // fires when menu items recieved
});
