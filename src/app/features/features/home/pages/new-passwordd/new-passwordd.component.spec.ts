import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassworddComponent } from './new-passwordd.component';

describe('NewPassworddComponent', () => {
  let component: NewPassworddComponent;
  let fixture: ComponentFixture<NewPassworddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPassworddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPassworddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
