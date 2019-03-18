import {Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {

  @ViewChildren('trigger') triggerList: QueryList<ElementRef>;
  @ViewChildren('triggerSubmenu') triggerListSubmenu: QueryList<ElementRef>;

  // eventEmitter to close menu
  @Output() ClickLink = new EventEmitter();

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Toggle submenu for clicked item
   * @param event the event that triggers function
   * @param triggerList string to define which items list is concerned (trigger or triggerSubmenu)
   */
  toggleSubmenu(event, triggerList?) {
    event.preventDefault();

    // Which list is concerned
    if (triggerList && triggerList === 'triggerSubmenu') {
      triggerList = this.triggerListSubmenu;
    } else {
      triggerList = this.triggerList;
    }

    // Define variables for clicked item
    const target = event.currentTarget;
    const targetSubnav = target.nextElementSibling;

    // Close opened subnav (except clicked item)
    triggerList.toArray().forEach(trigger => {
      const triggerItem = trigger.nativeElement;
      const subnav = triggerItem.nextElementSibling;

      if (triggerItem !== target) {
        triggerItem.classList.remove('opened');
        subnav.classList.remove('opened');
      }
    });

    setTimeout(() => {
      target.classList.toggle('opened');
      targetSubnav.classList.toggle('opened');
    }, 100);
  }

  /**
   * Close all submenus
   */
  closeAllSubmenus() {
    this.triggerList.toArray().forEach(trigger => {
      const triggerItem = trigger.nativeElement;
      const subnav = triggerItem.nextElementSibling;

      triggerItem.classList.remove('opened');
      subnav.classList.remove('opened');
    });
  }

  /**
   * ClickLink
   * @param event the event that triggers function
   */
  clickLink(event) {
    this.ClickLink.emit();
  }

}
