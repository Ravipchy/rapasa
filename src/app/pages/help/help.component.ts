import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteService } from 'src/app/services/routes/route.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {

  currentRoute: boolean = true;

  constructor(
    private activatedRoutes: ActivatedRoute,
    private routeCheckSerivce: RouteService,private router: Router
  ) {}

  ngOnInit() {
    this.currentRoute = this.routeCheckSerivce.checkIfParentRoute(
      this.activatedRoutes
    );
  }
  goToHelpChat(){
    this.router.navigate(['helpchat']);
  }
}