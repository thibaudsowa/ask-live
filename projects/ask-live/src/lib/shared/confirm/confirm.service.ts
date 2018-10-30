import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { ConfirmData } from './confirm-data';
import { ConfirmComponent } from './confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  private dialogSubject: Subject<boolean> = new Subject();

  constructor(public dialog: MatDialog) { }

  open(confirmData: ConfirmData = {}): Subject<boolean> {

    this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: confirmData
    }).afterClosed().subscribe(result => this.dialogSubject.next(result));

    return this.dialogSubject;
  }
}
