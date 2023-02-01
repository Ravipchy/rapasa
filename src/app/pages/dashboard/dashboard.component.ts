import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  constructor(private router: Router) {}

  goToOndemand(){
    this.router.navigate(['book-ondemand']);
  }
  goToPermanent(){
    this.router.navigate(['book-permanent']);
  }
  goToBookNow(){
    this.router.navigate(['book-now']);
  }
  goToOffer(){
    this.router.navigate(['offers']);
  }
}
