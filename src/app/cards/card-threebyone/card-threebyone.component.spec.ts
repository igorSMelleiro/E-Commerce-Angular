import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThreebyoneComponent } from './card-threebyone.component';

describe('CardThreebyoneComponent', () => {
  let component: CardThreebyoneComponent;
  let fixture: ComponentFixture<CardThreebyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardThreebyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardThreebyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
