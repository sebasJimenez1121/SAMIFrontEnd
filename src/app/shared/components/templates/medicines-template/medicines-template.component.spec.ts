import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesTemplateComponent } from './medicines-template.component';

describe('MedicinesTemplateComponent', () => {
  let component: MedicinesTemplateComponent;
  let fixture: ComponentFixture<MedicinesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicinesTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicinesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
