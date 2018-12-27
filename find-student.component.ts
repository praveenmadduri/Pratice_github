import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../Student.service';

@Component({
  selector: 'find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.css']
})
export class FindStudentComponent implements OnInit {
  lname: string;
  students: Student[];

  constructor(private dataService: StudentService) { }

  ngOnInit() {
    this.lname = null;
  }
  private findStudents() {
    this.dataService.getStudentsByLname(this.lname)
      .subscribe(students => this.students = students);
  }
  onSubmit() {
    this.findStudents();
  }

}

 


