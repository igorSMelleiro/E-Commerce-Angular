import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRegisterPageComponent } from './prod-register-page.component';

describe('ProdRegisterPageComponent', () => {
  let component: ProdRegisterPageComponent;
  let fixture: ComponentFixture<ProdRegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdRegisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
