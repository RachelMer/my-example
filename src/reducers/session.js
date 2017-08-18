import {ACCOUNT_UUID, ACCESS_TOKEN, AUTHENTICATED} from '../actions/session';

const initialState = {
    account_uuid: '',
    access_token: '',
    authenticated: false
};

const handlers = {
    [ACCOUNT_UUID]: (_, action) => (
        {account_uuid: action.id}
    ),
    
    [ACCESS_TOKEN]: (_, action) => (
        {access_token: action.token}
    ),
    
    [AUTHENTICATED]: (_, action) => (
        {authenticated: action.authenticated}
    )
};

export default function sessionReducer(state = initialState, action) {
    let handler = handlers[action.type];
    if (!handler) return state;
    return {...state, ...handler(state, action)};
}