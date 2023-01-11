import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropModule } from './backdrop/backdrop.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { TopbarModule } from './topbar/topbar.module';

const MODULES = [BackdropModule, SidebarModule, TopbarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
})
export class ComponentsModule {}
