import * as ACTION from '../actions/actionTypes';

const initialState = {
    isSignIn: false,
    isAdmin: false
}

const AuthReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case ACTION.SIGN_IN:
            return {
                ...state,
                isSignIn: true,
                userId: actions.payload.loggedInUserId
            }
        default:
        return state;
    }
}

export default AuthReducer;