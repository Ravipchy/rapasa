import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerTitle: string = '';
  @Input() isMenuVisible: boolean = true;
  @Input() routerLink: string = '';
  isSidebarVisible: boolean = false;

  constructor( private router: Router) { }

  toggleMenu() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
 
}
