import { Component } from '@angular/core';

@Component({
  selector: 'lab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isOpenSideBar = false;

  handleSideBar() {
    this.isOpenSideBar = !this.isOpenSideBar;
  }
}
