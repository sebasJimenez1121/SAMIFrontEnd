import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpecialtiesModalComponent } from './select-specialties-modal.component';

describe('SelectSpecialtiesModalComponent', () => {
  let component: SelectSpecialtiesModalComponent;
  let fixture: ComponentFixture<SelectSpecialtiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectSpecialtiesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSpecialtiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
