import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardCommentsDoctorsComponent } from './content-card-comments-doctors.component';

describe('ContentCardCommentsDoctorsComponent', () => {
  let component: ContentCardCommentsDoctorsComponent;
  let fixture: ComponentFixture<ContentCardCommentsDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardCommentsDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardCommentsDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
