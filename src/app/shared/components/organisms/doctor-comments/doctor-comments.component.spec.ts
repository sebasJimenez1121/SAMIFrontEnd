import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCommentsComponent } from './doctor-comments.component';

describe('DoctorCommentsComponent', () => {
  let component: DoctorCommentsComponent;
  let fixture: ComponentFixture<DoctorCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
