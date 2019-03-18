import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<i class="app-icon-right-open slick-arrow--next"></i>',
    prevArrow: '<i class="app-icon-left-open slick-arrow--next"></i>'
  };

  ngOnInit() {
  }

}
