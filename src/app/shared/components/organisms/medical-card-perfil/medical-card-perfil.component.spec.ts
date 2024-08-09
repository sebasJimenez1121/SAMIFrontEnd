import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCardPerfilComponent } from './medical-card-perfil.component';

describe('MedicalCardPerfilComponent', () => {
  let component: MedicalCardPerfilComponent;
  let fixture: ComponentFixture<MedicalCardPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalCardPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalCardPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
