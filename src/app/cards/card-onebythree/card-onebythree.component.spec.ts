import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOnebythreeComponent } from './card-onebythree.component';

describe('CardOnebythreeComponent', () => {
  let component: CardOnebythreeComponent;
  let fixture: ComponentFixture<CardOnebythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOnebythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOnebythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
