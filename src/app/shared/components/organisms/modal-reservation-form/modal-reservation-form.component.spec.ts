import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservationFormComponent } from './modal-reservation-form.component';

describe('ModalReservationFormComponent', () => {
  let component: ModalReservationFormComponent;
  let fixture: ComponentFixture<ModalReservationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalReservationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
