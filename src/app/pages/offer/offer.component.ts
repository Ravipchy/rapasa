import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShare } from 'src/app/services/data-share/data-share';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  type: string | null | undefined;
  constructor(private _router: Router, private _dataService:DataShareService, private _activatedRoute: ActivatedRoute){
  
  }
  


  ngOnInit() {
    if( this._activatedRoute.snapshot.paramMap.get('type') !== null){
      this.type = this._activatedRoute.snapshot.paramMap.get('type');
    }
    
  }

  goToCollect(name:string) {
    const data = {offerId:1,offerName:name}
    this._dataService.setOfferData(data)
    switch(this.type){
      case 'INCITY': {
        this._router.navigate(['book-ondemand',this.type])
        break;
      };
      case 'OUTSTATION': {
        this._router.navigate(['book-ondemand',this.type])
        break;
      };
      case 'PERMANENT': {
        this._router.navigate(['book-permanent'])
        break;
      }
      default: {
        this._router.navigate([''])
        break;
      }
    }
    // this._router.navigate(['book-ondemand'])
  
  }
   

}
