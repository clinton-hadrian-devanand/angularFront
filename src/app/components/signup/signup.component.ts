import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import validateForm from '../../helpers/validateForm';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  hide = true;
  isLoading=false;
  signUpForm!: FormGroup;
  constructor(
    private _snack: MatSnackBar,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.signUpForm.invalid) {
      this._snack.open('Invalid Form', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      validateForm.validatAllField(this.signUpForm);
    } else {
      this.isLoading=true;
      await this.auth.signUp(this.signUpForm.value).subscribe({
        next: (res) =>
          {
            this.isLoading=false;
            this._snack.open('Account Registered', 'close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          })},
        error: (err) =>
        {  
          this.isLoading=false;
          this._snack.open(` ${err?.error?.message}`, 'close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          })},
      });
    }
  }
}
