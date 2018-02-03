import { Component, OnInit } from '@angular/core';

import { LoginService } from '../service/login/login.service';
import { User } from '../service/login/user';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage: string = '';
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.loginService.login(this.user)){
      //redirect to posts
      
      this.router.navigate(['/posts']);
    }
    this.user = new User();
    this.errorMessage = 'Invalid UserName or Password';
    //display the error message
  }

}
