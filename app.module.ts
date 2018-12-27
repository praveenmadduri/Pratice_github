import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyComponentComponent } from './my-component/my-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from  './material.module';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentdataComponent } from './studentData/studentdata.component';
import { FindStudentComponent } from './find-student/find-student.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    StudentdetailsComponent,
    StudentdataComponent,
    FindStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'home', component: MyComponentComponent },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'findbylname', component: FindStudentComponent },
       
     
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
