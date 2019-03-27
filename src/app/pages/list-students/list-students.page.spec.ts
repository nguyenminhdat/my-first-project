import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentsPage } from './list-students.page';

describe('ListStudentsPage', () => {
  let component: ListStudentsPage;
  let fixture: ComponentFixture<ListStudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
