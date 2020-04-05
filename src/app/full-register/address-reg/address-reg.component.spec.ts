import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRegComponent } from './address-reg.component';

describe('AddressRegComponent', () => {
  let component: AddressRegComponent;
  let fixture: ComponentFixture<AddressRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
