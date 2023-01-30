 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(private router: Router,
    private NavCtrl: NavController) { }

  ngOnInit() {
  }
  goToBack() {
    this.NavCtrl.back();
  }

}
