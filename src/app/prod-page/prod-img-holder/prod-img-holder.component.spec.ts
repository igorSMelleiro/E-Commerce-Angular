import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdImgHolderComponent } from './prod-img-holder.component';

describe('ProdImgHolderComponent', () => {
  let component: ProdImgHolderComponent;
  let fixture: ComponentFixture<ProdImgHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdImgHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdImgHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
