import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseTopFiltersComponent } from './showcase-top-filters.component';

describe('ShowcaseTopFiltersComponent', () => {
  let component: ShowcaseTopFiltersComponent;
  let fixture: ComponentFixture<ShowcaseTopFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseTopFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseTopFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
