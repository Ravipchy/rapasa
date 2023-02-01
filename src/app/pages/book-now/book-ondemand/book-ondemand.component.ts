import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataShare } from 'src/app/services/data-share/data-share';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

@Component({
  selector: 'app-book-ondemand',
  templateUrl: './book-ondemand.component.html',
  styleUrls: ['./book-ondemand.component.scss']
})
export class BookOndemandComponent {

  ondemandForm: FormGroup | any;
  dateExample = new Date().toISOString();
  defaultDate = new Date().toISOString();
  isSubmitted: Boolean = false;
  ionicForm: any;
  current: any="1";
  @Input()
  offerData!: DataShare;
  

  selectAddress=[
    {
      id: 1,
      name: 'pune',
    },
    {
      id: 2,
      name: 'mumbai',

    },
    {
      id: 3,
      name: 'delhi',
    }
  ]
  carType=[
    {
      id: 1,
      name: 'Automatic',
    },
    {
      id: 2,
      name: 'Manual',

    },
    {
      id: 3,
      name: 'Luxury',
    }
  ]
  travelType=[
    {
      id: 1,
      name: 'One Way',
    },
    {
      id: 2,
      name: 'Round Trip',

    },
    {
      id: 3,
      name: 'Round Trip Stay',
    }
  ]
  dutyHour=[
    {
      id: 1,
      name: '6 Hour',
    },
    {
      id: 2,
      name: '8 Hour',

    },
    {
      id: 3,
      name: '12 Hour',
    }
  ]


  constructor(private _router: Router,
    private fb: FormBuilder, private _dataService:DataShareService, private _activatedRoute: ActivatedRoute){
      this.ondemandForm = this.fb.group ({
        formSelect: ['', Validators.required],
        travelType: ['', Validators.required],
        carType: ["", Validators.required],
        dropLocation: ["", Validators.required],
        selectAddress: ["", Validators.required],
        dutyHour: ["", Validators.required],
        toDate: ["", Validators.required],
        fromDate: ["", Validators.required],
        Reportingtime: ['', Validators.required],

      })


  }

  

  ngOnInit(){
    this._dataService.offerData$.subscribe((data:DataShare)=> {
      console.log("shareData",data)
      if(!!data){
        this.offerData=data
      }

    })

    if( this._activatedRoute.snapshot.paramMap.get('type') !== null){
      this.current = this._activatedRoute.snapshot.paramMap.get('type') === 'INCITY'?'1':'2';
    }
    

  }

  getDate(e: any) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ondemandForm.get('toDate')?.setValue(date, {
      onlyself: true
    })
  }
  getdate(e: any) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ondemandForm.get('fromDate')?.setValue(date, {
      onlyself: true
    })
  }

  get errorControl() {
    return this.ondemandForm.controls;
  }

  goToBook() {
    this.isSubmitted = true;
    if (!this.ondemandForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ondemandForm.value);
      this._router.navigate([''])
      return true;
    }
  }

  goToInquiry() {
    this._router.navigate([''])
  }
  goToCancel() {
    this._router.navigate(['book-now'])
  }
  goToTariff() {
    this._router.navigate([''])
  }
  goToApplyCoupon(type:string ) {
    this._router.navigate(['offers', type])
  }
  formSwitch(currentTab:string) {
    console.log(this.current,currentTab)
    if(this.current === currentTab){
      this._dataService.resetOfferData();
    }
  }

  ngOnDestroy() {
    this._dataService.resetOfferData();
  }
}
