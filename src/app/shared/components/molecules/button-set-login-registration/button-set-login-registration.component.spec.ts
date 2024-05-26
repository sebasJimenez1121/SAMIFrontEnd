import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSetLoginRegistrationComponent } from './button-set-login-registration.component';

describe('ButtonSetLoginRegistrationComponent', () => {
  let component: ButtonSetLoginRegistrationComponent;
  let fixture: ComponentFixture<ButtonSetLoginRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSetLoginRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSetLoginRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
