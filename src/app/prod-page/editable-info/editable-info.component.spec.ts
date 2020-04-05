import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableInfoComponent } from './editable-info.component';

describe('EditableInfoComponent', () => {
  let component: EditableInfoComponent;
  let fixture: ComponentFixture<EditableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
