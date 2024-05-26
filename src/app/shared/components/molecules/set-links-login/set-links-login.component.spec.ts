import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLinksLoginComponent } from './set-links-login.component';

describe('SetLinksLoginComponent', () => {
  let component: SetLinksLoginComponent;
  let fixture: ComponentFixture<SetLinksLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetLinksLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetLinksLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
