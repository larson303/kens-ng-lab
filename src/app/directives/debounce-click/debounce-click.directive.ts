import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription = new Subscription();

  public ngOnInit() {
    const debounceTimeInMs = 300;

    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe(e => this.debounceClick.emit(e));
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
  
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
