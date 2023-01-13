import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { TODO, USERS } from 'src/app/application/routes';
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
  ],
})
export class SidebarComponent {
  @Input() isOpen = false;

  navBar: SidebarType = [
    { path: USERS, name: 'Usuários' },
    { path: TODO, name: 'To-do' },
  ];
}
