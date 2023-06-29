import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent{
  formValue: any[]= [];


  constructor(private dataservice: DataService){
    this.formValue = this.dataservice.getFormValue() ;
  }
}
  // ngOnInit(): void {
  //   this.formValue= this.dataservice.getUsers();
  // }



