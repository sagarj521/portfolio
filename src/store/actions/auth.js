import * as ACTION from './actionTypes';

export const signIn = user =>({
    type: ACTION.SIGN_IN,
    payload: user
});