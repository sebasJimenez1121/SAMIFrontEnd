import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardCommentsDoctorsComponent } from './image-card-comments-doctors.component';

describe('ImageCardCommentsDoctorsComponent', () => {
  let component: ImageCardCommentsDoctorsComponent;
  let fixture: ComponentFixture<ImageCardCommentsDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCardCommentsDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCardCommentsDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
