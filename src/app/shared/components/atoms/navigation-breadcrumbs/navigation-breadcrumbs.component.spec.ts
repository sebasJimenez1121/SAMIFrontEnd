import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBreadcrumbsComponent } from './navigation-breadcrumbs.component';

describe('NavigationBreadcrumbsComponent', () => {
  let component: NavigationBreadcrumbsComponent;
  let fixture: ComponentFixture<NavigationBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationBreadcrumbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
