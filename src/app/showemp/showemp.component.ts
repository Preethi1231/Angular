import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-display',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {

  customers: any;
  constructor(private service: EmpService) { 
    // this.customer = {id:'', name: '',mobile:'',email:'', password:''};
  }

  ngOnInit(): void {
    this.service.showAllEmployees().subscribe((result: any)=>{
      this.customers = result;
    });
  }
}


