import React, { createContext, useReducer } from 'react';
import { Reducer } from './reducer';

export interface DocState {
    pageAtTop: boolean;
}

const initialState: DocState = {
    pageAtTop: false,
};

export const Context = createContext<{
    state: DocState;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
