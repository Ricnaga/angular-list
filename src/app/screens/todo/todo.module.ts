import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TodoComponent } from './todo.component';
import { TODO_ROUTING } from './todo.routing';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TODO_ROUTING, ComponentsModule],
})
export class TodoModule {}
