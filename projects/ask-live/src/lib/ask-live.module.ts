import { NgModule } from '@angular/core';
import { AskLiveComponent } from './ask-live.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
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
