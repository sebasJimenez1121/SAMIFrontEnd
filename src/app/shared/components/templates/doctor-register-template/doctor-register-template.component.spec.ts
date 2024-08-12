import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterTemplateComponent } from './doctor-register-template.component';

describe('DoctorRegisterTemplateComponent', () => {
  let component: DoctorRegisterTemplateComponent;
  let fixture: ComponentFixture<DoctorRegisterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorRegisterTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorRegisterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
