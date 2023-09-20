import { interval, timer, take } from 'rxjs';


const timerInterval$ = interval(1000); //1s
const timer$ = timer(30000); //30s
const time = 30;
const countDown$ = timerInterval$.pipe(take(time));

const sub = countDown$.subscribe((val) => console.log(time - val));
const sub1 = timer$.subscribe((val) => {
  console.log('time is up!');
});
