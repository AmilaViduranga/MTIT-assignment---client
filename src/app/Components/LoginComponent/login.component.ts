/**
 * Created by Amila on 5/25/2017.
 */
import { Component } from '@angular/core';
import {LoginService} from '../../Service/Login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private userPassword: any;
  private userName: any;

  constructor(private service: LoginService, private router: Router) {
    this.userName = null;
    this.userPassword = null;
  }

  loginToSystem() {
    return this.service.loginToSystem(this.userName, this.userPassword)
      .subscribe(res => {
        if (res.status === 200) {
          localStorage.setItem('medicine_user_id', res.userInfo.id);
          localStorage.setItem('medicine_user_type', res.userInfo.type);
          if (res.userInfo.type === 0) {
            this.router.navigateByUrl('/askquestion');
          }
          if (res.userInfo.type === 1 || res.userInfo.type === 2) {
            this.router.navigateByUrl('/viewquestion');
          }
        } else {
          alert('Invalid attempt, please try again with valid informations');
        }
      });
  }

  signUp() {
    this.router.navigateByUrl('/signup');
  }
}
