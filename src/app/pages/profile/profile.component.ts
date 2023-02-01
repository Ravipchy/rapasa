import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteService } from 'src/app/services/routes/route.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {
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
  goToDashboard(){
    this.router.navigate(['dashboard']);
  }
  goToEditProfile(){
    this.router.navigate(['edit-profile']);
  }
  goToResetPassword(){
    this.router.navigate(['reset-password']);
  }
  goToAdresses(){
    this.router.navigate(['addresses']);
  }
  goToAppInfo(){
    this.router.navigate(['app-info']);
  }
  goToSettings(){
    this.router.navigate(['settings']);
  }
  goToHelp(){
    this.router.navigate(['help']);
  }

}



