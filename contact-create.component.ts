import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact = {};

  constructor(private http: HttpClient, private router: Router,private customerService: CustomerService) { }

  ngOnInit() {
  }

  saveContact() {
    this.customerService.createContact( this.contact)
      .subscribe(res => {
          this.router.navigate(['/contact-detail', res]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
