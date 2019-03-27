import { Component, OnInit } from '@angular/core';
import { subject, TodoService } from '../../service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    Subject: subject={
    ma_lop: '',
    ten_lop: '',  
    time: new Date().getTime(),
    time_start: null,
    time_end: null,
    soluong: null,
    buoi: 1
    }
  
  subjectId = null;  
  constructor(   
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private todoService: TodoService,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
    this.subjectId = this.route.snapshot.params['id'];
    if (this.subjectId){
      this.loadSubject();
    }
  }

  async loadSubject() {
    const loading = await this.loadingController.create({
      // content: 'Loading...'
      });
      await loading.present();

    this.todoService.getLopbyId(this.subjectId).subscribe(res => {
      loading.dismiss();
      this.Subject = res
    });
  }

  async saveSubject(){
    const loading = await this.loadingController.create({
      // content: 'Saving...'
      });
      await loading.present();
      if (this.subjectId){
        this.todoService.updateLop(this.Subject, this.subjectId ).then(() =>{
          loading.dismiss();
          this.navCtrl.pop();
          // this.navCtrl.setRoot('HomePage');
        });
      } else {
        this.todoService.addLop(this.Subject).then(() =>{
          loading.dismiss();
          this.navCtrl.pop();
        });
      }
  }

  Cancel(){
    this.navCtrl.pop();
  }

}
