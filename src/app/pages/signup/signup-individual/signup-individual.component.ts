import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-individual',
  templateUrl: './signup-individual.component.html',
  styleUrls: ['./signup-individual.component.scss']
})
export class SignupIndividualComponent {
  individualForm: FormGroup | any;
  isSubmitted = false;
  current: any = "1";



  constructor(private router: Router, public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.individualForm = this.formBuilder.group({
      // idType : ['', Validators.minLength(3)],
      // companyName : ['', Validators.minLength(3)],
      // gstNo : ['', Validators.minLength(3)],
      // contactPersonName : ['', Validators.minLength(3)],
      // firstName: ['', Validators.minLength(3)],
      // lastName: ['', Validators.minLength(3)],
      phoneNo: ['', Validators.required],
      email: ['',Validators.required],
      selectSource: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      checkBox: ['', Validators.required],
    })
  }
  get errorControl() {
    return this.individualForm.controls;
  }


  submitForm() {
    this.isSubmitted = true;
    if (!this.individualForm.valid) {
      console.log('Please provide all the required values!');
    } else {
      this.router.navigate(['dashboard']);
      console.log(this.individualForm.value);
    }
  }
  goTologin() {
    this.router.navigate(['signup']);
  }
}
