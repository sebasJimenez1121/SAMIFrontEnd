import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEspecialidadComponent } from './card-especialidad.component';

describe('CardEspecialidadComponent', () => {
  let component: CardEspecialidadComponent;
  let fixture: ComponentFixture<CardEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
