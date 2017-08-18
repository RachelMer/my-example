// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import { NAV_PEEK, NAV_ACTIVATE, NAV_ENABLE, NAV_RESPONSIVE, ROUTE_CHANGED } from '../actions/actions';

const initialState = {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple',
    peek: false
};

const handlers = {
    
    [NAV_PEEK]: (_, action) => ({ peek: action.peek }),
    
    [NAV_ACTIVATE]: (_, action) => (
        { active: action.active, activateOnMultiple: null }
    ),
    
    [NAV_ENABLE]: (_, action) => (
        { enabled: action.enabled }
    ),
    
    [NAV_RESPONSIVE]: (state, action)  => {
        let result = { responsive: action.responsive };
        if ('single' === action.responsive && state.active) {
            result.active = false;
            result.activateOnMultiple = true;
        } else if ('multiple' === action.responsive && state.activateOnMultiple) {
            result.active = true;
        }
        return result;
    }
};

export default function navReducer (state = initialState, action) {
    let handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
}
