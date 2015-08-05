jest.dontMock('../SlideMenuStore');
jest.dontMock('../../constants/FluxSlideMenuConstants');
jest.dontMock('keymirror');
jest.dontMock('lodash');

describe('slideMenuStore', function(){

    let _ = require('lodash');
    let SlideMenuConstants = require('../../constants/FluxSlideMenuConstants');
    let AppDispatcher;
    let SlideMenuStore;
    let callback;

    //mock actions
    let actionSetSelected = {
        action: {
            actionType: SlideMenuConstants.SET_SELECTED,
            data: 2
        }
    };
    let actionRecieveItems = {
        action: {
            actionType: SlideMenuConstants.RECEIVE_ITEMS,
            data: {
                0: {
                    id: 0,
                    title: 'wake up neo',
                    href: 'wuupn'
                },
                1: {
                    id: 1,
                    title: 'wake up scyly',
                    href: 'wuupsss'
                },
                2: {
                    id: 2,
                    title: 'wake up man',
                    href: 'wuupmman'
                }
            }
        }
    };

    beforeEach(() => {
        AppDispatcher = require('../../dispatcher/AppDispatcher');
        SlideMenuStore = require('../SlideMenuStore');
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    it('sets a list of menu items to show', () => {
        callback(actionRecieveItems);
        let items = SlideMenuStore.getItems();
        expect(_.size(items)).toBe(3);
    });

    it('sets current active menu item', () => {
        callback(actionSetSelected);
        let currentId = SlideMenuStore.getSelected();
        expect(currentId).toBe(2);
    })
});