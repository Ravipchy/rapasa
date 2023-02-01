import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteService } from 'src/app/services/routes/route.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  currentRoute: boolean = true;
  current: any = "1";
  IndividualForm: FormGroup | any;
  isSubmitted = false;
  preferWheel = true;
  CompanyForm: FormGroup | any;
  isbook = false;

  constructor(
    public activatedRoutes: ActivatedRoute,
    private routeCheckSerivce: RouteService,
    private router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.IndividualForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      gstNo: ['', Validators.required],
      name: ['', Validators.required],
      phoneNo: ['', Validators.required],
      email: ['', Validators.required],
      selectSource: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      checkBox: ['', Validators.required],
    });

    this.CompanyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      gstNo: ['', Validators.required],
      name: ['', Validators.required],
      phoneNo: ['', Validators.required],
      email: ['', Validators.required],
      selectSource: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      checkBox: ['', Validators.required],
    });
  }
  get errorControl() {
    return this.IndividualForm.controls;
  }
  get errorControlCompany() {
    return this.CompanyForm.controls;
  }
  goTologin() {
    this.router.navigate(['signin']);
  }
  submit() {
    this.isSubmitted = true;
    if (!this.IndividualForm.valid) {
      console.log("Please provide all the required values!");
    } else {
      this.router.navigate(['dashboard']);
      console.log(this.IndividualForm.value);
    }
  }

  book() {
    this.isbook = true;
    if (!this.CompanyForm.valid) {
      console.log("Please provide all the required values!");
    } else {
      this.router.navigate(['dashboard']);
      console.log(this.CompanyForm.value);
    }
  }

}
