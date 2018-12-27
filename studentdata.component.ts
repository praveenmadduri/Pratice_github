import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
import { StudentService } from '../Student.service';
import { Student } from '../student';

@Component({
  selector: 'student-data',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private studentservice: StudentService) { }

  ngOnInit() {
    this.reloadData();
  }
  deleteStudent() {
    this.studentservice.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {
          return console.log('ERROR: ' + error);
        });
  }
 
  reloadData() {
    this.students = this.studentservice.getStudentsList();
  }

}
