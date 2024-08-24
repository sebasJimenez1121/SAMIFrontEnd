import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRecordTemplateComponent } from './tracking-record-template.component';

describe('TrackingRecordTemplateComponent', () => {
  let component: TrackingRecordTemplateComponent;
  let fixture: ComponentFixture<TrackingRecordTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackingRecordTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackingRecordTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
