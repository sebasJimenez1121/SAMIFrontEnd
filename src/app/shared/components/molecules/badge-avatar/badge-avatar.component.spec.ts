import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeAvatarComponent } from './badge-avatar.component';

describe('BadgeAvatarComponent', () => {
  let component: BadgeAvatarComponent;
  let fixture: ComponentFixture<BadgeAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
