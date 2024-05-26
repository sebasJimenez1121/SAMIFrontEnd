import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTextAreaComponent } from './comments-text-area.component';

describe('CommentsTextAreaComponent', () => {
  let component: CommentsTextAreaComponent;
  let fixture: ComponentFixture<CommentsTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsTextAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
