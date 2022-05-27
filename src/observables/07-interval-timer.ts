import { interval,  timer } from 'rxjs';

const observer = {
  next: value => console.log(`next ${value}`),
  complete: () => console.log('Complete!')
}

const interval$ = interval(1000);
console.log('Start');
// interval$.subscribe(observer);
console.log('End');



const todayInFive = new Date();
todayInFive.setSeconds(todayInFive.getSeconds() + 5)

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(todayInFive);

console.log('Start');
timer$.subscribe(observer);
console.log('End');
