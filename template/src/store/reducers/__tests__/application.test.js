import '@testing-library/jest-dom';

import ApplicationActions from '../../../constants/application-actions';
import applicationReducer, { defaultApplication } from '../application';

describe('Application reducer', () => {
    it('should return the initial state', () => {
        expect(applicationReducer(undefined, {})).toEqual(defaultApplication);
    });

    it('should handle an information being added to appInfo', () => {
        const appInfo = {
            name: 'Test',
            shortName: 'mytest',
            status: 'online',
            template: 'master',
            accessKey: 'dGhpcyBpcyBteSBhY2Nlc3NLZXkgZm9yIHRlc3Rz'
        };

        const action = {
            type: ApplicationActions.SET_APPLICATION,
            payload: appInfo
        };

        const expectedResult = {
            application: {
                appInfo,
                appConfig: {}
            }
        };

        expect(applicationReducer(undefined, action)).toEqual(expectedResult);
    });

    it('should handle an information being added to appConfig', () => {
        const appConfig = {
            Plugins: {
                'dcf38056-4c92-4294-a11f-c703de57f9d6': {
                    name: 'Plugin Test',
                    url: 'https://my-plugin-test.io/'
                }
            }
        };

        const action = {
            type: ApplicationActions.SET_CONFIGURATION,
            payload: appConfig
        };

        const expectedResult = {
            application: {
                appInfo: {},
                appConfig
            }
        };

        expect(applicationReducer(undefined, action)).toEqual(expectedResult);
    });
});
