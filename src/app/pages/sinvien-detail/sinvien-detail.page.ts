import { Component, OnInit } from '@angular/core';
import { TodoService, student } from '../../service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { subject } from './../../service/todo.service';
@Component({
  selector: 'app-sinvien-detail',
  templateUrl: './sinvien-detail.page.html',
  styleUrls: ['./sinvien-detail.page.scss'],
})
export class SinvienDetailPage implements OnInit {

  Student: student={
      mssv: '',
      name: '',
      status: false,
      n_co: '',
      n_vang: '',
      note: '',
      waring: '', // Dùng để chứa thuộc tính màu, khi giáo viên cảnh báo or ghi chú sv sẽ đổi màu nổi bật
      ma_lop: ''
  }

  studentId = null;  
  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private todoService: TodoService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.studentId = this.route.snapshot.params['id'];
    if (this.studentId){
      this.loadStudent();
    }
  }

  async loadStudent() {
    const loading = await this.loadingController.create({
      // content: 'Loading...'
      });
      await loading.present();

    this.todoService.getStudentById(this.studentId).subscribe(res => {
      loading.dismiss();
      this.Student = res
    });
  }

  async saveStudent(){
    const loading = await this.loadingController.create({
      // content: 'Saving...'
      });
      await loading.present();
      if (this.studentId){
        this.todoService.updateStudent(this.Student, this.studentId ).then(() =>{
          loading.dismiss();
          this.navCtrl.pop();
          // this.navCtrl.setRoot('HomePage');
        });
      } else {
        this.todoService.addStudent(this.Student).then(() =>{
          loading.dismiss();
          this.navCtrl.pop();
        });
      }
  }
  
  Cancel(){
    this.navCtrl.pop();
  }


}
