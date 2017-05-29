import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {DataTableModule} from 'angular2-datatable'

import { AppComponent } from './Components/RootComponents/app.component';
import {LoginComponent} from './Components/LoginComponent/login.component';
import {NavigationComponent} from './Components/NavigationBar/navigation.component';
import {AddQuestionComponent} from './Components/QuestionComponent/AddQuestionComponent/addquestion.component';
import {ViewQuestionComponent} from './Components/QuestionComponent/ViewQuestionComponent/viewquestion.component';
import {AddUserComponent} from './Components/UserComponent/AddUserComponent/adduser.component';
import {ViewUserComponent} from './Components/UserComponent/ViewUserComponent/viewuser.component';
import {SignupComponent} from './Components/SignUpComponent/signup.component';

import {AddressesService} from './Service/Addresses.service';
import {LoginService} from './Service/Login.service';
import {UserTypeService} from './Service/UserType.service';
import {UserService} from './Service/UserService';
import {QuestionService} from './Service/Question.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    AddQuestionComponent,
    ViewQuestionComponent,
    ViewUserComponent,
    AddUserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'askquestion',
        component: AddQuestionComponent
      },
      {
        path: 'viewquestion',
        component: ViewQuestionComponent
      },
      {
        path: 'viewusers',
        component: ViewUserComponent
      },
      {
        path: 'adduser',
        component: AddUserComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ])
  ],
  providers: [
    AddressesService,
    LoginService,
    UserTypeService,
    UserService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
