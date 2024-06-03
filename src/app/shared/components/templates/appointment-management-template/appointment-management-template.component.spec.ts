import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentManagementTemplateComponent } from './appointment-management-template.component';

describe('AppointmentManagementTemplateComponent', () => {
  let component: AppointmentManagementTemplateComponent;
  let fixture: ComponentFixture<AppointmentManagementTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentManagementTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentManagementTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
