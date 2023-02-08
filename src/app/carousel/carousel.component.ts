import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  // providers: [NgbCarouselConfig]
})
export class CarouselComponent {
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "/assets/tree.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "/assets/sunflower.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "/assets/iconCatBig.png"}
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = true;

  }
  // showNavigationArrows = true;
  // showNavigationIndicators = true;
  // interval = 2000;
}
