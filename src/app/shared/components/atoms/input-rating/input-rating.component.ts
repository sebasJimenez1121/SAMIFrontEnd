import { Component } from '@angular/core';

@Component({
  selector: 'app-input-rating',
  templateUrl: './input-rating.component.html',
  styleUrls: ['./input-rating.component.css']
})
export class InputRatingComponent {
  currentRating: number | null = null;
  filledStars: number = 0;

  rate(value: number) {
    if (this.currentRating === value) {
    
      this.currentRating = null;
      this.filledStars = 0;
    } else {
  
      this.currentRating = value;
      this.fillStars(value);
    }
  
    console.log('Rated:', this.currentRating);
  }

  fillStars(value: number) {

    this.filledStars = value;
    setTimeout(() => {
      this.filledStars = 0; 
    }, 10000);
  }

  isStarFilled(starNumber: number): boolean {
 
    return starNumber <= this.filledStars;
  }
}
