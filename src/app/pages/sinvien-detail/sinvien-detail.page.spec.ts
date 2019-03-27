import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinvienDetailPage } from './sinvien-detail.page';

describe('SinvienDetailPage', () => {
  let component: SinvienDetailPage;
  let fixture: ComponentFixture<SinvienDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinvienDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinvienDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
