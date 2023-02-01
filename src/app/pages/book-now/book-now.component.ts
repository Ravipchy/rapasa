import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent {

  constructor(private _router: Router){

  }

  goToOndemand() {
    this._router.navigate(['book-ondemand'])
  }

  goToPermanent() {
    this._router.navigate(['book-permanent'])
  }
}
