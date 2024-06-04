import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAgendarCitaComponent } from './pages-agendar-cita.component';

describe('PagesAgendarCitaComponent', () => {
  let component: PagesAgendarCitaComponent;
  let fixture: ComponentFixture<PagesAgendarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesAgendarCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesAgendarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
