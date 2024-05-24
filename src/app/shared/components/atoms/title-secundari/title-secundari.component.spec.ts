import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSecundariComponent } from './title-secundari.component';

describe('TitleSecundariComponent', () => {
  let component: TitleSecundariComponent;
  let fixture: ComponentFixture<TitleSecundariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleSecundariComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleSecundariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
