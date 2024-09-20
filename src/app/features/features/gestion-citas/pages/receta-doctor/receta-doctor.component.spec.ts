import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaDoctorComponent } from './receta-doctor.component';

describe('RecetaDoctorComponent', () => {
  let component: RecetaDoctorComponent;
  let fixture: ComponentFixture<RecetaDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetaDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
