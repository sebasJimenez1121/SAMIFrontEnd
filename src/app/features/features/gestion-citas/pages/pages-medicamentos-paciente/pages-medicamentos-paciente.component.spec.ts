import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesMedicamentosPacienteComponent } from './pages-medicamentos-paciente.component';

describe('PagesMedicamentosPacienteComponent', () => {
  let component: PagesMedicamentosPacienteComponent;
  let fixture: ComponentFixture<PagesMedicamentosPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesMedicamentosPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesMedicamentosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
