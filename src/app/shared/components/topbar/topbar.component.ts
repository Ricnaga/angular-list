import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lab-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Output() menuIconClick: EventEmitter<boolean> = new EventEmitter();

  handleIconButton() {
    this.menuIconClick.emit();
  }
}
