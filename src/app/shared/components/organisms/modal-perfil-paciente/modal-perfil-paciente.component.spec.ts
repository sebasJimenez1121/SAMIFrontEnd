import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerfilPacienteComponent } from './modal-perfil-paciente.component';

describe('ModalPerfilPacienteComponent', () => {
  let component: ModalPerfilPacienteComponent;
  let fixture: ComponentFixture<ModalPerfilPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPerfilPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPerfilPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
