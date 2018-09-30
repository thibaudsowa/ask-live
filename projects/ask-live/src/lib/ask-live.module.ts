import { NgModule } from '@angular/core';
import { AskLiveComponent } from './ask-live.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
  ],
  declarations: [
    AskLiveComponent,
    AdminComponent
  ],
  exports: [
    AskLiveComponent,
    AdminComponent
  ]
})
export class AskLiveModule { }
