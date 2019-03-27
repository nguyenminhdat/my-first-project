import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiemDanhPage } from './diem-danh.page';
import { ResultPage } from './../../result/result.page';
const routes: Routes = [
  {
    path: '',
    component: DiemDanhPage
  }
];

@NgModule({
  imports: [
 
  CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiemDanhPage,ResultPage],
  entryComponents: [DiemDanhPage,ResultPage]
})
export class DiemDanhPageModule {}
