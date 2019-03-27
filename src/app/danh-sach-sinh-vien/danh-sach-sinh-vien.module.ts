import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {ViewPage} from '../view/view.page';

import { DanhSachSinhVienPage } from './danh-sach-sinh-vien.page';

const routes: Routes = [
  {
    path: '',
    component: DanhSachSinhVienPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DanhSachSinhVienPage
      }
    ])
  ],
  declarations: [DanhSachSinhVienPage, ViewPage],
  entryComponents: [DanhSachSinhVienPage, ViewPage]
})
export class DanhSachSinhVienPageModule {}
