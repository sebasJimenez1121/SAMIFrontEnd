import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardRecommendedDoctorsComponent } from './image-card-recommended-doctors.component';

describe('ImageCardRecommendedDoctorsComponent', () => {
  let component: ImageCardRecommendedDoctorsComponent;
  let fixture: ComponentFixture<ImageCardRecommendedDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCardRecommendedDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCardRecommendedDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
