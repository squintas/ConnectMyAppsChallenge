import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: boolean = false

  constructor(private router: Router) {}

  public loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })


  login(){
    if(this.loginForm.value.email === "user@user.com" && this.loginForm.value.password === "User123"){
      localStorage.setItem('email', "user@user.com");
      localStorage.setItem('password', "User123");
      this.router.navigate(['']);
    } else {
      this.error = true
    }
  }

}
