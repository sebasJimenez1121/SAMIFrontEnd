import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerfilDoctorComponent } from './modal-perfil-doctor.component';

describe('ModalPerfilDoctorComponent', () => {
  let component: ModalPerfilDoctorComponent;
  let fixture: ComponentFixture<ModalPerfilDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPerfilDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPerfilDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
