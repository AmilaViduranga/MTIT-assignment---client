/**
 * Created by Amila on 5/25/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressesService {
  actionUrl: any;

  constructor() {
    this.actionUrl = 'http://localhost:8002/';
  }
}
