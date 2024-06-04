import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesVisualizarCitaComponent } from './pages-visualizar-cita.component';

describe('PagesVisualizarCitaComponent', () => {
  let component: PagesVisualizarCitaComponent;
  let fixture: ComponentFixture<PagesVisualizarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesVisualizarCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesVisualizarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
