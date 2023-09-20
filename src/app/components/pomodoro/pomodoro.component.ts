import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent {

  @Input() public value = 0;
  @Input() public max = 30;

  public progress = 0;
  
  timer: any;

  onStartTimer() {
    const step = 1000;
    const progress = this.max * 60;
    
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, step);
  }

  onStopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.progress = 0;
  }

}
