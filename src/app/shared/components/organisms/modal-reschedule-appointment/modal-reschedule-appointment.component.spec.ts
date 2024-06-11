import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRescheduleAppointmentComponent } from './modal-reschedule-appointment.component';

describe('ModalRescheduleAppointmentComponent', () => {
  let component: ModalRescheduleAppointmentComponent;
  let fixture: ComponentFixture<ModalRescheduleAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRescheduleAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRescheduleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
