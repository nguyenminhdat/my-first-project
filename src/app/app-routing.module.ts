import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'view', loadChildren: './view/view.module#ViewPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'danhsach', loadChildren: './danh-sach-sinh-vien/danh-sach-sinh-vien.module#DanhSachSinhVienPageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'detail', loadChildren: './pages/detail/detail.module#DetailPageModule' },
  { path: 'detail/:id', loadChildren: './pages/detail/detail.module#DetailPageModule' },
  { path: 'diem-danh', loadChildren: './pages/diem-danh/diem-danh.module#DiemDanhPageModule' },
  { path: 'diem-danh/:id', loadChildren: './pages/diem-danh/diem-danh.module#DiemDanhPageModule' },  
  { path: 'sinvien-detail', loadChildren: './pages/sinvien-detail/sinvien-detail.module#SinvienDetailPageModule' },
  { path: 'sinhvien-detail/:id', loadChildren: './pages/sinvien-detail/sinvien-detail.module#SinvienDetailPageModule' },
  { path: 'list-class', loadChildren: './pages/list-class/list-class.module#ListClassPageModule' },
  { path: 'list-students', loadChildren: './pages/list-students/list-students.module#ListStudentsPageModule' },
  { path: 'list-students/:id', loadChildren: './pages/list-students/list-students.module#ListStudentsPageModule' }, 
  { path: 'view-student', loadChildren: './pages/view-student/view-student.module#ViewStudentPageModule' },
  { path: 'view-student/:id', loadChildren: './pages/view-student/view-student.module#ViewStudentPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
