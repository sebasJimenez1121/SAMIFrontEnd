import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  slides = [
    { src: "../../../../../assets/images/Sistema de Atencion Medica Inteligente.png"},
    { src: "../../../../../assets/images/dotor-slider.jpg" },
    { src: "../../../../../assets/images/dotor2-slider.jpg" }
  
  ];
  currentIndex = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  addSlide() {
    this.slides.push({ src: "assets/images/new-slide.jpg" });
  }

  removeSlide() {
    this.slides.pop();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); 
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }
}
