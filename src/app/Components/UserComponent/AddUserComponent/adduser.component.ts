/**
 * Created by Amila on 5/28/2017.
 */
import { Component } from '@angular/core';
import {UserService} from '../../../Service/UserService';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent {
  name: any;
  password: any;
  type: any;

  constructor(private userService: UserService) {
    this.name = null;
    this.password = null;
    this.type = null;
  }
  addNewUser() {
    this.userService.addNewUser(this.name, this.type, this.password)
      .subscribe(res => {
        console.log(res);
      });
  }
}
