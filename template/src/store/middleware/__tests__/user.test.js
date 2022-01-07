import '@testing-library/jest-dom';

import UserActions from '../../../constants/user-actions';
import userMiddleware from '../user';

describe('User middleware', () => {
    it('should passes through non-function action', () => {
        const action = {
            type: '',
            payload: ''
        };
        const dispatch = jest.fn();

        userMiddleware(action)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(action);
    });

    it('should calls the getLoggedUserAsync function', () => {
        const action = {
            type: UserActions.GET_LOGGED_USER,
            payload: ''
        };
        const dispatch = jest.fn();

        userMiddleware(action)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(action);
    });

    it('should calls the getUserPermissionAsync function', () => {
        const action = {
            type: UserActions.GET_USER_PERMISSION,
            payload: ''
        };
        const dispatch = jest.fn();

        userMiddleware(action)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(action);
    });
});
