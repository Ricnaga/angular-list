import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [TopbarComponent],
})
export class TopbarModule {}
