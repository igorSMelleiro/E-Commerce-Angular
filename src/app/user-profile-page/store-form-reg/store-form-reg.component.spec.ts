import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFormRegComponent } from './store-form-reg.component';

describe('StoreFormRegComponent', () => {
  let component: StoreFormRegComponent;
  let fixture: ComponentFixture<StoreFormRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFormRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFormRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
