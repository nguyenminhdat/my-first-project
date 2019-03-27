import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from '@ionic/angular';
@Component({
  selector: "app-show",
  templateUrl: "./view.page.html",
  styleUrls: ["./view.page.scss"]
})
export class ViewPage implements OnInit {
  constructor(public modalController: ModalController,private  navParams: NavParams) {}
 data = null;
  ngOnInit() {
    this.data = this.navParams.get('data');
    console.log(this.data);
  }
  close() {
    this.modalController.dismiss();
  }

  today = new Date().getTime();
}


