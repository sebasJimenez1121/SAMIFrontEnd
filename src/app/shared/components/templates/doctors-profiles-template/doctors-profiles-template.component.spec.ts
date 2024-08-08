import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsProfilesTemplateComponent } from './doctors-profiles-template.component';

describe('DoctorsProfilesTemplateComponent', () => {
  let component: DoctorsProfilesTemplateComponent;
  let fixture: ComponentFixture<DoctorsProfilesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorsProfilesTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorsProfilesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
