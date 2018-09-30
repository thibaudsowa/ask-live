import { TestBed } from '@angular/core/testing';

import { AskLiveService } from './ask-live.service';

describe('AskLiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AskLiveService = TestBed.get(AskLiveService);
    expect(service).toBeTruthy();
  });
});
