import '@testing-library/jest-dom';

import UserActions from '../../../constants/user-actions';
import userReducer, { defaultUser } from '../user';

describe('Common reducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(defaultUser);
    });

    it('should handle an information being added to data', () => {
        const data = {
            fullName: 'Chuck Norris',
            email: 'chuck.norris@mail.com',
            identity: 'chuck.norris%40mail.com@blip.ai'
        };

        const action = {
            type: UserActions.SET_LOGGED_USER,
            payload: data
        };

        const expectedResult = {
            user: {
                data,
                permission: ''
            }
        };

        expect(userReducer(undefined, action)).toEqual(expectedResult);
    });

    it('should handle an information being added to permission', () => {
        const permission = 'admin';

        const action = {
            type: UserActions.SET_USER_PERMISSION,
            payload: permission
        };

        const expectedResult = {
            user: {
                data: {},
                permission
            }
        };

        expect(userReducer(undefined, action)).toEqual(expectedResult);
    });
});
