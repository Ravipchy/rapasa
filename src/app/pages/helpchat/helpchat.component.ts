import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteService } from 'src/app/services/routes/route.service';
@Component({
  selector: 'app-helpchat',
  templateUrl: './helpchat.component.html',
  styleUrls: ['./helpchat.component.scss']
})
export class HelpchatComponent {

  constructor(
    private activatedRoutes: ActivatedRoute,
    private routeCheckSerivce: RouteService,
    private router: Router
  ) { }


  ngOnInit() { }
goToAddComment() {
  this.router.navigate(['add-comment']);
}
}