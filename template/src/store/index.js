import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useCombinedReducers from '../hooks/useCombinedReducers';
import { StoreContext } from '../hooks/store';
import middlewares from './combinedMiddlewares';

const Provider = ({ children }) => {
    const { store, reducers } = useCombinedReducers();

    const triggerDispatchs = (action) => {
        reducers.map((reducer) => reducer(action));
    };

    const withMiddleware = (action) => {
        if (middlewares?.length) {
            middlewares.map((middleware) =>
                middleware(action)(triggerDispatchs)
            );
        } else {
            triggerDispatchs(action);
        }
    };

    const props = useMemo(
        () => ({
            store,
            dispatch: withMiddleware
        }),
        [store, withMiddleware]
    );

    return (
        <StoreContext.Provider value={props}>{children}</StoreContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.element
};

export default Provider;
