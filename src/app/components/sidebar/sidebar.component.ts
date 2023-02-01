import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isSidebarVisible: boolean = false;
  @Output() toggleMenu = new EventEmitter<void>()

  constructor( private router: Router) { }

  hideMenu() {
    this.toggleMenu.emit()
  }

}
