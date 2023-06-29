import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    address: this.fb.group({
      street: [''],
      district: [''],
      country: ['']
    }),
    gender:[''],
    age:['', Validators.min(18)],
    interests: this.fb.array([
      this.fb.control('')
    ])
  })
  isSubmitted= false;

  constructor(private fb: FormBuilder) { }

  registerUser() {
    console.log(this.registerForm.value, this.registerForm.invalid);
    this.isSubmitted =true;
    console.log(this.registerForm);

  }

  get interests(){
    return this.registerForm.get('interests') as unknown as FormArray;
  }

  addInterests(){
    this.interests.push(this.fb.control(''));
  }

  deleteInterest(index:number):void {
    this.interests.removeAt(index);
  }

  @Input() bev = "";
  @Output() newUserEvent = new EventEmitter<string>();

  addName(value: string) {
    this.newUserEvent.emit(value);
  }

  getMin(){
    var nums: number[];
    nums=[1,2,3,4,5,6,7,8,9,10];

  }
  // addName(){
  //   this.users.push(this.user);
  //   // this.users.push(this.users.length+1);
  //   console.log("this is workinggg");
  //   console.log(this.users);
  //   this.newItemEvent.emit(this.user); }
}
