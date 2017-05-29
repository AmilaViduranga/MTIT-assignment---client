/**
 * Created by Amila on 5/25/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AddressesService} from './Addresses.service';

@Injectable()
export class LoginService {
  private rootUrl: any;
  headers: any;
  constructor(private rootAddresses: AddressesService, private http: Http) {
    this.rootUrl = this.rootAddresses.actionUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  /*
   * login to the system
   */
  loginToSystem(userName, password) {
    return this.http.post(this.rootUrl + 'user/login', {
      userName: userName,
      password: password
    }).map(res => {
      return res.json();
    });
  }
}
