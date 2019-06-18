import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlickModule } from 'ngx-slick';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickModule.forRoot()
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
