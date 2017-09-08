import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { Router } from '@angular/router';
// import * as routerActions from '../actions/router.action';
import {of} from 'rxjs/observable/of';

import {AuthService} from '../services';
import * as actions from '../actions/auth.action';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthEffects {
  constructor(
    private act: Actions,
    private router: Router,
    private authService: AuthService) {}


  @Effect()
  login$: Observable<Action> = this.act
    .ofType(actions.LOGIN)
    .map((action: actions.LoginAction) => action.payload)
    .switchMap((val: { email: string, password: string }) => this.authService.login(val.email, val.password)
      .map(auth => new actions.LoginSuccessAction(auth))
      .catch(err =>  Observable.of(new actions.LoginFailAction(JSON.stringify(err)))));
}
