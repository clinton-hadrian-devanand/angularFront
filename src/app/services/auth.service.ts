import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  authenticate(loginVal:any){

    return this.http.post<any>(`${baseUrl}Auth/Auth`,loginVal)

  }

  signUp(signUp:any){
    return this.http.post<any>(`${baseUrl}Auth/Register`,signUp)
  }

}
