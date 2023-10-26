// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmpService } from '../emp.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginId: string;
//   password: string;
//   employee:any;

//   constructor(private router: Router, private service: EmpService) {  //Dependency injection
//     this.loginId = ''; 
//     this.password = '';


//     this.employee = [
//       {id:1, name:'Bhuvana', email:'bhuvana@gmail.com', password:'password'},
//       {id:2, name:'Harsha', email:'harsha@gmail.com', password:'password'},
//       {id:3, name:'Raji', email:'raji@gmail.com', password:'password'}
            
//     ];
      
    
//    }

//   ngOnInit(): void {
//   }
//   loginSubmit() : void {
//     console.log("User ID :" + this.loginId);
//     console.log("Password:" + this.password);


//     if(this.loginId === 'HR' && this.password === 'HR'){
//       alert('Welcome to HrHomePage');

//     }else{
      
//       this.employee.forEach((element :any) => {
//         console.log(element.email);
      

//         if(this.loginId === element.email && this.password === element.password) {
//           alert('Welcome to Employee Home Page');
//           //navigate to hrhomepage component
//         } 
      
//       });
//     }
    
   
//   }

//   loginSubmit2(loginForm: any): void{
//     //console.log("LoginId: " + loginForm.value.loginId);
//     //console.log("Password: " + loginForm.value.password);

//     if(loginForm.loginId === 'HR' && loginForm.password === 'HR'){
//       //alert('Welcome to HrHomePage');

//       //Here we need to write our code, calling setUserLoggedIn() from emp service

//       this.service.setUserLoggedIn();
//       this.router.navigate(['hrhomepage']);

//     }else{
      
//       this.employee.forEach((element :any) => {
//         console.log(element.email);
      

//         if(this.loginId === element.email && this.password === element.password) {
//           alert("Welcome to Employee Home Page");
//           //navigate to hrhomepage component
//         } 
      
//       });
//     }
    
   
//   } 
// }  
//----------------------------------------------------------------------


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EmpService } from '../emp.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   email: string;
//   password: string;
//   users: any;

//   constructor(private router: Router, private service: EmpService) { 
//     this.email = '';
//     this.password = '';

//   }

//   ngOnInit(): void {
//   }

//   loginSubmit(): void {
//     console.log("Email: " + this.email);
//     console.log("Password: " + this.password);
  
//     if (this.email === 'HR' && this.password === 'HR')
//       alert("Welcome to HR home page");
//     else {

//       this.users.forEach((element: any)=> {
//           console.log(element.email);

//           if (element.email == this.email && element.password === this.password) {
//             alert('Welcome to Home Page');
//           }
//       });
//     }
//   }

//   async loginSubmit2(loginForm: any) {
//     if (loginForm.password === '9876' && loginForm.email === 'harsha@gmail.com') {
//       this.service.setUserLoggedIn();
//       this.router.navigate(["hrhomepage"]);
//       alert("Welcome to Home Page");
//     }
//     else {
//       await this.service.getEmployeeByEmailAndPassword(loginForm).then((result:any)=>{
//         this.users = result;
//       });
//       console.log("Data fetched: ", this.users);
//       this.service.setUserLoggedIn();
//       if (this.users != null) {
//         alert("Welcome to Home Page");
//       }
//       else{
//         alert("Invalid User");
//       }
//     }
//   }
// }
//-----------------------

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  users: any;

  constructor(private router: Router, private service: EmpService) { 
    this.email = '';
    this.password = '';

  }

  ngOnInit() : void{
  }

  loginSubmit(): void {
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);
  }

  async loginSubmit2(loginForm: any) {
      await this.service.getEmployeeByEmailAndPassword(loginForm).then((result:any)=>{
        console.log(result);
        if(result != null){
          this.router.navigate(["home-page"]);
        }
        else{
          alert("Invalid User");
        }
      }); 
  }
  showDetails(result:any){
    alert(result);
  }
}


