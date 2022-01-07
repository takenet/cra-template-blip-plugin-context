import '@testing-library/jest-dom';

import CommonActions from '../../../constants/common-actions';
import commonMiddleware from '../common';

describe('Common middleware', () => {
    it('should passes through non-function action', () => {
        const action = {
            type: '',
            payload: ''
        };
        const dispatch = jest.fn();

        commonMiddleware(action)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(action);
    });

    it('should calls the getLanguageAsync function', () => {
        const action = {
            type: CommonActions.GET_LANGUAGE,
            payload: ''
        };
        const dispatch = jest.fn();

        commonMiddleware(action)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(action);
    });
});
