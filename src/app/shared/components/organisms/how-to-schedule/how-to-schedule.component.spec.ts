import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToScheduleComponent } from './how-to-schedule.component';

describe('HowToScheduleComponent', () => {
  let component: HowToScheduleComponent;
  let fixture: ComponentFixture<HowToScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
