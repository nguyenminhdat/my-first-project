import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

import { TodoService, subject, student } from "../../service/todo.service";

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.page.html',
  styleUrls: ['./list-class.page.scss'],
})
export class ListClassPage implements OnInit {
  Subjects: subject[];
  Students = [];


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
      // // console.log(id_mon);
      // this.navCtrl.push(ListStudentsPage,{id_mon:id_mon});
  }
  
  // NumberOfSinhVienByClass(_ma_lop: number) {
  //     return this.Students.forEach(e =>{
  //       if(e.ma_lop == _ma_lop)
  //       this.Students.push(e).length;
  //   }
  // )};
  
  


  }