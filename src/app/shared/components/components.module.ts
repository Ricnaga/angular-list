import { NgModule } from '@angular/core';
import { BackdropComponent } from './backdrop/backdrop.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

const COMPONENTS = [
  BackdropComponent,
  SidebarComponent,
  TopbarComponent,
  PageHeaderComponent,
];

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
