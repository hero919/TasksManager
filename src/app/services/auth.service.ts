import {Inject, Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import * as RX from 'rxjs/';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';


@Injectable()
export class AuthService {

  // Put $http service here

  login(email: string, password: string): Observable<any> | ErrorObservable {
    // console.log(email);
    // console.log(password);
    if (email === 'terryzhang1995@yahoo.com') {
      return Observable.of('Login Success');
    } else {
      // RX.Observable.throw(Error('Username or password incorrect'))
      return ErrorObservable.create(Error('Username or password incorrect'))
    }
 //   Observable.throw(new Error('Username or password incorrect'))
  }
}

