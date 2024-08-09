import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePacienteTemplateComponent } from './home-paciente-template.component';

describe('HomePacienteTemplateComponent', () => {
  let component: HomePacienteTemplateComponent;
  let fixture: ComponentFixture<HomePacienteTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePacienteTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePacienteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
