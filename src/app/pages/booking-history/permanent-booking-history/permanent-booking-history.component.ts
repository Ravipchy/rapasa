import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-permanent-booking-history',
  templateUrl: './permanent-booking-history.component.html',
  styleUrls: ['./permanent-booking-history.component.scss']
})
export class PermanentBookingHistoryComponent {
  
  show:boolean = true
  visible:boolean = false
  onclick()
  {
  this.show = !this.show; 
  this.visible = !this.visible
  }
  constructor(private router: Router,
    private alertController: AlertController,
    ) {}

  goToBookPermanent(){
    this.router.navigate(['/book-permanent'])
  }
 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Do you want to cancel booking',
      // subHeader: 'Important message',
      // message: 'Do you want to cancel booking please',
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
