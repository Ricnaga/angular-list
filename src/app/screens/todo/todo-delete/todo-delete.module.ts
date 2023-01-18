import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoDeleteComponent } from './todo-delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [{ path: '', component: TodoDeleteComponent }];

@NgModule({
  declarations: [TodoDeleteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild(routes),
  ],
})
export class TodoDeleteModule {}
