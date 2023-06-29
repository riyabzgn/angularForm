import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-customv',
  templateUrl: './customv.component.html',
  styleUrls: ['./customv.component.css']
})
export class CustomvComponent {
  validateForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    phoneNo: ['', [Validators.required, this.phoneValidator()]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required, this.passwordValidator()]],
    confirmPassword: ['', [Validators.required]],
  });

  isSubmitted = false;

  // setFormValue(){
  //   this.formValue.push(this.validateForm.get('name').value);
  // }

  public formValue = [];

  constructor(private fb: FormBuilder, private dataservice: DataService, private router: Router) { }

  // ngOnInit(){
  //   this.formValue = this.dataservice.getUsers();
  // }


  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const phoneNumber = control.value;
      const isValid = /^\+\d{1,3}\d{10}$/.test(phoneNumber);
      return isValid ? null : { phoneInvalid: true };
    };
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.value;
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);

      const isValid =
        hasNumber && hasSpecialChar && hasUpperCase && hasLowerCase && password.length >= 8;

      return isValid ? null : { passwordInvalid: true };
    };
  }


    // console.log(this.validateForm.value, this.validateForm.invalid);
    // console.log(this.validateForm.get('email')?.value);
    // console.log(this.validateForm.controls['confirmPassword']);

  validateUser() {
    this.isSubmitted = true;
    if (this.validateForm.invalid) return;

  
    // const formData = {
    //   label: 'name',
    //   value: 'Riya'
    // };
    const formData: any[]=[];
    // Iterate over the form controls
    Object.keys(this.validateForm.controls).forEach(controlName => {
      const control = this.validateForm.get(controlName);
      if (control) {
        formData.push({
          label:controlName,
          value: control.value
        })
      }
    });
  
    this.dataservice.setFormValue(formData);
    this.router.navigate(['user-detail']);
    
  }


}
