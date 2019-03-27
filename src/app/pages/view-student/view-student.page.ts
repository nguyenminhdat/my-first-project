import { Component, OnInit } from '@angular/core';
import { TodoService, student } from '../../service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { subject } from './../../service/todo.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {
  Student: student;
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

  goBack(){
    this.navCtrl.pop();
  }
}