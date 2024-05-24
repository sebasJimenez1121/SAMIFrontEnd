import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayChipComponent } from './data-display-chip.component';

describe('DataDisplayChipComponent', () => {
  let component: DataDisplayChipComponent;
  let fixture: ComponentFixture<DataDisplayChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDisplayChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDisplayChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
