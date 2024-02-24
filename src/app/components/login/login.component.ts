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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snack: MatSnackBar,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (!this.loginForm.invalid) {
      console.log(this.loginForm);
      this.auth.authenticate(this.loginForm.value).subscribe({
        next: (res) => alert('res came'),
        error: (err) => alert(`ERROR ${err?.error?.message}`),
      });
    } else {
      console.log('invalid');
      this.snackBarOpen();
      validateForm.validatAllField(this.loginForm);
    }
  }

  snackBarOpen(): void {
    this._snack.open('Invalid form', 'close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-danger'],
    });
  }

  hide = true;
}
