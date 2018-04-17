import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Response } from '@angular/http';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    // this.authService.login(form.value).subscribe((res: Response) => {
    this.authService.login(form.value).subscribe((res) => {
      this.authService.onLogin(res, this.router);
    },
      err => { 
        this.isLoginError = true;
      }
    );
  }
}
