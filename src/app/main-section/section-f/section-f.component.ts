import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-f',
  templateUrl: './section-f.component.html',
  styleUrls: ['./section-f.component.scss']
})
export class SectionFComponent implements OnInit, OnDestroy {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 2000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
      1080: {
        items: 3
      }
    },
    nav: true,
    margin: 10,
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
}
