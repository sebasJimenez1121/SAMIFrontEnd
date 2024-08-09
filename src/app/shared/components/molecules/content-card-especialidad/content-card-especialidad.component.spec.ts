import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardEspecialidadComponent } from './content-card-especialidad.component';

describe('ContentCardEspecialidadComponent', () => {
  let component: ContentCardEspecialidadComponent;
  let fixture: ComponentFixture<ContentCardEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
