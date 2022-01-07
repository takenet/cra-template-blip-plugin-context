import '@testing-library/jest-dom';

import * as actions from '../common';

describe('Common actions', () => {
    it('should calls the getLanguage function', () => {
        const mockMethod = jest.spyOn(actions, 'getLanguage');

        actions.getLanguage();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
    });

    it('should calls the setLanguage function', () => {
        const mockMethod = jest.spyOn(actions, 'setLanguage');
        const payload = 'en';

        actions.setLanguage(payload);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(payload);
    });

    it('should calls the setLoading function', () => {
        const mockMethod = jest.spyOn(actions, 'setLoading');
        const payload = true;

        actions.setLoading(payload);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(payload);
    });
});
