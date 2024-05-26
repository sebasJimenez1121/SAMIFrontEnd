import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardServicesComponent } from './image-card-services.component';

describe('ImageCardServicesComponent', () => {
  let component: ImageCardServicesComponent;
  let fixture: ComponentFixture<ImageCardServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCardServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
