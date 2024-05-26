import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardRecommendedDoctorsComponent } from './content-card-recommended-doctors.component';

describe('ContentCardRecommendedDoctorsComponent', () => {
  let component: ContentCardRecommendedDoctorsComponent;
  let fixture: ComponentFixture<ContentCardRecommendedDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardRecommendedDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardRecommendedDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
