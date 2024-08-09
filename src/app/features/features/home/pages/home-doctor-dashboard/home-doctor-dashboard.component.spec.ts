import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDoctorDashboardComponent } from './home-doctor-dashboard.component';

describe('HomeDoctorDashboardComponent', () => {
  let component: HomeDoctorDashboardComponent;
  let fixture: ComponentFixture<HomeDoctorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDoctorDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDoctorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
