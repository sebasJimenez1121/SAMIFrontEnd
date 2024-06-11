import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPagoComponent } from './buttons-pago.component';

describe('ButtonsPagoComponent', () => {
  let component: ButtonsPagoComponent;
  let fixture: ComponentFixture<ButtonsPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
