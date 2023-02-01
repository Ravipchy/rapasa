import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RouteService } from 'src/app/services/routes/route.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent {
  currentRoute: boolean = true;
  // router: any;
  constructor(
    private activatedRoutes: ActivatedRoute,
    private routeCheckSerivce: RouteService,
    private router: Router,
    // public atrCtrl: AlertController,
    private alertController: AlertController,
  ) { }


  ngOnInit() {
    this.currentRoute = this.routeCheckSerivce.checkIfParentRoute(
      this.activatedRoutes
    );
  }
  goToAddAdress() {
    this.router.navigate(['add-address']);
  }
  goToEdit() {
    this.router.navigate(['edit-address']);
  }

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Delete Items',
    // subHeader: 'Important message',
    message: 'Do you really want to delete this address!',
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Ok'
      }
    ]
  });

  await alert.present();
}

}
