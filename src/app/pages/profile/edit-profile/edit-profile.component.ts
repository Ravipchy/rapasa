import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
  
})
export class EditProfileComponent implements  OnInit{
  EditForm: FormGroup | any;
  isSubmitted = false;
  constructor(private router: Router, public formBuilder: FormBuilder) {}

ngOnInit() {
  this.EditForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3)]],
    gender: ['', [Validators.required,]],
    dob: ['', [Validators.required,]],
  })
}



get errorControl() {
  return this.EditForm.controls;
}

submit() {
  this.isSubmitted = true;
    if (!this.EditForm.valid) {
      console.log('Please provide all the required values!');
      // return false;

  } else {    
     this.router.navigate(['profile']); 
     console.log(this.EditForm.value)
  }
}

}

