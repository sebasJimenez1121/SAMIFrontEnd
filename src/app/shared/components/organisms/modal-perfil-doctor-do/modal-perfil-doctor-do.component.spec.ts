import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerfilDoctorDoComponent } from './modal-perfil-doctor-do.component';

describe('ModalPerfilDoctorDoComponent', () => {
  let component: ModalPerfilDoctorDoComponent;
  let fixture: ComponentFixture<ModalPerfilDoctorDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPerfilDoctorDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPerfilDoctorDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
