import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent {

  public showGoToTopButton = false;

  @HostListener('window:scroll') onWindowScroll(): void {
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.showGoToTopButton = yCoordinate > 200;
  } // for window scroll events

  // provides access to scroll position
  constructor(private viewportScroller: ViewportScroller) { }

  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
