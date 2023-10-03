import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tap, mergeMap, from, timer, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() public isLoading: Boolean = false;

}
