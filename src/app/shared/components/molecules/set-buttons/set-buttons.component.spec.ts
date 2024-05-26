import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetButtonsComponent } from './set-buttons.component';

describe('SetButtonsComponent', () => {
  let component: SetButtonsComponent;
  let fixture: ComponentFixture<SetButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
