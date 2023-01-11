import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen = false;
}
