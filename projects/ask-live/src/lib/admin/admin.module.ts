import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionEditorComponent } from './question-editor/question-editor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    QuestionEditorComponent
  ],
  entryComponents: [
    QuestionEditorComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
