import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  myimage : string = "../assets/image/bgImage.jpeg";


  todaysBev= "Coffee";


  users: string[]=[];

  addUser(newUser: string){
    this.users.push(newUser);
  }

  @ViewChild('fname') fname!: ElementRef; 
  @ViewChild('displayFname') dFname!: ElementRef;

  displayName(){
    this.dFname.nativeElement.value= this.fname;
  }



  count: number=0;
  numbers: number[] =[1, 2, 3, 4, 5, 6];
  seasons: string[]=["autumn", "summer", "spring","winter"];
  displayP = false;
  displayP1= false;
  displayP2= true;
  displayP3= true;

  restart(){
    this.count=0;
  }

  onclick(){
    console.log("Welcome!");
  }
  
  constructor(){}
}
