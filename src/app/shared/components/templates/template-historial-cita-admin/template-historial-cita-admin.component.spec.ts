import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHistorialCitaAdminComponent } from './template-historial-cita-admin.component';

describe('TemplateHistorialCitaAdminComponent', () => {
  let component: TemplateHistorialCitaAdminComponent;
  let fixture: ComponentFixture<TemplateHistorialCitaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateHistorialCitaAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateHistorialCitaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
