import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ondemand-booking-history',
  templateUrl: './ondemand-booking-history.component.html',
  styleUrls: ['./ondemand-booking-history.component.scss']
})
export class OndemandBookingHistoryComponent {

  show:boolean = true
  visible:boolean = false
  current: any = "3";
  isModalOpen = false;
  isFeedbackOpen =false;

  bookingStatus = [
    {
      id: 0,
      title: 'On Process',
      // image: require('./assets/icons/check.svg'),
      status: 'check',
    },
    {
      id: 1,
      title: 'Mapping Driver',
      // image: require('./assets/icons/check.svg'),
      status: 'check',
    },
    {
      id: 2,
      title: 'Driver Confirmed',
      // image: require('./assets/icons/completed.svg'),
      status: 'completed',
    },
    {
      id: 3,
      title: 'On the way',
      // image: require('./assets/icons/inprogress.svg'),
      status: 'inprogress',
    },
    {
      id: 4,
      title: 'Completed',
      // image: require('./assets/icons/pending.svg'),
      status: 'pending',
    },
  ];


  constructor(private router: Router,
    private alertController: AlertController,
    ) {}

  goTologin(){
    this.router.navigate(['signin']);
  }
  onclick(){
  this.show = !this.show;
  this.visible = !this.visible
  }
  goTofeedBack() {
    this.router.navigate(['feedback-modal']);
  }
  goToBookOnDemand() {
    this.router.navigate(['/book-ondemand'])
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setFeedback(isOpen: boolean) {
    this.isFeedbackOpen = isOpen;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Do you want to cancel booking',
      // message: 'Do you want to cancel booking',
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
