import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarCitaAdminComponent } from './agendar-cita-admin.component';

describe('AgendarCitaAdminComponent', () => {
  let component: AgendarCitaAdminComponent;
  let fixture: ComponentFixture<AgendarCitaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarCitaAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendarCitaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
