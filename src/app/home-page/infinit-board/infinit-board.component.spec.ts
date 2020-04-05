import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitBoardComponent } from './infinit-board.component';

describe('InfinitBoardComponent', () => {
  let component: InfinitBoardComponent;
  let fixture: ComponentFixture<InfinitBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinitBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
