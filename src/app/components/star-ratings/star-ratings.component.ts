import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() public rating: number = 5;
  highestRating = 5;

  // calculatedFullStars: number[] = [];
  // calculatedHasHalfStar: boolean = false;
  // calculatedEmptyStars: number[] = [];


  // calcStars(this.ratings): void {
  //   this.calculatedFullStars = Math.floor(this.rating);
  //   this.calculatedHasHalfStar = (this.rating - Math.floor(this.rating)) >= 0.5 && this.rating !== this.highestRating;
  //   this.calculatedEmptyStars = Math.floor(this.highestRating - this.rating);
  // }


  public get fullStars(): number[] {
    const fullStars = Math.floor(this.rating);
    console.log("fullStars: ", fullStars);
    return Array(fullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating)) >= 0.5 && this.rating !== this.highestRating;
    console.log("hasHalfStar: ", hasHalfStar);
    return hasHalfStar;
  } 

  public get emptyStars(): number[] {
    let emptyStars = Math.floor(this.highestRating - this.rating);

    if (this.rating - Math.floor(this.rating) < .5 ) {
      emptyStars++;
    }
  
    console.log("emptyStars: ", emptyStars);
    return Array(emptyStars).fill(0);
  }

}
