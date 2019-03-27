import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachSinhVienPage } from './danh-sach-sinh-vien.page';

describe('DanhSachSinhVienPage', () => {
  let component: DanhSachSinhVienPage;
  let fixture: ComponentFixture<DanhSachSinhVienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachSinhVienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachSinhVienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
