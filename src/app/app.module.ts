import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SlickModule } from 'ngx-slick';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CarlitaComponent } from './carlita/carlita.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GoogleAnalyticsService } from './google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CarlitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SlickModule.forRoot(),
    AngularSvgIconModule,
    HttpClientModule,
    CoreModule,
    FormsModule
  ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
