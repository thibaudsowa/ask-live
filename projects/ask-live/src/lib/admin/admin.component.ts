import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfirmService } from '../shared/confirm/confirm.service';
import { Question } from '../shared/model/question';
import { QuestionEditorComponent } from './question-editor/question-editor.component';

@Component({
  selector: 'al-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions: Observable<Question[]>;

  constructor(private db: AngularFirestore,
    public dialog: MatDialog,
    public confirmService: ConfirmService) {
    this.questions = this.db.collection<Question>('questions').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Question;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }

  ngOnInit() {
  }

  create(): void {
    const dialogRef = this.dialog.open(QuestionEditorComponent, {
      data: { type: 'new' }
    });
  }

  delete(question: Question) {
    this.confirmService.open({
      title: 'Delete this question?',
      description: 'Do you want to delete this questions?',
      failureButtonText: 'Cancel'
    }).subscribe(result => {
      if (result) {
        this.db.doc('questions/' + question.id).delete();
      }
    });
  }

  edit(question: Question) {
    const dialogRef = this.dialog.open(QuestionEditorComponent, {
      data: { type: 'edit', question: Object.assign({}, question) }
    });
  }

}
