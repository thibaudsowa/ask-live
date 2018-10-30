import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Question } from '../../shared/model/question';

@Component({
  selector: 'al-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {

  type: string;
  title: string;
  successButtonName: string;
  questionForm: Question;

  constructor(private db: AngularFirestore,
    public dialogRef: MatDialogRef<QuestionEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.reset();

    this.type = data.type;
    this.title = this.type === 'new' ? 'New question' : 'Edit question';
    this.successButtonName = this.type === 'new' ? 'Add' : 'Edit';

    if (this.type === 'edit') {
      this.questionForm = data.question;
    }
  }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  successButtonAction(): void {
    const questionToSave: Question = Object.assign({}, this.questionForm);

    if (this.type === 'new') {
      this.db.collection<Question>('questions').add(questionToSave);
    } else {
      const id: string = questionToSave.id;
      delete questionToSave.id;

      this.db.doc<Question>('questions/' + id).update(questionToSave);
    }
    this.cancel();
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
