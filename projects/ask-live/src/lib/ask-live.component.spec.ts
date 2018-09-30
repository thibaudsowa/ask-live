import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskLiveComponent } from './ask-live.component';

describe('AskLiveComponent', () => {
  let component: AskLiveComponent;
  let fixture: ComponentFixture<AskLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
