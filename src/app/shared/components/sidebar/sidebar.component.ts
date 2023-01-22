import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { LOGIN, TODO, USERS } from 'src/app/application/routes';
import { LocalService } from '../../services/storage/local.service';
import { SidebarType } from './sidebar.type';

@Component({
  selector: 'lab-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class SidebarComponent {
  @Input() isOpen = false;
  userName: string;

  constructor(private localService: LocalService, private router: Router) {
    this.userName = this.localService.getUser()?.userName ?? 'user.default';
  }

  navBar: SidebarType = [
    { path: USERS, name: 'Usuários' },
    { path: TODO, name: 'To-do' },
  ];

  onLogout() {
    this.localService.removeUser();
    this.router.navigate([LOGIN]);
  }
}
