import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BackdropService } from './backdrop.service';

@Component({
  selector: 'lab-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class BackdropComponent {
  isBackdrop: boolean;

  constructor(private backdropService: BackdropService) {
    this.isBackdrop = true;
    this.backdropService.isLoading$.subscribe((state) => {
      this.isBackdrop = state;
    });
  }
}
