import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropComponent } from './backdrop.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [BackdropComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [BackdropComponent],
})
export class BackdropModule {}
