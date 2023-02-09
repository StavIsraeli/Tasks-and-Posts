import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCompComponent } from './todos-comp.component';

describe('TodosCompComponent', () => {
  let component: TodosCompComponent;
  let fixture: ComponentFixture<TodosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
