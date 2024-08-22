import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPassworddComponent } from './recover-passwordd.component';

describe('RecoverPassworddComponent', () => {
  let component: RecoverPassworddComponent;
  let fixture: ComponentFixture<RecoverPassworddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoverPassworddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoverPassworddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
