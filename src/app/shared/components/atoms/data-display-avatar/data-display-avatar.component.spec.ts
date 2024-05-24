import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayAvatarComponent } from './data-display-avatar.component';

describe('DataDisplayAvatarComponent', () => {
  let component: DataDisplayAvatarComponent;
  let fixture: ComponentFixture<DataDisplayAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDisplayAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDisplayAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
