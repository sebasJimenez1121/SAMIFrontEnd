import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTerciarioComponent } from './title-terciario.component';

describe('TitleTerciarioComponent', () => {
  let component: TitleTerciarioComponent;
  let fixture: ComponentFixture<TitleTerciarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleTerciarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleTerciarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
