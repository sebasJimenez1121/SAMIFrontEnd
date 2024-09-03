import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTableComponent } from './medical-table.component';

describe('MedicalTableComponent', () => {
  let component: MedicalTableComponent;
  let fixture: ComponentFixture<MedicalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
