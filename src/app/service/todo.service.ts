import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { result } from './todo.service';


export interface subject{
  id?: string,
  ma_lop: string,
  ten_lop: string,
  time: number,
  time_start: number,
  time_end: number,
  soluong: number,
  buoi: number
}
export interface student {
  id?: string,
  mssv: string,
  name: string,
  status: boolean,
  n_co: string,
  n_vang: string,
  note: string,
  waring: string,
  ma_lop: string
}

export interface result {
  _time: number,
  _ten_lop: string,
  _ma_lop: string,
  _time_start: number,
  _time_end: number,
  _so_luong: number,
  _buoi: number,
  _name: string,
  _mssv: number,
  _status: boolean,
  _n_co: number,
  _n_vang: number,
  _note: string,
  _waring: string,

}


@Injectable({
  providedIn: "root"
})

export class TodoService {
  private subjectCollection: AngularFirestoreCollection<subject>;
  private subjects: Observable<subject[]>;
  private studentCollection: AngularFirestoreCollection<student>;
  private students: Observable<student[]>;
  private resultCollection: AngularFirestoreCollection<result>;
  private results: Observable<result[]>;


  constructor(db: AngularFirestore) {
    //get Subject 
    this.subjectCollection = db.collection<subject>('subjects');
    this.subjects = this.subjectCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };  
        });
      })
    );
    // getStudent
    this.studentCollection = db.collection<student>('students');
    this.students = this.studentCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };  
        });
      })
    );
    // getStudent
    // get Result
    this.resultCollection = db.collection<result>('results');
    this.results = this.resultCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };  
        });
      })
    );

  }

// Subject
getLop(){
 return this.subjects;}
getLopbyId(id){
  return this.subjectCollection.doc<subject>(id).valueChanges();}
updateLop(Subject: subject, id: string){
  return this.subjectCollection.doc(id).update(Subject);}
addLop(Subject: subject){
 return this.subjectCollection.add(Subject);}
delLop(id){
 return  this.subjectCollection.doc(id).delete();}

// Student
getStudent(){
  return this.students; }
 getStudentById(id){
   return this.studentCollection.doc<student>(id).valueChanges();}
 updateStudent(Student: student, id: string){
   return this.studentCollection.doc(id).update(Student);}
 addStudent(Student: student){
  return this.studentCollection.add(Student);}
 delStudent(id){
  return  this.studentCollection.doc(id).delete();}

  // Result

getResult(){
  return this.results; }
 getResultById(id){
   return this.resultCollection.doc<result>(id).valueChanges();}
 updateResult(Result: result, id: string){
   return this.resultCollection.doc(id).update(Result);}
 addResult(Result: result){
  return this.resultCollection.add(Result);}
 delResult(id){
  return  this.resultCollection.doc(id).delete();}

}
