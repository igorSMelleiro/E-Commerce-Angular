import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseSideFiltersComponent } from './showcase-side-filters.component';

describe('ShowcaseSideFiltersComponent', () => {
  let component: ShowcaseSideFiltersComponent;
  let fixture: ComponentFixture<ShowcaseSideFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseSideFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseSideFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
