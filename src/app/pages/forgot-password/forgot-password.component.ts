import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  LoginForm: FormGroup | any;
  isSubmitted = false;

  constructor(private router: Router, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      phoneNo: ['',Validators.compose ([Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10)])],
    });
  }
  get errorControl() {
    return this.LoginForm.controls;
  }
  get phoneNo() {
    return this.LoginForm.get('phoneNo');
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.LoginForm.valid) {
      console.log('Please provide all the required values!');
      // return false;
    } else {
      this.router.navigate(['otp-verification']);
      console.log(this.LoginForm.value);
    }
  }
  goTologin(){
    this.router.navigate(['signin']);
  }

}

