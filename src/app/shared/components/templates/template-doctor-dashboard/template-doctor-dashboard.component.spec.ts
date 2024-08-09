import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDoctorDashboardComponent } from './template-doctor-dashboard.component';

describe('TemplateDoctorDashboardComponent', () => {
  let component: TemplateDoctorDashboardComponent;
  let fixture: ComponentFixture<TemplateDoctorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDoctorDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDoctorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
