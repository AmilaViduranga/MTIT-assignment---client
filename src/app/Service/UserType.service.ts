/**
 * Created by Amila on 5/25/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserTypeService {
  isDoctor: boolean;
  isPatient: boolean;
  isAdmin: boolean;

  constructor() {
    this.isDoctor = false;
    this.isPatient = false;
    this.isAdmin = false;
  }

  identifyUserTypes(callback) {
    const type = parseInt(localStorage.getItem('medicine_user_type'));
    if (type === 0) {
      this.isPatient = true;
    }
    if (type === 1) {
      this.isDoctor = true;
    }
    if (type === 2) {
      this.isAdmin = true;
    }
    return callback({
      isDoctor: this.isDoctor,
      isPatient: this.isPatient,
      isAdmin: this.isAdmin
    });
  }
}
