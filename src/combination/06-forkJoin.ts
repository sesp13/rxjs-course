import { delay, forkJoin, interval, of, take } from 'rxjs';

const nums$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const words$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin([nums$, interval$, words$]).subscribe(console.log);

// forkJoin([nums$, interval$, words$]).subscribe((res) => {
//   console.log('nums ', res[0]);
//   console.log('interval ', res[1]);
//   console.log('words ', res[2]);
// });

forkJoin({ nums$, interval$, words$ }).subscribe((res) => {
  console.log(res);
});

forkJoin({ num: nums$, int: interval$, word: words$ }).subscribe((res) => {
  console.log(res);
});
