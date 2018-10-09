import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../question';

@Component({
  selector: 'al-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions: Observable<Question[]>;
  questionForm: Question;

  constructor(private db: AngularFirestore) {
    this.reset();
    this.questions = this.db.collection<Question>('questions').valueChanges();
  }

  ngOnInit() {
  }

  add(): void {
    this.db.collection<Question>('questions').add(this.questionForm);
    this.reset();
  }

  reset(): void {
    this.questionForm = {
      subject: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    };
  }

}
