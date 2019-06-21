import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {url: 'assets/images/slider/robotile-slider-1.jpg', title: 'titre slide 1', picture: true},
    {url: 'assets/images/slider/robotile-slider-2.jpg', title: 'titre slide 2', picture: true},
  ];

  concepts = [
    {icon: 'compass', title: 'Rapidité de pose', content: 'Avec CARLITA, le carreleur pose 2 fois plus vite qu’en pose manuelle ! '},
    {icon: 'pencil', title: 'Diminution de la pénibilité', content: 'Avec CARLITA, le carreleur' +
          ' ne supporte plus le poids du carreau à poser et ne' +
          ' doit plus s’agenouiller pour effectuer le travail. '},
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<i class="app-icon-right-open slick-arrow--next"></i>',
    prevArrow: '<i class="app-icon-left-open slick-arrow--prev"></i>',
    cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
    fade: true,
    mobileFirst: true,
  };

  ngOnInit() {
  }

}
