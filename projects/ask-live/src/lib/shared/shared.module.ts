import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmService } from './confirm/confirm.service';

@NgModule({
  imports: [
    CommonModule,
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
    FormsModule
  ],
  declarations: [
    ConfirmComponent
  ],
  providers: [
    ConfirmService
  ],
  entryComponents: [
    ConfirmComponent
  ],
  exports: [
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
    FormsModule
  ]
})
export class SharedModule { }
