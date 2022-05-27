import { asyncScheduler, of, range } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1, 5, asyncScheduler);


console.log('Start');
src$.subscribe(console.log);
console.log('End');
