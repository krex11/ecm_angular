import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  constructor(private authser:AuthService,private route:Router) { }

  ngOnInit() {
   
  }

  onSubmit() {
    this.authser.signIn(this.loginForm.value.email,this.loginForm.value.password).then((res)=>{
      this.route.navigate(['home']);
      console.log('success')
    })
    console.log(this.loginForm.value)
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
}