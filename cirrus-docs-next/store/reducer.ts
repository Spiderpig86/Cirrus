import { DocState } from "./store";

export const SET_PAGE_AT_TOP = 'SET_PAGE_AT_TOP';

export const setPageAtTop = (pageAtTop: boolean, dispatch: any) => {
    dispatch({
        type: SET_PAGE_AT_TOP,
        payload: pageAtTop
    });
};

export const Reducer = (state: DocState, action) => {
    switch (action.type) {
        case SET_PAGE_AT_TOP:
            return {
                ...state,
                pageAtTop: action.payload
            };
        default:
            return state;
    }
};
