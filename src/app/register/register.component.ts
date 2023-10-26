import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: any;
  
  constructor(private httpclient: HttpClient,private service:EmpService,private router:Router) {
    this.customer = {customerid:'',customername:'',  mobileno:'',  email:'', password:''};
   }

  ngOnInit(): void {
    console.log("Data Received !!!");
  }
  
  // registrationSubmit(): void {
  //   console.log(this.customer);
  // }

  // registrationSubmit2(loginForm: any): void {
  //   console.log(loginForm);
  // }

  registerEmp(){
    this.service.registerEmp(this.customer).subscribe((result:any)=>console.log(result));
    this.router.navigate(['/login']);
  }
}
 
