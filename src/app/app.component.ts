// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-oldlogin',
//   templateUrl: './oldlogin.component.html',
//   styleUrls: ['./oldlogin.component.css']
// })
// export class OldloginComponent implements OnInit {
//   loginId : string;
//   password : string;

//   myImage:string = 'assets/images/Importance-of-Books.jpg';
//   constructor() {
//     this.loginId = '';
//     this.password = '';
//   }

//   ngOnInit(): void {
//   }
//   loginSubmit() : void {
//     console.log("User Id : " + this.loginId);
//     console.log("Password : " + this.password);
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
}
