import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLinksRegisterComponent } from './set-links-register.component';

describe('SetLinksRegisterComponent', () => {
  let component: SetLinksRegisterComponent;
  let fixture: ComponentFixture<SetLinksRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetLinksRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetLinksRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
