import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomHerosComponent } from './random-heros.component';

describe('RandomHerosComponent', () => {
  let component: RandomHerosComponent;
  let fixture: ComponentFixture<RandomHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
