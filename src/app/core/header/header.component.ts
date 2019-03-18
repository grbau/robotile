import {Component, ElementRef, EventEmitter, Output} from '@angular/core';

export interface HeaderButtonClick {
  panelObject: string;
  target?: ElementRef;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() OpenPanel: EventEmitter<HeaderButtonClick> = new EventEmitter();

  constructor() {}

  openPanel(panel: string, event) {
    console.log(panel);
    this.OpenPanel.emit({
      panelObject: panel,
      target: new ElementRef(event.currentTarget)
    });
  }

}
