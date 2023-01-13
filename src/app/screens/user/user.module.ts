import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserComponent } from './user.component';
import { USER_ROUTING } from './user.routing';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    USER_ROUTING,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class UserModule {}
