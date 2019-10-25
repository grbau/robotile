import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

// declare ga as a function to set and sent the events
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'robotile';

  constructor(
      private titleService: Title,
      private meta: Meta,
      public router: Router
  ) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

      }

    });

  }

  ngOnInit(): void {
    document.querySelector('body').classList.add('loaded');
    this.titleService.setTitle(this.title);
    this.meta.addTag({name: 'keywords', content: 'Carrelage, machine de pose de carrelage, Carlita, Robotile'});
    this.meta.addTag({name: 'google-site-verification', content: 'Yr0A3IhhiI1ieVuyNlCaa_0Y_eOTnrpY3b6b9kNFM'});
  }
}


