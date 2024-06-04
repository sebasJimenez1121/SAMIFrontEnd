import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesGestionCitasComponent } from './pages-gestion-citas.component';

describe('PagesGestionCitasComponent', () => {
  let component: PagesGestionCitasComponent;
  let fixture: ComponentFixture<PagesGestionCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesGestionCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesGestionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
