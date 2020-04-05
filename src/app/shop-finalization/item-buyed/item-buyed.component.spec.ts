import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBuyedComponent } from './item-buyed.component';

describe('ItemBuyedComponent', () => {
  let component: ItemBuyedComponent;
  let fixture: ComponentFixture<ItemBuyedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBuyedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBuyedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
