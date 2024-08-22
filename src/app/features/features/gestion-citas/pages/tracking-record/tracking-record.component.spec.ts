import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRecordComponent } from './tracking-record.component';

describe('TrackingRecordComponent', () => {
  let component: TrackingRecordComponent;
  let fixture: ComponentFixture<TrackingRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackingRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
