import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderButtonClick } from './core/header/header.component';
import { BurgerMenuComponent } from './core/burger-menu/burger-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'robotile';

  @ViewChildren('panels')
  public panels: QueryList<ElementRef>;

  @ViewChild('appMenu')
  public burgerMenuComponent: BurgerMenuComponent;
  isMenuOpen = false;

  onOpenPanel(event: HeaderButtonClick) {

    this.burgerMenuComponent.closeAllSubmenus();

    const element: ElementRef = this.panels.find(panel => panel.nativeElement.id === event.panelObject);
    const isAlreadyOpen = element.nativeElement.classList.contains('active');

    this.panels.forEach((item, index) => {
      item.nativeElement.classList.remove('active');
    });

    if (!isAlreadyOpen) {
      element.nativeElement.classList.add('active');
    }
    this.isMenuOpen = !isAlreadyOpen;

    const box = event.target.nativeElement.getBoundingClientRect();
    const left = Math.round(box.left);
    element.nativeElement.setAttribute('style', `left:${left}px` );

  }

  // Close menus
  onClickLink() {
    this.burgerMenuComponent.closeAllSubmenus();
    this.isMenuOpen = false;
    // close each panel
    this.panels.forEach((item, index) => {
      item.nativeElement.classList.remove('active');
    });
  }
}


