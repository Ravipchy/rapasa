import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteService } from 'src/app/services/routes/route.service';
@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent {
  currentRoute: boolean = true;
  constructor(
    private activatedRoutes: ActivatedRoute,
    private routeCheckSerivce: RouteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.currentRoute = this.routeCheckSerivce.checkIfParentRoute(
      this.activatedRoutes
    );
  }
  checkIfParentRoute() {
    this.currentRoute = this.routeCheckSerivce.checkIfParentRoute(
      this.activatedRoutes
    );
  }

  goToOndemandHistory() {
    this.router.navigate(['ondemand-booking-history']);

  }
  goToParmanentHistory() {
    this.router.navigate(['permanent-booking-history']);

  }
}
