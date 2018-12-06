import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmService } from '../shared/confirm/confirm.service';
import { Question } from '../shared/model/question';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { QuestionService } from './shared/question.service';

@Component({
  selector: 'al-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions: Observable<Question[]>;

  constructor(public dialog: MatDialog,
    public questionService: QuestionService,
    public confirmService: ConfirmService) {
    console.log(this.questionService);
    this.questions = this.questionService.get();
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
        this.questionService.delete(question.id);
      }
    });
  }

  edit(question: Question) {
    const dialogRef = this.dialog.open(QuestionEditorComponent, {
      data: { type: 'edit', question: Object.assign({}, question) }
    });
  }

}
