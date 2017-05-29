/**
 * Created by Amila on 5/25/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import {AddressesService} from './Addresses.service';

@Injectable()
export class UserService {
  private rootUrl: any;
  headers: any;
  constructor(private rootAddresses: AddressesService, private http: Http) {
    this.rootUrl = this.rootAddresses.actionUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getAllDoctors() {
    return this.http.get(this.rootUrl + 'user/get/doctors').map(res => {
      return res.json();
    });
  }

  getAllUsers() {
    return this.http.get(this.rootUrl + 'user/get/all').map(res => {
      return res.json();
    });
  }

  updateUserInformation(userInstance) {
    return this.http.put(this.rootUrl + 'user/update', {
      name: userInstance.name,
      type: userInstance.type,
      password: userInstance.password,
      id: userInstance.id
    }).map(res => {
      return res.json();
    });
  }

  addNewUser(name, type, password) {
    return this.http.post(this.rootUrl + 'user/add', {
      name: name,
      type: type,
      password: password
    }).map(res => {
      return res.json();
    });
  }

  deleteUser(userId) {
    return this.http.delete(this.rootUrl + 'user/delete/' + userId)
      .map(res => {
        if (res.status === 200) {
          return true;
        } else {
          return false;
        }
      });
  }
}
