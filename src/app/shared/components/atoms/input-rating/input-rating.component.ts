import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-rating',
  templateUrl: './input-rating.component.html',
  styleUrls: ['./input-rating.component.css']
})
export class InputRatingComponent {
  @Input() totalStars: number = 5; 
  currentRating: number | null = null; 

  
  rate(starIndex: number) {
    
    if (this.currentRating === starIndex + 1) {
      this.currentRating = null; 
    } else {
      this.currentRating = starIndex + 1; 
    }
  }

 
  isStarFilled(starIndex: number): boolean {
    return this.currentRating !== null && starIndex < this.currentRating!;
  }

  getStarArray(): number[] {
    return Array(this.totalStars).fill(0).map((_, i) => i);
  }
}
