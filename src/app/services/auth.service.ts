import {Inject, Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService {

  // Put $http service here

  login(email: string, password: string): Observable<any> {
    if (email == 'terryzhang1995@yahoo.com') {
      return Observable.of('Login Success');
    }
     throw(new Error('Username or password incorrect'));
  }
}

