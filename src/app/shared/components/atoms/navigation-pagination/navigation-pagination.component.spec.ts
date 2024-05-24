import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPaginationComponent } from './navigation-pagination.component';

describe('NavigationPaginationComponent', () => {
  let component: NavigationPaginationComponent;
  let fixture: ComponentFixture<NavigationPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
