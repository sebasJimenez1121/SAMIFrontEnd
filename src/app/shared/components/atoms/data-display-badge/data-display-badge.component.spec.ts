import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayBadgeComponent } from './data-display-badge.component';

describe('DataDisplayBadgeComponent', () => {
  let component: DataDisplayBadgeComponent;
  let fixture: ComponentFixture<DataDisplayBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDisplayBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDisplayBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
