import { NgModule } from '@angular/core';
import { BackdropComponent } from './backdrop/backdrop.component';
import { CardFormComponent } from './card-form/card-form.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SnackbarModule } from './snackbar/snackbar.module';
import { TopbarComponent } from './topbar/topbar.component';

const COMPONENTS = [
  BackdropComponent,
  SidebarComponent,
  TopbarComponent,
  PageHeaderComponent,
  CardFormComponent,
  SnackbarModule,
];

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
