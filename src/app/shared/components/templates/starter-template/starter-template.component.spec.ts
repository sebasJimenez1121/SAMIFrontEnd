import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterTemplateComponent } from './starter-template.component';

describe('StarterTemplateComponent', () => {
  let component: StarterTemplateComponent;
  let fixture: ComponentFixture<StarterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarterTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
