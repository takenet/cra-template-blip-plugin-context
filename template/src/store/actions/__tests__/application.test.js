import '@testing-library/jest-dom';

import * as actions from '../application';

describe('Application actions', () => {
    it('should calls the getApplication function', () => {
        const mockMethod = jest.spyOn(actions, 'getApplication');

        actions.getApplication();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
    });

    it('should calls the setApplication function', () => {
        const mockMethod = jest.spyOn(actions, 'setApplication');
        const payload = {
            name: 'Test',
            shortName: 'mytest',
            status: 'online',
            template: 'master',
            accessKey: 'dGhpcyBpcyBteSBhY2Nlc3NLZXkgZm9yIHRlc3Rz'
        };

        actions.setApplication(payload);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(payload);
    });

    it('should calls the setConfiguration function', () => {
        const mockMethod = jest.spyOn(actions, 'setConfiguration');
        const payload = {
            Plugins: {
                'dcf38056-4c92-4294-a11f-c703de57f9d6': {
                    name: 'Plugin Test',
                    url: 'https://my-plugin-test.io/'
                }
            }
        };

        actions.setConfiguration(payload);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(payload);
    });
});
