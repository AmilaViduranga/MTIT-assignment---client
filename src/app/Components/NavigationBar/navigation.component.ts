/**
 * Created by Amila on 5/25/2017.
 */
import { Component } from '@angular/core';
import {UserTypeService} from '../../Service/UserType.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  private isAdmin: boolean;
  private isDoctor: boolean;
  private isPatient: boolean;
  constructor(private userTypeDefinder: UserTypeService, private router:Router) {
    const scope = this;
    this.userTypeDefinder.identifyUserTypes(res => {
      scope.isAdmin = res.isAdmin;
      scope.isPatient = res.isPatient;
      scope.isDoctor = res.isDoctor;
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
