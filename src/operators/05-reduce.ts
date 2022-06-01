import { interval, reduce, take, tap } from 'rxjs';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulator: number, currentValue: number) => {
  return acumulator + currentValue;
};

const total = numbers.reduce(totalReducer, 0);
// console.log('total arr', total);

interval(500).pipe(
  take(6),
  tap(console.log),
  reduce(totalReducer, 5)
).subscribe({
  next: (val) => console.log('next:', val),
  complete: () => console.log('complete'),
});
