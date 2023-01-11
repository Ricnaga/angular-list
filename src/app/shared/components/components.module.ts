import { NgModule } from '@angular/core';
import { BackdropComponent } from './backdrop/backdrop.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

const COMPONENTS = [BackdropComponent, SidebarComponent, TopbarComponent];

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
