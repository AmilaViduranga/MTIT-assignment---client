/**
 * Created by Amila on 5/25/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import {AddressesService} from './Addresses.service';

@Injectable()
export class QuestionService {
  private rootUrl: any;
  headers: any;
  constructor(private rootAddresses: AddressesService, private http: Http) {
    this.rootUrl = this.rootAddresses.actionUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  addQuestion(reason, doctorId) {
    return this.http.post(this.rootUrl + 'appointment/add', {
      reason: reason,
      doctorId: doctorId,
      userId: localStorage.getItem('medicine_user_id')
    }).map(res => {
      return res.json();
    });
  }

  getQuestions() {
    if (parseInt(localStorage.getItem('medicine_user_type')) === 0) {
      return this.http.get(this.rootUrl + 'appointment/view/patient/' + localStorage.getItem('medicine_user_id'))
        .map(res => {
          return res.json();
        });
    }
    if (parseInt(localStorage.getItem('medicine_user_type')) === 1) {
      return this.http.get(this.rootUrl + 'appointment/view/doctor/' + localStorage.getItem('medicine_user_id'))
        .map(res => {
          return res.json();
        });
    }
    if (parseInt(localStorage.getItem('medicine_user_type')) === 2) {
      return this.http.get(this.rootUrl + 'appointment/view/all')
        .map(res => {
          return res.json();
        });
    }
  }

  updateQuestion(updatedInstance) {
    return this.http.post(this.rootUrl + 'appointment/update', {
      id : updatedInstance.id,
      reason: updatedInstance.reason,
      userId: updatedInstance.userId,
      doctorId: parseInt(updatedInstance.doctorId),
      status: updatedInstance.acceeptStatus,
      doctorAnswer: updatedInstance.doctorAnswer
    }).map( res => {
      return res.json();
    });
  }

  deleteQuestion(id) {
    return this.http.delete(this.rootUrl + 'appointment/delete/' + id)
      .map(res => {
        if (res.status === 200) {
          return true;
        } else {
          return false;
        }
      });
  }
}
