import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TodoUpdateComponent } from './todo-update.component';

const routes: Routes = [{ path: '', component: TodoUpdateComponent }];

@NgModule({
  declarations: [TodoUpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
  ],
})
export class TodoUpdateModule {}
