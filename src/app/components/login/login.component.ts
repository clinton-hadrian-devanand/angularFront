import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor (private fb:FormBuilder,private _snack :MatSnackBar){ }
  

 ngOnInit () :void{
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
}

submitForm(){
  if(!this.loginForm.invalid){
console.log(this.loginForm.value)
  }else{
console.log("invalid");
this.snackBarOpen();

  }
}

snackBarOpen(){
  this._snack.open("Invalid form",'',{
    horizontalPosition:"end",
    verticalPosition:"top"
  })
}

 

  hide = true;



}
