import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBottomlessComponent } from './button-bottomless.component';

describe('ButtonBottomlessComponent', () => {
  let component: ButtonBottomlessComponent;
  let fixture: ComponentFixture<ButtonBottomlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonBottomlessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonBottomlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
