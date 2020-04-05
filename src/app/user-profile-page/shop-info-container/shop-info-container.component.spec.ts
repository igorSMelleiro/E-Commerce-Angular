import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInfoContainerComponent } from './shop-info-container.component';

describe('ShopInfoContainerComponent', () => {
  let component: ShopInfoContainerComponent;
  let fixture: ComponentFixture<ShopInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
