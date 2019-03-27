import { Component, OnInit } from "@angular/core";
import { ModalController, AlertController, LoadingController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

import { TodoService, subject, student } from "./../service/todo.service";


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit{

  Subjects: subject[];
  Students: student[];


  constructor(
    public alertController: AlertController, 
    private router: Router,
    public navCtrl: NavController,
    private todoService: TodoService,
    private _route: ActivatedRoute
 
    ) {}

    ngOnInit(){
      this.todoService.getLop().subscribe(res => {
        this.Subjects = res;
      });     
    }

  goBack(){
    this.navCtrl.pop();
  }

  removeLop(item){
    this.todoService.delLop(item.id);
  }
  goListStudent(id){
  }
  
  NumberOfSinhVienByClass(_ma_lop: number) {
    if (_ma_lop == 0)
      return this.Students.length;
    else {
      return this.Students.filter(g => g.ma_lop == _ma_lop.toString()).length;
    }
  }



  }