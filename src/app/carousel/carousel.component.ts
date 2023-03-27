import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  images = [
    {title: 'Personal Traning App', short: 'Stack: Angular, firebase', src: "/assets/calender1.png",link: "https://finalproject-baec3.firebaseapp.com/"},
    {title: 'Face filter', short: 'Python app, using Dlib 68 points facial landmarks', src: "/assets/gefilterFish.jpg" ,link: "https://github.com/YaelPrat/GefilterFish"}
    
    // {title: 'Third Slide', short: 'Third Slide Short', src: "/assets/iconCatBig.png"}
  ];


  constructor(config: NgbCarouselConfig) {
    config.interval = 6000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    
  }
 
}
