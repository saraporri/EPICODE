import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { iLoginData } from '../models/login-data';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login:iLoginData = {email:"",password:""}
errorMessage:string=""
  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}
    signIn() {
      this.authSvc.login(this.login)
        .subscribe(data=>{this.router.navigate(["/"])})}}
