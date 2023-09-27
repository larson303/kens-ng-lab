import { Component } from '@angular/core';
import { AccordionItem } from 'src/app/components/component-interfaces/accordion-item.interfaces';

@Component({
  selector: 'app-component-docs',
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent {

  public starRating = 3.75;

  
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    }
  ];

  // Used for Progress Bar
  public progressValue = 25;

  public updateProgress() {
    this.progressValue = 75;
  }

  // Used for Pomodoro Timer
  public timer: any;
  public progress = 0;
  public duration: number = 30;

  onStartTimer() {
    this.progress = this.duration;
    const step = 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress - 1;
      if (this.duration = 0) {
        clearInterval(this.timer);
      }
    }, step);
  }

  onStopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.progress = this.duration;
  }

}