import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayListComponent } from './data-display-list.component';

describe('DataDisplayListComponent', () => {
  let component: DataDisplayListComponent;
  let fixture: ComponentFixture<DataDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDisplayListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
