import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'lab-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
})
export class TopbarComponent {
  @Output() menuIconClick: EventEmitter<boolean> = new EventEmitter();

  handleIconButton() {
    this.menuIconClick.emit();
  }
}
