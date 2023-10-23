import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() rating: number = 0; // You can input rating from parent component

  fullStars: number[] = [];
  hasHalfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnChanges() {
    this.calculateStars();
    console.log(this.rating);
  }

  private calculateStars(): void {
    // Calculate full stars
    const fullStarsCount = Math.floor(this.rating);
    this.fullStars = Array(fullStarsCount).fill(0);
    console.log(this.fullStars);

    // Check for half star
    this.hasHalfStar = (this.rating % 1) !== 0;
    console.log(this.hasHalfStar);

    // Calculate empty stars
    const emptyStarsCount = 5 - fullStarsCount - (this.hasHalfStar ? 1 : 0); // Assuming you have a max rating of 5
    this.emptyStars = Array(emptyStarsCount).fill(0);
    console.log(this.emptyStars);
  }
}