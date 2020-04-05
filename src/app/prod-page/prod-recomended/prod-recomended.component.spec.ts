import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRecomendedComponent } from './prod-recomended.component';

describe('ProdRecomendedComponent', () => {
  let component: ProdRecomendedComponent;
  let fixture: ComponentFixture<ProdRecomendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdRecomendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
