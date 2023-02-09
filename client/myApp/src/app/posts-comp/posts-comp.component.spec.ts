import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCompComponent } from './posts-comp.component';

describe('PostsCompComponent', () => {
  let component: PostsCompComponent;
  let fixture: ComponentFixture<PostsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
