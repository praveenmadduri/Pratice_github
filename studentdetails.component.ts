import { Component, OnInit,Input } from '@angular/core';
import { StudentService } from '../Student.service';
import { Student } from '../student';
 
import { StudentdataComponent } from '../studentdata/studentdata.component';
@Component({
  selector: 'student-details',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  @Input() student: Student;
  constructor(private studentService: StudentService, private studentDataComponent: StudentdataComponent) { }

  ngOnInit() {
  }
  updateActive(isActive: boolean) {
    this.studentService.updateStudent(this.student.id,
      { lname: this.student.lname, address: this.student.address, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.student = data as Student;
        },
        error => console.log(error));
  }
 
  deleteStudent() {
    this.studentService.deleteStudent(this.student.id)
      .subscribe(
        data => {
          console.log(data);
          this.studentDataComponent.reloadData();
        },
        error => console.log(error));
  }

}
