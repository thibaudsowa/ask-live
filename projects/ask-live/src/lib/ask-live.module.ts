import { NgModule } from '@angular/core';
import { AskLiveComponent } from './ask-live.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatDividerModule, MatListModule, MatExpansionModule, MatDialogModule, MatIconModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { QuestionEditorComponent } from './admin/question-editor/question-editor.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCYjTKFajqDRYyqZQeyk97bev5akm6SWbc",
      authDomain: "presenquestion.firebaseapp.com",
      databaseURL: "https://presenquestion.firebaseio.com",
      projectId: "presenquestion",
      storageBucket: "presenquestion.appspot.com",
      messagingSenderId: "561863719203"
    }),
    AngularFirestoreModule,
    FormsModule
  ],
  declarations: [
    AskLiveComponent,
    AdminComponent,
    QuestionEditorComponent
  ],
  exports: [
    AskLiveComponent,
    AdminComponent
  ],
  entryComponents: [
    QuestionEditorComponent
  ] 
})
export class AskLiveModule { }
