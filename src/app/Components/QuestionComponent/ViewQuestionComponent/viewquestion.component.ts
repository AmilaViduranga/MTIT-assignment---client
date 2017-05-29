/**
 * Created by Amila on 5/25/2017.
 */
import { Component } from '@angular/core';
import {QuestionService} from '../../../Service/Question.service';
import {UserService} from '../../../Service/UserService';
import {UserTypeService} from '../../../Service/UserType.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewQuestionComponent {
  private questions: any[];
  private doctors: any[];
  private isDoctor: boolean;
  private isPatient: boolean;
  private isAdmin: boolean;
  private selectedQuestion: boolean;
  constructor(private service: QuestionService, private userService: UserService, private userTypes: UserTypeService) {
    this.selectedQuestion = null;
    this.service.getQuestions()
      .subscribe(res => {
        if (res.length !== 0) {
          this.questions = res;
          userService.getAllDoctors().subscribe(result => {
            if (result.length !== 0) {
              this.doctors = result;
              this.questions.forEach(question => {
                this.doctors.forEach(doctor => {
                  if (question.DoctorId === doctor.id) {
                    question.doctorName = doctor.name;
                  }
                });
              });
              this.userTypes.identifyUserTypes( authenticated => {
                this.isDoctor = authenticated.isDoctor;
                this.isPatient = authenticated.isPatient;
                this.isAdmin = authenticated.isAdmin;
              });
            }
          });
        }
      });
  }

  questionSelect(selectedQuestion) {
    this.selectedQuestion = selectedQuestion;
  }

  updateContent() {
    this.service.updateQuestion(this.selectedQuestion).subscribe(res => {
      if (res) {
        alert('Successfully updated question');
      }
    });
  }

  deleteQuestion(id) {
    this.service.deleteQuestion(id)
      .subscribe(res => {
        if (res) {
          alert('successfully deleted question');
          let count = 0;
          this.questions.forEach(question => {
            if (question.id === id) {
              this.questions.splice(count, 1);
            }
            count = count + 1;
          });
        }
      });
  }
}
