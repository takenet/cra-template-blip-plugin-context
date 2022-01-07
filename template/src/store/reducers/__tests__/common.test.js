import '@testing-library/jest-dom';

import CommonActions from '../../../constants/common-actions';
import commonReducer, { defaultCommon } from '../common';

describe('Common reducer', () => {
    it('should return the initial state', () => {
        expect(commonReducer(undefined, {})).toEqual(defaultCommon);
    });

    it('should handle an information being added to language', () => {
        const language = 'en';

        const action = {
            type: CommonActions.SET_LANGUAGE,
            payload: language
        };

        const expectedResult = {
            common: {
                language,
                loading: false
            }
        };

        expect(commonReducer(undefined, action)).toEqual(expectedResult);
    });

    it('should handle an information being added to loading', () => {
        const loading = true;

        const action = {
            type: CommonActions.SET_LOADING,
            payload: loading
        };

        const expectedResult = {
            common: {
                language: 'pt',
                loading
            }
        };

        expect(commonReducer(undefined, action)).toEqual(expectedResult);
    });
});
