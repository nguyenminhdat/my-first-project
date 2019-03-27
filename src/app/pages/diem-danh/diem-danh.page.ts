import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController, ModalController } from "@ionic/angular";
import { TodoService } from "../../service/todo.service";
import { ResultPage } from "../../result/result.page";
import { result, subject } from './../../service/todo.service';
import * as firebase from 'firebase';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Component({
  selector: "app-diem-danh",
  templateUrl: "./diem-danh.page.html",
  styleUrls: ["./diem-danh.page.scss"]
})
export class DiemDanhPage implements OnInit {
  today = new Date().getTime();
  status: Boolean;
  Students = [];
  Ma_lop: string;
  class = [];

  Subject: subject = {
    ma_lop: "",
    ten_lop: "",
    time: new Date().getTime(),
    time_start: null,
    time_end: null,
    soluong: null,
    buoi: null
  };
  kq=[];
  Results : result[]=[];


  subjectId = null;
  edt_buoi:string="";
  constructor(
    public alertController: AlertController,
    public route: ActivatedRoute,
    public navCtrl: NavController,
    private todoService: TodoService,
    private modalController: ModalController,
    private loadingController: LoadingController
  ) {}
  // _time: number,
  // _ten_lop: string,
  // _ma_lop: string,
  // _time_start: number,
  // _time_end: number,
  // _so_luong: number,
  // _buoi: number,
  // _name: string,
  // _mssv: number,
  // _status: boolean,
  // _n_co: number,
  // _n_vang: number,
  // _note: string,
  // _waring: string,

  ngOnInit() {
  // _time: number,
  // _ten_lop: string,
  // _ma_lop: string,
  // _time_start: number,
  // _time_end: number,
  // _so_luong: number,
  // _buoi: number,
  // _name: string,
  // _mssv: number,
  // _status: boolean,
  // _n_co: number,
  // _n_vang: number,
  // _note: string,
  // _waring: string,
  
  let _ma_lop = this.route.snapshot.params["id"];
  console.log(_ma_lop);
  this.Ma_lop = _ma_lop;
  this.subjectId = _ma_lop;
  if (this.subjectId) {
    this.loadSubject();
  } 

    this.todoService.getLop().subscribe(res => {
      console.log(res);
      let Objecttam;
      res.forEach(e => {
        if (e.ma_lop === _ma_lop){
           this.class.push(e);
           console.log(this.class)

           this.todoService.getStudent().subscribe(res => {
            // console.log(res);
             res.forEach(e => {
              if (e.ma_lop === this.Ma_lop) {
                this.Students.push(e);
                console.log(e)
                 Objecttam={
                  _time: this.today,
                  _ten_lop: this.class[0].ten_lop,
                  _ma_lop: this.Ma_lop,
                  _time_start: Number(this.class[0].time_start),
                  _time_end: Number(this.class[0].time_end),
                  _so_luong: Number(this.class[0].soluong),
                  _buoi: Number(this.class[0].buoi),
                  _name: e.name,
                  _mssv: Number(e.mssv),
                  _status: e.status,
                  _n_co:Number(e.n_co),
                  _n_vang: Number(e.n_vang),
                  _note: e.note,
                  _waring: e.waring,
                 }
                 this.kq.push(Objecttam);
               }
             });
             
          });
          
        }
    
      });
    });


  }
  btn_Save(){
    // this.kq.forEach(e=>{
    //   this.todoService.addResult(e)
    // })
    console.log(this.edt_buoi)   
  }
  async loadSubject() {
    const loading = await this.loadingController.create({
      // content: 'Loading...'
    });
    await loading.present();

    this.todoService.getLopbyId(this.subjectId).subscribe(res => {
      loading.dismiss();
      this.Subject = res;
    });
  }
  async saveSubject() {
    const loading = await this.loadingController.create({
      // content: 'Saving...'
    });
    await loading.present();
    //  this.todoService.addResult(this.Results).then(() => {
    //     loading.dismiss();
    //     this.navCtrl.navigateBack("/list-class");
    //     // this.navCtrl.setRoot('HomePage');
    //   });
    }


    // addSV(){

    //   firebase.database().ref('results/').push({
    //     _ten_lop: h,
  
    //   });
    // }

  goBack() {
    this.navCtrl.navigateBack("/list-class");
  }

  //
  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultPage,
      componentProps: { data: this.Students }
    });
    return await modal.present();
  }
}
