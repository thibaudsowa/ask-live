import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmData } from './confirm-data';

@Component({
  selector: 'al-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  title: string = "Please confirm."
  description: string;
  successButtonText: string = "Yes";
  failureButtonText: string = "No";

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmData) {
    if(data.title) {
      this.title = data.title;
    }
    if(data.description) {
      this.description = data.description;
    }
    if(data.successButtonText) {
      this.successButtonText = data.successButtonText;
    }
    if(data.failureButtonText) {
      this.failureButtonText = data.failureButtonText;
    }
  }

  ngOnInit() {
  }

  failureAction() {
    this.dialogRef.close(false);
  }

  successAction() {
    this.dialogRef.close(true);
  }
}
