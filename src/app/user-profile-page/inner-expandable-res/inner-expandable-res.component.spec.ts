import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerExpandableResComponent } from './inner-expandable-res.component';

describe('InnerExpandableResComponent', () => {
  let component: InnerExpandableResComponent;
  let fixture: ComponentFixture<InnerExpandableResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerExpandableResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerExpandableResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
