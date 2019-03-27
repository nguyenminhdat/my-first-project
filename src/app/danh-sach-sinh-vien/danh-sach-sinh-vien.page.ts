import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";


import { ViewPage } from "../view/view.page";
import { strict } from 'assert';
import { ResultPage } from '../result/result.page';

@Component({
  selector: 'app-danh-sach-sinh-vien',
  templateUrl: './danh-sach-sinh-vien.page.html',
  styleUrls: ['./danh-sach-sinh-vien.page.scss'],
})
export class DanhSachSinhVienPage implements OnInit {

  status: Boolean;
  data = [
    {
      mssv: "300117123",
      name: "Nguyễn Minh Đạt",
      status: false
    },
    {
      mssv: "300117456",
      name: "Đỗ Phúc Lộc",
      status: false
    },
    {
      mssv: "300117789",
      name: "Dương Bình Đoàn",
      status: false
    },
    {
      mssv: "3001175783",
      name: "Lâm Nguyễn Khoa",
      status: false
    }
  ];

  constructor(
    public modalController: ModalController,
    private router: Router ,
    public alertController: AlertController, 
  ) { }

  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ViewPage,
      componentProps: { data: this.data }
    });
    return await modal.present();
  }

  goBack(){
    this.router.navigate(['home']);
  }
  

}
