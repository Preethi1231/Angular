import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  public userLoggedIn : boolean;  //user-define
  constructor(private httpClient: HttpClient) {
    this.userLoggedIn = false;//initially set to false
   }
   getUserLoggedIn():any{
     return this.userLoggedIn; // invoked whenever we need this value
   }
   setUserLoggedIn():any{
     this.userLoggedIn = true; // invoked whenever we logged in successfully...
   }
   setUserLoggedOut():any{
    this.userLoggedIn = false; // invoked whenever we logged out
  }
  showAllEmployees(): any{
     return this.httpClient.get('http://localhost:3000/fetch');
   }

  registerEmp(employee: any){
    return this.httpClient.post('http://localhost:3000/register/', employee);
  }

  getEmployeeByEmailAndPassword(loginForm: any){
    return this.httpClient.get('http://localhost:3000/login/' + loginForm.email+"/"+loginForm.password).toPromise();
  }

 
}

