import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  viewPassword: boolean = false;
  email: any = '';
  password: any = '';
  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  

  ngOnInit() {}

  changeType() {
    this.viewPassword = !this.viewPassword;
  }


  reset() {
    this.router.navigate(['forgot']);
  }

  onLogin() {
    localStorage.setItem('intro', 'true');
    this.navCtrl.navigateRoot(['']);
  }

  onSocial() {
    localStorage.setItem('intro', 'true');
    this.navCtrl.navigateRoot(['']);
  }

  onRegister() {
    this.router.navigate(['register']);
  }

}
