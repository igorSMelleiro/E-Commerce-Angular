import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyLoginComponent } from './easy-login.component';

describe('EasyLoginComponent', () => {
  let component: EasyLoginComponent;
  let fixture: ComponentFixture<EasyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
