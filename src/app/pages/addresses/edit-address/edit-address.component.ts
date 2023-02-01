import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent {
  editaddressForm: FormGroup | any;
  isSubmitted = false;

  addressType=[
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Office',

    },
    {
      id: 3,
      name: 'Family & Friends',
    }
  ]
  selectState=[
    {
      id: 1,
      name: 'Maharashtra',
    },
    {
      id: 2,
      name: 'Delhi',

    },
    {
      id: 3,
      name: 'Madhya Pradesh',
    }
  ]

  constructor(private router: Router, public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.editaddressForm = this.formBuilder.group({
      // addressType: ['', Validators.required],
      // addressLine1: ['', Validators.required],
      // addressLine2: ['', Validators.required],
      // selectState: ['', Validators.required],
      // city: ['', Validators.required],
      zipCode: ['', Validators.required],

    })
  }
  get errorControl() {
    return this.editaddressForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.editaddressForm.valid) {
      console.log('Please provide all the required values!');
      // return false;
    } else {
      this.router.navigate(['addresses']);
      console.log(this.editaddressForm.value);
      // this.router.navigate(['tabs/tab1']);
    }
  }
}
