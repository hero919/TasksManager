import * as actions from '../actions/auth.action';


export interface State {
  auth: string;
}


export const initialState: State = {
  auth: 'Start Login State'
};

export function reducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      return {auth: 'Login Success'}
    }
    case actions.LOGIN_FAIL: {
      return {auth: 'Login Fail'}
    }
    case actions.LOGOUT: {
      return {auth: 'Logout'};
    }
    default: {
      return state;
    }
  }
}


export const getAuth = (state: State) => state.auth;

