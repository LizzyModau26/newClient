import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
