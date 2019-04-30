import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosTarjetaComponent } from './heros-tarjeta.component';

describe('HerosTarjetaComponent', () => {
  let component: HerosTarjetaComponent;
  let fixture: ComponentFixture<HerosTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
