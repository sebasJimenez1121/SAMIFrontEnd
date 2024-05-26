import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardServicesComponent } from './content-card-services.component';

describe('ContentCardServicesComponent', () => {
  let component: ContentCardServicesComponent;
  let fixture: ComponentFixture<ContentCardServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
