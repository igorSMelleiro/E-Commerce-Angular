import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPostsFormComponent } from './prod-posts-form.component';

describe('ProdPostsFormComponent', () => {
  let component: ProdPostsFormComponent;
  let fixture: ComponentFixture<ProdPostsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdPostsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdPostsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
