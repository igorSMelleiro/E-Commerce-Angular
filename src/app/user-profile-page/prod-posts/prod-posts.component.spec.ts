import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPostsComponent } from './prod-posts.component';

describe('ProdPostsComponent', () => {
  let component: ProdPostsComponent;
  let fixture: ComponentFixture<ProdPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
