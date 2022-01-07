import '@testing-library/jest-dom';

import ApplicationActions from '../../../constants/application-actions';
import applicationMiddleware from '../application';

describe('Application middleware', () => {
    it('should passes through non-function action', () => {
        const action = {
            type: '',
            payload: ''
        };
        const dispatch = jest.fn();

        applicationMiddleware(action)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(action);
    });

    it('should calls the getApplicationAsync function', () => {
        const action = {
            type: ApplicationActions.GET_APPLICATION,
            payload: ''
        };
        const dispatch = jest.fn();

        applicationMiddleware(action)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(action);
    });
});
