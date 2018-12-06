import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Question } from '../shared/model/question';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { QuestionService } from './shared/question.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  class QuestionServiceMock {
    get() {
      return new Observable<Question[]>();
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [SharedModule],
      providers: [{ provide: QuestionService, useClass: QuestionServiceMock }]
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
