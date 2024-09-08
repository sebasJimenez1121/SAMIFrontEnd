import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMedicalHistoryComponent } from './template-medical-history.component';

describe('TemplateMedicalHistoryComponent', () => {
  let component: TemplateMedicalHistoryComponent;
  let fixture: ComponentFixture<TemplateMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateMedicalHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
