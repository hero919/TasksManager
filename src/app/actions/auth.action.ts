import {Action} from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: {email: string; password: string}) {
  }
}


export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: string) {
  }
}



export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {
  }
}


export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor(public payload: string) {
  }
}

export type Actions = LoginAction | LoginSuccessAction | LoginFailAction | LogoutAction;
