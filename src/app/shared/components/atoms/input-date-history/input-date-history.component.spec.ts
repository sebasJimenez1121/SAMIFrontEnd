import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateHistoryComponent } from './input-date-history.component';

describe('InputDateHistoryComponent', () => {
  let component: InputDateHistoryComponent;
  let fixture: ComponentFixture<InputDateHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputDateHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputDateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
