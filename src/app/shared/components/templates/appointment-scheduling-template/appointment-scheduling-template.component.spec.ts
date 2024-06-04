import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSchedulingTemplateComponent } from './appointment-scheduling-template.component';

describe('AppointmentSchedulingTemplateComponent', () => {
  let component: AppointmentSchedulingTemplateComponent;
  let fixture: ComponentFixture<AppointmentSchedulingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentSchedulingTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentSchedulingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
