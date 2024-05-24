import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePrincipalComponent } from './title-principal.component';

describe('TitlePrincipalComponent', () => {
  let component: TitlePrincipalComponent;
  let fixture: ComponentFixture<TitlePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlePrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitlePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
