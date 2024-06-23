import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPriceComponent } from './button-price.component';

describe('ButtonPriceComponent', () => {
  let component: ButtonPriceComponent;
  let fixture: ComponentFixture<ButtonPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
