import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAppointmentRegistrationComponent } from './modal-appointment-registration.component';

describe('ModalAppointmentRegistrationComponent', () => {
  let component: ModalAppointmentRegistrationComponent;
  let fixture: ComponentFixture<ModalAppointmentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAppointmentRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAppointmentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
