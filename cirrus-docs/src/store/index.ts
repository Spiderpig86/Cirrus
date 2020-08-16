const SET_PAGE_AT_TOP = 'SET_PAGE_AT_TOP';

interface ActionCreator {
    type: string;
    [key: string]: any;
}

const initialState = {
    pageAtTop: true,
};


/**
 * METHODS
 */

export const setPageAtTop = (pageAtTop: boolean) => {
    return (dispatch: any) => {
        dispatch(setPageAtTopEvent(pageAtTop));
    };
};


/**
 * ACTION CREATORS
 */

export const setPageAtTopEvent = (pageAtTop: boolean) => {
    return {
        type: SET_PAGE_AT_TOP,
        pageAtTop
    }
}

export const docReducer = (state = initialState, action: ActionCreator) => {
    switch (action.type) {
        case SET_PAGE_AT_TOP:
            
            return {
                ...state,
                pageAtTop: action.pageAtTop
            }
        default:
            return state;
    }
}