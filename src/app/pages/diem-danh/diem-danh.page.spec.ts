import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemDanhPage } from './diem-danh.page';

describe('DiemDanhPage', () => {
  let component: DiemDanhPage;
  let fixture: ComponentFixture<DiemDanhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiemDanhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiemDanhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
