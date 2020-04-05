import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdShowcaseComponent } from './prod-showcase.component';

describe('ProdShowcaseComponent', () => {
  let component: ProdShowcaseComponent;
  let fixture: ComponentFixture<ProdShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
