import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardPerfilDoctorComponent } from './content-card-perfil-doctor.component';

describe('ContentCardPerfilDoctorComponent', () => {
  let component: ContentCardPerfilDoctorComponent;
  let fixture: ComponentFixture<ContentCardPerfilDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardPerfilDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardPerfilDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
