import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../../question';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'al-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {

  title: string
  questionForm: Question;

  constructor(private db: AngularFirestore,
    public dialogRef: MatDialogRef<QuestionEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.reset();

    this.title = data.type === 'new' ? 'New question' : 'Edit question';
  }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
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
