 
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  viewPassword: boolean = false;
  email: any = '';
  password: any = '';
  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

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
