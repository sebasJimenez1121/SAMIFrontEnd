import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBookingAppointmentTemplateComponent } from './modal-booking-appointment-template.component';

describe('ModalBookingAppointmentTemplateComponent', () => {
  let component: ModalBookingAppointmentTemplateComponent;
  let fixture: ComponentFixture<ModalBookingAppointmentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalBookingAppointmentTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBookingAppointmentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
