import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInformationComponent } from './medical-information.component';

describe('MedicalInformationComponent', () => {
  let component: MedicalInformationComponent;
  let fixture: ComponentFixture<MedicalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
