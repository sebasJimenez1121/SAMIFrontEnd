import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminTemplateComponent } from './home-admin-template.component';

describe('HomeAdminTemplateComponent', () => {
  let component: HomeAdminTemplateComponent;
  let fixture: ComponentFixture<HomeAdminTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAdminTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAdminTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
