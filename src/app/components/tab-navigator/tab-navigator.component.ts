import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss']
})
export class TabNavigatorComponent {
  isActive = false;


constructor(private router: Router) {}



goToBookNow(){

  // this.router.navigate(['book-now']);
}
}
