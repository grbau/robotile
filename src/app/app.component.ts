import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'robotile';

  constructor(
      private titleService: Title,
      private meta: Meta
  ) {}

  ngOnInit(): void {
    document.querySelector('body').classList.add('loaded');
    this.titleService.setTitle(this.title);
    this.meta.addTag({name: 'keywords', content: 'Carrelage, machine de pose de carrelage, Carlita, Robotile'});
  }
}


