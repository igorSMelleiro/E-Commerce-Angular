import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdInfoDetailComponent } from './prod-info-detail.component';

describe('ProdInfoDetailComponent', () => {
  let component: ProdInfoDetailComponent;
  let fixture: ComponentFixture<ProdInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
