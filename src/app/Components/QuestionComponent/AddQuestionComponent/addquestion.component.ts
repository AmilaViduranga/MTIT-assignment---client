/**
 * Created by Amila on 5/25/2017.
 */
import { Component } from '@angular/core';
import {UserService} from '../../../Service/UserService';
import {QuestionService} from '../../../Service/Question.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddQuestionComponent {
  private doctors: any;
  private reason: any;
  private selectedDoctor: any;
  constructor(private userService: UserService, private questionService: QuestionService) {
    this.doctors = null;
    this.selectedDoctor = null;
    this.userService.getAllDoctors().subscribe(res => {
      if (res.length !== 0) {
        this.doctors = res;
      }
    });
  }

  addQuestion() {
    this.questionService.addQuestion(this.reason, this.selectedDoctor)
      .subscribe(res => {
        if (res) {
          alert("You have successfully inserted the question");
        }
      });
  }
}
