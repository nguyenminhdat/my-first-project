import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { TodoService, student, subject } from "../../service/todo.service";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.page.html',
  styleUrls: ['./list-students.page.scss'],
})
export class ListStudentsPage implements OnInit {
  Students=[];
  Ma_lop: string;
  class=[]
  constructor(
    public alertController: AlertController, 
    private router: Router,
    public route: ActivatedRoute,
    public navCtrl: NavController,
    private todoService: TodoService,
 
  ) { }

  ngOnInit() {
    this.todoService.getStudent().subscribe(res => {
          // this.Students = res;
          console.log(res)
          res.forEach(e =>{
            if(e.ma_lop === _ma_lop){
              this.Students.push(e) 
            }
          });
    });

    this.todoService.getLop().subscribe(res => {
      console.log(res)
      res.forEach(e =>{
        if(e.ma_lop == _ma_lop)
        this.class.push(e)
      });
    });  


    let _ma_lop = this.route.snapshot.params['id'];
   console.log(_ma_lop); 
    this.Ma_lop = _ma_lop;
  }
  goBack(){
    this.navCtrl.navigateBack('/list-class');
  }

  removeStudent(item){
    this.todoService.delStudent(item.id);
  }

}
