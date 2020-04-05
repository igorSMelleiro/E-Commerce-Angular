import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCardComponent } from './light-card.component';

describe('LightCardComponent', () => {
  let component: LightCardComponent;
  let fixture: ComponentFixture<LightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
