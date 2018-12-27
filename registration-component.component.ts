import { Component, OnInit } from '@angular/core';
import {Student } from '../student';
import { StudentService } from '../Student.service';


@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  student: Student = new Student();
  submitted = false;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();

}
save() {
  this.studentService.createStudent(this.student)
    .subscribe(data => console.log(data), error => console.log(error));
  this.student = new Student();
}
}
