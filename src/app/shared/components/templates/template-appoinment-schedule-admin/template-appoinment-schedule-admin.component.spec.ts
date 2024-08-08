import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAppoinmentScheduleAdminComponent } from './template-appoinment-schedule-admin.component';

describe('TemplateAppoinmentScheduleAdminComponent', () => {
  let component: TemplateAppoinmentScheduleAdminComponent;
  let fixture: ComponentFixture<TemplateAppoinmentScheduleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateAppoinmentScheduleAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateAppoinmentScheduleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
