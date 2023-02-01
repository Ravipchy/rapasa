import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShare } from 'src/app/services/data-share/data-share';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

@Component({
  selector: 'app-book-permanent',
  templateUrl: './book-permanent.component.html',
  styleUrls: ['./book-permanent.component.scss']
})
export class BookPermanentComponent {

  @Input()
  offerData!: DataShare;

  carType = [{
    id: '1',
    name: 'Automatic'
  }, {
    id: '2',
    name: 'Manual'
  }, {
    id: '6',
    name: 'Luxury'
  }];
  Address = [{
    id: '15',
    name: 'Pune'
  }, {
    id: '16',
    name: 'Hyderabad'
  }, {
    id: '17',
    name: 'Mumbai'
  }];
  dutyHour = [{
    id: '8',
    name: '8 Hours'
  }, {
    id: '10',
    name: '10 Hours'
  }, {
    id: '12',
    name: '12 Hours'
  }];
  Plans = [{
    id: '2',
    duration: '3 Months',
    amount: 5000,
  }, {
    id: '3',
    duration: '6 Months',
    amount: 7000,
  }, {
    id: '4',
    duration: '12 Months',
    amount: 9000,
  }];

  PermanentForm: FormGroup | any;
  isSubmitted = false;
  defaultDate = new Date().toISOString();

  constructor(private router: Router, public formBuilder: FormBuilder,  private _dataService:DataShareService) { }


  ngOnInit() {
    this.PermanentForm = this.formBuilder.group({
      selectAddress: ['', Validators.required],
      selectCarType: ['', Validators.required],
      selectDutyHours: ['', Validators.required],
      selectMembershipPlan: ['', Validators.required],
      noOfDrivers: ['', Validators.required],
      yearOfExperience: ['', Validators.required],
      proposedSalary: ['', Validators.required],
      expectedDate: ['', Validators.required],
      comment: ['', Validators.required]
    });

    this._dataService.offerData$.subscribe((data:DataShare)=> {
      console.log("shareData",data)
      if(!!data){
        this.offerData=data
        this.router.navigate(['book-permanent'])
      }

    })
    
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.PermanentForm.valid) {
      console.log('Please provide all the required values!');
    } else {
      this.router.navigate(['dashboard']);
      console.log(this.PermanentForm.value);
    }
  }
  get errorControl() {
    return this.PermanentForm.controls;
  }

  gotoBookNow() {
    this.router.navigate(['book-now'])
  }
  getDate(e: any) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.PermanentForm.get('toDate')?.setValue(date, {
      onlyself: true
    })
  }
  goToApplyCoupon() { 
    this.router.navigate(['offers'])
  }

}
