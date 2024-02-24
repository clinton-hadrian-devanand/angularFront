import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import validateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  hide = true;
  signUpForm!: FormGroup;
  constructor(private _snack: MatSnackBar, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      this._snack.open('Invalid Form', 'Close', {
        duration:3000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      validateForm.validatAllField(this.signUpForm)
    } else {
      console.log(this.signUpForm);
    }
  }



}
