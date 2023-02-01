import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent {
  LoginForm: FormGroup | any;
  isSubmitted = false;

  constructor(private router: Router, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      otp: ['', Validators.required],
    });
  }
  get errorControl() {
    return this.LoginForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.LoginForm.valid) {
      console.log('Please provide all the required values!');
    } else {
      this.router.navigate(['reset-password']);
      console.log(this.LoginForm.value);
    }
  }
  goToResetPassword(){
    this.router.navigate(['reset-password']);
  }
}
