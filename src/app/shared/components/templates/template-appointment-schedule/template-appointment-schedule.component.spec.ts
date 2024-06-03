import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAppointmentScheduleComponent } from './template-appointment-schedule.component';

describe('TemplateAppointmentScheduleComponent', () => {
  let component: TemplateAppointmentScheduleComponent;
  let fixture: ComponentFixture<TemplateAppointmentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateAppointmentScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateAppointmentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
