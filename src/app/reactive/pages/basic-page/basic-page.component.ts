import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  // public myForm: FormGroup = new FormGroup({
  //   name : new FormControl('',[],[]),
  //   price: new FormControl(0,[],[]),
  //   inStorage: new FormControl(0,[],[])
  // });

  public myForm: FormGroup = this.fb.group({
    name : ['',[Validators.required,Validators.minLength(3)],[]],
    price: [null,[ Validators.required, Validators.min(0) ]],
    inStorage: [0,[ Validators.required, Validators.min(0) ]]
  });

  constructor( private fb: FormBuilder){}

  onSave():void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if(this.myForm.valid){
      console.log(this.myForm.value)
    }
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      console.log('key', key);
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `Min length is ${errors[key].requiredLength}`;
        case 'email':
          return 'Invalid email';
        default:
          return 'Unknown error';
      }
    }
    return null;
  }
}
