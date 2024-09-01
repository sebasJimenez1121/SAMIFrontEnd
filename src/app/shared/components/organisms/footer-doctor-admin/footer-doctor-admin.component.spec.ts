import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDoctorAdminComponent } from './footer-doctor-admin.component';

describe('FooterDoctorAdminComponent', () => {
  let component: FooterDoctorAdminComponent;
  let fixture: ComponentFixture<FooterDoctorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterDoctorAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterDoctorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
