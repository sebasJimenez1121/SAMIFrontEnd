import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateHistoryComponent } from './modal-create-history.component';

describe('ModalCreateHistoryComponent', () => {
  let component: ModalCreateHistoryComponent;
  let fixture: ComponentFixture<ModalCreateHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCreateHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
