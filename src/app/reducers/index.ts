import {NgModule} from '@angular/core';
import {ActionReducer, combineReducers, StoreModule} from '@ngrx/store';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze'


import * as fromAuth from './auth.reducer';
import {compose} from '@ngrx/core/compose';
import {environment} from '../../environments/environment';
import {createSelector} from 'reselect';


export interface State {
  auth: fromAuth.State;
}


const initialState: State = {
  auth: fromAuth.initialState
};

const reducers = {
  auth: fromAuth.reducer
};

// Combine
const productionReducers: ActionReducer<State> = combineReducers(reducers);

// combineReducers(storeFreeze(reducers))
// storeFreeze is to make sure no state is always changes, if one state not change properly, it will return the error
const developmentReducers: ActionReducer<State> = combineReducers(reducers);



export function reducer(state = initialState, action: any): State {
  return environment.production ? productionReducers(state, action) : developmentReducers(state, action);
}


@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ]
})


export class AppStoreModule {}

export const getAuthState = (state: State) => state.auth;

// Reselect store the process in cache way, next time can memory the process
// Create Selector applied getAuthState first then applied fromAuth.getAuth function
export const getAuth = createSelector(getAuthState, fromAuth.getAuth);
