import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent {
  isCollapsed = true;
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
