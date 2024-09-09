import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePrescriptionMedicationsComponent } from './template-prescription-medications.component';

describe('TemplatePrescriptionMedicationsComponent', () => {
  let component: TemplatePrescriptionMedicationsComponent;
  let fixture: ComponentFixture<TemplatePrescriptionMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatePrescriptionMedicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatePrescriptionMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
