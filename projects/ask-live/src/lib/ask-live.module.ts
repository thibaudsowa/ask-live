import { NgModule } from '@angular/core';
import { AskLiveComponent } from './ask-live.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { QuestionEditorComponent } from './admin/question-editor/question-editor.component';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCYjTKFajqDRYyqZQeyk97bev5akm6SWbc",
      authDomain: "presenquestion.firebaseapp.com",
      databaseURL: "https://presenquestion.firebaseio.com",
      projectId: "presenquestion",
      storageBucket: "presenquestion.appspot.com",
      messagingSenderId: "561863719203"
    }),
    AngularFirestoreModule,
    SharedModule,
  ],
  declarations: [
    AskLiveComponent,
  ],
  exports: [
    AdminModule
  ]
})
export class AskLiveModule { }
