import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

/**
 * Core Feature Module
 * @see {@link https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-11|STYLE 04-11}
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: []
})
export class CoreModule {
  constructor( ) { }
}
