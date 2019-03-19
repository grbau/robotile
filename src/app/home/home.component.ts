import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {img: 'assets/images/slider/home-slider-1.jpg', title: 'titre slide 1'},
    {img: 'assets/images/slider/home-slider-2.jpg', title: 'titre slide 2'},
    {img: 'assets/images/slider/home-slider-3.jpg', title: 'titre slide 3'},
  ];

  concepts = [
    {img: 'assets/images/icons/icon-analyse.png', title: 'Analyse du besoin'},
    {img: 'assets/images/icons/icon-configuration.png', title: 'Configuration'},
    {img: 'assets/images/icons/icon-formation.png', title: 'Formation'},
    {img: 'assets/images/icons/icon-sav.png', title: 'Sav'},
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<i class="app-icon-right-open slick-arrow--next"></i>',
    prevArrow: '<i class="app-icon-left-open slick-arrow--prev"></i>'
  };

  ngOnInit() {
  }

}
