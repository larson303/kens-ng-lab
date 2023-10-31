import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';

@Directive({
  selector: '[debounceClick]'
})
export class DebounceClick2Directive implements OnInit, OnDestroy {

  @Output() debounceClick = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(debounceTime(5000))
      .subscribe(() => this.debounceClick.emit());
  }

  ngOnDestroy() {
    this.debounceClick.unsubscribe();
  }

}
