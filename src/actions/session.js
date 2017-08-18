// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

// nav
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const ACCOUNT_UUID = 'USER_UUID';
export const AUTHENTICATED = 'AUTHENTICATED';

export function accessToken (token) {
    return { type: ACCESS_TOKEN, token: token };
}

export function accountUuid (id) {
    return { type: ACCOUNT_UUID, id: id };
}

export function authenticated (authenticated) {
    return { type : AUTHENTICATED, authenticated: authenticated}
}