import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrescriptionMedicationsComponent } from './modal-prescription-medications.component';

describe('ModalPrescriptionMedicationsComponent', () => {
  let component: ModalPrescriptionMedicationsComponent;
  let fixture: ComponentFixture<ModalPrescriptionMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPrescriptionMedicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPrescriptionMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
