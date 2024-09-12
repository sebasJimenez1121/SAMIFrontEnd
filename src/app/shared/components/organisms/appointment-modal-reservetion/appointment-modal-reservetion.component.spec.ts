import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentModalReservetionComponent } from './appointment-modal-reservetion.component';

describe('AppointmentModalReservetionComponent', () => {
  let component: AppointmentModalReservetionComponent;
  let fixture: ComponentFixture<AppointmentModalReservetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentModalReservetionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentModalReservetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
