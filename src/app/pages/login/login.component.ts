import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANT } from 'src/app/app.config';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;
  isSubmitted = false;
  hide = true;
  public account = {};


  constructor(private router: Router, public formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      phoneNo: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }
  get errorControl() {
    return this.LoginForm.controls;
  }
  get phoneNo() {
    return this.LoginForm.get('phoneNo');
  }
  get password() {
    return this.LoginForm.get('password');
  }

  onSubmit() {
    console.log("Phone" + this.LoginForm.value.phoneNo);

    const loginCredentials = {
      username: this.LoginForm.value.phoneNo,
      password: this.LoginForm.value.password,
    };
    console.log("Test" + loginCredentials);
    this.account = {
      username: this.LoginForm.value.phoneNo,
      password: this.LoginForm.value.password,
      userType: 'C',
      // ttl: 60
    };
    console.log("Account" + this.account);
    this.loginService.userLogin(CONSTANT.LOGIN_URL, this.account).subscribe(response => {
      console.log("response==>" + JSON.stringify(response))
      if (response != null) {
        localStorage.setItem("tokenId", response.id);
        localStorage.setItem("userId", response.user.id);
        localStorage.setItem("merchantId", response.user.merchantId);
        this.router.navigate(['dashboard']);
      }
    });
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.LoginForm.valid) {
      console.log('Please provide all the required values!');
    } else {
      this.router.navigate(['dashboard']);
      console.log(this.LoginForm.value);
    }
  }
  goToForgot() {
    this.router.navigate(['forgot-password']);
  }
  goToSignUp() {
    this.router.navigate(['signup']);
  }
  showHidePassword() {
    this.hide = !this.hide;
  }
}
