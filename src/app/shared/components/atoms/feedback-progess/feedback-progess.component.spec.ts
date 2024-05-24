import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProgessComponent } from './feedback-progess.component';

describe('FeedbackProgessComponent', () => {
  let component: FeedbackProgessComponent;
  let fixture: ComponentFixture<FeedbackProgessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackProgessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
