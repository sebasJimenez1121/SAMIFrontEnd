import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisplayDataComponent } from './modal-display-data.component';

describe('ModalDisplayDataComponent', () => {
  let component: ModalDisplayDataComponent;
  let fixture: ComponentFixture<ModalDisplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDisplayDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
