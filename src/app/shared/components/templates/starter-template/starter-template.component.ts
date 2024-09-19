import { Component,  AfterViewInit, HostListener,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../../../../core/service/doctor.service';
import { Doctor } from '../../../../core/models/doctor.model';
import Typed from 'typed.js';

@Component({
  selector: 'starter-template',
  templateUrl: './starter-template.component.html',
  styleUrls: ['./starter-template.component.css']
})
export class StarterTemplateComponent implements AfterViewInit {
  recommendedDoctors: Doctor[] = [];
  sections: string[] = ['.section3', '.section2', '.section5', '.section6', '.section4'];
  currentIndex: number = 0;
  scrolling: boolean = true;
  returnToSlider: boolean = true;
  @Input() titleClass: string = 'gris-text';
  isHomePage = false;
  constructor(private router: Router, private doctorService: DoctorService) {}

  ngAfterViewInit(): void {
    if (this.scrolling) {
      this.scrollToSlider(); 
    }
    const options = {
      strings: ["Sistema de Atención Médica Inteligente", "Sistema de Atención de Alta Calidad", " Sistema de Atención Personalizada para Ti"],
      typeSpeed: 100,  
      backSpeed: 100,
      loop: true
    };

    const typed = new Typed(".multiText", options);
  }
  ngOnInit(): void {

  }



  @HostListener('window:scroll')
  onScroll(): void {
    this.updateCurrentIndex();
  }

  onAvatarClick(): void {
    this.router.navigate(['/profile']);
  }


  scrollToSlider(): void {
    const slider = document.querySelector('main') as HTMLElement;
    if (slider) {
      slider.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        this.startScrollCycle(); 
      }, 1000);
    }
  }

  startScrollCycle(): void {
    let scrollIndex = 0;

    const scrollNextSection = () => {
      if (scrollIndex < this.sections.length) {
        this.scrollToSection(this.sections[scrollIndex]);
        scrollIndex++;
        setTimeout(scrollNextSection, 5000); 
      } else if (this.returnToSlider) {
        this.scrollToSection('main');
        this.scrolling = false; 
      } else {
        this.scrolling = false; 
      }
    };

    scrollNextSection();
  }

  scrollToSection(selector: string): void {
    const section = document.querySelector(selector) as HTMLElement;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updateCurrentIndex(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const sectionElements = this.sections.map(selector => document.querySelector(selector) as HTMLElement);

    this.currentIndex = sectionElements.findIndex((section) =>
      section ? section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) >= scrollPosition : false
    );

    if (this.currentIndex === -1) {
      this.currentIndex = this.sections.length - 1; // Show the last point if not in any section
    }
  }
}
