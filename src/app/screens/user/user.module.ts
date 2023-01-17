import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserComponent } from './user.component';
import { USER_ROUTING } from './user.routing';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, USER_ROUTING, ComponentsModule],
})
export class UserModule {}
