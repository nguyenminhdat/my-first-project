import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassPage } from './list-class.page';

describe('ListClassPage', () => {
  let component: ListClassPage;
  let fixture: ComponentFixture<ListClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
