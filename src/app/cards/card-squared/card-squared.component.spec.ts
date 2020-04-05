import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSquaredComponent } from './card-squared.component';

describe('CardSquaredComponent', () => {
  let component: CardSquaredComponent;
  let fixture: ComponentFixture<CardSquaredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSquaredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSquaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
