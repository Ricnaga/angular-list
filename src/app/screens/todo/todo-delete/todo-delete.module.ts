import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TodoDeleteComponent } from './todo-delete.component';

const routes: Routes = [{ path: '', component: TodoDeleteComponent }];

@NgModule({
  declarations: [TodoDeleteComponent],
  imports: [
    CommonModule,
    MatListModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
})
export class TodoDeleteModule {}
