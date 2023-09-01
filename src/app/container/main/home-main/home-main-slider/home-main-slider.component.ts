import { Component } from '@angular/core';

@Component({
  selector: 'app-home-main-slider',
  templateUrl: './home-main-slider.component.html',
  styleUrls: ['./home-main-slider.component.css']
})
export class HomeMainSliderComponent {
  getNextSlide() {
  const slidesContainer: any = document.getElementById("slides-container");
  const slide: any = document.querySelector(".slide");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  };

  getPreviousSlide() {
  const slidesContainer: any = document.getElementById("slides-container");
  const slide: any = document.querySelector(".slide");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  };
}
