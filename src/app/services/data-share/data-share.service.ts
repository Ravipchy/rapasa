import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataShare } from './data-share';


@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }

  private _offerData$ = new BehaviorSubject<DataShare>(<DataShare>({offerId:0,offerName:""}));

  get offerData$(): Observable<DataShare> {return this._offerData$.asObservable();} 

  get offerData(): DataShare {return this._offerData$.getValue();}

  setOfferData(item:DataShare){
    this._offerData$.next(item);
  }
  
  resetOfferData(){
    this._offerData$.next({offerId:0,offerName:""});
  }
}

