import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.scss']
})
export class SignupCompanyComponent {
  companyForm: FormGroup |any
  isSubmitted = false;

  constructor( private router: Router, public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      companyName : ['', Validators.required],
      gstNo : ['', Validators.required],
      contactPersonName : ['', Validators.required],
      phoneNo: ['', Validators.required],
      email : [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      selectSource : ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(3)],
      confirmPassword: ['password', Validators.required, Validators.minLength(3)],
      checkBox : ['', Validators.required],
    })
  }
  get errorControl() {
    return this.companyForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.companyForm.valid) {
      console.log('Please provide all the required values!');
    } else {
    this.router.navigate(['dashboard']);
      console.log(this.companyForm.value);
    }
  }
  goTologin(){
    this.router.navigate(['signup']);
  }
}
