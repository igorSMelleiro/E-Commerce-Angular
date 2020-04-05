import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFinalizationComponent } from './shop-finalization.component';

describe('ShopFinalizationComponent', () => {
  let component: ShopFinalizationComponent;
  let fixture: ComponentFixture<ShopFinalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFinalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
