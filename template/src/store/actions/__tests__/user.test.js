import '@testing-library/jest-dom';

import * as actions from '../user';

describe('User actions', () => {
    it('should calls the getLoggedUser function', () => {
        const mockMethod = jest.spyOn(actions, 'getLoggedUser');

        actions.getLoggedUser();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
    });

    it('should calls the setLoggedUser function', () => {
        const mockMethod = jest.spyOn(actions, 'setLoggedUser');
        const payload = {
            fullName: 'Chuck Norris',
            email: 'chuck.norris@mail.com',
            identity: 'chuck.norris%40mail.com@blip.ai'
        };

        actions.setLoggedUser(payload);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(payload);
    });

    it('should calls the getUserPermission function', () => {
        const mockMethod = jest.spyOn(actions, 'getUserPermission');

        actions.getUserPermission();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
    });

    it('should calls the setUserPermission function', () => {
        const mockMethod = jest.spyOn(actions, 'setUserPermission');
        const payload = 'admin';

        actions.setUserPermission(payload);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(payload);
    });
});
