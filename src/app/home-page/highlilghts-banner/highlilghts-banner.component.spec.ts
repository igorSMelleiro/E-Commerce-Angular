import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlilghtsBannerComponent } from './highlilghts-banner.component';

describe('HighlilghtsBannerComponent', () => {
  let component: HighlilghtsBannerComponent;
  let fixture: ComponentFixture<HighlilghtsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlilghtsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlilghtsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
