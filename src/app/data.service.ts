import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: any[] = [];
  constructor() { }

// function to set value in object formValue

  setFormValue(data: any[]): void {
    this.formData = data;
    console.log('this.formData', this.formData);
    
  }
  /**
   * get stored form value 
   */
   getFormValue(): any[] {
    return this.formData;
  }
  
}

