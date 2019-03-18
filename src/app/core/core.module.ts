import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

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
    BurgerMenuComponent,
  ],
  exports: [
    HeaderComponent,
    BurgerMenuComponent,
  ],
  providers: []
})
export class CoreModule {
  constructor( ) { }
}
