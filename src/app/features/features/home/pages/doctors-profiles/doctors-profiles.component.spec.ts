import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsProfilesComponent } from './doctors-profiles.component';

describe('DoctorsProfilesComponent', () => {
  let component: DoctorsProfilesComponent;
  let fixture: ComponentFixture<DoctorsProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorsProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorsProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
