import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHerosComponent } from './info-heros.component';

describe('InfoHerosComponent', () => {
  let component: InfoHerosComponent;
  let fixture: ComponentFixture<InfoHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
