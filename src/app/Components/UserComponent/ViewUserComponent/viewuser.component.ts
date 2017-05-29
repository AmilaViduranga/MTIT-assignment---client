/**
 * Created by Amila on 5/28/2017.
 */
import { Component } from '@angular/core';
import {UserService} from '../../../Service/UserService';

@Component({
  selector: 'app-view-user',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewUserComponent {
  private users: any[];
  private selectedUser: any;
  constructor(private userService: UserService) {
    this.selectedUser = null;
    this.userService.getAllUsers()
      .subscribe(res => {
        this.users = res;
      });
  }

  selectUser(userInstance) {
    this.selectedUser = userInstance;
  }

  updateUserInformation() {
    this.userService.updateUserInformation(this.selectedUser)
      .subscribe(res => {
        if (res) {
          alert('Successfully updated');
        }
      });
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .subscribe(res => {
        if (res) {
          alert('successfully deleted user');
          let count = 0;
          this.users.forEach(user => {
            if (user.id === userId) {
              this.users.splice(count, 1);
            }
            count = count + 1;
          });
        }
      });
  }
}
