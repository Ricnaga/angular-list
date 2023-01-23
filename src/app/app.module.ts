import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { APIConfig, API_CONFIG } from './shared/api.config';
import { ComponentsModule } from './shared/components/components.module';
import { BackdropInterceptor } from './shared/interceptors/backdrop.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    APP_ROUTING,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: API_CONFIG,
      useValue: APIConfig.baseURL,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackdropInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
