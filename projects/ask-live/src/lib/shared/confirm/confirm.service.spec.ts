import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { ConfirmService } from './confirm.service';

describe('ConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [MatDialogModule]
  }));

  it('should be created', () => {
    const service: ConfirmService = TestBed.get(ConfirmService);
    expect(service).toBeTruthy();
  });
});
