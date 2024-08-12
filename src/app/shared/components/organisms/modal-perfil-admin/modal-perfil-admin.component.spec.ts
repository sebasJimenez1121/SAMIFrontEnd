import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerfilAdminComponent } from './modal-perfil-admin.component';

describe('ModalPerfilAdminComponent', () => {
  let component: ModalPerfilAdminComponent;
  let fixture: ComponentFixture<ModalPerfilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPerfilAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPerfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
