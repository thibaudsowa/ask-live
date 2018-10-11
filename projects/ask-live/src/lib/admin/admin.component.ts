import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { MatDialog } from '@angular/material';
import { QuestionEditorComponent } from './question-editor/question-editor.component';

@Component({
  selector: 'al-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions: Observable<Question[]>;

  constructor(private db: AngularFirestore,
    public dialog: MatDialog) {
    this.questions = this.db.collection<Question>('questions').valueChanges();
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestionEditorComponent, {
      data: {type: 'new'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
