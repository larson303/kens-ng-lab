import { Injectable } from '@angular/core';

import { BehaviorSubject, NEVER, timer, Observable, Observer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


function timerWithPause(
  starterStopper: Observable<boolean>,
  pauser: Observable<boolean>,
  fps: number
): Observable<number> {
  return new Observable((obs: Observer<number>) => {
    let i = 0;
    let ticker = starterStopper.pipe(
      switchMap(start => {
        if (start) return timer(0, 1000 / fps).pipe(map(_ => i++));
        i = 0;
        return NEVER;
      })
    );

    let p = pauser.pipe(switchMap(paused => (paused ? NEVER : ticker)));
    return p.subscribe({
      next: val => obs.next(val),
      error: err => obs.error(err),
      complete: () => obs.complete()
    });
  });
}

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {

  
  pauser = new BehaviorSubject<boolean>(false);
  starterStopper = new BehaviorSubject<boolean>(false);
  stopWatch = new BehaviorSubject<string>('00:00,00');

  ngOnInit() {
    timerWithPause(this.starterStopper, this.pauser, 100).subscribe({
      next: (value) => this.stopWatch.next(this.msToDhms(value)),
    });
  }

  msToDhms(msElapsed: number) {
    let padZero = (value: number) => String(value).padStart(2, '0');

    msElapsed = Number(msElapsed);
    const hElapsed = msElapsed / 360000;
    const hRemaining = hElapsed % 24;
    const sRemaining = (hRemaining * 3600) % 3600;

    const d = Math.floor(hElapsed / 24);
    const h = Math.floor(hRemaining);
    const m = Math.floor(sRemaining / 60);
    const s = Math.floor(sRemaining % 60);
    const ms = Math.floor((sRemaining % 1) * 100);

    const dDisplay = d > 0 ? padZero(d) + (d == 1 ? ' Day, ' : ' Days, ') : '';
    const hDisplay = h > 0 ? padZero(h) + ':' : '';
    const mDisplay = padZero(m) + ':';
    const sDisplay = padZero(s) + ',';
    const msDisplay = padZero(ms);
    return `${dDisplay}${hDisplay}${mDisplay}${sDisplay}${msDisplay}`;
  }

  ngOnDestroy() {
    this.starterStopper.complete();
    this.pauser.complete();
  }
  
}