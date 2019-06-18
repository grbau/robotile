import {AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'robotile';

  ngOnInit(): void {
    document.querySelector('body').classList.add('loaded');
  }
}


