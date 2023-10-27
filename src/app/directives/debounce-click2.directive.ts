import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';

@Directive({
  selector: '[debounceClick]'
})
export class DebounceClick2Directive {

  @Output() debounceClick = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(debounceTime(5000))
      .subscribe(() => this.debounceClick.emit());
  }

}
