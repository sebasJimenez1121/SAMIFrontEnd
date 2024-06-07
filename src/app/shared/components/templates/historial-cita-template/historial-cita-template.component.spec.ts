import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialCitaTemplateComponent } from './historial-cita-template.component';

describe('HistorialCitaTemplateComponent', () => {
  let component: HistorialCitaTemplateComponent;
  let fixture: ComponentFixture<HistorialCitaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialCitaTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialCitaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



