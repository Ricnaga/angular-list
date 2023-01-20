import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DashboardComponent } from './dashboard.component';
import { DASHBOARD_ROUTING } from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DASHBOARD_ROUTING,
    ComponentsModule,
    MatGridListModule,
  ],
})
export class DashboardModule {}
