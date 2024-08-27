import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSchedulePageComponentComponent } from './appointment-schedule-page-component.component';

describe('AppointmentSchedulePageComponentComponent', () => {
  let component: AppointmentSchedulePageComponentComponent;
  let fixture: ComponentFixture<AppointmentSchedulePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentSchedulePageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentSchedulePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
