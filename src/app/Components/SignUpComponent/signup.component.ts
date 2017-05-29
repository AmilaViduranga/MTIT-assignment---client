/**
 * Created by Amila on 5/29/2017.
 */
import { Component } from '@angular/core';
import {UserService} from '../../Service/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: any;
  password: any;
  type: any;

  constructor(private userService: UserService, private router: Router) {
    this.name = null;
    this.password = null;
    this.type = null;
  }
  addNewUser() {
    this.type = 0;
    this.userService.addNewUser(this.name, this.type, this.password)
      .subscribe(res => {
        if (res) {
          this.router.navigateByUrl('/');
        }
      });
  }
}
