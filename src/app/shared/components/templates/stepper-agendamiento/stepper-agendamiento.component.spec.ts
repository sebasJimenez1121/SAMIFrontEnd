import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAgendamientoComponent } from './stepper-agendamiento.component';

describe('StepperAgendamientoComponent', () => {
  let component: StepperAgendamientoComponent;
  let fixture: ComponentFixture<StepperAgendamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperAgendamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperAgendamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
