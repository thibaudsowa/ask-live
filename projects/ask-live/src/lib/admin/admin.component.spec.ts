import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  let angularFirestoreStub: Partial<AngularFirestore>;

  angularFirestoreStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [SharedModule],
      providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
