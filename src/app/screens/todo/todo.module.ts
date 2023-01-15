import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodoComponent } from './todo.component';
import { TODO_ROUTING } from './todo.routing';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TODO_ROUTING,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class TodoModule {}
